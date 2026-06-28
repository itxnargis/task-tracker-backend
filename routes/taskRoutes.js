const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

const validateTask = (req, res, next) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Task title is required" });
  }

  if (title.length < 3) {
    return res
      .status(400)
      .json({ message: "Task title must be at least 3 characters" });
  }

  if (title.length > 100) {
    return res
      .status(400)
      .json({ message: "Task title cannot exceed 100 characters" });
  }

  next();
};

router.get("/", async (req, res) => {
  try {
    const { priority, status, category, sortBy } = req.query;
    let query = {};

    if (priority) query.priority = priority;
    if (status) query.status = status;
    if (category) query.category = category;

    let tasks = await Task.find(query);

    if (sortBy === "dueDate") {
      tasks.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    } else if (sortBy === "priority") {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      tasks.sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
      );
    } else if (sortBy === "newest") {
      tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", validateTask, async (req, res) => {
  const task = new Task({
    title: req.body.title.trim(),
    description: req.body.description || "",
    priority: req.body.priority || "medium",
    status: req.body.status || "pending",
    dueDate: req.body.dueDate || null,
    category: req.body.category || "other",
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", validateTask, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (req.body.title) task.title = req.body.title.trim();
    if (req.body.description !== undefined)
      task.description = req.body.description;
    if (req.body.priority) task.priority = req.body.priority;
    if (req.body.status) task.status = req.body.status;
    if (req.body.dueDate !== undefined) task.dueDate = req.body.dueDate;
    if (req.body.category) task.category = req.body.category;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

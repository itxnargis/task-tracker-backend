# Task Tracker Pro - MERN Stack Application

A full-featured Task Management web application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) for the COLL-EDGE CONNECT internship assignment.

## 🚀 Features

### Core Features (Mandatory)
- ✅ **CRUD Operations**: Create, Read, Update, and Delete tasks seamlessly
- ✅ **Form Validation**: Comprehensive client-side and server-side validation
- ✅ **REST APIs**: Fully functional REST API with proper HTTP methods
- ✅ **MongoDB Integration**: Persistent data storage with Mongoose ODM
- ✅ **Responsive UI**: Works perfectly on desktop, tablet, and mobile devices
- ✅ **Dynamic Updates**: Real-time task updates without page refresh
- ✅ **Deployed**: Both frontend and backend deployed on public URLs

### Bonus Features (Implemented for Excellence)
- 🎯 **Advanced Filtering**: Filter tasks by Priority, Status, and Category
- 📊 **Smart Sorting**: Sort by newest, priority, or due date
- 🔍 **Real-time Search**: Search tasks by title and description
- 📈 **Statistics Dashboard**: View comprehensive task statistics and insights
- 🎨 **Modern UI/UX**: Beautiful, intuitive interface with smooth animations
- 🏷️ **Task Categories**: Organize tasks (Work, Personal, Shopping, Health, Other)
- ⚡ **Task Priority Levels**: Set and manage task priorities (Low, Medium, High)
- 📅 **Due Dates**: Set and track task deadlines with overdue notifications
- 🔔 **Toast Notifications**: Real-time feedback for all user actions
- 💪 **Productivity Tips**: Smart suggestions based on task metrics
- 🎯 **Task Status Management**: Track progress (Pending, In-Progress, Completed)
- ♻️ **Auto-refresh**: Tasks sync automatically in real-time
- 📱 **Mobile Optimized**: Perfect responsive design for all screen sizes
- 🎭 **Inline Task Editing**: Edit tasks directly without navigation

## 🛠 Tech Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **CORS**: Cross-origin resource sharing
- **Body-Parser**: Middleware for parsing request bodies
- **Dotenv**: Environment variables management

### Frontend
- **React.js**: UI library
- **Axios**: HTTP client for API calls
- **React-Toastify**: Toast notifications
- **CSS3**: Modern styling with animations

## 📋 Project Structure

```
mern-app/
├── models/
│   └── Task.js                 # MongoDB Task schema
├── routes/
│   └── taskRoutes.js           # API routes for tasks
├── server.js                   # Express server setup
├── .env                        # Environment variables
├── .env.example                # Environment template
├── package.json                # Backend dependencies
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js     # Task creation form
│   │   │   ├── TaskForm.css
│   │   │   ├── TaskList.js     # Task list container
│   │   │   ├── TaskList.css
│   │   │   ├── TaskItem.js     # Individual task component
│   │   │   ├── TaskItem.css
│   │   │   ├── TaskStats.js    # Statistics dashboard
│   │   │   └── TaskStats.css
│   │   ├── App.js              # Main application component
│   │   ├── App.css             # Global styles
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global CSS
│   └── package.json            # Frontend dependencies
│
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB Atlas account (or local MongoDB)
- Git

### Backend Setup

1. **Navigate to the backend directory**
   ```bash
   cd mern-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file**
   Copy `.env.example` to `.env` and update with your MongoDB URI:
   ```bash
   cp .env.example .env
   ```

4. **Update .env with your configuration**
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

5. **Start the backend server**
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```

   Backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to the client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   Frontend will run on `http://localhost:3000`

### Running Both Simultaneously (Recommended)

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd mern-app
npm start
```

**Terminal 2 - Frontend:**
```bash
cd mern-app/client
npm start
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api/tasks
```

### Endpoints

#### 1. **Get All Tasks**
```http
GET /api/tasks
```
**Query Parameters:**
- `priority`: Filter by priority (low, medium, high)
- `status`: Filter by status (pending, in-progress, completed)
- `category`: Filter by category (work, personal, shopping, health, other)
- `sortBy`: Sort by (newest, priority, dueDate)

**Response:**
```json
[
  {
    "_id": "ObjectId",
    "title": "Task Title",
    "description": "Task Description",
    "priority": "high",
    "status": "pending",
    "category": "work",
    "dueDate": "2026-07-15T00:00:00.000Z",
    "createdAt": "2026-06-28T10:30:00.000Z",
    "updatedAt": "2026-06-28T10:30:00.000Z"
  }
]
```

#### 2. **Get Single Task**
```http
GET /api/tasks/:id
```

**Response:**
```json
{
  "_id": "ObjectId",
  "title": "Task Title",
  "description": "Task Description",
  "priority": "high",
  "status": "pending",
  "category": "work",
  "dueDate": "2026-07-15T00:00:00.000Z",
  "createdAt": "2026-06-28T10:30:00.000Z",
  "updatedAt": "2026-06-28T10:30:00.000Z"
}
```

#### 3. **Create Task**
```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete Project",
  "description": "Finish the MERN task tracker",
  "priority": "high",
  "status": "in-progress",
  "category": "work",
  "dueDate": "2026-07-15"
}
```

**Response:** 201 Created
```json
{
  "_id": "new_ObjectId",
  "title": "Complete Project",
  "description": "Finish the MERN task tracker",
  "priority": "high",
  "status": "in-progress",
  "category": "work",
  "dueDate": "2026-07-15T00:00:00.000Z",
  "createdAt": "2026-06-28T10:30:00.000Z",
  "updatedAt": "2026-06-28T10:30:00.000Z"
}
```

#### 4. **Update Task**
```http
PUT /api/tasks/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "status": "completed"
}
```

**Response:** 200 OK

#### 5. **Delete Task**
```http
DELETE /api/tasks/:id
```

**Response:** 200 OK
```json
{
  "message": "Task deleted successfully"
}
```

#### 6. **Health Check**
```http
GET /api/health
```

**Response:**
```json
{
  "status": "Server is running"
}
```

## 🎨 UI Features

### Task Form
- Real-time character counter for title and description
- Form validation with error messages
- Priority, status, and category selection
- Due date picker
- Smooth form interactions

### Task List
- Display all tasks with color-coded priority indicators
- Category badges for quick identification
- Status indicators with emojis
- Due date display with overdue warnings
- Smooth animations on task addition

### Task Item Actions
- ✓ Mark as completed
- ↶ Undo completed status
- ▶ Start in-progress task
- ✏️ Edit task inline
- 🗑️ Delete task with confirmation

### Statistics Dashboard
- Total tasks count
- Completed tasks count
- Pending tasks count
- In-progress tasks count
- High priority tasks count
- Overdue tasks count
- Completion rate progress bar
- Tasks by category breakdown
- Productivity tips and insights

### Search & Filter
- Real-time search by title and description
- Filter by priority level
- Filter by task status
- Filter by category
- Multiple sort options
- Combined filtering support

## 🔒 Validation

### Task Title
- Required field
- Minimum 3 characters
- Maximum 100 characters
- No leading/trailing whitespace

### Task Description
- Optional field
- Maximum 500 characters

### Priority
- Values: low, medium, high
- Default: medium

### Status
- Values: pending, in-progress, completed
- Default: pending

### Category
- Values: work, personal, shopping, health, other
- Default: other

### Due Date
- Optional field
- Format: ISO 8601 date

## 🚀 Deployment

### Backend Deployment (Node.js + MongoDB)

**Recommended Platforms:**
- Railway.app
- Render.com
- Heroku
- DigitalOcean
- AWS EC2

**Steps:**
1. Push code to GitHub
2. Connect repository to deployment platform
3. Set environment variables (MONGODB_URI, PORT)
4. Deploy and get backend URL

### Frontend Deployment (React)

**Recommended Platforms:**
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

**Steps:**
1. Update API_URL in App.js to deployed backend URL
2. Build React app: `npm run build`
3. Deploy to chosen platform

## 📱 Responsive Design

- **Desktop**: Full layout with sidebar statistics
- **Tablet**: Adjusted grid layout
- **Mobile**: Single column layout with optimized touch targets

## 🐛 Error Handling

- Comprehensive validation on both client and server
- User-friendly error messages
- Toast notifications for all operations
- Graceful error recovery

## 🎯 Best Practices Implemented

- ✅ Clean, well-organized code structure
- ✅ Reusable React components
- ✅ Proper error handling and validation
- ✅ Environment variable management
- ✅ RESTful API design
- ✅ Responsive design patterns
- ✅ Accessibility considerations
- ✅ Performance optimization
- ✅ Code comments and documentation
- ✅ Mobile-first approach

## 📝 Future Enhancements

- User authentication and multi-user support
- Real-time collaboration features
- Task reminders and notifications
- Recurring tasks
- Task dependencies and subtasks
- Export to PDF/Excel
- Dark mode toggle
- Task templates
- Advanced reporting

## 📄 License

This project is created for the COLL-EDGE CONNECT internship program.

## 👤 Author

Built with ❤️ for COLL-EDGE CONNECT Internship Assignment

---

**Submission Deadline:** June 28, 2026 (11:59 PM)

**Version:** 1.0.0

**Last Updated:** June 28, 2026

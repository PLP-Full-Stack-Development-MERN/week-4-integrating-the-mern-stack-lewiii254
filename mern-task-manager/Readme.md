# MERN Task Manager

## Deployment
- **Backend:** [https://week-4-integrating-the-mern-stack.onrender.com/api/tasks](https://week-4-integrating-the-mern-stack.onrender.com/api/tasks)
- **Frontend:** [https://week-4-integrating-the-mern-stack-lewiii254.vercel.app](https://week-4-integrating-the-mern-stack-lewiii254.vercel.app)
- **Database:** MongoDB Atlas

## Installation
1. Clone: `git clone https://github.com/lewiii254/week-4-integrating-the-mern-stack-lewiii254.git`
2. Backend:
   - `cd mern-task-manager/backend`
   - `npm install`
   - Set `MONGO_URI` in `.env`
   - `npm start`
3. Frontend:
   - `cd mern-task-manager/frontend`
   - `npm install`
   - `npm start`

## API Endpoints
- `GET /api/tasks` - List all tasks
- `POST /api/tasks` - Create a task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

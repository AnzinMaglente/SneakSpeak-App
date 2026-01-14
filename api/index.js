const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose')

// routes
const authRouter = require('./controllers/authController')
const articleRouter = require('./controllers/articleController')
const commentRouter = require('./controllers/commentController')
const commentGroupRouter = require('./controllers/commentGroupController')
const imageRouter = require('./controllers/imageController')
const userRouter = require('./controllers/userController')

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  console.log('MongoDB connected');
  return cached.conn;
}

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.use('/article', articleRouter);
app.use('/auth', authRouter);
app.use('/comment', commentRouter);
app.use('/commentGroup', commentGroupRouter);
app.use('/image', imageRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.json({ status: 'API is running' });
});

module.exports = app;
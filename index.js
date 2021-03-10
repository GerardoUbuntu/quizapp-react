require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/user.router');
const authRouter = require('./routes/auth.router');
const cors = require('cors');

const db = require('./models');

app.use(express.json());
app.use(cors());
db.sequelize.sync();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Server Started on port ' + port);
});

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { 
  UserController, 
  DialogController, 
  MessageController 
} from './controllers';

import { checkAuth } from "./middleware";
import { loginValidation } from "./utils/validation";

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(checkAuth);

const User = new UserController(); 
const Dialog = new DialogController();
const Messages = new MessageController();

mongoose.connect(
  'mongodb://localhost:27017/chat', 
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.get('/user/:id', User.show);
app.delete('/user/:id', User.delete);
app.post('/user/registration', User.create);
app.post('/user/login', User.login);

app.get('/dialogs', Dialog.show);
app.get('/dialogs/:id', Dialog.index);
app.post('/dialogs', Dialog.create);
app.delete('/dialogs', Dialog.delete);

app.get('/message', Messages.show);
app.post('/message', Messages.create);
app.delete('/message/:id', Messages.delete);

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
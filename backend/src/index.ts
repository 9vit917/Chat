import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { UserController, DialogController, MessageController } from './controllers';


const app = express();

app.use(bodyParser.json());

const User = new UserController(); 
const Dialog = new DialogController();
const Messages = new MessageController();

mongoose.connect(
  'mongodb://localhost:27017/chat', 
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }
);

app.get('/user/:id', User.show);
app.delete('/user/:id', User.delete);
app.post('/user', User.create);

app.get('/dialogs', Dialog.show);
app.get('/dialogs/:id', Dialog.index);
app.post('/dialogs', Dialog.create);
app.delete('/dialogs', Dialog.delete);

app.get('/message', Messages.show);
app.post('/message', Messages.create);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { UserController, DialogController } from './controllers';


const app = express();

app.use(bodyParser.json());

const User = new UserController(); 
const Dialog = new DialogController();

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
app.post('/user/registration', User.create);

app.get('/dialogs/:id', Dialog.index);
app.post('/dialogs', Dialog.create);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
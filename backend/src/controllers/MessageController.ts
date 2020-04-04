import express from "express";

import { MessageModel } from "../models";


class MessageController {

    show(req: express.Request , res: express.Response) {
        const dilaogId:any = req.query.dialog;
        MessageModel.find({dialog: dilaogId})
        .populate(["dialog"])
        .then((message) => {
            res.json(message);
        })
        .catch((err:any)=> {
            res.status(404).json(err)
        });
    }

    create( req: express.Request, res: express.Response ) {
        const userId = "5e807fbc6d586401ac60c5b4";
        const postDate = {
          messageType: req.body.messageType,
          dialog: req.body.dialog,
          user: userId,
          text: req.body.text
        }
        const message = new MessageModel(postDate);
        message.save().then((obj:any) => { 
            res.json(obj)
        }
        )
        .catch((err:any)=> {
            res.status(404).json(err)
        });
    }

    delete( req: express.Request, res: express.Response ) {
        const _id = req.params.id;
        console.log(req.params.id);
        MessageModel.findOneAndRemove({_id: _id}).then((obj:any) => 
          res.json({
              message: "Message Deleted"
          })
        )
        .catch((err:any)=> {
            res.status(404).json(err)
        });
    }
}

export default MessageController;

import express from "express";

import { MessageModel } from "../models";


class MessageController {

    show(req: express.Request , res: express.Response) {
        console.log(req);
        console.log(req.query);
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
        const postDate = {
          messageType: req.body.messageType,
          dialog: req.body.dialog,
          isRead: false,
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

    // delete( req: express.Request, res: express.Response ) {
    //     const _id = req.params.id;
    //     MessageModel.findOneAndRemove({_id: _id}).then((obj:any) => 
    //       res.send("User deleted")
    //     )
    //     .catch((err:any)=> {
    //         res.status(404).json(err)
    //     });
    // }
}

export default MessageController;

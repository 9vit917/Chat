import express from "express";

import { DialogModel } from "../models";


class DialogController {
    
    show(req: express.Request, res: express.Response) {
        const authorId: any = req.params.id;
        DialogModel.find({author: authorId}).then((dialogs: any) => {
            res.json(dialogs);
        })
        .catch((err:any)=> {
            res.status(404).send(
                "Dialog not found"
            )
        });
    }

    index(req: express.Request, res: express.Response) {
        const authorId: any = req.params.id;                                                //ХУЙНЯ ПЕРЕДЕЛАТЬ ТИП
        DialogModel.find({$or:[{author: authorId}, {partner: authorId}]})
        .populate("author")
        .populate("partner").then((dialogs: any) => {
            res.json(dialogs);
        })
        .catch((err:any)=> {
            res.status(404).send(
                "Dialog not found"
            )
        });
    }

    create( req: express.Request, res: express.Response ) {
        const postDate = {
            author: req.body.author,
            partner: req.body.partner
          }
        const dialog = new DialogModel(postDate);
        dialog.save().then((obj:any) => 
          res.json(obj)
        )
        .catch((err:any)=> {
            res.json(err)
        });
    }

    delete( req: express.Request, res: express.Response ) {

    }
}

export default DialogController;

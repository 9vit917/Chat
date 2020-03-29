import express from "express";

import { DialogModule } from "../models";

import Dialog, {IDialog} from "../models/Dialog";


class DialogController {
    index(req: express.Request, res: express.Response) {
        const authorId: any = req.params.id;                                                //ХУЙНЯ ПЕРЕДЕЛАТЬ ТИП
        DialogModule.find({author: authorId}).then((dialogs: any) => {
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
        const dialog = new DialogModule(postDate);
        dialog.save().then((obj:any) => 
          res.json(obj)
        )
        .catch((err:any)=> {
            res.json(err)
        });
    }
}

export default DialogController;

import express from "express";

import { UserModule } from "../models";


class UserController {

    show(req: express.Request , res: express.Response) {
        const id:string = req.params.id;
        UserModule.findById(id).then((user) => {
            res.json(user);
        })
        .catch((err:any)=> {
            res.status(404).json(err)
        });
    }

    create( req: express.Request, res: express.Response ) {
        const postDate = {
          email: req.body.email,
          fullname: req.body.fullname,
          password: req.body.password
        }
        const user = new UserModule(postDate);
        user.save().then((obj:any) => 
          res.json(obj)
        )
        .catch((err:any)=> {
            res.status(404).json(err)
        });
    }

    delete( req: express.Request, res: express.Response ) {
        const _id = req.params.id;
        UserModule.findOneAndRemove({_id: _id}).then((obj:any) => 
          res.send("User deleted")
        )
        .catch((err:any)=> {
            res.status(404).json(err)
        });
    }
}

export default UserController;

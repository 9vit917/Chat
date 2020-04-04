import express from "express";

import { UserModel } from "../models";
import { createJWTToken } from "../utils"
import { IUser } from "../models/User";


class UserController {

    show(req: express.Request , res: express.Response) {
        const id:string = req.params.id;
        UserModel.findById(id).then((user) => {
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
        const user = new UserModel(postDate);
        user.save().then((obj:any) => 
          res.json(obj)
        )
        .catch((err:any)=> {
            res.status(404).json(err)
        });
    }

    delete( req: express.Request, res: express.Response ) {
        const _id = req.params.id;
        UserModel.findOneAndRemove({_id: _id}).then((obj:any) => 
          res.send("User deleted")
        )
        .catch((err:any)=> {
            res.status(404).json(err)
        });
    }

    login( req: express.Request, res: express.Response ) {
        const postDate = {
            email: req.body.email,
            password: req.body.password
        };

        UserModel.findOne({email: postDate.email}, (err, user: IUser) => {
            if(err) {
                return res.json({
                    message: "User not faund"
                })
            }
            if(user.password === postDate.password) {
                const token = createJWTToken(postDate);
                res.json({
                    status: "success",
                    token: token
                });
            }else {
                res.json({
                    status: "error",
                    message: 'Incorrect password or email'
                });
            }
        })
    }
}

export default UserController;

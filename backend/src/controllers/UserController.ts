import express from "express";
import bcrypt from 'bcrypt';

import { UserModel } from "../models";
import { createJWTToken } from "../utils"
import { IUser } from "../models/User";
import { validationResult } from 'express-validator';


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

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
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
        const postData = {
            email: req.body.email,
            password: req.body.password
        };

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
        }

        UserModel.findOne({email: postData.email}, (err, user: IUser) => {
            if (err || !user) {
                return res.status(404).json({
                    message: 'User not found'
                });
            }
            console.log(bcrypt.compareSync(postData.password, user.password))
            if (bcrypt.compareSync(postData.password, user.password)) {
                const token = createJWTToken(user);
                res.json({
                    status: 'success',
                    token
                });
            } else {
                    res.status(403).json({
                    status: 'error',
                    message: 'Incorrect password or email'
                });
            }
        })
    }
}

export default UserController;

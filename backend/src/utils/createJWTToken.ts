import jwt from "jsonwebtoken";
import { reduce } from "lodash";

import { IUser } from "../models/User";

export default (user: any) => {

  let token = jwt.sign(
    {
     data: reduce(user, (result: any, value: any, key: any) => {
      if(key !== 'password') {
        result[key] = value
      }
      return result 
     }, {})
    }, 
    process.env.JWT_SECRET || '', 
    {
      expiresIn: process.env.JWT_EXPIRE,
      algorithm: 'HS256'
  })

  return token
}
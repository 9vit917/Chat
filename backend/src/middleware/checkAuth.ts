
import { verifyJWTToken } from "../utils";


export default (
    req:any,
    res:any,
    next:any
) => {
    const token = req.headers.token;
    verifyJWTToken(token).then(( user )=>{
        req.user = user;
        next();
    }).catch(()=> res.status(401).
    json({
            message: "Invalid auth token provider"
        })
    )
}
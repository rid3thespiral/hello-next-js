import jwt from 'jsonwebtoken'
import {NextApiRequest, NextApiResponse} from 'next'

const KEY = "asgadngadjn3u4jf884f9"

export default function (req: NextApiRequest,
    res: NextApiResponse) {
    //it should NOT be a react component
        if(!req.body){
            res.statusCode = 404;
            res.end('Error')
            return
        }
        const {username,psw} = req.body;

        res.json({
            token: jwt.sign({
                username,
                admin: username === "admin" && psw === "admin"
            }, KEY)
        })
}  
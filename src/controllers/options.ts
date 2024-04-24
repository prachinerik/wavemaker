import { Request, Response } from 'express';
import { connect } from "../database";
import { error } from 'console';


export async function getFromUserPreferences (req: Request, res: Response){
    try {
    //const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query(`SELECT * FROM options`)
    return res.json(posts[0])
    } catch (error){
        console.log(error);
    }
}


export default getFromUserPreferences;
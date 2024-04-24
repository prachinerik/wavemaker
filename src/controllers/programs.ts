import { Request, Response } from 'express';
import { connect } from "../database";


export async function getApplicablePrograms(req: Request, res: Response) {
   
    try {
        const userId = req.query.userId?req.query.userId:'';
        //const userId = req.params.userId;
        const conn = await connect();
    
        const posts = await conn.query (`SELECT programs_name FROM programs p INNER JOIN suitable_programs pu ON p.program_id = pu.program_id INNER JOIN selected_options up ON up.options_id = pu.options_id WHERE user_id = (?);`,[userId]);
        return res.json(posts[0]); 
    } catch(error){
        console.log(error);
        res.send("Data Entry failed").status(500);
    }
   
}

export default getApplicablePrograms;


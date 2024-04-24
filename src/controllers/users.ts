import { Request, Response, response } from 'express';
import { connect2 } from "../database";
import Users from '../model/users';

export async function insertIntoUsers(req: Request, res: Response) {
    
    try{
        let userId=0;
        const newUser: Users = req.body;
        const connection = await connect2();
        const query = connection.query(`INSERT INTO users SET ?`, [newUser], function (error: any, results: { insertId: any; }, fields: any) {
            if (error) throw error;
            userId=results.insertId;
            
            return res.status(200).json({message: userId});
        });
    
    } catch(error) {
        res.send("Data entry failed").status(500);
        console.log(error);
    }
}
      
export default insertIntoUsers;
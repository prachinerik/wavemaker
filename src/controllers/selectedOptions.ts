import { Request, Response } from 'express';
import { connect } from "../database";


export async function inputToUserUserPreferences(req: Request, res: Response) {
    try {
    const entries = req.body.entries; 
    
    const values = entries.map((entry:any) => [entry.user_id, entry.options_id]);
 
    const connection = await connect();
    
    const post =await connection.query('INSERT INTO selected_options (user_id, options_id) VALUES ?',[values]);
     
    return res.json({
        message: "New entry to UserUserPreferences is successful"
    });
} catch(error) {
    console.log(error);
    res.send("Data entry failed").status(500);
}
}

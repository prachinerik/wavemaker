
export default interface Users {
    // The '?' indicates that id is optional
    //It is set to AUTO_INCREMENT 
    user_id?: number,
    first_name?: string | null,
    last_name?: string | null,
    email: string,
    password: string,
   
}

export async function connect() {
    const mysql = require('mysql2/promise');
    const connection = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "password",
        database: "database",
        port: 33061,
        queueLimit: 0,
        connectionLimit: 30,
    });
    console.log("connection")
    return connection;
}


export async function connect2() {
    const mysql = require('mysql');
    const connection = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "password",
        database: "database",
        port: 33061,
        queueLimit: 0,
        connectionLimit: 30
    });
    console.log("connection")
    return connection;
}
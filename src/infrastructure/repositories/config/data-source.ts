import config from "config";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();


const configOptions = {
    host: config.get<string>("db_host"),
    user: config.get<string>("db_user"),
    password: config.get<string>("db_password"),
    database: config.get<string>("db_database"),
    port: config.get<number>("db_port"),
};

export const getPoolConnection = () => {
    const connection = mysql.createPool(configOptions);
    return connection;
};

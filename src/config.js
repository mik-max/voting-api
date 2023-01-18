import 'dotenv/config'
const {
     PORT,
     HOST,
     HOST_URL,
     SQL_DATABASE,
     SQL_SERVER,
     SQL_HOST ,
     SQL_PASSWORD ,
     SQL_USER
} = process.env;

let configData = {
     host: HOST,
     url: HOST_URL,
     port: parseInt(PORT, 10),
     sql:{
        
          server: SQL_SERVER,
          database: SQL_DATABASE,
          user: SQL_USER,
          password: SQL_PASSWORD,
          trustServerCertificate: true,
          options:{
               encrypt: true,
               enableArithAbort: true,
          }
     },
}
export default configData;



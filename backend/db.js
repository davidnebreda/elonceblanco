const dotenv = require("dotenv")
dotenv.config();

async function conexiondb()
{
   var mariadb = require("mariadb");
   var pool = mariadb.createPool(
    {
      host:process.env.DB_HOST,
      port:process.env.DB_PORT,
      user:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_DATABASE
    }
   );
   return pool;
}

async function getLastShow() {
      pool1 = await conexiondb();
      try {
         const result = pool1.query("SELECT * FROM obv_lastvideo");
         return result;
      }
      catch(err)
      {
        console.log("Error en Base de Datos:",err);
        pool1.end();
        throw err;
      }
      
        pool1.end();
      
}

module.exports = getLastShow;
const dotenv = require("dotenv");
const Pool=require("pg").Pool;
dotenv.config({ path: "./.env" });


const pool=new Pool({
    user:"postgres",
    password:"77883607",
    host:"localhost",
    port: 5432,
    database:"perntodo"
})

if(!pool){
    console.log("error")
}else{
    console.log("Connected")
}

module.exports=pool;
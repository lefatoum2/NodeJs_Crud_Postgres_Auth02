const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "issue_tracker",
    password: "password",
    port: 5432
})


 const app = express();

 app.use(cors());
 app.use(bodyParser.json());

 //POST
 app.post("api/v1/issues", (req, res)=> {
    const {label, status, priority } = req.body;

    pool.query(
            "INSERT INTO() VALUES()",[label,status,priority],
            (error,results) =>{
                if(error){
                    throw error;
                }
                res.status(200).json(results.rows)
            }
    );
 });


 //GETALL
app.get("/api/v1/issues", (req, res)=>{
    pool.query(
        "select id, label, status, priority from issues",[], (error, results) =>{

        
        res.status(200).json(results.rows);
        }
    );
});
  //GETID
app.get('api/v1/issues/:id', (req, res) =>{
    const {id} = req.params;

    pool.query(
        "select id,label, status, priority from issues where id = $1",[id],
        (error, results) => {
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }
    )
})

 //PUT


 //DELETE



 app.listen(8000, () => {
    console.log(`Server is running`)
 })
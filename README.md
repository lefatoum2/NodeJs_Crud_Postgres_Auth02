## Installation 

```
npm init -y
npm install --save express body-parser cors pg
```

## POST
```js
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
```
## GET ALL
```js
app.get("/api/v1/issues", (req, res)=>{
    pool.query(
        "select id, label, status, priority from issues",[], (error, results) =>{

        
        res.status(200).json(results.rows);
        }
    );
});
```
## GET ID
```js
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
```

## PUT 

## DELETE

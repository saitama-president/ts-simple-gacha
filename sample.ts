import Express from "express";

const app = Express();
const LISTEN_PORT= 4999;

app.listen(LISTEN_PORT,()=>{
  console.log(`Start PORT = ${LISTEN_PORT}`);
});


app.get("/",(req:Express.Request,res:Express.Response)=>{
  res.json([
    1,2,3,4,5
  ]);
});

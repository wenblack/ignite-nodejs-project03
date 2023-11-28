import { app } from "./app";
const PORT = 3333

app.listen({
  host: '0.0.0.0',// hack to  able connection from front-end 
  port: PORT,
}).then(() => {
  console.log(`🚀 HTTP Server Running on port ${PORT}!`)
})
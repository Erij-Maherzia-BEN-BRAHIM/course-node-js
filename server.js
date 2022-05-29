const http=require('http')

const server=http.createServer((req,res)=>{

   if(req.url=='/home'){
       res.statusCode=200
       res.write('welcome to home page')
   }else {
       res.statusCode=404
       res.write('page not found')
      
   } res.end()
})

server.listen(3000, ()=>{
    console.log('server is running with port : 3000')
})
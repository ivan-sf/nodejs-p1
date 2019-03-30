const http=require('http')

const handleServer=function(req,res){
    res.writeHead(200, {'Content-type':'text/html'})
    res.write("<h1>No lo creias posible eh? No tienes idea lo que viene Chico !</h1>")
    res.end()
}
const server=http.createServer(handleServer)

server.listen(666, function(){
    console.log('SERVER 666 ON')
})
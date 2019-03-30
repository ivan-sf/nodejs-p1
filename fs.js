const fs=require('fs')

fs.writeFile('./texto.txt','Bienvenido todo va por buen camino 666', function(err){
    if(err){
        console.log(err)
    }else{
        console.log('Un paso mas.')
    }
} )

console.log('Me ejecuto antes')

fs.readFile('./texto.txt', function(err,data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})
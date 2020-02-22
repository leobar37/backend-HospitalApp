//importaciones
const expres =  require('express');
const mongoose = require('mongoose'); 

//declataciones
const app = expres();
app.set('port' , 3000 || process.env.PORT);





//escuchar peticiones
let bDConec  =   async ()=> {
  return    await mongoose.connect( 'mongodb://localhost:2707/hospitalBD' , {
       useNewUrlParser : true,
      useUnifiedTopology : true,     
     useFindAndModify  : false 
     });
}

bDConec().then(console.log('base de datos online'))
.catch(err => console.log('error ' , err))

app.listen(app.get('port') , ()=> {
     console.log('escuchando en el puerto:  ' + app.get('port'));
     
})




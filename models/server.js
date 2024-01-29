//servidor express
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const  Sockets  = require("./sockets");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //http server
    this.server = http.createServer( this.app );

    //configuracion servidor del sockets
    this.io = socketio(this.server,{/*Configuraciones */});
  }
  middlewares(){
       //cords
       this.app.use(cors());
    //desplegar directorio publico
    this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
 

  }
  configurarSockets(){
    new Sockets(this.io);


  }
  execute(){
    //Inicializar Middlewares
    this.middlewares();
    //Inicializar Server;
    this.configurarSockets();
    this.server.listen(this.port,()=>{

        console.log('server corriendo en puerto 3000');
    });
  }
}

module.exports = Server;

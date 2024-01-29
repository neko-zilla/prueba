class Sockets {
  constructor(io) {
    this.io = io;
    this.SocketEvents();
    
  }
  SocketEvents(){

    //on connection
    this.io.on("connection", (socket) => {
        //escuchar el evento mensaje-to-server
        socket.on("mensaje-to-server", (data) => {
          console.log(data);
  
          this.io.emit("mensaje-from-server", data);
        });
        //"socket" es para mandar a un solo usuario conectado el "io" es para todo el mundo
      });
  }
}



module.exports=Sockets;

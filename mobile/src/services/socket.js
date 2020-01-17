import socketio from "socket.io-client";

const socket = socketio("http://192.168.100.42:5555", {
  autoConnect: false //para não conectar automaticamente
});

function subscribeToNewDevs(subscibeFuncion) {
  socket.on("new-dev", subscibeFuncion);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
  /* RECEBE DO BACKEND
    socket.on("message", text => {
    console.log(text);
  });*/
}

function disconnect() {
  if (socket.connect) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };

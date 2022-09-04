const socket = new WebSocket("ws://localhost:8080/ws");

let connect = () => {
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

let sendMessage = (msg: string) => {
  console.log("sending message: ", msg);

  if (socket.readyState !== socket.OPEN) {
    console.log("socket is not open!");
    return;
  }

  socket.send(msg);
};

export { connect, sendMessage };

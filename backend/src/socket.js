const signalR = require("@microsoft/signalr");

let connection = new signalR.HubConnectionBuilder()
  .withUrl("/room-join")
  .build();

connection.on("send", (data) => {
  console.log(data);
});

connection.start().then(() => connection.invoke("send", "Hello"));

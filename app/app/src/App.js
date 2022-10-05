import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "react-bootstrap/Card";
import data from "./component/data.json";
const newdata = data.map((data) => {
  return (
    <Card style={{ width: "18rem" }} key={data.id}>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.price}</Card.Text>
      </Card.Body>
    </Card>
  );
});

function App() {
  const notify = () => toast("Total is : " + res);
  var res = data
    .map((total) => total.price)
    .reduce((acc, total) => total + acc);
  console.log(res);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {newdata}
      <div>
        <button onClick={notify}>Total </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;

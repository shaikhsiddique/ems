import React from "react";
import Header from "../other/Header";
import All_task from "../other/All-task";
import Create_task from "../other/Create-task";

function Admin_board(props) {
  return (
    <div className="h-screen w-full p-7">
      <Header setUser={props.setUser} />

      <Create_task/>

      <All_task/>
    </div>
  );
}

export default Admin_board;

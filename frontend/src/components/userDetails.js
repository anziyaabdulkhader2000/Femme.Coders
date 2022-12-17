import React, { Component }from "react";
export default class UserDetails extends Components {
 componentDidMount()
 {
    fetch("http://localhost:5000/userData",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          token:window.localStorage.getItem("token"),
        }),
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"userData");
      });
 }
 render()
 {
    return(
    <div>
        Name<h1>LetHerFly</h1>
        Email<h1>LetHerFly</h1></div>
  );
    }
}

// export default userDetails
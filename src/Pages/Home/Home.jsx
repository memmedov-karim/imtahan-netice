import React from "react";
import users from '../../elnare.json'
import './home.css'
import logo from '../../logo21.png';
export default function Home(props) {
  console.log(users)
  const IdChecker = (id,data) => {
    for(let i of data!==null?data:[]){
      if(i["UTİS kodu"] === id){
        return true
      }
    }
    return false
  }
  // console.log(IdChecker("639791984a047a4c11531fb2",props.result))
  

  const [code, setcode] = React.useState("");
  
  const GetCode = (e) => {
    setcode(e.target.value);
    console.log(IdChecker(e.target.value,users))
  };
  const GetSubmit = (e) => {
    e.preventDefault();
    console.log(code);
  };
  const GetResultOfExam = (e) => {
    console.log(IdChecker(code,users));
    if(IdChecker(code,users)){
      setTimeout(()=>{
        window.location = `/mark/${code}`
  
      },1300)

    }
    else{
      window.location = '/notfound'
    }
    
    
 
  }
  return (
    <div className="home">
      <div className="navbar">
        <img alt="logo" src={logo} />

      </div>
      
      <div className="form">

      <form onSubmit={GetSubmit}>
        <input placeholder="utis kodu daxil edin..." type="text" onChange={GetCode} />
        <button className="btn btn-success" onClick={GetResultOfExam}>Nəticə</button>
      </form>
      

      </div>
      
    </div>
  );
}


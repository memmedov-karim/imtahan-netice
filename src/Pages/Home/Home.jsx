import React from "react";
import users from '../../sinaq.json'
import './home.css'
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
         <h1>İmtahan nəticəsi üçün utis kodu daxil edin</h1>

      </div>
      
      <div className="form">

      <form onSubmit={GetSubmit}>
        <input placeholder="şərti kodu daxil edin." type="text" onChange={GetCode} />
        <button className="btn btn-success" onClick={GetResultOfExam}>Nəticə</button>
      </form>
      

      </div>
      
    </div>
  );
}


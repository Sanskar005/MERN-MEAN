import logo from './logo.svg';
import './App.css';
import Card from "./components/Card.jsx"
import Card1 from "./components/card1.jsx"
import Card2 from "./components/card2.jsx"
import { useEffect } from 'react';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//         <Card />
//         <Card1 />
//     </div>
//   );
// }


function App() {
    const [arr,setArr] = useState([]);
      const getData =async() =>{
        await fetch("https://jsonplaceholder.typicode.com/photos",{
          method:"GET"
      }).then((res)=>res.json()).then((data)=>{
        const newData = data.splice(0,11)
        setArr(newData);
      })
  
      };
      useEffect(()=>{
        getData();
      },[])
    return (
      arr.map((el)=>{return(
        <Card2 image={el.url} title={el.title}/>
      )})
    );
  }

export default App;


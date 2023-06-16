import React from "react";
import Card from "./card";
import { useEffect, useState, useContext } from "react";
import Navbar from "./navbar";
import SearchContext from "../searchContext";

function HomePage() {
  const { search } = useContext(SearchContext);
  console.log(search);
  const [arr, setArr] = useState([]);
  const [wholearr, setWholeArr] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  // const [newarr, setNewArr] = useState([]);
  // const [pageArr, setPageArr] = useState([]);

  const pageArr = [];
  let i = 1;
  while (i <= wholearr.length / 10) {
    pageArr.push(i);
    i++;
  }
  //console.log(pageArr);

  const [page, setPage] = useState(1);

  // const handleChange = (e) =. {
  //     setSearchStr(e.target.value);
  // };

  const getData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setWholeArr(data);
        const end = page * 20;
        const start = page - 1;
        const newData = data.slice(start * 20, end);
        setArr(newData);
      });
  };

  const handlePage = (el) => {
    setPage(el);
  };

  // comments line- 48 to 135

  /*
const handlePatch=async(id)=>{
    const updatedName=prompt("");
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            name:updatedName,
        }),
    })
        .then((res)=>{
            if(res.ok){
                alert("Updated name !");
                getData();
            }
        });
        };
    
        const handleSearch=async(id)=>{
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                method:"GET",
            })
                .then((res)=>res.json())
                .then((data)=> {
                    setArr(data.Search);
    
                });
                };
            const getSearchedData =() =>{
            const newData=arr.filter((item) => item.name.includes(searchStr));
            console.log(newData);
            setNewArr(newData);
          };   





*/
  useEffect(() => {
    getData();
  }, [page]);

  //comment from 141 to 146

  // console.log(wholearr.length);
  // useEffect(()=>{
  //     getSearchedData();
  //     },[searchStr]);

  // console.log(arr);

  return (
    <div>
      <Navbar />

      {/* Comment from 151 to 157 */}

      {arr.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            marginTop: "5%",
          }}
        >
          {arr.map((el) => {
            return <Card id={el.id} title={el.title} body={el.body} />;
          })}
        </div>
      ) : (
        <h1>No Data Found</h1>
      )}

      {pageArr.map((el) => {
        return <button onClick={() => handlePage(el)}>{el}</button>;
      })}
    </div>
  );
} //Function end

export default HomePage;

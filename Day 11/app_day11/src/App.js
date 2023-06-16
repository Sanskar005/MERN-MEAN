import React, { useEffect, useState } from 'react';
import Card from './components/card';
import './App.css';

function App() {
  const [arr, setArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async () => {
    let url = `http://localhost:3000/user?_page=${currentPage}&_limit=10`;
    if (searchQuery) {
      url += `&q=${searchQuery}`;
    }

    const response = await fetch(url, {
      method: 'GET',
    });

    const data = await response.json();
    const totalCount = response.headers.get('X-Total-Count');
    const totalPages = Math.ceil(totalCount / 10);

    setArr(data);
    setTotalPages(totalPages);
  };

  const handlePatch = async (id) => {
    const updatedName = prompt('Enter updated name:');
    await fetch(`http://localhost:3000/user/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: updatedName,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert('Name Updated!');
          getData();
        } else {
          alert('Error in fetching');
        }
      });
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/user/${id}`, {
      method: 'DELETE',
    }).then(() => {
      alert('Record Deleted!');
      getData();
    });
  };

  const handleSearch = () => {
    setCurrentPage(1);
    getData();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getData();
  }, [currentPage, searchQuery]);

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      <div className="card-container">
        {arr.map((el) => (
          <Card
            key={el.id}
            image={el.url}
            title={el.title}
            id={el.id}
            onDelete={() => handleDelete(el.id)}
            onPatch={() => handlePatch(el.id)}
            buttonText="Delete"
          />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' :'pageNumber'}
            >
            {index + 1}
            </button>
            ))}
            </div>
            </div>
            );
            }
            
            export default App;
            
          
            
            
            

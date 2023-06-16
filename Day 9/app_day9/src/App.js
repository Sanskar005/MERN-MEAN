import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [arr, setArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const getData = async () => {
    let url = 'http://localhost:3000/user';
    if (searchQuery) {
      url += `?q=${searchQuery}`;
    }

    await fetch(url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setArr(data);
      });
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
    getData();
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

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
        {arr.length === 0 ? (
          <p>No data found.</p>
        ) : (
          arr.map((el) => (
            <Card
              key={el.id}
              image={el.url}
              title={el.title}
              id={el.id}
              onDelete={() => handleDelete(el.id)}
              onPatch={() => handlePatch(el.id)}
              buttonText="Delete"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;

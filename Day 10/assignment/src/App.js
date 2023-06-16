import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import './App.css';

function App() {
  const [arr, setArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Pagination
  const getData = async () => {
    let url = `http://localhost:3000/users?_page=${currentPage}&_limit=8`;
    if (searchQuery) {
      url += `&q=${searchQuery}`;
    }

    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();
    const totalCount = response.headers.get("X-Total-Count");
    const totalPages = Math.ceil(totalCount / 8);

    setArr(data);
    setTotalPages(totalPages);
  };

  // Update
  const handlePatch = async (id) => {
    const updatedName = prompt("Enter updated name:");
    const updatedMail = prompt("Enter updated email:");
    if (updatedName.trim() !== "" && updatedMail.trim() !== "") {
      await fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: updatedName,
          email: updatedMail,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("Data Updated!");
          getData();
        } else {
          alert("Error in fetching");
        }
      });
    }
  };

  // Delete
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      alert("Record Deleted!");
      getData();
    });
  };

  // Search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset current page to 1 when search query changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getData();
  }, [currentPage, searchQuery]);

  return (
    <div className="App">
      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
        <Navbar />
      </div>

      {/* Card content */}
      <div className="card-container">
        {arr.length === 0 ? (
          <p>No data found</p>
        ) : (
          arr.map((el) => (
            <Card
              key={el.id}
              name={el.name}
              email={el.email}
              mobile={el.mobile}
              gender={el.gender}
              id={el.id}
              onDelete={() => handleDelete(el.id)}
              onPatch={() => handlePatch(el.id)}
              buttonText="Delete"
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : "pageNumber"}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

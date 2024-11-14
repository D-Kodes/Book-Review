import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/myBooks").then((response) => {
      setMyBooks(response.data);
    });
  }, []);

  const handleSearch = () => {
    axios
      .get(`http://localhost:5000/books?q=${searchQuery}`)
      .then((response) => {
        setBooks(response.data);
      });
  };

  const handleAddToMyBooks = (book, status) => {
    axios
      .post("http://localhost:5000/myBooks", { ...book, status })
      .then(() => {
        alert("Book added to My Books!");
        setMyBooks((prevBooks) => [...prevBooks, { ...book, status }]);
      });
  };

  return (
    <div>
      <h2>Home Page</h2>
      <div>
        <h3>Search</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for books"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <h3>Search Results</h3>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            <a href={`/book/${book.isbn}`}>{book.title}</a> by {book.author} (
            {book.isbn})
            <div>
              <button onClick={() => handleAddToMyBooks(book, "Want to Read")}>
                Want to Read
              </button>
              <button onClick={() => handleAddToMyBooks(book, "Read")}>
                Read
              </button>
              <button onClick={() => handleAddToMyBooks(book, "Currently Reading")}>
                Currently Reading
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h3>My Books</h3>
      <ul>
        {myBooks.map((book) => (
          <li key={book.isbn}>
            {book.title} by {book.author} ({book.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

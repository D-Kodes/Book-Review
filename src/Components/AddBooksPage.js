import React, { useState, useEffect } from "react";
import axios from "axios";

const AddBooksPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/books", { title, author, isbn })
      .then(() => {
        alert("Book added successfully!");
        setTitle("");
        setAuthor("");
        setIsbn("");
      });
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <h3>Existing Books</h3>
      <ul>
        {books.map((book) => (
          <li key={book.isbn}>
            {book.title} by {book.author} (ISBN: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddBooksPage;

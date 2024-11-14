import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetailsPage = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/books?isbn=${isbn}`).then((response) => {
      setBook(response.data[0]);
    });

    axios.get(`http://localhost:5000/reviews?isbn=${isbn}`).then((response) => {
      setReviews(response.data);
    });
  }, [isbn]);

  const handleAddReview = () => {
    const review = { isbn, text: reviewText };
    axios.post("http://localhost:5000/reviews", review).then(() => {
      setReviews([...reviews, review]);
      setReviewText("");
    });
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>

      <h4>Reviews</h4>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            {review.text}
          </li>
        ))}
      </ul>

      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Add a review"
      ></textarea>
      <button onClick={handleAddReview}>Add Review</button>
    </div>
  );
};

export default BookDetailsPage;

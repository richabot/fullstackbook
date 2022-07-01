import React from "react";

const BookCard = ({ item }) => {
  return (
    <div
      style={{ border: "1px solid", padding: "1%", boxSizing: "border-box" }}
    >
      <img src={item.cover_photo} alt="image" width="100%" />
      <p style={{ margin: 0 }}>
        <b>Name:</b> {item.book_name}
      </p>
      <p style={{ margin: 0 }}>
        <b>Year:</b> {item.release_year}
      </p>
      <p style={{ margin: 0 }}>
        <b>Category:</b> {item.category}
      </p>
      <p style={{ margin: 0 }}>
        <b>Author:</b> {item.author}
      </p>
    </div>
  );
};

export default BookCard;

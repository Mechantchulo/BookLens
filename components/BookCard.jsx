import React from "react";

const BookCard = ({ book }) => {
  const { title, authors, publishedDate } = book.volumeInfo;

  return (
    <div>
      <h2>{title}</h2>
      <p>{authors ? authors.join(", ") : "Unknown Author"}</p>
      <p>{publishedDate ? publishedDate.slice(0, 4) : "Unknown Date"}</p>
    </div>
  );
};

export default BookCard;

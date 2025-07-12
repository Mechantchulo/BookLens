import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No books found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;

import React, { useState } from "react";
import Search from "../components/Search";
import axios from "axios";
import BookCard from "../components/BookCard";
import BookList from "../components/BookList";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const onSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSearchSubmit = async () => {
    if (!searchTerm.trim()) {
      return;
    }

    const options = {
      method: "GET",
      url: "https://www.googleapis.com/books/v1/volumes",
      params: {
        q: searchTerm,
        maxResults: 20,
        key: import.meta.env.VITE_BOOKS_API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      setBooks(response.data.items);
    } catch (error) {
      console.error(error);
      setErrorMsg(`Trouble finding your book`);
    }
  };
  return (
    <div>
      <Search
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
      />

      <BookList books={books} />
    </div>
  );
};

export default App;

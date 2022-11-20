import React from "react";
import { AddBookForm } from "../components/AddBookForm/AddBookForm";
import { BookTable } from "../components/BookTable/BookTable";
import { Togglable } from "../components/Togglable/Togglable";
import { books } from "../data/books";
import { BookEntry } from "../types";
import "./inventory.css";

export const InventoryPage = () => {
  const addBook = (entry: BookEntry) => {
    const lastId = booksList.slice(-1)[0].id;
    const newBook = { ...entry, id: lastId + 1 };
    setBooksList(booksList.concat(newBook));
  };

  const [booksList, setBooksList] = React.useState<BookEntry[]>(books);

  // React.useEffect(() => {
  //   const importedBooks = books;
  //   setBooksList(importedBooks);
  // }, []);

  return (
    <div>
      <h1>Book Room Inventory</h1>
      <Togglable
        buttonLabel="Add a new book"
        cancelButtonLabel="Close adding books"
      >
        <AddBookForm addBook={addBook} />
      </Togglable>

      <BookTable booksList={booksList} />
    </div>
  );
};

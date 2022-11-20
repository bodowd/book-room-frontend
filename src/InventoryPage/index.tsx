import React from "react";
import { BookForm } from "../components/BookForm/BookForm";
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

  const editBook = (entry: BookEntry) => {};

  const hideAddBookButton = () => {
    setShowAddBookButton(!showAddBookButton);
  };

  const hideUpdateBookButton = () => {
    setShowUpdateBookButton(!showUpdateBookButton);
  };

  const [booksList, setBooksList] = React.useState<BookEntry[]>(books);
  const [showAddBookButton, setShowAddBookButton] =
    React.useState<boolean>(true);
  const [showUpdateBookButton, setShowUpdateBookButton] =
    React.useState<boolean>(true);

  // React.useEffect(() => {
  //   const importedBooks = books;
  //   setBooksList(importedBooks);
  // }, []);

  return (
    <div>
      <h1>Book Room Inventory</h1>

      {showAddBookButton ? (
        <Togglable
          buttonLabel="Add a new book"
          cancelButtonLabel="Close adding books form"
          setHideOthers={hideUpdateBookButton}
        >
          <BookForm mutateBook={addBook} isAddBook={true} />
        </Togglable>
      ) : (
        <div></div>
      )}

      {showUpdateBookButton ? (
        <Togglable
          buttonLabel="Update a book"
          cancelButtonLabel="Close updating books form"
          setHideOthers={hideAddBookButton}
        >
          <BookForm mutateBook={editBook} isAddBook={false} />
        </Togglable>
      ) : (
        <div></div>
      )}

      <BookTable booksList={booksList} />
    </div>
  );
};

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

  const editBook = (entry: BookEntry) => {
    const bookOfInterest = booksList.filter(
      (i) => Number(i.id) === Number(entry.id)
    );
  };

  const deleteBook = (entry: { id: number }) => {
    const newBooksList = booksList.filter(
      (i) => Number(i.id) !== Number(entry.id)
    );
    setBooksList(newBooksList);
  };

  const showOnlyUpdateButton = () => {
    setShowAddBookButton(!showAddBookButton);
    setShowDeleteBookButton(!showDeleteBookButton);
  };

  const showOnlyAddButton = () => {
    setShowDeleteBookButton(!showDeleteBookButton);
    setShowUpdateBookButton(!showUpdateBookButton);
  };

  const showOnlyDeleteButton = () => {
    setShowAddBookButton(!showAddBookButton);
    setShowUpdateBookButton(!showUpdateBookButton);
  };

  const [booksList, setBooksList] = React.useState<BookEntry[]>(books);
  const [showAddBookButton, setShowAddBookButton] =
    React.useState<boolean>(true);
  const [showUpdateBookButton, setShowUpdateBookButton] =
    React.useState<boolean>(true);
  const [showDeleteBookButton, setShowDeleteBookButton] =
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
          setHideOthers={showOnlyAddButton}
        >
          <BookForm mutateBook={addBook} formType={"add"} />
        </Togglable>
      ) : (
        <div></div>
      )}

      {showUpdateBookButton ? (
        <Togglable
          buttonLabel="Update a book"
          cancelButtonLabel="Close updating books form"
          setHideOthers={showOnlyUpdateButton}
        >
          <BookForm mutateBook={editBook} formType={"update"} />
        </Togglable>
      ) : (
        <div></div>
      )}

      {showDeleteBookButton ? (
        <Togglable
          buttonLabel="Delete a book"
          cancelButtonLabel="Close deleting books form"
          setHideOthers={showOnlyDeleteButton}
        >
          <BookForm mutateBook={deleteBook} formType={"delete"} />
        </Togglable>
      ) : (
        <div></div>
      )}

      <BookTable booksList={booksList} />
    </div>
  );
};

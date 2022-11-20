import React from "react";
import { books } from "../data/books";
import { DataGrid } from "@mui/x-data-grid";

interface BookEntry {
  id: number;
  title: string;
  count: number;
  price: number;
}

const numbersOnlyOnChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setState: Function
) => {
  // checks to see if the entered values are numbers (allows floats)
  const re = /^[0-9.\b]+$/;
  if (e.target.value === "" || re.test(e.target.value)) {
    setState(e.target.value);
  }
};

export const InventoryPage = () => {
  const addBook = (entry: BookEntry) => {
    const lastId = booksList.slice(-1)[0].id;
    const newBook = { ...entry, id: lastId + 1 };
    setBooksList(booksList.concat(newBook));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    addBook({
      id: 0,
      title: newBookTitle,
      count: newBookCount,
      price: newBookPrice,
    });
    setNewBookTitle("");
    setNewBookCount(0);
    setNewBookPrice(0);
  };

  const [booksList, setBooksList] = React.useState<BookEntry[]>([]);

  const [newBookTitle, setNewBookTitle] = React.useState<string>("");
  const [newBookCount, setNewBookCount] = React.useState<number>(0);
  const [newBookPrice, setNewBookPrice] = React.useState<number>(0);

  React.useEffect(() => {
    const importedBooks = books;
    setBooksList(importedBooks);
  }, []);

  const columns = [
    { field: "title", headerName: "Title", flex: 1 },
    { field: "count", headerName: "Count", flex: 1 },
    { field: "price", headerName: "Price in €", flex: 1 },
  ];

  return (
    <div>
      <h1>Book Room Inventory</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title:
          <input
            value={newBookTitle}
            onChange={({ target }) => setNewBookTitle(target.value)}
          />
        </div>
        <div>
          Count:
          <input
            value={newBookCount}
            onChange={(event) => numbersOnlyOnChange(event, setNewBookCount)}
          />
        </div>
        <div>
          Price (€):
          <input
            value={newBookPrice}
            onChange={(event) => numbersOnlyOnChange(event, setNewBookPrice)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <div style={{ flexGrow: 1 }}>
        <DataGrid rows={booksList} columns={columns} autoHeight />
      </div>
    </div>
  );
};

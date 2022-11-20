import React from "react";
import { numbersOnlyOnChange } from "../utils";

interface AddBookFormProps {
  addBook: Function;
}

export const AddBookForm = ({ addBook }: AddBookFormProps) => {
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

  const [newBookTitle, setNewBookTitle] = React.useState<string>("");
  const [newBookCount, setNewBookCount] = React.useState<number>(0);
  const [newBookPrice, setNewBookPrice] = React.useState<number>(0);

  return (
    <div>
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
    </div>
  );
};

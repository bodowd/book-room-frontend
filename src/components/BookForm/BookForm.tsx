import React from "react";
import { numbersOnlyOnChange } from "../utils";

interface BookFormProps {
  mutateBook: Function;
  isAddBook: boolean;
}

export const BookForm = (props: BookFormProps) => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.mutateBook({
      id: 0,
      title: newBookTitle,
      count: newBookCount,
      price: newBookPrice,
    });
    setNewBookTitle("");
    setNewBookCount(0);
    setNewBookPrice(0);
  };

  const [bookId, setBookId] = React.useState<number | string>(0);
  const [newBookTitle, setNewBookTitle] = React.useState<string>("");
  const [newBookCount, setNewBookCount] = React.useState<number>(0);
  const [newBookPrice, setNewBookPrice] = React.useState<number>(0);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {!props.isAddBook ? (
          <div>
            Id:
            <input
              value={1}
              onChange={({ target }) => setBookId(target.value)}
            />
          </div>
        ) : (
          <div></div>
        )}
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
        {props.isAddBook ? (
          <button type="submit">Add Book</button>
        ) : (
          <button type="submit">Update Book</button>
        )}
      </form>
    </div>
  );
};

import React from "react";
import { numbersOnlyOnChange } from "../utils";

type FormType = "add" | "update" | "delete";

interface BookFormProps {
  mutateBook: Function;
  formType: FormType;
}

const showButtons = (props: BookFormProps) => {
  if (props.formType === "add") {
    return <button type="submit">Add Book</button>;
  } else if (props.formType === "update") {
    return <button type="submit">Update Book</button>;
  } else {
    return <button type="submit">Delete Book</button>;
  }
};

export const BookForm = (props: BookFormProps) => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (newBookTitle !== "") {
      props.mutateBook({
        id: props.formType === "add" ? 0 : bookId,
        title: newBookTitle,
        count: newBookCount,
        price: newBookPrice,
      });
    }
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
        {/* show id field only if it is the update or delete form */}
        {props.formType !== "add" ? (
          <div>
            Id:
            <input
              value={bookId}
              onChange={({ target }) => setBookId(target.value)}
            />
          </div>
        ) : (
          <div></div>
        )}
        <div></div>

        {props.formType !== "delete" ? (
          <>
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
                onChange={(event) =>
                  numbersOnlyOnChange(event, setNewBookCount)
                }
              />
            </div>
            <div>
              Price (€):
              <input
                value={newBookPrice}
                onChange={(event) =>
                  numbersOnlyOnChange(event, setNewBookPrice)
                }
              />
            </div>
          </>
        ) : (
          <div></div>
        )}
        {showButtons(props)}
      </form>
    </div>
  );
};

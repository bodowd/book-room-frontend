import React from "react";
import { BookEntry } from "../../types";

interface BookTableProps {
  booksList: BookEntry[];
}

export const BookTable = ({ booksList }: BookTableProps) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Count</th>
          <th>Price in €</th>
        </tr>
        {booksList.map((i) => (
          <tr key={i.id}>
            <td>{i.id}</td>
            <td>{i.title}</td>
            <td>{i.count}</td>
            <td>{i.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

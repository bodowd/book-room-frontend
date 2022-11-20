import React from "react";
import { GridRowModel } from "@mui/x-data-grid";
import { AlertProps } from "@mui/material";

export const isNumbersOnly = (e: string) => {
  const re = /^[0-9.\b]+$/;
  return re.test(e);
};

export const numbersOnlyOnChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setState: Function
) => {
  // checks to see if the entered values are numbers (allows floats)
  if (e.target.value === "" || isNumbersOnly(e.target.value)) {
    setState(e.target.value);
  }
};

export const computeMutation = (newRow: GridRowModel, oldRow: GridRowModel) => {
  if (newRow.title !== oldRow.title) {
    return `Title from '${oldRow.title}' to '${newRow.title}'`;
  }

  if (newRow.count !== oldRow.count) {
    return `Count from '${oldRow.count}' to '${newRow.count}'`;
  }

  if (newRow.price !== oldRow.price) {
    return `Price from '${oldRow.price}' to '${newRow.price}'`;
  }
};

export const askConfirmationBeforeSave = () => {
  const noButtonRef = React.useRef<HTMLButtonElement>(null);
  const [promiseArguments, setPromiseArguments] = React.useState<any>(null);

  const [snackbar, setSnackbar] = React.useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = React.useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) =>
      new Promise<GridRowModel>((resolve, reject) => {
        const mutation = computeMutation(newRow, oldRow);
        if (mutation) {
          setPromiseArguments({ resolve, reject, newRow, oldRow });
        } else {
          resolve(oldRow);
        }
      }),
    []
  );
};

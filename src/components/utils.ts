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

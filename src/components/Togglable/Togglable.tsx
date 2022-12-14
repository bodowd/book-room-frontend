import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
  cancelButtonLabel: string;
  // this function is to pass state back up to the parent
  setHideOthers: (arg: boolean) => void;
}

export const Togglable: React.FC<ButtonProps> = (props) => {
  const [visible, setVisible] = React.useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVis = () => {
    setVisible(!visible);
    props.setHideOthers(!visible);
  };

  // React.useImperativeHandle(ref, () => {
  //   return { toggleVis };
  // });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVis}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVis}>{props.cancelButtonLabel}</button>
      </div>
    </div>
  );
};

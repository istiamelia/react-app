// type rafce for shortcut for React Arrow Function Component with Export
import React, { ReactNode } from "react";

interface Props {
  // if we rename the property to chilcren, we can pass the text inside of App Component like <Alert> "text" <Alert>
  children: ReactNode;
  //   ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className={"alert alert-warning alert-dismissible fade show "}>
      <strong>{children}</strong> You should check in on some of those fields
      below
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;

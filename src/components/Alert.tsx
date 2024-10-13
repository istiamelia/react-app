// type rafce for shortcut for React Arrow Function Component with Export
import React, { ReactNode } from "react";

interface Props {
  // if we rename the property to chilcren, we can pass the text inside of App Component like <Alert> "text" <Alert>
  children: ReactNode;
  //   ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean
  name: string;
}

const Alert = ({ children, name }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

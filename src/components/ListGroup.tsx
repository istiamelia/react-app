import { MouseEvent, useState } from "react";
interface Props {
  //  variable items has type of array string
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: Props) {
  //   useState is a React Hook that lets you add a state variable to your component.
  //   The current state. During the first render, it will match the initialState you have passed.
  // The set function that lets you update the state to a different value and trigger a re-render.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {/* Why do we use the && operator? because True && 1 will return 1, this is the common technique to render content dinamically */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

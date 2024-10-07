import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Fransisco", "Los Angeles", "Tokyo"];
  let selectedIndex = 0;
  // ---Event handler--- //
  // In typescript we should define a type annotation because we're assigning a brand new function with the parameter event
  // Here we use type MouseEvent we imported from React
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
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
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import ListGroup from "./components/ListGroup";

function App() {
  // React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
  let items = ["New York", "San Fransisco", "Los Angeles", "Tokyo"];
  let heading = "Cities";
  // start every name of an even handler with "handle"
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

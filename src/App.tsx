import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
  // let items = ["New York", "San Fransisco", "Los Angeles", "Tokyo"];
  // let heading = "Cities";
  // start every name of an even handler with "handle"
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // let name = "Isti";
  let display = "d-block";
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert name={name}>
        Hello World <span>{name}</span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button color={"dark"} onClick={() => setAlertVisibility(true)}>
        Ocee
      </Button>
    </div>
  );
}

export default App;

import { Center, List } from "@chakra-ui/react";
import { Reorder } from "framer-motion";
import { useState } from "react";
import "./App.css";
import { Item, Item2 } from "./Item";

function App() {
  const [usernames, setUsernames] = useState([
    "malerba118",
    "compulves",
    "dan_abramov",
    // {name:"malerba118"}, // オブジェクトはだめ？
    // {name:"compulves"},
    // {name:"dan_abramov"},
  ]);

  return (
    <Center h="100vh">
      <List
        as={Reorder.Group}
        axis="y"
        values={usernames}
        onReorder={setUsernames}
        spacing={2}
      >
        {usernames.map((item, index) => (
          <Item key={item} item={item} />
        ))}
      </List>
      {/* <Reorder.Group axis="y" onReorder={setUsernames} values={usernames}>
        {usernames.map((item) => (
          <Item2 key={item} item={item} />
        ))}
      </Reorder.Group> */}
    </Center>
  );
}

export default App;

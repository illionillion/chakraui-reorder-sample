import { Center, List, ListItem, Text } from "@chakra-ui/react";
import { Reorder, useDragControls } from "framer-motion";
import { useState } from "react";
import "./App.css";

function App() {
  const [usernames, setUsernames] = useState([
    "malerba118",
    "compulves",
    "dan_abramov",
    // {name:"malerba118"}, // オブジェクトはだめ
    // {name:"compulves"},
    // {name:"dan_abramov"},
  ]);
  const controls = useDragControls();

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
          <ListItem
            as={Reorder.Item}
            key={item} // key と itemが一緒？
            value={item}
            p={2}
            bg="gray.100"
            rounded="xl"
            dragListener={false}
            draggable={false}
            dragControls={controls}
          >
            <Text onPointerDown={(e) => controls.start(e)} cursor="grab">
              {item}
            </Text>
          </ListItem>
        ))}
      </List>
    </Center>
  );
}

export default App;

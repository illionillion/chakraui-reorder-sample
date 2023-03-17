import { ListItem, Text, useBoolean } from "@chakra-ui/react";
import { Reorder, useDragControls } from "framer-motion";
import { FC } from "react";

export const Item: FC<{ item: string }> = ({ item }) => {
  const controls = useDragControls();
  const [isDragListener, setIsDragListener] = useBoolean(false);

  return (
    <ListItem
      as={Reorder.Item}
      key={item} // key と itemが一緒？
      value={item}
      p={2}
      bg="gray.100"
      rounded="xl"
      dragListener={isDragListener}
      draggable={isDragListener}
      dragControls={controls}
    >
      <Text
        onPointerDown={(e) => {
          setIsDragListener.on();
          controls.start(e);
        }}
        onPointerUp={(e) => {
          setIsDragListener.off();
        }}
        cursor="grab"
      >
        {item}
      </Text>
    </ListItem>
  );
};

export const Item2: FC<{ item: string }> = ({ item }) => {
  const controls = useDragControls();

  return (
    <Reorder.Item
      key={item} // key と itemが一緒？
      value={item}
      style={{
        padding: 2,
        background: "gray",
      }}
      dragListener={false}
      dragControls={controls}
    >
      <Text onPointerDown={(e) => controls.start(e)} cursor="grab">
        {item}
      </Text>
    </Reorder.Item>
  );
};

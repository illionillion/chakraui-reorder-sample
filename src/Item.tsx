import { ListItem, Text, useBoolean } from "@chakra-ui/react";
import { Reorder, useDragControls } from "framer-motion";
import { FC, LegacyRef, TouchEventHandler, useEffect, useRef } from "react";

export const Item: FC<{ item: string }> = ({ item }) => {
  const controls = useDragControls();

  // モバイル対応
  const iRef = useRef<LegacyRef<SVGSVGElement> | undefined>(null);
  useEffect(() => {
    const touchHandler: TouchEventHandler<HTMLElement> = (e) =>
      e.preventDefault();

    const iTag = iRef.current;

    if (iTag) {
      //@ts-ignore
      iTag.addEventListener("touchstart", touchHandler, { passive: false });

      return () => {
        //@ts-ignore
        iTag.removeEventListener("touchstart", touchHandler, {
          passive: false,
        });
      };
    }
  }, [iRef]);

  return (
    <ListItem
      as={Reorder.Item}
      key={item} // key と itemが一緒？
      value={item}
      p={2}
      bg="gray.100"
      rounded="xl"
      dragListener={false}
      dragControls={controls}
    >
      <Text
        //@ts-ignore
        ref={iRef}
        onPointerDown={(e) => {
          controls.start(e);
        }}
        cursor="grab"
      >
        {item}
      </Text>
    </ListItem>
  );
};

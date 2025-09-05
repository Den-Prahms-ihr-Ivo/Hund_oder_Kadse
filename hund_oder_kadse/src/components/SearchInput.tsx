"use client";

import {
  Combobox,
  useListCollection,
  useFilter,
  Portal,
} from "@chakra-ui/react";
// import { useRef } from "react";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const SearchInput = () => {
  // const ref = useRef<HTMLInputElement>(null);
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: [
      { inputValue: "Bitches", value: 0, label: "Bitches" },
      { inputValue: "Popo", value: 1, label: "Popo" },
      { inputValue: "Nina", value: 2, label: "Nina" },
    ], // TODO: Fill
    filter: contains,
  });

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      width="320px"
    >
      {/* <Combobox.Label>Ich bin ein Test Search Input</Combobox.Label> */}
      <Combobox.Control>
        <Combobox.Input placeholder="Type to search" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};

export default SearchInput;

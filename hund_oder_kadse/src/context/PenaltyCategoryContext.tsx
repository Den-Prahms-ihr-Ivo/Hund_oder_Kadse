import { createContext, useContext, useState, type ReactNode } from "react";

export type CategoryItem = {
  id: number;
  name: string;
  icon: string;
  selected: boolean;
};

type PenaltyCategoriesContextType = {
  categories: CategoryItem[];
  toggle: (id: number) => void;
  deselectAll: () => void;
  selectAll: () => void;
};

const PenaltyCategoriesContext = createContext<
  PenaltyCategoriesContextType | undefined
>(undefined);

const test_items = [
  { id: 0, name: "Drinks", icon: "martini", selected: true },
  { id: 1, name: "Stunts", icon: "stunt", selected: true },
  { id: 2, name: "Sport", icon: "sport", selected: true },
  { id: 3, name: "Akrobatik", icon: "acrobatics", selected: true },
  { id: 4, name: "Adventurous Edges", icon: "compass", selected: true },
  { id: 5, name: "Spaß", icon: "funny", selected: true },
  { id: 6, name: "Pärchen", icon: "couple", selected: true },
  { id: 7, name: "Storytime", icon: "story", selected: true },
];

export function PenaltyCategoriesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [categories, setCategories] = useState<CategoryItem[]>(test_items); // TODO: make empty

  const selectAll = () => {
    const tmp = [...categories];
    tmp.forEach((_, i) => {
      tmp[i].selected = true;
    });
    setCategories(tmp);
  };
  const deselectAll = () => {
    const tmp = [...categories];
    tmp.forEach((_, i) => {
      tmp[i].selected = false;
    });
    setCategories(tmp);
  };

  const toggle = (id: number) => {
    const tmp = [...categories];
    tmp.forEach((category, i) => {
      if (category.id == id) {
        tmp[i].selected = !tmp[i].selected;
      }
    });
    setCategories(tmp);
  };

  return (
    <PenaltyCategoriesContext.Provider
      value={{ categories, toggle, selectAll, deselectAll }}
    >
      {children}
    </PenaltyCategoriesContext.Provider>
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function usePenaltyCategories() {
  const ctx = useContext(PenaltyCategoriesContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

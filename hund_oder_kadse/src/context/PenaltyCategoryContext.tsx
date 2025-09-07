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
};

const PenaltyCategoriesContext = createContext<
  PenaltyCategoriesContextType | undefined
>(undefined);

const test_items = [
  { id: 0, name: "Drinks", icon: "beer", selected: true },
  { id: 1, name: "Lifestyle & Interests", icon: "message", selected: true },
  { id: 2, name: "Personality & Quirks", icon: "drama", selected: true },
  { id: 3, name: "Style & Vibe", icon: "heart", selected: true },
  { id: 4, name: "Adventurous Edges", icon: "compass", selected: true },
];

export function PenaltyCategoriesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [categories, setCategories] = useState<CategoryItem[]>(test_items); // TODO: make empty

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
    <PenaltyCategoriesContext.Provider value={{ categories, toggle }}>
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

import { createContext, useContext, useState, type ReactNode } from "react";

export type CategoryItem = {
  id: number;
  name: string;
  icon: string;
  selected: boolean;
};

type QuestionCategoriesContextType = {
  categories: CategoryItem[];
  toggle: (id: number) => void;
};

const QuestionCategoriesContext = createContext<
  QuestionCategoriesContextType | undefined
>(undefined);

const test_items = [
  { id: 0, name: "Hypothetical Stories", icon: "story", selected: true },
  { id: 1, name: "Lifestyle & Interests", icon: "message", selected: true },
  { id: 2, name: "Personality & Quirks", icon: "drama", selected: true },
  { id: 3, name: "Style & Vibe", icon: "heart", selected: true },
  { id: 4, name: "Adventurous Edges", icon: "compass", selected: true },
];

export function QuestionCategoriesProvider({
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
    <QuestionCategoriesContext.Provider value={{ categories, toggle }}>
      {children}
    </QuestionCategoriesContext.Provider>
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function useQuestionCategories() {
  const ctx = useContext(QuestionCategoriesContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

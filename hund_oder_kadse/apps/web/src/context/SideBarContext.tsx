import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type SideBarContextType = {
  isSideBar: boolean;
};

// 1. Create the context with a default (undefined so we force using the provider)
const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

// 2. Create the provider component
export function IsSideBarProvider({ children }: { children: ReactNode }) {
  const [isSideBar, setIsSideBar] = useState<boolean>(window.innerWidth > 1023);

  useEffect(() => {
    function handleResize() {
      setIsSideBar(window.innerWidth > 1023);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SideBarContext.Provider value={{ isSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export function useIsSideBar() {
  const ctx = useContext(SideBarContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

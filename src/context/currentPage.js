import { createContext, useContext, useState } from "react";

const CurrentPageContext = createContext();

export function CurrentPageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
}

export function useCurrentPage() {
  return useContext(CurrentPageContext);
}

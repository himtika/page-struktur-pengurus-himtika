import { createContext, useContext, useState } from "react";

type SCModalContextType = {
  openedSCModal: string;
  setOpenedSCModal: React.Dispatch<React.SetStateAction<string>>;
};

const SCModalContext = createContext<SCModalContextType>({
  openedSCModal: "",
  setOpenedSCModal: () => {},
});

function SCModalContextProvider({ children }: { children: React.ReactNode }) {
  const [openedSCModal, setOpenedSCModal] = useState<string>("");

  return (
    <SCModalContext.Provider
      value={{
        openedSCModal,
        setOpenedSCModal,
      }}
    >
      {children}
    </SCModalContext.Provider>
  );
}

function useSCModalContext() {
  const context = useContext(SCModalContext);

  if (!context) alert("Anda menggunakan context di luar jangkauan");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useSCModalContext, SCModalContextProvider };

import { createContext, useContext, useState } from "react";

type modalContextType = {
  modalOpened: string;
  setModalOpened: React.Dispatch<React.SetStateAction<string>>;
};

const ModalContext = createContext<modalContextType>({
  modalOpened: "",
  setModalOpened: () => {},
});

function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const [modalOpened, setModalOpened] = useState<string>("Human Resource Development");

  return (
    <ModalContext.Provider value={{ modalOpened, setModalOpened }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) alert("Anda menggunakan context di luar jangkauan");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useModalContext, ModalContextProvider };

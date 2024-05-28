import { createContext, useContext, useState } from "react";

type modalContextType = {
  modalOpened: string;
  setModalOpened: React.Dispatch<React.SetStateAction<string>>;
  modalIndex: number;
  setModalIndex: React.Dispatch<React.SetStateAction<number>>;
  handleCloseModal: VoidFunction
};

const ModalContext = createContext<modalContextType>({
  modalOpened: "",
  setModalOpened: () => {},
  modalIndex: 0,
  setModalIndex: () => {},
  handleCloseModal: () => {}
});

function ModalContextProvider({ children }: { children: React.ReactNode }) {
  const [modalOpened, setModalOpened] = useState<string>("");
  const [modalIndex, setModalIndex] = useState(0);

  function handleCloseModal() {
    setModalIndex(0);
    setModalOpened('');
  }

  return (
    <ModalContext.Provider value={{ modalOpened, setModalOpened, modalIndex, setModalIndex, handleCloseModal}}>
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

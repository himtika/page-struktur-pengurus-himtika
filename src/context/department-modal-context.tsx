import { createContext, useContext, useState } from "react";

type departmentModalContextType = {
  departmentModalOpened: string;
  setDepartmentModalOpened: React.Dispatch<React.SetStateAction<string>>;
  departmentModalIndex: number;
  setDepartmentModalIndex: React.Dispatch<React.SetStateAction<number>>;
  handleCloseModal: VoidFunction;
};

const departmentModalContext = createContext<departmentModalContextType>({
  departmentModalOpened: "",
  setDepartmentModalOpened: () => {},
  departmentModalIndex: 0,
  setDepartmentModalIndex: () => {},
  handleCloseModal: () => {},
});

function DepartmentModalContextProvider({ children }: { children: React.ReactNode }) {
  const [departmentModalOpened, setDepartmentModalOpened] = useState<string>("");
  const [departmentModalIndex, setDepartmentModalIndex] = useState(0);

  function handleCloseModal() {
    setDepartmentModalIndex(0);
    setDepartmentModalOpened("");
  }

  return (
    <departmentModalContext.Provider
      value={{
        departmentModalOpened,
        setDepartmentModalOpened,
        departmentModalIndex,
        setDepartmentModalIndex,
        handleCloseModal,
      }}
    >
      {children}
    </departmentModalContext.Provider>
  );
}

function useDepartmentModalContext() {
  const context = useContext(departmentModalContext);

  if (!context) alert("Anda menggunakan context di luar jangkauan");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useDepartmentModalContext, DepartmentModalContextProvider };

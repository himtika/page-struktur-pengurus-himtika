import StrukturLaptopView from "./components/struktur-laptop";
import StrukturForMobileTabletView from "./components/struktur-mobile-tablet";
import { useModalContext } from "./context/modal-context";
import DepartmentModal from "./components/department-modal";

function App() {
  const { modalOpened, setModalOpened } = useModalContext();

  return (
    <div className="bg-secondary px-3 py-10 text-white transition-all font-figtree">
      <div className="flex flex-col pt-5">
        <h1 className="text-center text-[1.4rem] lg:text-5xl font-semibold capitalize">
          STRUKTUR PENGURUS
        </h1>
        <h1 className="text-center text-[1rem] lg:text-3xl lg:mt-3 font-semibold capitalize">
          PENGURUS HIMTIKA 2024
        </h1>
      </div>

      {/* Showed on Mobile & Tablet view, Hidden on Laptop */}
      <StrukturForMobileTabletView />

      {/* Showed on Laptop, Hidden on Mobile & Tablet view */}
      <StrukturLaptopView />

      {modalOpened && (
        <div
          role="detail-modal"
          className="fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm bg-white/30 z-40 cursor-pointer"
          onClick={setModalOpened.bind(null, "")}
        />
      )}

      <DepartmentModal />
    </div>
  );
}

export default App;

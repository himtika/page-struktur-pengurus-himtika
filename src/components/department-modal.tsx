import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoMdCloseCircle,
} from "react-icons/io";
import { useModalContext } from "../context/modal-context";
import { dataAnggotaDepartemen } from "../data/data-anggota-departemen";

function DepartmentModal() {
  const { modalOpened, handleCloseModal, setModalIndex, modalIndex } =
    useModalContext();

  const currentDepartment = dataAnggotaDepartemen.get(modalOpened);

  function handleClickRight() {
    setModalIndex((openedModal) =>
      openedModal + 1 === currentDepartment?.jumlahAnggota ? 0 : openedModal + 1
    );
  }

  function handleClickLeft() {
    setModalIndex((openedModal) => {
      if (!currentDepartment) return 0;

      return openedModal === 0
        ? currentDepartment.jumlahAnggota - 1
        : openedModal - 1;
    });
  }

  if (!currentDepartment) return null;

  return (
    <div
      role="detail-modal"
      className="fixed top-1/2 left-1/2 w-3/4 h-fit bg-white z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl text-black flex flex-col items-center text-center max-w-72 pb-14 "
    >
      <IoMdCloseCircle
        className="absolute z-50 w-10 -left-5 -top-5 cursor-pointer"
        size={50}
        color="black"
        onClick={handleCloseModal}
      />

      <IoIosArrowDropleftCircle
        className="absolute z-50 left-0 top-1/2 -translate-y-1/2 cursor-pointer opacity-50"
        size={50}
        onClick={handleClickLeft}
      />
      <IoIosArrowDroprightCircle
        className="absolute z-50 right-0 top-1/2 -translate-y-1/2 cursor-pointer opacity-50"
        size={50}
        onClick={handleClickRight}
      />

      <div className="overflow-hidden w-full rounded-t-xl">
        <div className="w-full bg-tertiary h-fit py-3 px-3 z-10 relative">
          <h1 className="font-semibold  min-[375px]:text-lg">
            Departemen {modalOpened}
          </h1>
        </div>

        <img
          src={currentDepartment?.urlGambar[modalIndex]}
          alt="foto-anggota"
          className="scale-125 relative -top-5"
        />
      </div>
    </div>
  );
}

export default DepartmentModal;

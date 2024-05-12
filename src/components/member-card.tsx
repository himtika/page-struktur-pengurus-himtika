import { useModalContext } from "../context/modal-context";

function MemberCard({
  jabatan,
  nama,
  urlGambar,
  cardType,
  children,
  className,
}: {
  jabatan: string;
  nama: string;
  urlGambar: string;
  cardType: string;
  className?: string;
  children?: React.ReactNode | null | undefined;
}) {
  const { setModalOpened } = useModalContext();

  if (cardType === "level-1")
    return (
      <div
        className={`w-[65%] lg:min-h-[20rem] lg:w-[20%] bg-primary pt-2 pb-5 px-2 rounded-xl relative ${className} z-10`}
        onClick={setModalOpened.bind(null, "aldo")}
      >
        {children}

        <div
          role="member-image"
          className={`h-fit relative overflow-hidden rounded-t-xl  `}
        >
          <img src={urlGambar} alt="" className="absolute scale-150 " />
          <img src={urlGambar} alt="" className="invisible scale-150 " />
        </div>

        <div role="member-description" className="text-center mt-2">
          <h3 className="text-sm min-[425px]:text-lg md:text-xl">{jabatan}</h3>
          <p className="text-xs min-[425px]:text-sm md:text-base">{nama}</p>
        </div>

        <div className="w-[80%] flex justify-between  mx-auto mt-2">
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
        </div>
      </div>
    );

  if (cardType === "level-2")
    return (
      <li
        className={`w-[50%] ${
          !(className?.includes("lg:w-full") && cardType === "level-2")
            ? "lg:w-[18%]"
            : "lg:w-full"
        } min-h-48 lg:min-h-72 px-1 pt-1 pb-3 lg:pb-5 bg-primary rounded-xl flex flex-col justify-evenly relative z-30 lg:z-10`}
      >
        <div className="w-[6vw] max-w-[1.7rem] h-1 bg-black rounded-full md:rounded-sm absolute right-[100%] bottom-1/2 lg:hidden"></div>

        {jabatan.toLowerCase().includes("divisi") &&
        !jabatan.toLowerCase().includes("rnd") ? (
          <div className="hidden lg:block w-1.5 h-[100%] bg-black rounded-full md:rounded-sm absolute top-full left-1/2" />
        ) : null}

        {/* Top Line */}
        {children}

        <div
          role="member-image"
          className={`h-fit relative overflow-hidden rounded-t-xl `}
        >
          <img
            src={urlGambar}
            alt=""
            className="absolute scale-[2] top-[8px]"
          />
          <img src={urlGambar} alt="" className="invisible scale-[2] " />
        </div>

        <div
          role="member-description"
          className="text-center flex flex-col mt-1 lg:mt-3"
        >
          <h3 className="text-[0.7rem] min-[525px]:text-base lg:text-lg">
            {jabatan}
          </h3>
          <p className="text-[0.6rem] min-[525px]:text-xs lg:text-sm">{nama}</p>
        </div>

        <div className="w-[80%] flex justify-between  mx-auto mt-1 md:mt-3">
          <div className="rounded-full w-[20%] aspect-square  bg-white"></div>
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
        </div>
      </li>
    );

  if (cardType === "level-3")
    return (
      <li
        className={`w-[40%] bg-primary p-2 rounded-xl flex flex-col justify-evenly relative`}
      >
        <div className="w-[3vw] max-w-[2.3rem]  h-1 bg-black rounded-full md:rounded-sm absolute right-[100%]"></div>

        <div
          role="member-image"
          className={`h-fit relative overflow-hidden rounded-t-xl  `}
        >
          <img
            src={urlGambar}
            alt=""
            className="absolute scale-[2] top-[10px]"
          />
          <img src={urlGambar} alt="" className="invisible scale-[2] " />
        </div>

        <div role="member-description" className="text-center">
          <h3 className="text-[0.6rem] mt-1">{jabatan}</h3>
          <p className="text-[0.5rem]">{nama}</p>
        </div>

        <div className="w-[80%] flex justify-between  mx-auto mt-1">
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
          <div className="rounded-full w-[20%] aspect-square bg-white"></div>
        </div>
      </li>
    );
}

export default MemberCard;

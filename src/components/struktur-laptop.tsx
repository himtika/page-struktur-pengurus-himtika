import DepartmentDetailCard from "./department-detail-card";
import MemberCard from "./member-card";
// import DepartmentDetailCard from "./department-detail-card";
// import DepartmentGroup from "./department-group";
// import DivisionGroup from ".//division-group";
import aldo from "/aldo.jpg";
import bunga from "/bunga.jpg";
import empty from "/empty.jpeg";

function StrukturLaptopView() {
  return (
    <ul className="hidden lg:flex bg-white w-[90%] container mx-auto mt-10 rounded-3xl relative py-24 px-3 flex-col items-center gap-16">
      <MemberCard
        nama="M. Reynaldo A. R."
        jabatan="Ketua Umum"
        urlGambar={aldo}
        cardType="level-1"
      >
        <div className="w-1.5 h-16 bg-black absolute top-full left-1/2 "></div>
      </MemberCard>

      <MemberCard
        nama="Bunga K. U."
        jabatan="Wakil Ketua Umum"
        urlGambar={bunga}
        cardType="level-1"
      >
        <div className="w-1.5 h-[40%] bg-black absolute top-[390%] -left-[142%] "></div>
        <div className="w-1.5 h-[40%] bg-black absolute top-[390%] -left-[40%] "></div>

        <div className="w-1.5 h-[315%] bg-black absolute top-full left-1/2 "></div>

        <div className="w-1.5 h-[40%] bg-black absolute top-[390%] -right-[142%] "></div>
        <div className="w-1.5 h-[40%] bg-black absolute top-[390%] -right-[40%] "></div>

        <div className="w-[340%] h-1.5 bg-black absolute top-[120%] -left-[120%] "></div>
        <div className="w-1.5 h-[50vw] max-h-[50rem]  bg-black absolute top-[120%] -left-[120%] "></div>
        <div className="w-1.5 h-[50vw] max-h-[50rem] bg-black absolute top-[120%] -right-[120%] "></div>
        
        <div className="w-[385.5%] h-1.5 bg-black absolute top-[390%] -left-[141.5%] "></div>
      </MemberCard>

      <li className="w-full flex justify-center gap-[50%] mt-24">
        <MemberCard
          urlGambar={aldo}
          jabatan="Sekretaris Umum"
          nama="Ridhaka Gina A."
          cardType="level-2"
        >
          {/* <div className="w-1.5 h-[18%] bg-black rounded-full md:rounded-sm absolute bottom-full left-1/2 "></div> */}
        </MemberCard>

        <MemberCard
          urlGambar={aldo}
          jabatan="Bendahara Umum"
          nama="Fitria Noviyanti Taufik"
          cardType="level-2"
        >
          {/* <div className="w-[0.280rem] h-[18%] bg-black rounded-full md:rounded-sm absolute bottom-full left-[47.5%] "></div> */}
        </MemberCard>
      </li>

      <li className="w-full flex justify-center gap-[50%]">
        <MemberCard
          urlGambar={aldo}
          jabatan="Wakil Sekretaris Umum"
          nama="Erizka N. R."
          cardType="level-2"
        />

        <MemberCard
          urlGambar={aldo}
          jabatan="Wakil Bendahara Umum"
          nama="Rizka Nadilla"
          cardType="level-2"
        />
      </li>

      {/* Divisi */}
      <li className="w-full flex justify-evenly mt-[15%]">
        <div className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard
            urlGambar={aldo}
            jabatan="Ketua Divisi Internal"
            nama="Julianda Zaki P."
            cardType="level-2"
            className="lg:w-full"
          />

          <DepartmentDetailCard imageUrl={empty} departemen="Humadn Resource Development" />
          <DepartmentDetailCard imageUrl={empty} departemen="Himtika Care" />
        </div>

        <div className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard
            urlGambar={aldo}
            jabatan="Ketua Divisi Relasi"
            nama="Magrozan Q. Z."
            cardType="level-2"
            className="lg:w-full"
          />

          <DepartmentDetailCard imageUrl={empty} departemen="Public & Marketing" />
          <DepartmentDetailCard imageUrl={empty} departemen="Public Relation" />
        </div>

        <div className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard
            urlGambar={aldo}
            jabatan="Ketua Divisi RnD"
            nama="Nanindra M. A."
            cardType="level-2"
            className="lg:w-full"
          >
            <div className="w-1.5 h-[20%] bg-black rounded-full md:rounded-sm absolute bottom-full left-1/2 " />
            <div className="hidden lg:block w-1.5 h-[100%] bg-black rounded-full md:rounded-sm absolute top-full left-1/2" />
          </MemberCard>

          <DepartmentDetailCard imageUrl={empty} departemen="Product Development" />
          <DepartmentDetailCard imageUrl={empty} departemen="Research Development" />
        </div>

        <div className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard
            urlGambar={aldo}
            jabatan="Ketua Divisi Edukasi"
            nama="Bintang Danuarta"
            cardType="level-2"
            className="lg:w-full"
          />

          <DepartmentDetailCard imageUrl={empty} departemen="Skill Education" />
          <DepartmentDetailCard imageUrl={empty} departemen="College Education" />
        </div>

        <div className="flex flex-col w-[15%] items-center gap-16">
          <MemberCard
            urlGambar={aldo}
            jabatan="Ketua Divisi Infokom"
            nama="Rafi Catur C. W."
            cardType="level-2"
            className="lg:w-full"
          />

          <DepartmentDetailCard imageUrl={empty} departemen="Media Kreatif" />
          <DepartmentDetailCard imageUrl={empty} departemen="Media Informasi" />
        </div>
      </li>
    </ul>
  );
}

export default StrukturLaptopView;

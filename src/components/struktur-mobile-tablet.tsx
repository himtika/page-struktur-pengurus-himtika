import DepartmentDetailCard from "./department-detail-card";
import DepartmentGroup from "./department-group";
import DivisionGroup from ".//division-group";
import MemberCard from "./member-card";
import aldo from "/aldo.jpg";
import bunga from "/bunga.jpg";
import empty from "/empty.jpeg";

function StrukturForMobileTabletView() {
  return (
    <ul className="w-[90%] max-w-[28rem] m-auto bg-white py-5 px-2  relative mt-5 flex flex-col items-center rounded-xl lg:hidden">
      {/* <div className="w-1 h-[43.5rem] min-[375px]:h-10 z-10 bg-black rounded-full md:rounded-sm absolute left-[4%] top-[16%]"></div> */}
      {/* <div className="w-[20%] right-[75%] top-[15%] h-1 z-10 bg-black rounded-full md:rounded-sm absolute"></div> */}
      <MemberCard
        nama="M. Reynaldo A. R."
        jabatan="Ketua Umum"
        urlGambar={aldo}
        cardType="level-1"
        className="after:w-1 after:h-10 after:bg-black after:rounded-full md:after:rounded-sm after:content-[''] after:absolute after:-bottom-[2.45rem] after:left-1/2 transition-all active:-translate-y-3"
      />
      {/* <div className="w-1 md:w-2 h-10 bg-black rounded-full md:rounded-sm"></div> */}
      <MemberCard
        nama="Bunga K. U."
        jabatan="Wakil Ketua Umum"
        urlGambar={bunga}
        cardType="level-1"
        className="mt-5 after:w-[12vw] after:max-w-[4.2rem] after:h-1 after:bg-black after:rounded-full md:after:rounded-sm after:content-[''] after:absolute after:top-1/2 after:right-[100%]"
      >
        <div
          className={`w-1 h-[218vw] max-[425px]:min-h-[280%] max-h-[246%] z-10 bg-black rounded-full md:rounded-sm absolute right-[123%] top-1/2 `}
        ></div>
      </MemberCard>

      <li className="w-full flex flex-col items-end gap-3  mt-5 md:mt-7">
        <ul className="  w-[90%] flex flex-col items-start gap-5 ">
          <li className="w-full container mx-auto  h-20  bg-primary rounded-xl flex items-center justify-center text-2xl relative">
            <div className="w-[6vw] max-w-[2.1rem] h-1 bg-black rounded-full md:rounded-sm absolute right-[100%]"></div>
            <div className="w-1 max-[370px]:max-h-[23rem] h-[628%] min-[370px]:h-[98vw] min-[370px]:max-h-[31.5rem] bg-black rounded-full md:rounded-sm absolute right-[103%] top-1/2"></div>
            BPH
          </li>

          {/* Sekum */}
          <DivisionGroup divisi="sekretaris">
            <MemberCard
              urlGambar={aldo}
              jabatan="Sekretaris Umum"
              nama="R. Gina A."
              cardType="level-2"
            />
            <MemberCard
              urlGambar={aldo}
              jabatan="Wakil Sekretaris Umum"
              nama="Erizka N. R."
              cardType="level-3"
            />
          </DivisionGroup>

          {/* Bendum */}
          <DivisionGroup divisi="bendahara">
            <MemberCard
              urlGambar={aldo}
              jabatan="Bendahara Umum"
              nama="Fitria Noviyanti Taufik"
              cardType="level-2"
            >
              {/* <div className="w-1 h-10 bg-black bottom-1/2 absolute z-10 -left-[18%]" /> */}
            </MemberCard>
            <MemberCard
              urlGambar={aldo}
              nama="Rizka Nadila"
              jabatan="Wakil Bendahara Umum"
              cardType="level-3"
            />
          </DivisionGroup>
        </ul>

        <ul className=" w-[90%] flex flex-col items-start gap-5 ">
          <li className="w-full container mx-auto h-20  bg-primary rounded-xl flex items-center justify-center text-2xl relative">
            <div className="w-[6vw] max-w-[2.1rem] h-1 bg-black rounded-full md:rounded-sm absolute right-[100%]"></div>
            <div className="w-1 h-[1465%] min-[425px]:h-[275vw] min-[530px]:max-h-[87.8rem] bg-black rounded-full md:rounded-sm absolute right-[103%] top-1/2"></div>
            Divisi
          </li>

          {/* Divisi Internal */}
          <DivisionGroup divisi="internal">
            <MemberCard
              urlGambar={aldo}
              jabatan="Ketua Divisi Internal"
              nama="J. Zaki P."
              cardType="level-2"
            />
            <DepartmentGroup>
              <DepartmentDetailCard imageUrl={empty} departemen="Human Resource Development" />
              <DepartmentDetailCard imageUrl={empty} departemen="Himtika Care" />
            </DepartmentGroup>
          </DivisionGroup>
          {/* Divisi Relasi */}
          <DivisionGroup divisi="relasi">
            <MemberCard
              urlGambar={aldo}
              jabatan="Ketua Divisi Relasi"
              nama="Magrozan Q. Z."
              cardType="level-2"
            />
            <DepartmentGroup>
              <DepartmentDetailCard imageUrl={empty} departemen="Public & Marketing" />
              <DepartmentDetailCard imageUrl={empty} departemen="Public Relation"/>
            </DepartmentGroup>
          </DivisionGroup>
          {/* Divisi RnD */}
          <DivisionGroup divisi="Research and Development">
            <MemberCard
              urlGambar={aldo}
              jabatan="Ketua RnD"
              nama="Nanindra M. A."
              cardType="level-2"
            />
            <DepartmentGroup>
              <DepartmentDetailCard imageUrl={empty} departemen="Product Development" />
              <DepartmentDetailCard imageUrl={empty} departemen="Research Development" />
            </DepartmentGroup>
          </DivisionGroup>
          {/* Divisi Edukasi */}
          <DivisionGroup divisi="edukasi">
            <MemberCard
              urlGambar={aldo}
              jabatan="Ketua Divisi Edukasi"
              nama="Bintang Danuarta"
              cardType="level-2"
            />
            <DepartmentGroup>
              <DepartmentDetailCard imageUrl={empty} departemen="Skill Education" />
              <DepartmentDetailCard imageUrl={empty} departemen="College Education" />
            </DepartmentGroup>
          </DivisionGroup>
          {/* Divisi Infokom */}
          <DivisionGroup divisi="Informasi & Komunikasi">
            <MemberCard
              urlGambar={aldo}
              jabatan="Ketua Divisi Infokom"
              nama="Rafi Catur C. W."
              cardType="level-2"
            />
            <DepartmentGroup>
              <DepartmentDetailCard imageUrl={empty} departemen="Media Kreatif" />
              <DepartmentDetailCard imageUrl={empty} departemen="Media Informasi" />
            </DepartmentGroup>
          </DivisionGroup>
        </ul>
      </li>
    </ul>
  );
}

export default StrukturForMobileTabletView;

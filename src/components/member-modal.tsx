import MemberCard from "./member-card";
import aldo from "/aldo.jpg";

function MemberModal() {
  return (
    <MemberCard
      nama="M. Reynaldo A. R."
      jabatan="Ketua Umum"
      urlGambar={aldo}
      cardType="level-1"
    />
  );
}

export default MemberModal;

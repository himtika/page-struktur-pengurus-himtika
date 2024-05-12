function DivisionGroup({
  children,
  divisi,
  gap = 3,
}: {
  children: React.ReactNode;
  divisi: string;
  gap?: number;
}) {
  return (
    <ul
      role={divisi}
      className={`pl-3  w-full flex gap-${gap}  items-center`}
    >
      {children}
    </ul>
  );
}

export default DivisionGroup;

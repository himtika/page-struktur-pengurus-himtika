function DepartmentGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex flex-col gap-2  h-full items-center `}>
      {children}
    </div>
  );
}

export default DepartmentGroup;

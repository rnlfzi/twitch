interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <aside className="fixed flex flex-col w-60 h-full bg-background border-r border-[#2d2e35] z-50">
      {children}
    </aside>
  );
};

export default Wrapper;

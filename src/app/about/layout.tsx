import "../about.css";
const Aboutlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>This is about header</header>
      {children}
    </div>
  );
};

export default Aboutlayout;

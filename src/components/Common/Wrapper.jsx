function Wrapper({ children, className = "" }) {
  return (
    <div
      className={` mx-auto px-3 py-5 sm:px-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;

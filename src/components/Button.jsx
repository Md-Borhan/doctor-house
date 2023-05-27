const Button = ({ children }) => {
  return (
    <div>
      <button className="btn btn-lg mt-5 btn-outline border-[#F7A582] text-[#F7A582] hover:bg-[#F7A582] hover:text-white hover:border-white text-xl">
        {children}
      </button>
    </div>
  );
};

export default Button;

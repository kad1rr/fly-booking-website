// eslint-disable-next-line react/prop-types
const Button = ({ active, onClick, text }) => {
  return (
    <button
      className="hover:bg-primary hover:text-white transition-all px-4 py-1 border border-primary text-primary rounded-3xl"
      onClick={(e) => onClick(e, active)}
      style={active ? {
        backgroundColor: 'rgb(239 46 31)',
        color: 'white'
      } : {}}
    >
      {text}
    </button>
  );
};

export default Button;

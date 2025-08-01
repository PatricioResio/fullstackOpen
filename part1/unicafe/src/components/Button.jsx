const Button = ({ add, name, addTotal }) => {
  return (
    <button
      onClick={() => {
        add();
        addTotal();
      }}
    >
      {name}
    </button>
  );
};

export default Button;

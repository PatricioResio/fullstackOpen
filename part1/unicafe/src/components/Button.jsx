const Button = ({ add, name }) => {
  return (
    <button
      onClick={() => {
        add();
      }}
    >
      {name}
    </button>
  );
};

export default Button;

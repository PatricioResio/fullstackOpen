const Button = ({ add, name, addAll }) => {
  return (
    <button
      onClick={() => {
        add();
        addAll();
      }}
    >
      {name}
    </button>
  );
};

export default Button;

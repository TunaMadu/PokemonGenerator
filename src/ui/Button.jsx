// simple enough we're returning a simple button

function Button({ children, handleOnClick }) {
  return (
    <button onClick={() => (handleOnClick ? handleOnClick() : "")}>
      {children}
    </button>
  );
}

export default Button;

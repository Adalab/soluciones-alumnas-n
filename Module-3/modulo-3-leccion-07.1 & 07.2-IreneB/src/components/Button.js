const Button = (props) => {
 
  return (
    <>
      <button className={props.ButtonClass} onClick={props.handleChange}>
        {props.title}
      </button>
    </>
  );
};

export default Button;

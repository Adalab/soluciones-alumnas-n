const InputGroupRadio = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <>
      <div className="input-group-radio">
        <label className="label-radio" htmlFor={props.RadioId}>
          {props.labelText}
        </label>
        {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
        <input
          type="radio"
          name={props.RadioName}
          id={props.RadioId}
          value={props.RadioValue}
          checked={props.RadioChecked}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default InputGroupRadio;

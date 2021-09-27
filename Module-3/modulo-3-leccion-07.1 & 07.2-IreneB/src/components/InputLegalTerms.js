const InputLegalTerms = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.checked);
  };
  return (
    <>
      <div className="input-group-checkbox">
        <label className="label-check" htmlFor="legalTerms">
          {props.labelText}
        </label>
        {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
        <input
          type="checkbox"
          name={props.Checkname}
          id={props.Checkname}
          checked={props.CheckChecked}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default InputLegalTerms;

const InputGroupSelect = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <>
      <div className="input-group-select">
        <label className="label-text" htmlFor="region">
          {props.labelText}
        </label>
        <select
          className="input-select"
          name={props.SelectName}
          id={props.SelectId}
          value={props.Selectvalue}
          onChange={handleInputChange}
        >
          <option>{props.SelectOption1}</option>
          <option>{props.SelectOption2}</option>
          <option>{props.SelectOption3}</option>
          <option>{props.SelectOption4}</option>
          <option>{props.SelectOption5}</option>
        </select>
      </div>
    </>
  );
};

export default InputGroupSelect;

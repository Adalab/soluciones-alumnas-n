const InputGroupText = (props) => {
    const handleInputChange = (ev) => {
     props.handleChange(ev.target.value);
 };
    return (
      <>
        <div className="input-group-text">
          <label className="label-text" htmlFor="name">
            {props.labelText}
          </label>
          <input
            className="input-text"
            type="text"
            name={props.inputName}
            id={props.inputId}
            placeholder={props.inputPlaceHolder}
            value={props.inputValue}
            onChange={handleInputChange}
          />
        </div>
      </>
    );
};

export default InputGroupText;

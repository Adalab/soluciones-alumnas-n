import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupRadio from "./InputGroupRadio";
import InputLegalTerms from "./InputLegalTerms";
import Button from "./Button";
const Form = (props) => {
  return (
    <>
      <form className="form" onSubmit={props.HandleFormSubmit}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <InputGroupText
            labelText=" Escribe un nombre:"
            inputName={props.InputName}
            inputId="name"
            inputPlaceHolder="María García"
            inputValue={props.InputName}
            handleChange={props.handleChangeName}
          />

          {/* email */}
          <InputGroupText
            labelText=" Escribe un email:"
            inputName={props.inputEmail}
            inputId="email"
            inputPlaceHolder="mariagarcia@gmail.com"
            inputValue={props.inputEmail}
            handleChange={props.handleChangeEmail}
          />

          {/* region */}
          <InputGroupSelect
            labelText="Indica tu región:"
            SelectName="region"
            SelectId="region"
            Selectvalue={props.inputRegion}
            SelectOption1="España peninsular"
            SelectOption2="Islas Canarias"
            SelectOption3="Islas Baleares"
            SelectOption4="Ceuta"
            SelectOption5="Melilla"
            handleChange={props.handleChangeRegion}
          />

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>

          <InputGroupRadio
            labelText="Tarjeta de crédito"
            RadioName="paymentType"
            RadioId="creditCard"
            RadioValue="creditCard"
            RadioCheked={props.radioChecked === "creditCard"}
            handleChange={props.handleRadio}
          />

          <InputGroupRadio
            labelText="Efectivo"
            RadioName="paymentType"
            RadioId="cash"
            RadioValue="cash"
            RadioCheked={props.radioChecked === "cash"}
            handleChange={props.handleRadio}
          />
          <InputGroupRadio
            labelText=" Contra reembolso"
            RadioName="paymentType"
            RadioId="cashOnDelivery"
            RadioValue="cashOnDelivery"
            RadioCheked={props.radioChecked === "cashOnDelivery"}
            handleChange={props.handleRadio}
          />
          {/* legal terms */}
          <InputLegalTerms
            labelText=" Debes aceptar nuestros términos legales para completar la compra:"
            Checkname="legalTerms"
            CheckChecked={props.checkedRadio}
            handleChange={props.handleLegal}
          />
        </div>
        <Preview
          paymentType={props.payment}
          name={props.InputName}
          email={props.inputEmail}
          region={props.inputRegion}
          legal={props.checkedRadio}
        />
        {/* send */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <Button
          ButtonClass="button"
          handleChange={props.handleValid}
          title="Enviar"
        />

        {/* reset */}
        <Button
          ButtonClass="button reset"
          handleChange={props.handleButton}
          title="Limpiar el formulario"
        />
      </form>
    </>
  );
};

export default Form;

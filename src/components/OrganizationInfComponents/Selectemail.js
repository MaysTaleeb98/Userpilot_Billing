import React from "react";
import Select from "react-select";

const Selectemail = ({ optionsOfEmail, ...rest }) => {
  return (
    <Select
      className="Sel" //Adds a className on the outer component.
      isMulti //Allows multiple value selection.
      options={optionsOfEmail} //Allows to include options in the select dropdown
      {...rest}
    />
  );
};

export default Selectemail;

import React from "react";

const Label = ({ text }) => {
  return (
    <div>
      <label className="label">{text}</label>
    </div>
  );
};

Label.propTypes = {};

export default Label;

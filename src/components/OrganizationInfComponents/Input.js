import "./OrganizationInfo.css";

const Input = ({ data, ...rest }) => {
  return (
    <input type="text" name="name" className="Input" value={data} {...rest} />
  );
};
export default Input;

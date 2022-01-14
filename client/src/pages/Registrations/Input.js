import PropTypes from "prop-types";
function Input({ label }) {
  return (
    <>
      <div className="flex justify-center">
        <input
          className="px-2 py-2 drop-shadow-lg bg-white outline-none text-xl"
          type="text"
          placeholder={label}
        />
      </div>
    </>
  );
}
Input.prototype = {
  label: PropTypes.string,
};
Input.defaultProps = {
  label: "Name",
};
export default Input;

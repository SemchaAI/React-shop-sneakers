import PropTypes from "prop-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

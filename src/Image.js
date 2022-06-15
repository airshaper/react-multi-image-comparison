import PropTypes from "prop-types";

export function Image({ ...props }) {
  return <img {...props} />;
}

Image.propTypes = {
  src: PropTypes.object.isRequired,
};

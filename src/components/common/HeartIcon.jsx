import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import PropTypes from "prop-types";

const HeartIcon = ({ onLikeChange, liked }) => {
  const iconStyle = liked ? solid("heart") : regular("heart");

  return (
    <FontAwesomeIcon
      size="2x"
      color="red"
      icon={iconStyle}
      onClick={Change}
      cursor="pointer"
    />
  );
};

HeartIcon.propType = {
  onLikeChange: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default HeartIcon;

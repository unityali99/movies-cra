import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

const HeartComponent = ({ onLikeChange, liked }) => {
  const iconStyle = liked ? solid("heart") : regular("heart");

  return (
    <FontAwesomeIcon
      size="2x"
      color="red"
      icon={iconStyle}
      onClick={onLikeChange}
      cursor="pointer"
    />
  );
};

export default HeartComponent;

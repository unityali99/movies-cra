import { toast } from "react-toastify";
import { ERROR, SUCCESS, WARNING } from "./toastColors";

export const toastify = (msg, color) => {
  const params = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  switch (color) {
    case SUCCESS:
      toast.success(msg, params);
      break;
    case WARNING:
      toast.warning(msg, params);
      break;
    case ERROR:
      toast.error(msg, params);
      break;
    default:
      toast.warning(msg, params);
  }
};

/** @format */

import React, {FC} from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

/** Alerts for our error messages etc...*/
const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div>
    </div>
  );
};
export default Alert;



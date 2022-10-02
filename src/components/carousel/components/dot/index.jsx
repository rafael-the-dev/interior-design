import IconButton from "@mui/material/IconButton";
import classNames from "classnames";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Dot = ({ onClick, selected }) => (
    <IconButton
        className={classNames( `mr-2 p-0  last:mr-0`, selected ? "text-red-500" : "text-gray-400")}
        onClick={onClick}>
        <FiberManualRecordIcon className="text-sm" />
    </IconButton>
);

export default Dot;
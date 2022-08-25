import { useCallback, useMemo, useState } from "react"
import { Button, Collapse, Typography } from "@mui/material";
import classNames from "classnames";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Link from "src/components/link";

const ListItem = ({ list, label }) => {
    const [ open, setOpen ] = useState(false);

    const toggleState = useCallback(() => setOpen(b => !b), [])

    return (
        <li className="mb-4">
                <Button 
                    className={classNames("w-full")}
                    endIcon={ open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    onClick={toggleState}>
                    { label }
                </Button>
                <Collapse in={open} unmountOnExit>
                    <ul>
                        {
                            list.map((item, index) => (
                                <li  
                                    className="mb-4"
                                    key={index}>
                                    <Link className="block" href={item.href}>{ item.label }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </Collapse>
        </li>
    );
};

export default ListItem;
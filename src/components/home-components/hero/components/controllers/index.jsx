import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ControlersContainer = ({ setChildrenRef }) => {
    const [ children, setChildren ] = useState([]);

    useEffect(() => {
        setChildrenRef.current = list => setChildren(list);
    }, [ setChildrenRef ]);

    return (
        <div className=" absolute buttons-container flex justify-between px-5 w-full">
            <button className="border-0 hero__button outline-none px-2 py-6 rounded-none">
                <ArrowBackIosIcon className="text-white" />
            </button>
            <button className="border-0 hero__button outline-none px-2 py-6 rounded-none">
                <ArrowForwardIosIcon className="text-white" />
            </button>
            <style jsx>
                {
                    `
                        .buttons-container {
                            left: 0;
                            top: 50%;
                            transform: translate(0, -50%);
                        }
                        
                        .hero__button {
                            background-color: rgba(0, 0, 0, .4) !important;
                        }
                    `
                }
            </style>
        </div>
    );
};

export default ControlersContainer;
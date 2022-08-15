import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import classNames from "classnames";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ControlersContainer = ({ currentIndex, previousIndex, slide, setChildrenRef }) => {
    const [ children, setChildren ] = useState([]);
    const childrenRef = useRef([]);
    const [ index, setIndex ] = useState(0);
    const hasUserChanged = useRef(null);
    
    const nextHandler = useCallback((event) => {
        if(event) hasUserChanged.current = true;

        setIndex(currentValue => {
            previousIndex.current = currentValue;
            
            if(currentValue + 1 >= childrenRef.current.length) {
                return 0;
            }

            return currentValue + 1;
        })
    }, [ previousIndex ]);

    const previousHandler = useCallback((event) => {
        if(event) hasUserChanged.current = true;

        setIndex(currentValue => {
            previousIndex.current = currentValue;
            
            if(currentValue - 1 < 0) {
                return childrenRef.current.length - 1;
            }

            return currentValue - 1;
        })
    }, [ previousIndex ]);

    useEffect(() => {
        childrenRef.current = children;
    }, [ children ]);

    useEffect(() => {
        setChildrenRef.current = list => setChildren(list);
    }, [ setChildrenRef ]);

    useEffect(() => {
        currentIndex.current = index;
        slide();
    }, [ currentIndex, index, slide ]);

    useEffect(() => {
        const timer = setInterval(() => {
            if(hasUserChanged.current) {
                hasUserChanged.current = false;
                return;
            }

            nextHandler();
        }, 4000);

        return () => clearInterval(timer);
    }, [ nextHandler ])

    return (
        <div className=" absolute buttons-container flex justify-between px-2 w-full">
            <button 
                className={classNames("border-0 hero__button outline-none px-2 py-6 rounded-none",
                { "opacity-0": index - 1 < 0})}
                disabled={index - 1 < 0}
                onClick={previousHandler}>
                <ArrowBackIosIcon className="text-white" />
            </button>
            <button 
                className={classNames("border-0 hero__button outline-none px-2 py-6 rounded-none", 
                { "opacity-0": index + 1 >= children.length})}
                disabled={index + 1 >= children.length}
                onClick={nextHandler}>
                <ArrowForwardIosIcon className="text-white" />
            </button>
            <style jsx>
                {
                    `
                        .buttons-container {
                            left: 0;
                            top: 50%;
                            transform: translate(0, -50%);
                            z-index: 6;
                        }
                        
                        .hero__button {
                            background-color: rgba(0, 0, 0, .1) !important;
                        }
                    `
                }
            </style>
        </div>
    );
};

export default ControlersContainer;
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import IconButton from "@mui/material/IconButton";
import classNames from "classnames";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ControllersContainer = ({ currentIndexRef, slideHandler, setChildrenListRef }) => {
    const [ childrenList, setChildrenList ] = useState([]);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const childrenListRef = useRef([]);
    const isReverse = useRef(false);

    const clickHandler = useCallback(prop => () => setCurrentIndex(prop), []);

    const hasNextItem = useMemo(() => {
        const width = window.innerWidth;

        if(width >= 1150) {
            if(currentIndex + 6 >= childrenListRef.current.length) {
                return true
            }
        } 
        else if(width >= 990) {
            if(currentIndex + 5 >= childrenListRef.current.length) {
                return true
            };
        } 
        else if (width >= 600) {
            if(currentIndex + 3 >= childrenListRef.current.length) {
                return true
            }
        }
        else {
            if(currentIndex + 1 >= childrenListRef.current.length) {
                return true
            }
        }

        return false;
    }, [ currentIndex ])

    const nextSlide = useCallback(() => {
        setCurrentIndex(index => {
            const width = window.innerWidth;

            if(width >= 1150) {
                if(index + 6 >= childrenListRef.current.length) {
                    isReverse.current = true;
                }
            } 
            else if(width >= 990) {
                if(index + 5 >= childrenListRef.current.length) {
                    isReverse.current = true;
                };
            } 
            else if (width >= 600) {
                if(index + 3 >= childrenListRef.current.length) {
                    isReverse.current = true;
                }
            }
            else {
                if(index + 1 >= childrenListRef.current.length) {
                    isReverse.current = true;
                }
            }

            if(index - 1 >= 0 && isReverse.current) {
                return index - 1;
            } 

            isReverse.current = false;
            return index + 1;
        })
    }, [])

    useEffect(() => {
        setChildrenListRef.current = list => setChildrenList(list);
    }, [ setChildrenListRef ]);

    useEffect(() => {
        currentIndexRef.current = currentIndex;
        slideHandler({ index: currentIndex })
    }, [ currentIndexRef, currentIndex, slideHandler ]);

    useEffect(() => {
        const timer = setInterval(() => nextSlide(), 4000);

        return () => clearInterval(timer);
    }, [ nextSlide ]);

    useEffect(() => {
        childrenListRef.current = childrenList;
    }, [ childrenList ])

    return (
        <div className="controllers-container flex mt-10">
            <IconButton
                className={classNames(`border border-solid border-slate-200 h-[50px] mr-3 w-[48px]`)}
                disabled={currentIndex - 1 < 0 }>
                <ArrowBackIcon />
            </IconButton>
            <IconButton
                className={classNames(`border border-solid border-slate-200 h-[50px] w-[48px]`)}
                disabled={hasNextItem}>
                <ArrowForwardIcon />
            </IconButton>
            <style jsx>
                {
                    `
                        @media screen and (min-width: 780px) {
                            .controllers-container {
                                margin-top: 0;
                            }
                        }
                    `
                }
            </style>
        </div>
    );
};

export default ControllersContainer;
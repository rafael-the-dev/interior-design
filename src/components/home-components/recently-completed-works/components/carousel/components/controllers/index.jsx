import { useCallback, useEffect, useRef, useState } from "react"
import { Hidden } from "@mui/material";
import classNames from "classnames";

import Button from "../button"

const ControllersContainer = ({ currentIndexRef, slideHandler, setChildrenListRef }) => {
    const [ childrenList, setChildrenList ] = useState([]);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const childrenListRef = useRef([]);
    const isReverse = useRef(false);

    const clickHandler = useCallback(prop => () => setCurrentIndex(prop), []);

    const nextSlide = useCallback(() => {
        setCurrentIndex(index => {
            const width = window.innerWidth;

            if(width >= 1024) {
                if(index + 1 >= 3) {
                    isReverse.current = true;
                }
            } else if(width >= 768) {
                if(index + 1 >= 8) {
                    isReverse.current = true;
                };
            } else {
                if(index + 1 >= 15) {
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
    }, []);

    useEffect(() => {
        currentIndexRef.current = currentIndex;
        slideHandler({ index: currentIndex })
    }, [ currentIndexRef, currentIndex, slideHandler ]);

    useEffect(() => {
        const timer = setInterval(() => nextSlide(), 5000);

        return () => clearInterval(timer);
    }, [])

    return (
        <div className="flex flex-wrap justify-center mt-10">
            <Hidden mdUp>
                {
                    childrenList.map((_, index) => (
                        <Button 
                            clickHandler={clickHandler} 
                            currentIndex={currentIndex}
                            key={index}
                        />
                    ))
                }
            </Hidden>
            <Hidden mdDown lgUp>
                {
                    childrenList.slice(0, Math.round(childrenList.length / 2)).map((_, index) => (
                        <Button 
                            clickHandler={clickHandler} 
                            currentIndex={currentIndex}
                            key={index}
                        />
                    ))
                }
            </Hidden>
            <Hidden lgDown>
                {
                    childrenList.slice(0, Math.round(childrenList.length / 5)).map((_, index) => (
                        <Button 
                            clickHandler={clickHandler} 
                            currentIndex={currentIndex}
                            key={index}
                        />
                    ))
                }
            </Hidden>
            <style jsx>
                {
                    `
                        .carousel__button {
                            padding-bottom: 3px;
                            padding-top: 3px;
                        }
                    `
                }
            </style>
        </div>
    );
};

export default ControllersContainer;
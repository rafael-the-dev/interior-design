import { useCallback, useEffect, useRef, useState } from "react"
import { Hidden } from "@mui/material";
import classNames from "classnames";

import Button from "../button"

const ControllersContainer = ({ currentIndexRef, slideHandler, setChildrenListRef }) => {
    const [ childrenList, setChildrenList ] = useState([]);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const clickHandler = useCallback(prop => () => setCurrentIndex(prop), []);

    useEffect(() => {
        setChildrenListRef.current = list => setChildrenList(list);
    }, []);

    useEffect(() => {
        currentIndexRef.current = currentIndex;
        slideHandler({ index: currentIndex })
    }, [ currentIndexRef, currentIndex, slideHandler ])

    return (
        <div className="flex flex-wrap justify-center mt-10">
            <Hidden mdUp>
                {
                    childrenList.map((_, index) => (
                        <Button 
                            clickHandler={clickHandler} 
                            currentIndex={currentIndex}
                            index={index}
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
                            index={index}
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
                            index={index}
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
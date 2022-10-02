import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import classNames from "classnames";

import classes from "./styles.module.css"

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Dot from "../dot";

const CarouselControllers = ({ dots, indexRef, slide, setChildrenListRef }) => {
    const [ index, setIndex ] = useState(0);
    const [ childrenList, setChildrenList ] = useState([]); 
    const isFirstRender = useRef(true);

    const hasPreviousItem = useMemo(() => index - 1 < 0, [ index ]);

    const clickHandler = useCallback(prop => () => setIndex(prop), []);

    const hasNextItem = useMemo(() => {
        if(isFirstRender.current) return;

        const { innerWidth } = window;
        if(innerWidth > 1240) {
            return index + 4 >= childrenList.length;
        }
        else if(innerWidth > 930) {
            return index + 3 >= childrenList.length;
        }
        else if(innerWidth > 768) {
            return index + 2 >= childrenList.length;
        }

        return index + 1 >= childrenList.length;
    }, [ childrenList, index ]);

    const nextItemClickHandler = useCallback(() => {
        setIndex(currentIndex => {
            return currentIndex + 1;
        })
    }, []);

    const previousItemClickHandler = useCallback(() => {
        setIndex(currentIndex => {
            return currentIndex - 1;
        })
    }, []);

    useEffect(() => {
        if(isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, [])

    useEffect(() => {
        setChildrenListRef.current = list => setChildrenList(list);
    }, [ setChildrenListRef ]);

    useEffect(() => {
        indexRef.current = index;
        slide({ index });
    }, [ index, indexRef, slide ]);

    return (
        <>
            {
                !dots && (
                    <>
                        <IconButton 
                            className={classNames(`absolute bg-white left-0 hover:bg-zinc-50`, classes.button, classes.previousItem, { "opacity-0": hasPreviousItem})}
                            disabled={hasPreviousItem}
                            onClick={previousItemClickHandler}>
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <IconButton 
                            className={classNames(`absolute right-0 bg-white hover:bg-zinc-50`, classes.button, classes.nextItem,
                            { "opacity-0": hasNextItem})}
                            disabled={hasNextItem}
                            onClick={nextItemClickHandler}>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </>
                )
            }
            {
                dots && (
                        <div className="flex flex-wrap justify-center py-4">
                            {
                                childrenList.map((_, currentIndex) => (
                                    <Dot 
                                        key={uuidv4()}
                                        onClick={clickHandler(currentIndex)}
                                        selected={index === currentIndex}
                                    />
                                ))
                            }
                        </div>
                    )
            }
        </>
    );
};

export default CarouselControllers;
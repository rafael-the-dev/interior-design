import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import IconButton from "@mui/material/IconButton";
import classNames from "classnames";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ControllersContainer = ({ hasNextItem, hasPreviousItem, nextOnClick, previousOnClick, setIndex }) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const nextClickHandler = useCallback(() => nextOnClick.current?.(), [ nextOnClick ]);
    const previousClickHandler = useCallback(() => previousOnClick.current?.(), [ previousOnClick ]);

    useEffect(() => {
        setIndex.current = index => setCurrentIndex(index);
    }, [ setIndex ])


    return (
        <div className="controllers-container flex mt-10 md:mt-0">
            <IconButton
                className={classNames(`border border-solid border-slate-200 h-[50px] mr-3 w-[48px]`)}
                disabled={!hasPreviousItem.current}
                onClick={previousClickHandler}>
                <ArrowBackIcon />
            </IconButton>
            <IconButton
                className={classNames(`border border-solid border-slate-200 h-[50px] w-[48px]`)}
                disabled={!hasNextItem.current}
                onClick={nextClickHandler}>
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
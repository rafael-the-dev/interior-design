import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import IconButton from "@mui/material/IconButton";
import classNames from "classnames";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ControllersContainer = ({ hasPrevious, hasNext, nextOnClick, previousOnClick }) => {
    const [ childrenList, setChildrenList ] = useState([]);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const childrenListRef = useRef([]);

    const nextClickHandler = useCallback(() => nextOnClick.current?.(), [ nextOnClick ]);
    const previousClickHandler = useCallback(() => previousOnClick.current?.(), [ previousOnClick ]);


    return (
        <div className="controllers-container flex mt-10">
            <IconButton
                className={classNames(`border border-solid border-slate-200 h-[50px] mr-3 w-[48px]`)}
                disabled={hasPrevious}
                onClick={previousClickHandler}>
                <ArrowBackIcon />
            </IconButton>
            <IconButton
                className={classNames(`border border-solid border-slate-200 h-[50px] w-[48px]`)}
                disabled={hasNext}
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
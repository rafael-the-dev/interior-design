import { useCallback, useEffect, useRef, useState } from "react"
import { Hidden } from "@mui/material";
import classNames from "classnames"

const ControllersContainer = ({ setChildrenListRef }) => {
    const [ childrenList, setChildrenList ] = useState([]);
    const [ currentIndex, setCurrentIndex ] = useState(0);


    useEffect(() => {
        setChildrenListRef.current = list => setChildrenList(list);
    }, []);

    return (
        <div className="flex flex-wrap justify-center mt-10">
            <Hidden smUp>
                {
                    childrenList.map((_, index) => (
                        <button 
                            className={classNames("border-0 carousel__button mr-2 mb-3 px-3",
                            currentIndex === index ? "bg-red-600" : "bg-slate-200")}
                            aria-label="carousel indicator">
                        </button>
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
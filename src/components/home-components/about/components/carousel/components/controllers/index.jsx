import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames"

const ControllersContainer = ({ slide, setChildrenListRef }) => {
    const [ childrenList, setChildrenList ] = useState([]);
    const [ index, setIndex ] = useState(0);


    const clickHandler = useCallback(prop => () => {
        slide({ index: prop });
        setIndex(prop);
    }, [ slide ])

    useEffect(() => {
        setChildrenListRef.current = list => setChildrenList(list);
    }, [ setChildrenListRef ])
    
    return (
        <div className='mt-6'>
            {
                childrenList.map((item, currentIndex) => (
                    <button 
                        className={classNames(`border-0 mr-3 px-4 py-1 outline-none`, 
                        index === currentIndex ? "bg-red-600" : "bg-slate-200")}
                        key={currentIndex}
                        onClick={clickHandler(currentIndex)}>
                    </button>
                ))
            }
        </div>
    );
};

export default ControllersContainer;
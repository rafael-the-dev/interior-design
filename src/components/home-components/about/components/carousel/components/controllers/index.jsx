import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames"

const ControllersContainer = ({ setChildrenListRef }) => {
    const [ childrenList, setChildrenList ] = useState([]);
    const [ index, setIndex ] = useState(0);


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
                        key={index}>
                    </button>
                ))
            }
        </div>
    );
};

export default ControllersContainer;
import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames"

const ControllersContainer = ({ nextIndex, slide, setChildrenListRef }) => {
    const [ childrenList, setChildrenList ] = useState([]);
    const [ index, setIndex ] = useState(0);

    const childrenListRef = useRef([]);
    const wasChangeByUser = useRef(false);

    const clickHandler = useCallback(prop => () => {
        wasChangeByUser.current = true;
        setIndex(prop);
    }, [ slide ])

    useEffect(() => {
        setChildrenListRef.current = list => setChildrenList(list);
    }, [ setChildrenListRef ]);

    const nextSlide = useCallback(() => {
        setIndex(currentIndex => {
            if(currentIndex + 1 >= childrenListRef.current.length) {
                return 0;
            }

            return currentIndex + 1;
        })
    }, [ nextIndex ])

    useEffect(() => {
        const timer = setInterval(() => {
            if(wasChangeByUser.current) {
                wasChangeByUser.current = false;
                return;
            }

            nextSlide();
        }, 3000);

        return () => { clearInterval(timer); };
    }, [ nextSlide ]);

    useEffect(() => {
        childrenListRef.current = childrenList;
    }, [ childrenList ]);

    useEffect(() => {
        slide({ index });
    }, [ index, slide ])
    
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
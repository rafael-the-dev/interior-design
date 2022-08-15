import { useCallback, useEffect, useRef, useState } from "react"

import Content from "./components/mission-statement";
import Controllers from "./components/controllers";

const Carousel = () => {
    const childrenList = useRef([]);
    const sliderRef = useRef(null);
    const setChildrenListRef = useRef(null);

    const layout = useCallback(() => {
        const { width } = sliderRef.current.getBoundingClientRect();

        childrenList.current.forEach((child, index) => {
            child.style.left = `${width * index }px`;
        });
    }, [])

    useEffect(() => {
        childrenList.current = [ ...sliderRef.current.children ];
        layout();
        setChildrenListRef.current?.(childrenList.current);
    }, []);

    return (
        <div>
            <div className="bg-red-600 mt-8 mission-carousel px-5 py-8 relative after:absolute after:text-white">
                <ul 
                    className="h-full overflow-hidden relative w-full"
                    ref={sliderRef}>
                    <Content />
                    <Content />
                    <Content />
                </ul>
            </div>
            <Controllers 
                setChildrenListRef={setChildrenListRef} 
            />
            <style jsx>
                {
                    `
                        .mission-carousel {
                            height: 180px;
                        }

                        .mission-carousel:after {
                            bottom: 0;
                            height: 20px;
                            left: 40px;
                            width: 20px;
                            z-index: 5;
                        }
                    `
                }
            </style>
        </div>
    );
};

export default Carousel;
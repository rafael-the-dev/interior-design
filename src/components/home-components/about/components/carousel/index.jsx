import { useCallback, useEffect, useRef, useState } from "react"

import Content from "./components/mission-statement";
import Controllers from "./components/controllers";

const Carousel = () => {
    const childrenList = useRef([]);
    const sliderRef = useRef(null);
    const setChildrenListRef = useRef(null);
    const currentIndex = useRef(0);

    const slide = useCallback(({ index }) => {
        const selectedIndex = index ? index : currentIndex.current;
        const { width } = sliderRef.current.getBoundingClientRect();
        sliderRef.current.style.transform = `translateX(-${width * selectedIndex}px)`
    }, []);

    const layout = useCallback(() => {
        const { width } = sliderRef.current.getBoundingClientRect();

        childrenList.current.forEach((child, index) => {
            child.style.left = `${width * index }px`;
        });
    }, []);

    const sliderCallbackRef = useCallback((sliderNode) => {
        sliderRef.current = sliderNode;

        if(sliderNode) {
            childrenList.current = [ ...sliderNode.children ];
            layout();
        } 
    }, [ layout ])

    useEffect(() => {
        setChildrenListRef.current?.(childrenList.current);
    }, []);

    const resizeHandler = useCallback(() => {
        layout();
        slide({});
    }, [ layout, slide ])

    useEffect(() => {
        const currentWindow = window;
        currentWindow.addEventListener("resize", resizeHandler);

        return () => {
            currentWindow.removeEventListener("resize", resizeHandler)
        };
    }, [ resizeHandler ])

    return (
        <div>
            <div className="bg-red-600 mt-8 mission-carousel overflow-hidden px-5 py-8 relative after:absolute after:text-white">
                <div className="h-full overflow-hidden w-full">
                    <ul 
                        className="h-full relative slider w-full"
                        ref={sliderCallbackRef}>
                        <Content />
                        <Content />
                        <Content />
                    </ul>
                </div>
            </div>
            <Controllers 
                nextIndex={currentIndex}
                slide={slide}
                setChildrenListRef={setChildrenListRef} 
            />
            <style jsx>
                {
                    `
                        .mission-carousel {
                            height: 275px;
                        }

                        .mission-carousel:after {
                            bottom: 0;
                            height: 20px;
                            left: 40px;
                            width: 20px;
                            z-index: 5;
                        }

                        .slider {
                            transition: transform .8s ease;
                        }

                        @media screen and (min-width: 1024px) {
                            .mission-carousel {
                                height: 170px;
                                padding-left: 10%;
                                padding-right: 10%;
                            }
                        }
                    `
                }
            </style>
        </div>
    );
};

export default Carousel;
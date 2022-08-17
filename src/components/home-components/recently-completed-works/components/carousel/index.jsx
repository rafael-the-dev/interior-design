import { useCallback, useEffect, useRef } from "react"

import Card from "../card";
import Controllers from "./components/controllers"

const Carousel = () => {
    const list = [
        {
            image: "/images/projects/lat-pro-1.jpg",
            title: "Office partition walls"
        },
        {
            image: "/images/projects/lat-pro-2.jpg",
            title: "Office partition walls"
        },
        {
            image: "/images/projects/lat-pro-3.jpg",
            title: "Office partition walls"
        },
        {
            image: "/images/projects/lat-pro-4.jpg",
            title: "Office partition walls"
        },
        {
            image: "/images/projects/lat-pro-5.jpg",
            title: "Office partition walls"
        }
    ];

    const sliderRef = useRef();
    const setChildrenList = useRef(null);
    const childrenList = useRef([]);
    const currentIndex = useRef(0);

    const slideHandler = useCallback(({ index }) => {
        const { width } = sliderRef.current.getBoundingClientRect();

        const slideIndex = index ? index : currentIndex.current; /// childrenList.current.length
        sliderRef.current.style.transform = `translateX(-${ (width ) * slideIndex }px)`
    }, [])

    const setLayout = useCallback(() => {
        let { width } = sliderRef.current.getBoundingClientRect();
        //width = width
        //sliderRef.current.style.width = `${width * childrenList.current.length}px`;

        childrenList.current.forEach((child, index) => {
            child.style.left = `${width * index}px`;
            child.style.width = `${width}px`;
        })
    }, []);

    const sliderCallbackRef = useCallback(node => {
        sliderRef.current = node;

        if(node) {
            childrenList.current = [ ...node.children ]
            setLayout();
        }
    }, []);

    const resizeHandler = useCallback(() => {
        setLayout();
        slideHandler({});
    }, [])

    useEffect(() => {
        setChildrenList.current?.(childrenList.current)
    }, []);

    useEffect(() => {
        const currentWindow = window;
        window.addEventListener("resize", resizeHandler);

        return () => {
            currentWindow.removeEventListener("resize", resizeHandler);
        };
    }, [ resizeHandler ])

    return (
        <div className="mt-16 overflow-hidden">
            <ul 
                className="relative slider"
                ref={sliderCallbackRef}>
                {
                    [ ...list, ...list, ...list ].map((item, index) => (
                        <Card key={index} { ...item } />
                    ))
                }
            </ul>
            <Controllers 
                currentIndexRef={currentIndex}
                slideHandler={slideHandler}
                setChildrenListRef={setChildrenList}
            />
            <style jsx>
                {
                    `
                        .slider {
                            height: 280px;
                            transition: transform 2s ease;
                        }

                        @media screen and (min-width: 600px) {
                            .slider {
                                height: 350px;
                            }
                        }
                    `
                }
            </style>
        </div>
    );
};

export default Carousel;
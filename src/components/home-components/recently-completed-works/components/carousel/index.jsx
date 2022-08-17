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
    const slideWidth = useRef(0);

    const slideHandler = useCallback(({ index }) => {
        const { width } = sliderRef.current.getBoundingClientRect();

        const slideIndex = index ? index : currentIndex.current; /// childrenList.current.length
        sliderRef.current.style.transform = `translateX(-${ (slideWidth.current ) * slideIndex }px)`
    }, [])

    const setLayout = useCallback(() => {
        sliderRef.current.style.width = '100%';
        let { width } = sliderRef.current.getBoundingClientRect();
        slideWidth.current = width;
        //width = width
        //sliderRef.current.style.width = `${width * childrenList.current.length}px`;
        const windowWidth = window.innerWidth;
        let itemWidth = width;
        let gap = 0;
        
        if(windowWidth >= 1024) {
            gap = 10;
            itemWidth = (width / 5) - gap;
            sliderRef.current.style.width = `${width * 3}px`;
            //gap += 5;
        } else if(windowWidth >= 768) {
            gap = 12;
            itemWidth = (width / 2) - gap;
            sliderRef.current.style.width = `${width * Math.round(childrenList.current.length / 2)}px`;
            //gap += 10;
        }


        childrenList.current.forEach((child, index) => {
            const isFirst = index === 0;
            child.style.left = `${(itemWidth * index) + (gap * index)}px`;
            child.style.width = `${itemWidth}px`;
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
        const width = window.innerWidth;

        if([600, 768, 1024].includes(width)) {
            setChildrenList.current?.([ ...childrenList.current ])
        }

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
                    [ ...list, ...list.reverse(), ...list ].map((item, index) => (
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

                        @media screen and (min-width: 1024px) {
                            .slider {
                                height: 270px;
                            }
                        }
                    `
                }
            </style>
        </div>
    );
};

export default Carousel;
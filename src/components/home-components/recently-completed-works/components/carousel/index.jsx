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
        },
        {
            image: "/images/projects/lat-pro-6.jpg",
            title: "Office partition walls"
        },
        {
            image: "/images/projects/lat-pro-7.jpg",
            title: "Office partition walls"
        },
    ];

    const sliderRef = useRef();
    const setChildrenList = useRef(null);
    const childrenList = useRef([])

    const setLayout = useCallback(() => {
        const { width } = sliderRef.current.getBoundingClientRect();

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

    useEffect(() => {
        setChildrenList.current?.(childrenList.current)
    }, [])

    return (
        <div className="mt-16 overflow-hidden">
            <ul 
                className="relative slider"
                ref={sliderCallbackRef}>
                {
                    [ ...list, ...list, list[0] ].map((item, index) => (
                        <Card key={index} { ...item } />
                    ))
                }
            </ul>
            <Controllers 
                setChildrenListRef={setChildrenList}
            />
            <style jsx>
                {
                    `
                        .slider {
                            height: 280px;
                            transition: transfrom 2s ease;
                        }
                    `
                }
            </style>
        </div>
    );
};

export default Carousel;
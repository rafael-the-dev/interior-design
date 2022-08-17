import { useCallback, useEffect, useRef } from "react"

import Card from "../card";

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

    const setLayout = useCallback(() => {
        const { width } = sliderRef.current.getBoundingClientRect();

        [ ...sliderRef.current.children ].forEach((child, index) => {
            child.style.left = `${width * index}px`;
            child.style.width = `${width}px`;
        })
    }, []);

    const sliderCallbackRef = useCallback(node => {
        sliderRef.current = node;

        if(node) {
            setLayout();
        }
    }, []);

    useEffect(() => {
        setChildrenList.current?.()
    }, [])

    return (
        <div className="overflow-hidden">
            <ul 
                className="relative slider"
                ref={sliderCallbackRef}>
                {
                    [ ...list, ...list, list[0] ].map((item, index) => (
                        <Card key={index} { ...item } />
                    ))
                }
            </ul>
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
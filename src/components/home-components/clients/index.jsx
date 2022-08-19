import { useCallback, useEffect, useRef } from "react"
import classNames from "classnames";

import classes from "./styles.module.css"

import H2 from "src/components/h2";
import Card from "./components/brand-card";
import ControllersContainer from "./components/controllers";

const Clients = () => {
    const sliderRef = useRef(null);
    const childrenList = useRef([]);
    const setChildrenList = useRef(null);
    const slideWidth = useRef(0);
    const currentIndex = useRef(0);

    const list = [
        { image: "/images/brand/1.png" },
        { image: "/images/brand/2.png" },
        { image: "/images/brand/3.png" },
        { image: "/images/brand/4.png" },
        { image: "/images/brand/5.png" },
        { image: "/images/brand/6.png" }
    ];

    const slideHandler = useCallback(({ index }) => {
        const slideIndex = index ? index : currentIndex.current; 
        sliderRef.current.style.transform = `translateX(-${ (slideWidth.current ) * slideIndex }px)`
    }, [])

    const setLayout = useCallback(() => {
        sliderRef.current.style.width = '100%';
        let { width } = sliderRef.current.getBoundingClientRect();
        slideWidth.current = width;

        const windowWidth = window.innerWidth;
        let itemWidth = width;
        let gap = 0;

        if(windowWidth >= 1150) {
            slideWidth.current = (width / 6) - gap;
            gap = 10;
            itemWidth = (width / 6) - gap;
            sliderRef.current.style.width = `${width * Math.round(childrenList.current.length / 6)}px`;
        } 
        else if(windowWidth >= 990) {
            slideWidth.current = (width / 5) - gap;
            gap = 10;
            itemWidth = (width / 5) - gap;
            sliderRef.current.style.width = `${width * Math.round(childrenList.current.length / 5)}px`;
        }
        else if (windowWidth >= 768) {
            slideWidth.current = (width / 4) - gap;
            gap = 10;
            itemWidth = (width / 4) - gap;
            sliderRef.current.style.width = `${width * Math.round(childrenList.current.length / 4)}px`;
        } 
        else if(windowWidth >= 600) {
            slideWidth.current = (width / 3) - gap;
            gap = 12;
            itemWidth = (width / 3) - gap;
            sliderRef.current.style.width = `${width * Math.round(childrenList.current.length / 2)}px`;
        }


        childrenList.current.forEach((child, index) => {
            child.style.left = `${(itemWidth * index) + (gap * index)}px`;
            child.style.width = `${itemWidth}px`;
        })
    }, []);

    const sliderCallbackRef = node => {
        sliderRef.current = node;

        if(node) {
            childrenList.current = [ ...node.children ];
            setLayout();
        }
    };

    const resizeHandler = useCallback(() => {
        setLayout();
    }, [ setLayout ]);

    useEffect(() => {
        const currentWindow = window;

        currentWindow.addEventListener("resize", resizeHandler);

        return () => {
            currentWindow.removeEventListener("resize", resizeHandler);
        };
    }, [ resizeHandler ])

    useEffect(() => {
        setChildrenList.current?.(childrenList.current);
    }, []);


    return (
        <section className="bg-gray-100 px-5 py-16 sm:px-[10%] sm:pt-24 remove-px-10">
            <div className="flex flex-col justify-between title-container">
                <H2 className={classNames(classes.title, ` before:text-red-600 
                before:block before:font-bold before:text-sm before:mb-2`)}>
                    <span className="font-bold">More than</span> 2000 clients
                </H2>
                <ControllersContainer 
                    currentIndexRef={currentIndex}
                    slideHandler={slideHandler}
                    setChildrenListRef={setChildrenList}
                />
            </div>
            <div className="mt-8 overflow-hidden slider-container">
                <ul 
                    className={classNames(classes.slider, `relative`)}
                    ref={sliderCallbackRef}>
                    {
                        [ ...list,  ...[ ...list].reverse(), ...list].map((item, index) => (
                            <Card { ...item } key={index} />
                        ))
                    }
                </ul>
            </div>
            <style jsx>
                {
                    `
                        @media screen and (min-width: 780px) {
                            .title-container {
                                flex-direction: row;
                            }

                            .slider-container {
                                margin-top: 3.2rem;
                            }
                        }
                    `
                }
            </style>
        </section>
    );
};

export default Clients;
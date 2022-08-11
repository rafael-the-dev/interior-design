import { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";

import ListItem from "./components/list-item";
import Controllers from "./components/controllers"

const HeroContainer = () => {
    const listRef = useRef(null);
    const setChildren = useRef(null);
    const children = useRef([]);
    const currentIndex = useRef(0);
    const previousIndex = useRef(0);
    const heightRef = useRef(0);
    
    const gradient = "linear-gradient(to right, rgba(0, 0, 0, .3), rgba(0, 0, 0, .1))";

    const setPostion = useCallback((element, index) => {
        const signal = index % 2 === 0 ? "-" : "";

        element.style.top = `${signal}${heightRef.current * 2}px`;
    }, []);

    const setLayout = useCallback(() => {
        children.current.forEach((child, index) => {
            const { height } = child.parentNode.getBoundingClientRect();
            heightRef.current = height;
            
            if(index === 0) {
                child.style.top = 0;
            } else {
                setPostion(child, index);
            }
        })
    }, [ setPostion ]);

    const slide = useCallback(() => {
        if(children.current.length === 0) return;

        children.current[previousIndex.current].style.zIndex = 0;

        children.current[currentIndex.current].style.top = 0;
        children.current[currentIndex.current].style.zIndex = 5;

        if(previousIndex.current !== currentIndex.current) {
            setTimeout(() => {
                const elementIndex = currentIndex.current === 0 ? 1 : currentIndex.current;
                setPostion(children.current[previousIndex.current], elementIndex);
            }, 1100);
        }

    }, [ setPostion ]);

    useEffect(() => {
        children.current = [ ...listRef.current.children ];
        setChildren.current?.(children.current);
        setLayout();
    }, [ setLayout ]);

    return (
        <section className='relative'>
            <ul ref={listRef} className="hero__list overflow-hidden relative">
                <ListItem className="">
                    <div className={classNames("bg-cover bg-center bg-no-repeat h-full hero--decoration w-full")}></div>
                </ListItem>
                <ListItem>
                    <div className={classNames("bg-cover bg-center bg-no-repeat h-full hero--well-invented w-full")}></div>
                </ListItem>
                <ListItem>
                    <div className={classNames("bg-cover bg-center bg-no-repeat h-full hero--crafted w-full")}></div>
                </ListItem>
            </ul>
            <Controllers 
                currentIndex={currentIndex} 
                previousIndex={previousIndex} 
                slide={slide} 
                setChildrenRef={setChildren} 
            />
            <style jsx>
                {
                    `
                        .hero__list {
                            height: 280px;
                        }

                        .hero--decoration {
                            background-image: ${gradient}, url(/images/slides/v1-1.jpg);
                        }

                        .hero--well-invented {
                            background-image: ${gradient}, url(/images/slides/v1-2.jpg);
                        }

                        .hero--crafted {
                            background-image: ${gradient}, url(/images/slides/v1-3.jpg);
                        }
                    `
                }
            </style>
        </section>
    );
};

export default HeroContainer;
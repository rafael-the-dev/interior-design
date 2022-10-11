import { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";

import ListItem from "./components/list-item";
import Controllers from "./components/controllers";
import Title from "./components/title";
import Description from "./components/description";
import Link from "./components/about-company-link";

const HeroContainer = () => {
    const listRef = useRef(null);
    const setChildren = useRef(null);
    const children = useRef([]);
    const currentIndex = useRef(0);
    const previousIndex = useRef(0);
    const heightRef = useRef(0);
    
    const gradient = "linear-gradient(to right, rgba(0, 0, 0, .2), rgba(0, 0, 0, .1))";

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
            }, 1450);
        }

    }, [ setPostion ]);

    const sliderCallbackRef = useCallback(sliderNode => {
        listRef.current = sliderNode;
        
        if(sliderNode) {
            children.current = [ ...sliderNode.children ];
            setLayout();

        }
    }, [ setLayout ])

    useEffect(() => {
        setChildren.current?.(children.current);
    }, [ setLayout ]);

    return (
        <section className='relative'>
            <ul ref={sliderCallbackRef} className="hero__list overflow-hidden relative">
                <ListItem className="">
                    <div className={classNames("bg-cover bg-center bg-fixed bg-no-repeat flex flex-col  h-full hero--decoration justify-center px-5 w-full")}>
                        <Title>Decorate ideas</Title>
                        <Description />
                        <Link />
                    </div>
                </ListItem>
                <ListItem>
                    <div className={classNames("bg-cover bg-center bg-fixed bg-no-repeat flex flex-col  h-full hero--well-invented justify-center px-5 w-full md:items-center")}>
                        <div>
                            <Title>Crafted better</Title>
                            <Description />
                            <Link />
                        </div>
                    </div>
                </ListItem>
                <ListItem>
                    <div className={classNames("bg-cover bg-center bg-fixed bg-no-repeat flex flex-col  h-full hero--crafted justify-center px-5 w-full")}>
                        <Title>Well Invented</Title>
                        <Description />
                        <Link />
                    </div>
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
                            height: 320px;
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

                        @media screen and (min-width: 600px) {
                            .hero__list {
                                height: 420px;
                            }
                        }

                        @media screen and (min-width: 768px) {
                            .hero__list {
                                height: 520px;
                            }
                        }

                        @media screen and (min-width: 990px) {
                            .hero__list {
                                height: 620px;
                            }
                        }
                    `
                }
            </style>
        </section>
    );
};

export default HeroContainer;
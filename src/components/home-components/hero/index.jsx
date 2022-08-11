import { useEffect, useRef } from "react";
import classNames from "classnames";

import ListItem from "./components/list-item";
import Controllers from "./components/controllers"

const HeroContainer = () => {
    const listRef = useRef(null);
    const setChildren = useRef(null);
    const children = useRef([]);
    const gradient = "linear-gradient(to right, rgba(0, 0, 0, .3), rgba(0, 0, 0, .1))";

    const setLayout = () => {
        children.current.forEach((child, index) => {
            const { height } = child.parentNode.getBoundingClientRect();
            
            if(index === 0) {
                child.style.top = 0;
            } else {
                const signal = index % 2 === 0 ? "-" : "";

                child.style.top = `${signal}${height * 2}px`;
            }
        })
    };

    useEffect(() => {
        children.current = [ ...listRef.current.children ];
        setChildren.current?.(children.current);
        setLayout();
    }, []);

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
            <Controllers setChildrenRef={setChildren} />
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
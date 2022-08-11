import { useEffect, useRef } from "react";

import ListItem from "./components/list-item"

const HeroContainer = () => {
    const listRef = useRef(null);
    const children = useRef([]);

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
        setLayout();
    }, []);

    return (
        <section>
            <ul ref={listRef} className="hero__list overflow-hidden relative">
                <ListItem>
                    <div></div>
                </ListItem>
                <ListItem>
                    <div></div>
                </ListItem>
                <ListItem>
                    <div></div>
                </ListItem>
            </ul>
            <style jsx>
                {
                    `
                        .hero__list {
                            height: 280px;
                        }
                    `
                }
            </style>
        </section>
    );
};

export default HeroContainer;
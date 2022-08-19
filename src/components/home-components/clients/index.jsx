import { useEffect, useRef } from "react"
import classNames from "classnames";

import H2 from "src/components/h2";

const Clients = () => {
    const sliderRef = useRef(null);
    const childrenList = useRef([]);
    const setChildrenList = useRef(null);

    const setLayout = () => {
        sliderRef.current.style.width = '100%';
        let { width } = sliderRef.current.getBoundingClientRect();
        slideWidth.current = width;
        
        const windowWidth = window.innerWidth;
        let itemWidth = width;
        let gap = 0;

        if(windowWidth >= 1150) {
            gap = 10;
            itemWidth = (width / 6) - gap;
            sliderRef.current.style.width = `${width * Math.round(childrenList.current.length / 6)}px`;
        } 
        else if(windowWidth >= 990) {
            gap = 10;
            itemWidth = (width / 5) - gap;
            sliderRef.current.style.width = `${width * Math.round(childrenList.current.length / 5)}px`;
        }
        else if (windowWidth >= 768) {
            gap = 10;
            itemWidth = (width / 4) - gap;
            sliderRef.current.style.width = `${width * Math.round(childrenList.current.length / 4)}px`;
        } 
        else if(windowWidth >= 600) {
            gap = 12;
            itemWidth = (width / 3) - gap;
            sliderRef.current.style.width = `${width * Math.round(childrenList.current.length / 2)}px`;
        }


        childrenList.current.forEach((child, index) => {
            child.style.left = `${(itemWidth * index) + (gap * index)}px`;
            child.style.width = `${itemWidth}px`;
        })
    };

    const sliderCallbackRef = node => {
        sliderRef.current = node;

        if(node) {
            childrenList.current = [ ...node.children ];
            setLayout();
        }
    };

    const resizeHandler = () => {
        setLayout();
    };

    useEffect(() => {
        const currentWindow = window;

        currentWindow.addEventListener("resize", resizeHandler);

        return () => {
            currentWindow.removeEventListener("resize", resizeHandler);
        };
    }, [])

    useEffect(() => {
        setChildrenList.current?.(childrenList.current);
    }, []);



    <section className="px-5 py-16 sm:px-[10%] sm:pt-24 remove-px-10">
        <div className="flex flex-col justify-between title-container">
            <H2 className={classNames(classes.title, ` before:text-red-600 
            before:block before:font-bold before:text-sm before:mb-2`)}>
                <span className="font-bold">Our customer</span> Words
            </H2>
            <Link className="mt-6 lg:mt-0 lg:mr-1" href="/">
                <Button 
                    className="capitalize hover:bg-transparent p-0 text-black hover:text-red-600"
                    endIcon={<ArrowRightAltIcon />}>
                    More reviews
                </Button>
            </Link>
        </div>
        <div>

        </div>
    </section>
};

export default Clients;
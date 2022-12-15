import classNames from "classnames";

import classes from "./styles.module.css"

import Carousel from "src/components/carousel";
import Card from "./components/card";

const Container = () => {
    const list = [
        { 
            description: "Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee shrinking from toil and pain.", 
            image: "/images/resources/history-1.jpg", 
            title: <>Crystalo Was Founded by<br/> Chris Miller in USA.</>, 
            year: 1994
        },
        {
            description: "Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee shrinking from toil and pain.", 
            image: "/images/resources/history-2.jpg", 
            title: <>Crystalo Was Founded by<br/> Chris Miller in USA.</>, 
            year: 1994
        },
        {
            description: "Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee shrinking from toil and pain.", 
            image: "/images/resources/history-1.jpg", 
            title: <>Crystalo Was Founded by<br/> Chris Miller in USA.</>, 
            year: 1994
        },
        {
            description: "Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee shrinking from toil and pain.", 
            image: "/images/resources/history-2.jpg", 
            title: <>Crystalo Was Founded by<br/> Chris Miller in USA.</>, 
            year: 1994
        },
        {
            description: "Indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee shrinking from toil and pain.", 
            image: "/images/resources/history-1.jpg", 
            title: <>Crystalo Was Founded by<br/> Chris Miller in USA.</>, 
            year: 1994
        }
    ];

    const helper = () => {
        const { innerWidth } = window;

        if(innerWidth >= 1200) {
            return { height: 450, isNew: true }
        }

        return { isNew: true };
    };

    return (
        <div className={classNames(classes.container, "mt-8 relative lg:mt-16")}>
            <div className={classNames(classes.carouselContainer, "")}>
                <Carousel
                    dots
                    helper={helper}
                    spacing={{ xs: { gap: 0, width: 1 } }}>
                    {
                        list.map((item, index) => (
                            <Card { ...item } key={index} />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Container;
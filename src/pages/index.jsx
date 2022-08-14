import Hero from "src/components/home-components/hero";
import HightlightCard from "src/components/home-components/highlight-card"

const Home = () => {

    return (
        <>
            <Hero />
            <div>
                <div className="hightlight-cards-container justify-between px-5 py-12 relative sm:px-[10%] sm:pt-28 lg:px-5">
                    <HightlightCard
                        description="Indignation dislike who are beguile works &amp; demoralized the charms."
                        title="Concept designs" 
                    />
                    <HightlightCard
                        description="Our power of choice is untrammelled and all nothing prevents best."
                        title="Project designs" 
                    />
                    <HightlightCard
                        description="Every pleasure is to be welcomed &amp; every circumstances &amp; owing power."
                        title="Make overs" 
                    />
                </div>
            </div>
            <style jsx>
                {
                    `
                        @media screen and (min-width: 990px) {
                            .hightlight-cards-container {
                                display: flex;
                            }
                        }

                        @media screen and (min-width: 1060px) {
                            .hightlight-cards-container {
                                transform: translateY(-177px);
                                z-index: 20;
                            }
                        }
                    `
                }
            </style>
        </>
    );
};

export default Home;
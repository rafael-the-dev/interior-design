
import Hero from "src/components/home-components/hero";
import HightlightCard from "src/components/home-components/highlight-card"

const Home = () => {

    return (
        <>
            <Hero />
            <div>
                <div className="px-5 py-12">
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
        </>
    );
};

export default Home;
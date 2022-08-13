
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
                        description="Indignation dislike who are beguile works &amp; demoralized the charms."
                        title="Concept designs" 
                    />
                    <HightlightCard
                        description="Indignation dislike who are beguile works &amp; demoralized the charms."
                        title="Concept designs" 
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
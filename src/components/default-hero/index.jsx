import { useRouter } from "next/router";
import classNames from "classnames";

const DefaultHero = () => {
    const { pathname } = useRouter();
    
    return (
        <section className={classNames("default-hero bg-center bg-no-repeat bg-cover",
            { "default-hero--about": pathname === "/about" })}>
            <style jsx>
                {
                    `
                        .default-hero {
                            background-image: linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .3)), url(/images/resources/breadcrumb-bg.jpg);
                            height: 350px;
                        }

                        .default-hero--about {
                            height: 470px;
                        }
                    `
                }
            </style>
        </section>
    );
};

export default DefaultHero;
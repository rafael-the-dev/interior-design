import { Typography } from "@mui/material"


const MissionStatement = () => (
    <li className="absolute h-full w-full">
        <div className="slider__item-contente icon-target text-white before:block before:mb-8 lg:before:absolute before:left-0">
            <Typography
                component="h3"
                className="capitalize font-bold underline text-2xl">
                Mission statement
            </Typography>
            <Typography className="mt-3 opacity-90">
                Same as saying through shrinking from pain these perfectly simple
                and easy to distinguish
            </Typography>
        </div>
        <style jsx>
            {
                `
                    .slider__item-contente:before {
                        font-size: 5rem;
                        margin-left: .2rem;
                    }

                    @media screen and (min-width: 1024px) {
                        .slider__item-contente {
                            padding-left: 7rem;
                            padding-right: 1rem;
                        }
                    }
                `
            }
        </style>
    </li>
);

export default MissionStatement;
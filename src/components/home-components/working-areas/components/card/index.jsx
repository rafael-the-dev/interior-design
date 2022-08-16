import classNames from "classnames";
import Image from "next/image";
import { Typography } from "@mui/material"

const Card = ({ description, icon, image, title }) => (
    <div className="card flex-col items-stretch mb-6">
        <div className="image-container relative">
            <Image
                alt={title} 
                layout="fill"
                src={image}
            />
        </div>
        <div className={classNames(icon, `bg-white card-content flex grow items-stretch before:bg-gray-200 before:flex 
        before:items-center before:px-4 before:text-red-600 sm:before:px-8 lg:before:px-4`)}>
            <div className="py-6 px-8">
                <Typography
                    component="h3"
                    className="font-bold text-xl">
                    { title }
                </Typography>
                <Typography
                    component="p"
                    className="mt-4">
                    { description }
                </Typography>
            </div>
        </div>
        <style jsx>
            {
                `
                    .image-container {
                        height: 280px;

                    }

                    .card-content::before {
                        font-size: 2rem;
                    }

                    @media screen and (min-width: 768px) { 
                        .image-container {
                            height: 350px;
                        }
                    }

                    @media screen and (min-width: 990px) {
                        .card {
                            display: flex;
                            margin-bottom: 0;
                            width: 32%;
                        }

                        .image-container {
                            height: 280px;
                        }
                    }
                `
            }
        </style>
    </div>
);

export default Card;
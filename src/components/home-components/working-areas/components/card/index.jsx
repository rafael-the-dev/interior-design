import classNames from "classnames";
import Image from "next/image";
import { Typography } from "@mui/material"

const Card = ({ description, icon, image, title }) => (
    <div className="mb-6">
        <div className="image-container relative">
            <Image
                alt={title} 
                layout="fill"
                src={image}
            />
        </div>
        <div className={classNames(icon, `bg-white card-content flex items-stretch before:bg-gray-200 before:flex 
        before:items-center before:px-4 before:text-red-600`)}>
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
                `
            }
        </style>
    </div>
);

export default Card;
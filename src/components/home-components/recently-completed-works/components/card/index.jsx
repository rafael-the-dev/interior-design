import Image from "next/image";

const Card = ({ image, title }) => {
    return (
        <li className="absolute card h-full ">
            <div className="h-full image-container relative">
                <Image
                    alt={title}
                    layout="fill"
                    src={image} 
                />
            </div>
            <style jsx>
                {
                    `
                        @media screen and (min-width: 768px) {
                            .card {
                            }
                        }
                    `
                }
            </style>
        </li>
    );
};

export default Card;
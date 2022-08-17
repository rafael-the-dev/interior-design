import Image from "next/image";

const Card = ({ image, title }) => {
    return (
        <li className="absolute h-full">
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
                        .image-container {
                        }
                    `
                }
            </style>
        </li>
    );
};

export default Card;

import Image from "next/image";


const Card = ({ image, title }) => (
    <div className="mb-6">
        <div className="image-container relative">
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
                        height: 280px;

                    }
                `
            }
        </style>
    </div>
);

export default Card;
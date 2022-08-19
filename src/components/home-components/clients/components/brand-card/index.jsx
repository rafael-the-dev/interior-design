import Image from "next/image"

const Card = ({ image }) => (
    <li className="card h-full absolute">
        <div className="h-full relative w-full">
            <Image
                alt=""
                layout="fill"
                src={image} 
            />
        </div>
        <style jsx>
            {
                `
                    .card {
                        background: rgba(255, 255, 255, .7);
                    }
                `
            }
        </style>
    </li>
);

export default Card;
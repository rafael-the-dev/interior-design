

const ListItem = ({ children, className }) => (
    <li className="absolute hero__list-item h-full left-0 w-full">
        { children }
        <style jsx>
            {
                `
                    .hero__list-item {
                        transition: top 1.5s ease-in;
                    }
                `
            }
        </style>
    </li>
);

export default ListItem;
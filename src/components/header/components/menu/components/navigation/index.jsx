
import Link from "src/components/link";
import ListItem from "../list-item";

const NavigationList = () => {
    const list = [
        {
            href: "/", label: "Home",  list: [
                { href: "/", label: "Home page 01" },
                { href: "/", label: "Home page 02" },
                { href: "/", label: "Home page 03" }
            ]
        },
        {
            href: "/", label: "About us",  list: [
                { href: "/", label: "About company" },
                { href: "/", label: "FAQs" },
                { href: "/", label: "Coming soon" },
                { href: "/", label: "Error page" }
            ]
        },
        {
            href: "/", label: "Services",  list: [
                { href: "/", label: "View all services" },
                { href: "/", label: "concept design" },
                { href: "/", label: "Project design" }
            ]
        },
        {
            href: "/", label: "Projects",  list: [
                { href: "/", label: "" },
                { href: "/", label: "" },
                { href: "/", label: "" }
            ]
        },
        {
            href: "/", label: "Blog",  list: [
                { href: "/", label: "" },
                { href: "/", label: "" },
                { href: "/", label: "" }
            ]
        },
        {
            href: "/", label: "Shop",  list: [
                { href: "/", label: "" },
                { href: "/", label: "" },
                { href: "/", label: "" }
            ]
        },
        {
            href: "/", label: "Contact"
        }
    ];

    return (
        <ul className="bg-neutral-900">
            {
                list.map((item, index) => (
                    item.list ? <ListItem key={index} { ...item } /> : (
                        <li className="border-b border-solid border-neutral-800 py-2 px-5" key={index}>
                            <Link className="block text-white hover:text-red-600" href={item.href}>{ item.label }</Link>
                        </li>
                    )
                ))
            }
        </ul>
    );
};

export default NavigationList;
import classNames from "classnames";
import { useRouter } from "next/router"

import classes from "../styles.module.css"

import Link from "src/components/link";
import ListItem from "../list-item";

const NavigationList = () => {
    const { pathname } = useRouter();

    const list = [
        {
            href: "/", id: "/", label: "Home",  list: [
                { href: "/", label: "Home page 01" },
                { href: "/", label: "Home page 02" },
                { href: "/", label: "Home page 03" }
            ]
        },
        {
            href: "/", id: "about", label: "About us",  list: [
                { href: "/", label: "About company" },
                { href: "/", label: "FAQs" },
                { href: "/", label: "Coming soon" },
                { href: "/", label: "Error page" }
            ]
        },
        {
            href: "/", id: "services", label: "Services",  list: [
                { href: "/", label: "View all services" },
                { href: "/", label: "concept design" },
                { href: "/", label: "Project design" }
            ]
        },
        {
            href: "/", id: "projects", label: "Projects",  list: [
                { href: "/", label: "" },
                { href: "/", label: "" },
                { href: "/", label: "" }
            ]
        },
        {
            href: "/", id: "blog", label: "Blog",  list: [
                { href: "/", label: "" },
                { href: "/", label: "" },
                { href: "/", label: "" }
            ]
        },
        {
            href: "/", id: "shop", label: "Shop",  list: [
                { href: "/", label: "" },
                { href: "/", label: "" },
                { href: "/", label: "" }
            ]
        },
        {
            href: "/", id: "contact", label: "Contact"
        }
    ];

    return (
        <ul className="bg-neutral-900 navigation-list">
            {
                list.map((item) => (
                    item.list ? <ListItem key={item.id} { ...item } /> : (
                        <li 
                            className={classNames(classes.listItem, "border-b border-solid border-neutral-800 py-2 px-5")} 
                            key={item.id}>
                            <Link 
                                className={classNames(classes.listItemButton, "block hover:text-red-600",
                                pathname === item.id ? classes.currentPage : "text-white")}
                                href={item.href}>
                                { item.label }
                            </Link>
                        </li>
                    )
                ))
            }
            <style jsx>
                {
                    `
                        @media screen and (min-width: 1100px) {
                            .navigation-list {
                                background-color: transparent;
                                display: flex;
                            }
                        }
                    `
                }
            </style>
        </ul>
    );
};

export default NavigationList;

// av amilcar cabral proximo a emigracao.
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
                { href: "/", label: "Home page 03" },
                { href: "/", label: "Header styles" }
            ]
        },
        {
            href: "about", id: "about", label: "About us",  list: [
                { href: "about", label: "About company" },
                { href: "about", label: "FAQs" },
                { href: "about", label: "Coming soon" },
                { href: "about", label: "Error page" }
            ]
        },
        {
            href: "/", id: "services", label: "Services",  list: [
                { href: "services", label: "View all services" },
                { href: "services", label: "concept design" },
                { href: "services", label: "Project design" },
                { href: "services", label: "Make overs" },
                { href: "services", label: "Consulting" },
                { href: "services", label: "Glass & wrought" },
                { href: "services", label: "Space planning" },
            ]
        },
        {
            href: "/", id: "projects", label: "Projects",  list: [
                { href: "projects", label: "Class view 01" },
                { href: "projects", label: "Class view 02" },
                { href: "projects", label: "Modern view 01" },
                { href: "projects", label: "Modern view 02" },
                { href: "projects", label: "Fullwidth 01" },
                { href: "projects", label: "Fullwidth 02" },
                { href: "projects", label: "Projects single" },
            ]
        },
        {
            href: "/", id: "blog", label: "Blog",  list: [
                { href: "blogs", label: "Blog grid view" },
                { href: "blogs", label: "Blog with sidebar" },
                { href: "blogs", label: "Blog single post" }
            ]
        },
        {
            href: "/", id: "shop", label: "Shop",  list: [
                { href: "/", label: "Our products" },
                { href: "/", label: "Products single" },
                { href: "/", label: "Shopping cart" },
                { href: "/", label: "Checkout" },
                { href: "/", label: "My account" }
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
                                className={classNames(classes.listItemButton, "block hover:text-amber-600",
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
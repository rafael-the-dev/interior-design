import Image from "next/image";
import classNames from "classnames";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router"

import classes from "./styles.module.css";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Link from "../link"

const BlogCard = ({ author, date, description, image, location, title }) => {
    const { pathname } = useRouter();
    const isHome = pathname === "/";

    return (
        <div className="mb-12">
            <div className={classNames(classes.imageContainer, `relative`)}>
                <Image
                    alt={title}
                    layout="fill"
                    src={image} 
                />
            </div>
            <div className="pt-6">
                {
                    isHome  && (
                        <Typography
                            component="time"
                            className={classNames(`border-b-2 border-solid border-gray-300 capitalize font-bold pb-2`)}
                            >
                            <span className="mr-1 text-red-600 text-3xl">
                                { date.split(" ")[0]}
                            </span>
                            { date.replace(/\d{2}/, "") }
                        </Typography>
                    )
                }
                <div className="flex mt-6">
                    <Typography className="border-r border-solid border-slate-200 pr-3 text-sm">
                        By <Link className="text-sm text-red-600" href="/" rel="author">{ author }</Link>
                    </Typography>
                    <Typography className="pl-3 text-sm">
                        In <Link className="text-sm text-red-600" href="/">{ location }</Link>
                    </Typography>
                </div>
                <Typography 
                    component="h3"
                    className="font-bold mt-6 text-xl">
                    { title }
                </Typography>
                <Typography 
                    component="p"
                    className="leading-6 mt-4 opacity-90 text-sm">
                    { description }
                </Typography>
                <Link className="inline-block mt-6" href="/">
                    <Button 
                        className="capitalize hover:bg-transparent p-0 text-black hover:text-red-600"
                        endIcon={<ArrowRightAltIcon />}>
                        Read more
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
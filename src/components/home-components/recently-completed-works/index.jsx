import { Button } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import H2 from "src/components/h2";
import Link from "src/components/link"

const RecentlyCompletedWorks = () => {

    return (
        <section className="px-5 py-16">
            <div className="flex flex-col justify-between">
                <H2 className={classNames(classes.title, ` before:text-red-600 
                before:block before:font-bold before:text-sm before:mb-2`)}>
                    <span className="font-bold">Recently completed</span> Works
                </H2>
                <Link className="mt-6" href="/">
                    <Button 
                        className="hover:bg-transparent p-0 text-black hover:text-red-600"
                        endIcon={<ArrowRightAltIcon />}>
                        More projects
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default RecentlyCompletedWorks;
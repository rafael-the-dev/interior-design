import { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import { Button, Typography } from "@mui/material"

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Form = () => {
    const [ value, setValue ] = useState("");

    const changeHandler = useCallback(event => setValue(event.target.value), []);

    const legend = useMemo(() => (
        <Typography 
            component="legend"
            className="font-bold text-xl text-white">
            Subscribe us
        </Typography>
    ), []);

    const label = useMemo(() => (
        <Typography 
            component="label"
            className="block mt-4 text-sm opacity-70 text-white"
            htmlFor="footer-email-input">
            <span className="text-red-600">*</span>
            Subscribe us and get latest news and updates
        </Typography>
    ), [])

    return (
        <form className="footer__form mt-8 w-full md:mt-12 lg:mt-0">
            { legend }
            <div className="mt-6">
                <input 
                    className="bg-transparent border border-solid border-gray-500 outline-none py-3 px-2 
                    text-base text-white w-full focus:border-gray-300"
                    id="footer-email-input"
                    onChange={changeHandler}
                    placeholder="Your email"
                    value={value}
                />
                <Button 
                    className={classNames("border border-solid border-red-600 bg-red-600 mt-4 py-2 px-8 rounded-none text-white",
                    value.trim() ? "hover:bg-transparent hover:text-red-600" : "")}
                    disabled={!Boolean(value.trim())}
                    endIcon={<TrendingFlatIcon />}>
                    Subscribe
                </Button>
                { label }
            </div>
            <style jsx>
                {
                    `
                        @media screen and (min-width: 768px) {
                            .footer__form {
                                width: 48%;
                            }
                        }

                        @media screen and (min-width: 1024px) {
                            .footer__form {
                                width: 31%;
                            }
                        }
                    `
                }
            </style>
        </form>
    );
};

export default Form;
import { Avatar, Rating, Typography } from "@mui/material"
import classNames from "classnames";
import { styled } from '@mui/material/styles';

import classes from "./styles.module.css";

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ef4444',
    }
});

const Card = ({ image, location, name, rating, text }) => {

    return (
        <li className={classNames(classes.cardContainer, "absolute px-4")}>
            <div className={classNames(classes.cardBorder, "absolute border border-solid border-gray-200 left-0")}></div>
            <div className={classNames(classes.card, "bg-white h-full py-6 px-4 relative")}>
                <div className="flex items-center">
                    <Avatar 
                        alt={name}
                        className={classNames(classes.avatar, "mr-3")}
                        src={image}
                    />
                    <div>
                        <Typography
                            component="h3"
                            className="font-bold text-lg">
                            { name }
                        </Typography>
                        <Typography
                            className="text-sm text-red-500">
                            { location }
                        </Typography>
                    </div>
                </div>
                <div className="mt-3">
                    <Typography
                        component="blockquote"
                        className={classNames(classes.description, "leading-6 mb-3 text-sm text-gray-600")}>
                        &ldquo;{ text }&rdquo;
                    </Typography>
                    <StyledRating value={rating} />
                    <FormatQuoteIcon className={classNames("absolute text-gray-100", classes.quoteIcon)} />
                </div>
            </div>
        </li>
    );
};

export default Card;
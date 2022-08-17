import classNames from "classnames"


const Button = ({ clickHandler, currentIndex, index }) => (
    <button 
        className={classNames("border-0 carousel__button mr-2 mb-3 px-3",
        currentIndex === index ? "bg-red-600" : "bg-slate-200")}
        aria-label="carousel indicator"
        onClick={clickHandler(index)}>
        <style jsx>
            {
                `
                    .carousel__button {
                        padding-bottom: 3px;
                        padding-top: 3px;
                    }
                `
            }
        </style>
    </button>
);

export default Button;
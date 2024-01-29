// CustomButton component
interface CustomButtonProps {
    onClick?: () => void;
    direction: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, direction }) => (
    <button onClick={onClick} className={`custom-button ${direction} absolute  bg-black/95 p-4 text-white `}>
        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z"
                fill="currentColor"
                transform-origin="center"
                transform={`${direction === "next" ? "" : "rotate(180)"}`}
            ></path>
        </svg>
    </button>
);
export const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set the autoplay speed in milliseconds
    nextArrow: <CustomButton direction="next" />,
    prevArrow: <CustomButton direction="prev" />,

    responsive: [
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
};

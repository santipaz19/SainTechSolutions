interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
    onClick?: () => void;
}

export const Card = ({
    title,
    description,
    imageUrl,
    buttonText,
    onClick,
}: CardProps) => {
    return (
        <div className="bg-[#131c3a] border-double border-2 transition-all hover:scale-105 border-white duration-300 rounded-md overflow-hidden max-w-sm ">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover " />

            <div className="p-4 text-white">
                <h3 className="font-bold text-lg mb-2 border-b border-gray-300">{title}</h3>
                <p className="text-sm mb-4">{description}</p>
                <button

                    className="bg-[#e91e63] text-white font-bold py-2 px-4 rounded-md hover:brightness-110 transition shadow-md hover:shadow-lg hidden" //activar cuando este la info
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

import { FaSpinner } from "react-icons/fa";

const Loader = () => {
    return (
        <div className="w-full h-full z-[100] flex justify-between items-center transition-all duration-500">
            <FaSpinner className="animate-spin h-12 w-12 text-gray-500" />
        </div>
    );
};

export default Loader;

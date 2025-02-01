"use client";

interface ServiceCardProps {
    title: string;
    category: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    category,
    description,
}) => {
    return (
        <div className="bg-gray-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-gray-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-gray-200">
                    {category}: {title}
                </span>{" "}
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;

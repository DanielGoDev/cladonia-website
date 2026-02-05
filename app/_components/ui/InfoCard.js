import Image from "next/image";

export default function InfoCard({ title, description, image }) {
    return (
        <div className="relative rounded-lg overflow-hidden w-full h-[calc(100vh-8rem)] md:h-112.5 lg:h-130 my-8 md:my-0">
            <Image 
                src={image} 
                alt={title}
                width={393}
                height={699}
                className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-end">
                <div className="text-center text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-sm md:text-base">{description}</p>
                </div>
            </div>
        </div>
    )
}

import React from "react";
import { Calendar } from "lucide-react";
import { triggerConfetti } from "../utils/confetti";

interface SaveDateButtonProps {
	onClick: () => void;
}

export const SaveDateButton: React.FC<SaveDateButtonProps> = ({ onClick }) => {
	const handleClick = () => {
		triggerConfetti();
		onClick();
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className="mt-6 px-6 py-3 bg-rose-500 text-white rounded-full font-light 
                transform transition-all duration-500 ease-out
                hover:bg-rose-600 hover:scale-110 hover:shadow-lg
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2
                focus:ring-offset-rose-50
                flex items-center justify-center gap-2 mx-auto
                animate-fade-in stagger-delay-3
                group"
		>
			<Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
			<span className="group-hover:tracking-wider transition-all duration-300">
				Add to Calendar
			</span>
		</button>
	);
};

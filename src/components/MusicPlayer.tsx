import React, { useState } from "react";
import { Music, Pause, Play } from "lucide-react";
import useSound from "use-sound";

export const MusicPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [play, { pause }] = useSound("perfect.mp3", {
		volume: 0.5,
		onend: () => setIsPlaying(false),
	});

	const togglePlay = () => {
		if (isPlaying) {
			pause();
		} else {
			play();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="fixed bottom-4 right-4 z-50">
			<button
				onClick={togglePlay}
				type="button"
				className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg
                 hover:bg-rose-50 transition-all duration-300
                 group flex items-center gap-2"
			>
				<Music className="w-5 h-5 text-rose-500 group-hover:animate-bounce" />
				{isPlaying ? (
					<Pause className="w-5 h-5 text-rose-500" />
				) : (
					<Play className="w-5 h-5 text-rose-500" />
				)}
			</button>
		</div>
	);
};

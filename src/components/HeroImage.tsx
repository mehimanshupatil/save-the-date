import React from "react";
import { Heart } from "lucide-react";

export const HeroImage = () => {
	return (
		<div className="relative">
			<div
				className="h-48 sm:h-64 md:h-80 transition-all duration-700 ease-out hover:scale-105"
				style={{
					// backgroundImage: `url('/tomoko-uji-kxvn1ogpTtE-unsplash.jpg')`,
					backgroundImage: ` url('/potrait.jpeg'),url('/tomoko-uji-kxvn1ogpTtE-unsplash.jpg')`,
					backgroundSize: "contain, cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundBlendMode: "darken",
				}}
			>
				{/* Photo by{" "}
				<a href="https://unsplash.com/@ujitomo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
					TOMOKO UJI
				</a>{" "}
				on{" "}
				<a href="https://unsplash.com/photos/pink-and-white-flowers-under-white-sky-during-daytime-kxvn1ogpTtE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
					Unsplash
				</a> */}
				{/* <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" /> */}
			</div>

			<div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
				<div className="bg-white rounded-full p-4 shadow-lg animate-float">
					<Heart className="text-rose-500 w-8 sm:w-10 h-8 sm:h-10 animate-pulse-glow" />
				</div>
			</div>
		</div>
	);
};

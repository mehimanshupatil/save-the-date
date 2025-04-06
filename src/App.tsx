import React, { useEffect } from "react";
import { Calendar } from "lucide-react";
import { HeroImage } from "./components/HeroImage";
import { SaveDateButton } from "./components/SaveDateButton";
import { DecorativeSparkles } from "./components/DecorativeSparkles";
// import { CountdownTimer } from "./components/CountdownTimer";
import { MusicPlayer } from "./components/MusicPlayer";
import { generateCalendarEvent } from "./utils/calendar";
import { Curtains } from "./components/Curtains";
 
function App() {
 
	return (<>			<Curtains/> 

		<div
			className="min-h-screen relative overflow-hidden  bg-white 
                     after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur-[100px]"
		>
			
			<div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
				<div
					className="max-w-sm sm:max-w-md md:max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden 
                      transform hover:scale-[1.02] transition-all duration-500 ease-out
                      border border-rose-100/50"
				>
					<HeroImage />

					<div className="px-6 pt-12 pb-8 sm:px-8 sm:pt-14 md:p-12 text-center relative overflow-hidden">
						<DecorativeSparkles />

						<div className="space-y-8">
							<div className="space-y-4 animate-fade-in">
								<h2
									className="text-gray-600 text-base sm:text-lg font-light tracking-[0.2em] uppercase 
                             bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text text-transparent"
								>
									Please Save the Date
								</h2>

								<div className="space-y-2">
									<h3 className="text-rose-400 text-lg sm:text-xl font-light animate-slide-in stagger-delay-1">
										For the wedding of
									</h3>
									<h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight animate-slide-in stagger-delay-2">
										<span className="hover:text-rose-600 transition-colors duration-300">
											Shremal
										</span>
										<span className="inline-block mx-2 sm:mx-4 text-rose-400 animate-pulse-glow">
											&
										</span>
										<span className="hover:text-rose-600 transition-colors duration-300">
											Himanshu
										</span>
									</h1>
								</div>
							</div>

							<div
								className="flex items-center justify-center gap-3 text-lg sm:text-xl text-rose-600 animate-slide-in stagger-delay-3
                            transform hover:scale-105 transition-transform duration-300"
							>
								<Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
								<span className="font-light">
									6<sup>th</sup> February 2026
								</span>
							</div>

							{/* <CountdownTimer /> */}

							{/* <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base animate-fade-in
                            hover:text-rose-500 transition-colors duration-300">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-light italic">Formal invitation to follow</span>
              </div> */}

							<SaveDateButton onClick={generateCalendarEvent} />
						</div>
					</div>

					<div className="h-2 bg-gradient-to-r from-rose-300 via-rose-400 to-pink-500" />
				</div>
			</div>
			<MusicPlayer />
		</div>
		</>
	);
}

export default App;

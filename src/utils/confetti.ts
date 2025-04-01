import confetti from "canvas-confetti";

const heartPath =
	"M200 85c22,-44 44,-65 90,-65 50,0 90,40 90,90 0,90 -90,180 -180,270 -90,-90 -180,-180 -180,-270 0,-50 40,-90 90,-90 46,0 68,21 90,65z";

// Precomputed transformation matrix (calculated once)
const heartMatrix = [0.05, 0, 0, 0.05, -10, -10];
// @ts-ignore
const heart = confetti.shapeFromPath({
	path: heartPath,
	matrix: heartMatrix,
});

const count = 200;
const defaults: confetti.Options = {
	origin: { y: 0.7 },
	// shapes: ["circle"],
	shapes: [heart],
	colors: ["#f43f5e", "#fb7185", "#fda4af"],
};
function fire(particleRatio: number, opts: confetti.Options) {
	confetti({
		...defaults,
		...opts,
		particleCount: Math.floor(count * particleRatio),
	});
}
export const triggerConfetti = () => {
	fire(0.25, {
		spread: 26,
		startVelocity: 55,
	});

	fire(0.2, {
		spread: 60,
	});

	fire(0.35, {
		spread: 100,
		decay: 0.91,
		scalar: 0.8,
	});

	fire(0.1, {
		spread: 120,
		startVelocity: 25,
		decay: 0.92,
		scalar: 1.2,
	});

	fire(0.1, {
		spread: 120,
		startVelocity: 45,
	});
};

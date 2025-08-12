"use client";

import { useEffect } from "react";
import { Gradient } from "@/lib/utils/client/gradient.js";

export default function GradientHero() {
	useEffect(() => {
		try {
			// Create your instance
			const gradient = new Gradient();

			// Call `initGradient` with the selector to your canvas
			gradient.initGradient("#gradient-canvas");
		} catch (error) {
			console.warn("Gradient initialization failed:", error);
			// Fallback: hide the canvas if gradient fails
			const canvas = document.getElementById("gradient-canvas");
			if (canvas) {
				canvas.style.display = "none";
			}
		}
	}, []);

	return (
		<>
			<style>
				{`
            #gradient-canvas {
            width:100%;
            height:100%;
            }
         `}
			</style>
			<canvas
				className="absolute bottom-0 left-0 right-0 top-0 -z-10"
				id="gradient-canvas"
				data-transition-in
			/>
		</>
	);
}

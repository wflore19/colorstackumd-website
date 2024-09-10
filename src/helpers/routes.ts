export function getRoutes() {
	// During your Astro build, this code will run and generate the manifest
	const manifest = import.meta.glob("/src/pages/**/*.astro", { eager: true });

	const routes = Object.keys(manifest).map((path) => {
		// Clean up the path to match your route structure
		const routePath = path
			.replace("/src/pages", "") // Remove the base directory
			.replace(".astro", "") // Remove the file extension
			.replace(/\/index$/, "") // Handle index routes
			.replace(/\[([^\]]+)\]/g, ":$1"); // Convert dynamic segments to route params

		return routePath || "/";
	});

	return routes;
}

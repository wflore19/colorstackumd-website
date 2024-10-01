// src/helpers/routes.ts

interface Route {
	name: string;
	path: string;
}
  
export function getRoutes(): Route[] {
return [
	{
	name: 'Home',
	path: '/'
	},
	{
	name: 'About',
	path: '/about'
	},
	{
	name: 'Events',
	path: '/events'
	},
];
}

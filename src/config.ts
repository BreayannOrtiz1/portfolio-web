// ============================================================
// SITE CONFIGURATION — edit this file to update your portfolio
// ============================================================

export const SITE = {
	title: 'Breayann Ortiz Aldana',
	description:
		'Electronic Engineer & IoT Systems Lead. Specializing in embedded systems, LoRaWAN deployments, and end-to-end IoT architecture.',
	url: 'https://portfolio.greenvibesgroup.com',
	ogImage: '/og-image.png',
};

export const AUTHOR = {
	name: 'Breayann Ortiz Aldana',
	role: 'Electronic Engineer & IoT Systems Lead',
	bio: 'I translate complex business requirements into robust IoT architectures. With 4+ years of experience leading end-to-end deployments — from PCB design to cloud dashboards — across energy, agriculture, and environmental monitoring sectors.',
	location: 'Bogotá D.C., Colombia',
	email: 'breayanortiz@gmail.com',
	phone: '+57 311 474 2178',
	photo: '../public/profile.jpg', // Place your photo at public/profile.jpg
};

export const SOCIAL = {
	linkedin: 'https://www.linkedin.com/in/breayann-ortiz-aldana/',
	github: 'https://github.com/BreayannOrtiz1', // update if needed
	email: 'mailto:breayanortiz@gmail.com',
};

export const NAV_LINKS = [
	{ label: 'Work', href: '/projects' },
	{ label: 'Experience', href: '/experience' },
	//{ label: 'Blog', href: '/blog' },
	{ label: 'Contact', href: '/#contact' },
];

export const SKILLS = [
	{
		category: 'Firmware & Software',
		icon: 'cpu',
		items: [
			'C / Embedded C',
			'MicroPython',
			'Python',
			'MATLAB / Simulink',
			'Arduino',
			'VHDL',
			'Bash',
			'JavaScript',
			'React',
		],
	},
	{
		category: 'Cloud & Data',
		icon: 'cloud',
		items: ['Azure', 'Grafana', 'InfluxDB', 'Node-RED', 'SQL / MySQL', 'Power BI', 'Google Colab'],
	},
	{
		category: 'Hardware & PCB',
		icon: 'circuit-board',
		items: ['KiCAD', 'Altium Designer', 'OrCAD', 'LTspice', 'Tina Design', 'Fusion 360', 'PCB Prototyping'],
	},
	{
		category: 'Protocols & Connectivity',
		icon: 'wifi',
		items: ['LoRaWAN', 'MQTT', 'I2C', 'USART / UART', 'GPS', 'WiFi / BLE', 'RS-485'],
	},
];

// Site-wide UI strings
export const UI = {
	heroTagline: 'IoT Engineer · Embedded Systems · End-to-End Deployments',
	heroCtaPrimary: { label: 'View My Work', href: '/projects' },
	heroCtaSecondary: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/breayann-ortiz-aldana/' },
	projectsSectionTitle: 'Featured Projects',
	experienceSectionTitle: 'Experience',
	skillsSectionTitle: 'Technical Skills',
	contactSectionTitle: "Let's Work Together",
	contactBody:
		'Available for IoT consulting, embedded systems development, and technical leadership roles. Currently based in Bogotá.',
};

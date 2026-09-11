export interface Page {
	title: string;
	description: string;
	/** A single-destination card is the link itself; the whole card is clickable. */
	url?: string;
	/** A multi-destination card (e.g. an extension on Chrome + Firefox) renders
	 *  these as buttons instead of being one link. */
	links?: { label: string; url: string }[];
	/** Small tags next to the title marking what kind of thing this is and/or
	 *  what it's for. Also used to drive the badge filter below. */
	badges?: string[];
	/** GitHub repo URL, shown as a low-key source link in the card corner. */
	repo?: string;
	/** Key of the star this project is named after, see src/data/stars.ts */
	star?: string;
}

export const pages: Page[] = [
	{
		title: 'Blog',
		description: 'Unofficial CharaChorder and Forge notes and articles, with a Traditional Chinese version linked inside',
		url: 'https://andy23512.github.io/blog/',
		repo: 'https://github.com/andy23512/blog',
		badges: ['Docs'],
	},
	{
		title: 'Alnasl',
		description: 'An unofficial practice tool for the built-in mouse of CharaChorder 3D input devices',
		url: 'https://andy23512.github.io/alnasl/',
		repo: 'https://github.com/andy23512/alnasl',
		star: 'alnasl',
		badges: ['Practice'],
	},
	{
		title: 'Alnitak',
		description: 'An unofficial practice tool tailored for CharaChorder 3D input devices',
		url: 'https://andy23512.github.io/alnitak/',
		repo: 'https://github.com/andy23512/alnitak',
		star: 'alnitak',
		badges: ['Practice'],
	},
	{
		title: 'Alnilam',
		description: 'An unofficial practice tool tailored for CharaChorder Lite',
		url: 'https://andy23512.github.io/alnilam/',
		repo: 'https://github.com/andy23512/alnilam',
		star: 'alnilam',
		badges: ['Practice'],
	},
	{
		title: 'Arcturus',
		description: 'An unofficial "Your Life in Weeks" style chart that highlights how many weeks of your life you\'ve spent typing with a CharaChorder',
		url: 'https://andy23512.github.io/arcturus/',
		repo: 'https://github.com/andy23512/arcturus',
		star: 'arcturus',
		badges: ['Statistics'],
	},
	{
		title: 'Castor',
		description: 'An unofficial viewer for seeing a CharaChorder device at its real, physical size on your screen',
		url: 'https://andy23512.github.io/castor/',
		repo: 'https://github.com/andy23512/castor',
		star: 'castor',
		badges: ['Specs'],
	},
	{
		title: 'CCOS Meta Viewer',
		description: 'An unofficial data viewer for the official CharaChorder Firmware Meta API',
		url: 'https://andy23512.github.io/ccos-meta-viewer/',
		repo: 'https://github.com/andy23512/ccos-meta-viewer',
		badges: ['Specs'],
	},
	{
		title: 'Chara',
		description: 'An unofficial chord practice tool tailored for CharaChorder 3D input devices',
		url: 'https://andy23512.github.io/chara/',
		repo: 'https://github.com/andy23512/chara',
		star: 'chara',
		badges: ['Practice'],
	},
	{
		title: 'Chara Chronus',
		description: 'An unofficial chronicle for CharaChorder',
		url: 'https://andy23512.github.io/chara-chronus/',
		repo: 'https://github.com/andy23512/chara-chronus',
		badges: ['Docs'],
	},
	{
		title: 'CharaChorder Docs',
		description: 'An unofficial fork of the official CharaChorder documentation, maintained by Tangent',
		url: 'https://andy23512.github.io/charachorder-docs/',
		repo: 'https://github.com/andy23512/charachorder-docs',
		badges: ['Docs'],
	},
	{
		title: 'Capella',
		description: 'An unofficial tutorial site for CharaChorder 3D input devices (CharaChorder One, CharaChorder Two, CCU, and Master Forge)',
		url: 'https://andy23512.github.io/capella/',
		repo: 'https://github.com/andy23512/capella',
		star: 'capella',
		badges: ['Docs', 'Practice'],
	},
	{
		title: 'Chorder\'s Almanac',
		description: 'An unofficial daily almanac for CharaChorder users, with a date-seeded Do / Don\'t, a fortune, and moments from typing history',
		url: 'https://andy23512.github.io/chorder-almanac/',
		repo: 'https://github.com/andy23512/chorder-almanac',
	},
	{
		title: 'Device Comparator',
		description: 'An unofficial website for comparing the differences between the specs of CharaChorder devices',
		url: 'https://andy23512.github.io/device-comparator/',
		repo: 'https://github.com/andy23512/device-comparator',
		badges: ['Specs'],
	},
	{
		title: 'Formosa',
		description: 'A practice tool for typing Bopomofo (Zhuyin) chords',
		url: 'https://andy23512.github.io/formosa/',
		repo: 'https://github.com/andy23512/formosa',
		star: 'formosa',
		badges: ['Practice'],
	},
	{
		title: 'Mira',
		description: 'An unofficial explorer for the percentile learning curves of CharaChorder devices, showing where a typing speed sits among everyone else\'s at the same point in practice',
		url: 'https://andy23512.github.io/mira/',
		repo: 'https://github.com/andy23512/mira',
		star: 'mira',
		badges: ['Statistics'],
	},
	{
		title: 'TanChord Code',
		description: 'An unofficial, experimental editor that allows you to edit the chord library of your CharaChorder device, similar to editing code in a code editor',
		url: 'https://andy23512.github.io/tccode/',
		repo: 'https://github.com/andy23512/tccode',
		badges: ['Editor'],
	},
	{
		title: 'Sirius',
		description: 'An unofficial cross-platform desktop layout viewer and key tester for CharaChorder 3D that lights up the keys you press in real time',
		repo: 'https://github.com/andy23512/sirius',
		star: 'sirius',
		badges: ['app'],
		links: [
			{
				label: 'Download',
				url: 'https://github.com/andy23512/sirius/releases',
			},
		],
	},
	{
		title: 'Keybr CC Extension',
		description: 'An unofficial browser extension for showing the layout of CharaChorder input devices on Keybr',
		repo: 'https://github.com/andy23512/keybr-cc-extension',
		badges: ['extension', 'Practice'],
		links: [
			{
				label: 'Chrome',
				url: 'https://chromewebstore.google.com/detail/keybr-cc-extension/fdofhfbipdhkkhhdjlfjnjfnkibpbdpg',
			},
			{
				label: 'Firefox',
				url: 'https://addons.mozilla.org/en-US/firefox/addon/keybr-cc-extension/',
			},
		],
	},
	{
		title: 'Monkeytype CC Extension',
		description: 'An unofficial browser extension for showing the layout of CharaChorder input devices on Monkeytype',
		repo: 'https://github.com/andy23512/monkeytype-cc-extension',
		badges: ['extension', 'Practice'],
		links: [
			{
				label: 'Chrome',
				url: 'https://chromewebstore.google.com/detail/monkeytype-cc-extension/mhfjhmegecimjbohhdbflkhdfnaadple',
			},
			{
				label: 'Firefox',
				url: 'https://addons.mozilla.org/en-US/firefox/addon/monkeytype-cc-extension/',
			},
		],
	},
];

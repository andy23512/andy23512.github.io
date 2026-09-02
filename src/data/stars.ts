export interface Star {
	/** Right ascension in hours (J2000) */
	ra: number;
	/** Declination in degrees (J2000) */
	dec: number;
	/** Apparent visual magnitude */
	mag: number;
	/** Proper name, only for stars worth labelling */
	name?: string;
	/** Key used to link a star to a project on the home page */
	key?: string;
}

export const stars: Star[] = [
	// Orion
	{ ra: 5.919, dec: 7.407, mag: 0.5, name: 'Betelgeuse' },
	{ ra: 5.242, dec: -8.202, mag: 0.13, name: 'Rigel' },
	{ ra: 5.418, dec: 6.35, mag: 1.64, name: 'Bellatrix' },
	{ ra: 5.796, dec: -9.67, mag: 2.06, name: 'Saiph' },
	{ ra: 5.679, dec: -1.943, mag: 1.77, name: 'Alnitak', key: 'alnitak' },
	{ ra: 5.604, dec: -1.202, mag: 1.69, name: 'Alnilam', key: 'alnilam' },
	{ ra: 5.533, dec: -0.299, mag: 2.25, name: 'Mintaka' },
	{ ra: 5.585, dec: 9.934, mag: 3.39, name: 'Meissa' },

	// Canes Venatici
	{ ra: 12.934, dec: 38.318, mag: 2.89, name: 'Cor Caroli' },
	{ ra: 12.562, dec: 41.357, mag: 4.24, name: 'Chara', key: 'chara' },

	// Ursa Major
	{ ra: 11.062, dec: 61.751, mag: 1.79, name: 'Dubhe' },
	{ ra: 11.031, dec: 56.382, mag: 2.37, name: 'Merak' },
	{ ra: 11.897, dec: 53.695, mag: 2.44, name: 'Phecda' },
	{ ra: 12.257, dec: 57.033, mag: 3.31, name: 'Megrez' },
	{ ra: 12.9, dec: 55.96, mag: 1.77, name: 'Alioth' },
	{ ra: 13.399, dec: 54.925, mag: 2.23, name: 'Mizar' },
	{ ra: 13.792, dec: 49.313, mag: 1.86, name: 'Alkaid' },

	// Cassiopeia
	{ ra: 0.675, dec: 56.537, mag: 2.24, name: 'Schedar' },
	{ ra: 0.153, dec: 59.15, mag: 2.28, name: 'Caph' },
	{ ra: 0.945, dec: 60.717, mag: 2.15, name: 'γ Cas' },
	{ ra: 1.43, dec: 60.235, mag: 2.66, name: 'Ruchbah' },
	{ ra: 1.906, dec: 63.67, mag: 3.35, name: 'Segin' },

	// Cygnus
	{ ra: 20.69, dec: 45.28, mag: 1.25, name: 'Deneb' },
	{ ra: 20.37, dec: 40.257, mag: 2.23, name: 'Sadr' },
	{ ra: 19.512, dec: 27.96, mag: 3.05, name: 'Albireo' },
	{ ra: 19.749, dec: 45.131, mag: 2.87 },
	{ ra: 20.77, dec: 33.97, mag: 2.48, name: 'Gienah' },

	// Scorpius
	{ ra: 16.49, dec: -26.432, mag: 1.06, name: 'Antares' },
	{ ra: 17.56, dec: -37.104, mag: 1.62, name: 'Shaula' },
	{ ra: 16.09, dec: -19.805, mag: 2.62, name: 'Graffias' },
	{ ra: 16.005, dec: -22.622, mag: 2.29, name: 'Dschubba' },
	{ ra: 17.622, dec: -42.998, mag: 1.86, name: 'Sargas' },

	// Crux
	{ ra: 12.443, dec: -63.099, mag: 0.77, name: 'Acrux' },
	{ ra: 12.795, dec: -59.689, mag: 1.25, name: 'Mimosa' },
	{ ra: 12.519, dec: -57.113, mag: 1.63, name: 'Gacrux' },
	{ ra: 12.252, dec: -58.749, mag: 2.79, name: 'Imai' },

	// Gemini (Castor, Pollux and Alhena are among the bright stars below)
	{ ra: 6.732, dec: 25.131, mag: 3.06, name: 'Mebsuta' },
	{ ra: 7.068, dec: 20.57, mag: 4.01, name: 'Mekbuda' },
	{ ra: 7.335, dec: 21.982, mag: 3.5, name: 'Wasat' },
	{ ra: 6.383, dec: 22.514, mag: 2.87, name: 'Tejat' },
	{ ra: 6.248, dec: 22.507, mag: 3.31, name: 'Propus' },

	// Canis Major (Sirius, Adhara and Wezen are among the bright stars below)
	{ ra: 6.378, dec: -17.956, mag: 1.98, name: 'Mirzam' },
	{ ra: 7.063, dec: -15.633, mag: 4.12, name: 'Muliphein' },
	{ ra: 7.402, dec: -29.303, mag: 2.45, name: 'Aludra' },
	{ ra: 6.338, dec: -30.063, mag: 3.02, name: 'Furud' },

	// Leo (Regulus and Denebola are among the bright stars below)
	{ ra: 10.333, dec: 19.842, mag: 2.37, name: 'Algieba' },
	{ ra: 11.235, dec: 20.524, mag: 2.56, name: 'Zosma' },
	{ ra: 11.237, dec: 15.43, mag: 3.33, name: 'Chort' },
	{ ra: 10.278, dec: 23.417, mag: 3.43, name: 'Adhafera' },
	{ ra: 9.879, dec: 26.007, mag: 3.88, name: 'Rasalas' },
	{ ra: 9.764, dec: 23.774, mag: 2.97, name: 'Algenubi' },
	{ ra: 10.122, dec: 16.763, mag: 3.48, name: 'η Leo' },
	{ ra: 11.584, dec: 20.442, mag: 6.45, name: 'Formosa', key: 'formosa' },

	// Sagittarius / the Teapot (Kaus Australis and Nunki are among the bright stars below)
	{ ra: 18.097, dec: -30.424, mag: 2.98, name: 'Alnasl', key: 'alnasl' },
	{ ra: 18.35, dec: -29.828, mag: 2.72, name: 'Kaus Media' },
	{ ra: 18.466, dec: -25.421, mag: 2.82, name: 'Kaus Borealis' },
	{ ra: 19.043, dec: -29.88, mag: 2.6, name: 'Ascella' },
	{ ra: 18.761, dec: -26.991, mag: 3.17, name: 'φ Sgr' },
	{ ra: 19.116, dec: -27.67, mag: 3.32, name: 'τ Sgr' },

	// Cetus (Menkar and Diphda are among the bright stars below)
	// Mira is a variable star, 2.0 at its brightest and 10.1 at its faintest. The
	// chart needs a single number, and this one keeps it the size of its neighbours.
	{ ra: 2.322, dec: -2.978, mag: 3.04, name: 'Mira', key: 'mira' },
	{ ra: 2.722, dec: 3.236, mag: 3.47, name: 'Kaffaljidhma' },
	{ ra: 2.658, dec: 0.329, mag: 4.07, name: 'δ Cet' },
	{ ra: 1.858, dec: -10.335, mag: 3.72, name: 'Baten Kaitos' },
	{ ra: 1.734, dec: -15.937, mag: 3.5, name: 'Durre Menthor' },
	{ ra: 1.4, dec: -8.183, mag: 3.59, name: 'θ Cet' },
	{ ra: 1.143, dec: -10.182, mag: 3.45, name: 'Deneb Algenubi' },
	{ ra: 0.324, dec: -8.824, mag: 3.55, name: 'ι Cet' },
	{ ra: 2.469, dec: 8.46, mag: 4.3, name: 'ξ² Cet' },
	{ ra: 2.749, dec: 10.114, mag: 4.26, name: 'μ Cet' },
	{ ra: 2.995, dec: 8.907, mag: 4.7, name: 'λ Cet' },

	// Other bright stars
	{ ra: 6.752, dec: -16.716, mag: -1.46, name: 'Sirius', key: 'sirius' },
	{ ra: 6.399, dec: -52.696, mag: -0.74, name: 'Canopus' },
	{ ra: 14.261, dec: 19.182, mag: -0.05, name: 'Arcturus', key: 'arcturus' },
	{ ra: 18.615, dec: 38.784, mag: 0.03, name: 'Vega' },
	{ ra: 5.278, dec: 45.998, mag: 0.08, name: 'Capella', key: 'capella' },
	{ ra: 7.655, dec: 5.225, mag: 0.34, name: 'Procyon' },
	{ ra: 1.629, dec: -57.237, mag: 0.46, name: 'Achernar' },
	{ ra: 19.846, dec: 8.868, mag: 0.77, name: 'Altair' },
	{ ra: 4.599, dec: 16.509, mag: 0.85, name: 'Aldebaran' },
	{ ra: 13.42, dec: -11.161, mag: 0.97, name: 'Spica' },
	{ ra: 7.755, dec: 28.026, mag: 1.14, name: 'Pollux' },
	{ ra: 22.961, dec: -29.622, mag: 1.16, name: 'Fomalhaut' },
	{ ra: 7.577, dec: 31.888, mag: 1.58, name: 'Castor', key: 'castor' },
	{ ra: 10.139, dec: 11.967, mag: 1.35, name: 'Regulus' },
	{ ra: 6.977, dec: -28.972, mag: 1.5, name: 'Adhara' },
	{ ra: 14.66, dec: -60.834, mag: -0.27, name: 'Rigil Kentaurus' },
	{ ra: 14.064, dec: -60.373, mag: 0.61, name: 'Hadar' },
	{ ra: 22.137, dec: -46.961, mag: 1.74, name: 'Alnair' },
	{ ra: 9.46, dec: -8.659, mag: 1.98, name: 'Alphard' },
	{ ra: 2.53, dec: 89.264, mag: 1.98, name: 'Polaris' },
	{ ra: 0.14, dec: 29.09, mag: 2.06, name: 'Alpheratz' },
	{ ra: 1.162, dec: 35.62, mag: 2.05, name: 'Mirach' },
	{ ra: 2.065, dec: 42.33, mag: 2.1, name: 'Almach' },
	{ ra: 2.119, dec: 23.462, mag: 2.0, name: 'Hamal' },
	{ ra: 3.038, dec: 4.09, mag: 2.53, name: 'Menkar' },
	{ ra: 3.136, dec: 40.956, mag: 2.12, name: 'Algol' },
	{ ra: 3.405, dec: 49.861, mag: 1.79, name: 'Mirfak' },
	{ ra: 3.791, dec: 24.105, mag: 2.87, name: 'Alcyone' },
	{ ra: 11.818, dec: 14.572, mag: 2.14, name: 'Denebola' },
	{ ra: 15.578, dec: 26.715, mag: 2.22, name: 'Alphecca' },
	{ ra: 17.582, dec: 12.56, mag: 2.08, name: 'Rasalhague' },
	{ ra: 17.943, dec: 51.489, mag: 2.23, name: 'Eltanin' },
	{ ra: 18.403, dec: -34.385, mag: 1.85, name: 'Kaus Australis' },
	{ ra: 18.921, dec: -26.297, mag: 2.05, name: 'Nunki' },
	{ ra: 21.736, dec: 9.875, mag: 2.38, name: 'Enif' },
	{ ra: 23.079, dec: 15.205, mag: 2.49, name: 'Markab' },
	{ ra: 23.063, dec: 28.083, mag: 2.42, name: 'Scheat' },
	{ ra: 0.221, dec: 15.184, mag: 2.83, name: 'Algenib' },
	{ ra: 0.726, dec: -17.987, mag: 2.04, name: 'Diphda' },
	{ ra: 5.992, dec: 44.947, mag: 1.9, name: 'Menkalinan' },
	{ ra: 5.438, dec: 28.608, mag: 1.65, name: 'Elnath' },
	{ ra: 6.629, dec: 16.399, mag: 1.93, name: 'Alhena' },
	{ ra: 7.14, dec: -26.393, mag: 1.83, name: 'Wezen' },
	{ ra: 8.06, dec: -40.003, mag: 2.21, name: 'Naos' },
	{ ra: 8.375, dec: -59.51, mag: 1.86, name: 'Avior' },
	{ ra: 9.22, dec: -69.717, mag: 1.67, name: 'Miaplacidus' },
	{ ra: 8.745, dec: -54.709, mag: 1.75, name: 'Alsephina' },
	{ ra: 9.133, dec: -43.433, mag: 2.21, name: 'Suhail' },
	{ ra: 16.811, dec: -69.028, mag: 1.91, name: 'Atria' },
	{ ra: 20.427, dec: -56.735, mag: 1.94, name: 'Peacock' },
];

/** Constellation figures, each an array of polylines of star names. */
export const constellationLines: string[][] = [
	// Orion
	['Betelgeuse', 'Alnitak', 'Alnilam', 'Mintaka', 'Bellatrix', 'Betelgeuse'],
	['Bellatrix', 'Meissa', 'Betelgeuse'],
	['Mintaka', 'Rigel'],
	['Alnitak', 'Saiph'],
	// Canes Venatici
	['Cor Caroli', 'Chara'],
	// Gemini, the twins
	['Castor', 'Pollux'],
	['Castor', 'Mebsuta', 'Tejat', 'Propus'],
	['Pollux', 'Wasat', 'Mekbuda', 'Alhena'],
	// Ursa Major
	['Dubhe', 'Merak', 'Phecda', 'Megrez', 'Alioth', 'Mizar', 'Alkaid'],
	['Megrez', 'Dubhe'],
	// Cassiopeia
	['Caph', 'Schedar', 'γ Cas', 'Ruchbah', 'Segin'],
	// Cygnus
	['Deneb', 'Sadr', 'Albireo'],
	['Gienah', 'Sadr'],
	// Scorpius
	['Graffias', 'Dschubba', 'Antares', 'Sargas', 'Shaula'],
	// Crux
	['Acrux', 'Gacrux'],
	['Mimosa', 'Imai'],
	// Canis Major, the great dog
	['Mirzam', 'Sirius', 'Muliphein'],
	['Sirius', 'Wezen', 'Aludra'],
	['Wezen', 'Adhara', 'Furud'],
	// Leo, the lion
	['Regulus', 'η Leo', 'Algieba', 'Adhafera', 'Rasalas', 'Algenubi'],
	['Algieba', 'Zosma', 'Denebola', 'Chort', 'Regulus'],
	// Sagittarius, the Teapot
	['Kaus Borealis', 'Kaus Media', 'Alnasl'],
	['Kaus Media', 'Kaus Australis', 'Ascella', 'φ Sgr', 'Kaus Borealis'],
	['φ Sgr', 'Nunki', 'τ Sgr', 'Ascella'],
	// Cetus, the sea monster
	['Menkar', 'λ Cet', 'μ Cet', 'ξ² Cet', 'Kaffaljidhma', 'Menkar'],
	['Kaffaljidhma', 'δ Cet', 'Mira', 'Baten Kaitos', 'Durre Menthor', 'Diphda'],
	['Diphda', 'ι Cet', 'Deneb Algenubi', 'θ Cet', 'Baten Kaitos'],
];

export const starByKey = new Map(
	stars.filter((s) => s.key).map((s) => [s.key as string, s]),
);

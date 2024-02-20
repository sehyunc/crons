const cspHeader = `
script-src 'wasm-unsafe-eval'
`;

/** @type {import('next').NextConfig} */
module.exports = {
	staticPageGenerationTimeout: 600,
	webpack: (config, options) => {
		config.experiments = {
			asyncWebAssembly: true,
			syncWebAssembly: true,
			layers: true,
			topLevelAwait: true,
		};
		return config;
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Content-Security-Policy",
						value: cspHeader.replace(/\n/g, ""),
					},
				],
			},
		];
	},
};

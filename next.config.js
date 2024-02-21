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
};


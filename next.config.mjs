/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add a rule for GLSL files
    config.module.rules.push({
      test: /\.glsl$/,
      use: [
        "raw-loader", // Loads the GLSL file as a raw string
        "glslify-loader", // Preprocesses the GLSL file (e.g., for #include directives)
      ],
    });

    return config;
  },
};

export default nextConfig;

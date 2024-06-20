import path from 'path';
import { fileURLToPath } from 'url';

// Esta linha é necessária para obter o equivalente de __dirname em módulos ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.moviedb.project',
  appName: 'MovieDB',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;

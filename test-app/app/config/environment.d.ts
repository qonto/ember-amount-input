/**
 * Type declarations for import config from 'my-app/config/environment'
 */
declare const config: {
  APP: Record<string, unknown>;
  environment: string;
  locationType: 'auto' | 'hash' | 'history' | 'none';
  modulePrefix: string;
  podModulePrefix: string;
  rootURL: string;
};

export default config;

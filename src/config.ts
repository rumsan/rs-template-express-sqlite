import 'dotenv/config';

const getEnv = (envVarName: string): string => {
  const value = process.env[envVarName];
  if (!value) {
    throw new Error(`Environment variable [${envVarName}] is not specified.`);
  }
  return value;
};

export const PORT = getEnv('PORT');
export const APP_NAME = getEnv('RS_APP_NAME');
export const PRIVATE_KEY = getEnv('RS_PRIVATE_KEY');

class Config {
  private _secret = '';
  get SECRET() {
    if (!this._secret) throw new Error('Secret not loaded');
    return this._secret;
  }

  public async load() {
    this._secret = getEnv('RS_SECRET');
  }
}
export default new Config();

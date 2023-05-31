import { DATA } from './_setup_data';
import config from '../src/config';

describe.only('App Tests', () => {
  it('should respond with app name', async () => {
    expect(DATA.APP_NAME).toBe('Rumsan');
  });
});

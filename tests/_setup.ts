import config from '../src/config';
(global as any).TESTDATA = {
  APPNAME: 'Rumsan',
};

beforeAll(async () => {
  await config.load();
});

afterAll((done) => {
  done();
});

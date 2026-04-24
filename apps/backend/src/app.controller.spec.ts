import { AppController } from './app.controller';

describe('AppController', () => {
  it('returns an ok health payload', () => {
    const controller = new AppController();

    expect(controller.getHealth()).toEqual({
      service: 'om-studio-backend',
      status: 'ok',
    });
  });
});


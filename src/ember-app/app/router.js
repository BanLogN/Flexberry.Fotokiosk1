import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-fotokiosk1-запись-время-l');
  this.route('i-i-s-fotokiosk1-запись-время-e',
  { path: 'i-i-s-fotokiosk1-запись-время-e/:id' });
  this.route('i-i-s-fotokiosk1-запись-время-e.new',
  { path: 'i-i-s-fotokiosk1-запись-время-e/new' });
  this.route('i-i-s-fotokiosk1-запись-клиента-l');
  this.route('i-i-s-fotokiosk1-запись-клиента-e',
  { path: 'i-i-s-fotokiosk1-запись-клиента-e/:id' });
  this.route('i-i-s-fotokiosk1-запись-клиента-e.new',
  { path: 'i-i-s-fotokiosk1-запись-клиента-e/new' });
  this.route('i-i-s-fotokiosk1-материал-l');
  this.route('i-i-s-fotokiosk1-материал-e',
  { path: 'i-i-s-fotokiosk1-материал-e/:id' });
  this.route('i-i-s-fotokiosk1-материал-e.new',
  { path: 'i-i-s-fotokiosk1-материал-e/new' });
  this.route('i-i-s-fotokiosk1-прайс-l');
  this.route('i-i-s-fotokiosk1-прайс-e',
  { path: 'i-i-s-fotokiosk1-прайс-e/:id' });
  this.route('i-i-s-fotokiosk1-прайс-e.new',
  { path: 'i-i-s-fotokiosk1-прайс-e/new' });
  this.route('i-i-s-fotokiosk1-сотрудники-l');
  this.route('i-i-s-fotokiosk1-сотрудники-e',
  { path: 'i-i-s-fotokiosk1-сотрудники-e/:id' });
  this.route('i-i-s-fotokiosk1-сотрудники-e.new',
  { path: 'i-i-s-fotokiosk1-сотрудники-e/new' });
  this.route('i-i-s-fotokiosk1-трудозатраты-l');
  this.route('i-i-s-fotokiosk1-трудозатраты-e',
  { path: 'i-i-s-fotokiosk1-трудозатраты-e/:id' });
  this.route('i-i-s-fotokiosk1-трудозатраты-e.new',
  { path: 'i-i-s-fotokiosk1-трудозатраты-e/new' });
});

export default Router;

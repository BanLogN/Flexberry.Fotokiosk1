import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk1-расход-материала', 'Unit | Model | i-i-s-fotokiosk1-расход-материала', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-fotokiosk1-запись-время',
    'model:i-i-s-fotokiosk1-запись-клиента',
    'model:i-i-s-fotokiosk1-материал',
    'model:i-i-s-fotokiosk1-прайс',
    'model:i-i-s-fotokiosk1-расход-материала',
    'model:i-i-s-fotokiosk1-сотрудники',
    'model:i-i-s-fotokiosk1-трудозатраты',
    'model:i-i-s-fotokiosk1-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

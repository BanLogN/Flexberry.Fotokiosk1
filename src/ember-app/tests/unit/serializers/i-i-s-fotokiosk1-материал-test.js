import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk1-материал', 'Unit | Serializer | i-i-s-fotokiosk1-материал', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-fotokiosk1-материал',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-fotokiosk1-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

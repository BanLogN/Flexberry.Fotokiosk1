import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  материал: DS.belongsTo('i-i-s-fotokiosk1-материал', { inverse: null, async: false }),
  трудозатраты: DS.belongsTo('i-i-s-fotokiosk1-трудозатраты', { inverse: 'расходМатериала', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-fotokiosk1-расход-материала.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-fotokiosk1-расход-материала.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  трудозатраты: {
    descriptionKey: 'models.i-i-s-fotokiosk1-расход-материала.validations.трудозатраты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасходМатериалаE', 'i-i-s-fotokiosk1-расход-материала', {
    материал: belongsTo('i-i-s-fotokiosk1-материал', 'Материал', {
      наименование: attr('Наименование', { index: 1, hidden: true }),
      марка: attr('Марка', { index: 3 })
    }, { index: 0, displayMemberPath: 'наименование' }),
    количество: attr('Количество', { index: 2 })
  });
};

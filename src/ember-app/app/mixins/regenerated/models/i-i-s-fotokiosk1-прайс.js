import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-fotokiosk1-прайс.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-fotokiosk1-прайс.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПрайсE', 'i-i-s-fotokiosk1-прайс', {
    наименование: attr('Наименование', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });

  modelClass.defineProjection('ПрайсL', 'i-i-s-fotokiosk1-прайс', {
    наименование: attr('Наименование', { index: 0 }),
    цена: attr('Цена', { index: 1 })
  });
};

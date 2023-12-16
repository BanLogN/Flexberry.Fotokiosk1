import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  марка: DS.attr('string'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-fotokiosk1-материал.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  марка: {
    descriptionKey: 'models.i-i-s-fotokiosk1-материал.validations.марка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-fotokiosk1-материал.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалE', 'i-i-s-fotokiosk1-материал', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    марка: attr('Марка', { index: 2 })
  });

  modelClass.defineProjection('МатериалL', 'i-i-s-fotokiosk1-материал', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    марка: attr('Марка', { index: 2 })
  });
};

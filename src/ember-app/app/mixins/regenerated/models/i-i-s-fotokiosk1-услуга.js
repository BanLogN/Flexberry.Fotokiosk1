import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаУслуги: DS.attr('date'),
  записьВремя: DS.belongsTo('i-i-s-fotokiosk1-запись-время', { inverse: null, async: false }),
  прайс: DS.belongsTo('i-i-s-fotokiosk1-прайс', { inverse: null, async: false }),
  записьКлиента: DS.belongsTo('i-i-s-fotokiosk1-запись-клиента', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  датаУслуги: {
    descriptionKey: 'models.i-i-s-fotokiosk1-услуга.validations.датаУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  записьВремя: {
    descriptionKey: 'models.i-i-s-fotokiosk1-услуга.validations.записьВремя.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  прайс: {
    descriptionKey: 'models.i-i-s-fotokiosk1-услуга.validations.прайс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьКлиента: {
    descriptionKey: 'models.i-i-s-fotokiosk1-услуга.validations.записьКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-fotokiosk1-услуга', {
    датаУслуги: attr('Дата услуги', { index: 0 }),
    прайс: belongsTo('i-i-s-fotokiosk1-прайс', 'Прайс', {
      наименование: attr('Наименование', { index: 2, hidden: true }),
      цена: attr('Цена', { index: 3 })
    }, { index: 1, displayMemberPath: 'наименование' }),
    записьВремя: belongsTo('i-i-s-fotokiosk1-запись-время', 'Запись время', {
      время: attr('Время', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'время' })
  });
};

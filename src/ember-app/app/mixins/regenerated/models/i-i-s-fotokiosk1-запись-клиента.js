import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗаписи: DS.attr('date', { defaultValue() { return new Date(); } }),
  телефон: DS.attr('string'),
  фамилияИмя: DS.attr('string'),
  сотрудники: DS.belongsTo('i-i-s-fotokiosk1-сотрудники', { inverse: null, async: false }),
  услуга: DS.hasMany('i-i-s-fotokiosk1-услуга', { inverse: 'записьКлиента', async: false })
});

export let ValidationRules = {
  датаЗаписи: {
    descriptionKey: 'models.i-i-s-fotokiosk1-запись-клиента.validations.датаЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-fotokiosk1-запись-клиента.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилияИмя: {
    descriptionKey: 'models.i-i-s-fotokiosk1-запись-клиента.validations.фамилияИмя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-fotokiosk1-запись-клиента.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-fotokiosk1-запись-клиента.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьКлиентаE', 'i-i-s-fotokiosk1-запись-клиента', {
    датаЗаписи: attr('Дата записи', { index: 0 }),
    фамилияИмя: attr('Фамилия имя', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    сотрудники: belongsTo('i-i-s-fotokiosk1-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    услуга: hasMany('i-i-s-fotokiosk1-услуга', 'Услуга', {
      датаУслуги: attr('Дата услуги', { index: 0 }),
      прайс: belongsTo('i-i-s-fotokiosk1-прайс', 'Прайс', {
        наименование: attr('Наименование', { index: 2, hidden: true }),
        цена: attr('Цена', { index: 3 })
      }, { index: 1, displayMemberPath: 'наименование' }),
      записьВремя: belongsTo('i-i-s-fotokiosk1-запись-время', 'Запись время', {
        время: attr('Время', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'время' })
    })
  });

  modelClass.defineProjection('ЗаписьКлиентаL', 'i-i-s-fotokiosk1-запись-клиента', {
    датаЗаписи: attr('Дата записи', { index: 0 }),
    фамилияИмя: attr('Фамилия имя', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    сотрудники: belongsTo('i-i-s-fotokiosk1-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};

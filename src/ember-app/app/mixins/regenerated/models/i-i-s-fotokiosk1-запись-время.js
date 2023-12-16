import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  статус: DS.attr('i-i-s-fotokiosk1-статусы'),
  сотрудники: DS.belongsTo('i-i-s-fotokiosk1-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-fotokiosk1-запись-время.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-fotokiosk1-запись-время.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-fotokiosk1-запись-время.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьВремяE', 'i-i-s-fotokiosk1-запись-время', {
    время: attr('Время', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    сотрудники: belongsTo('i-i-s-fotokiosk1-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ЗаписьВремяL', 'i-i-s-fotokiosk1-запись-время', {
    время: attr('Время', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    сотрудники: belongsTo('i-i-s-fotokiosk1-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

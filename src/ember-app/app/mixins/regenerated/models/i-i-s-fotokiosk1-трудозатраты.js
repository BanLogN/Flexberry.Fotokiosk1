import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОтчета: DS.attr('date'),
  сотрудники: DS.belongsTo('i-i-s-fotokiosk1-сотрудники', { inverse: null, async: false }),
  расходМатериала: DS.hasMany('i-i-s-fotokiosk1-расход-материала', { inverse: 'трудозатраты', async: false })
});

export let ValidationRules = {
  датаОтчета: {
    descriptionKey: 'models.i-i-s-fotokiosk1-трудозатраты.validations.датаОтчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-fotokiosk1-трудозатраты.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расходМатериала: {
    descriptionKey: 'models.i-i-s-fotokiosk1-трудозатраты.validations.расходМатериала.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТрудозатратыE', 'i-i-s-fotokiosk1-трудозатраты', {
    датаОтчета: attr('Дата отчета', { index: 0 }),
    сотрудники: belongsTo('i-i-s-fotokiosk1-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true }),
      должность: attr('Должность', { index: 3 })
    }, { index: 1, displayMemberPath: 'фИО' }),
    расходМатериала: hasMany('i-i-s-fotokiosk1-расход-материала', 'Расход материала', {
      материал: belongsTo('i-i-s-fotokiosk1-материал', 'Материал', {
        наименование: attr('Наименование', { index: 1, hidden: true }),
        марка: attr('Марка', { index: 3 })
      }, { index: 0, displayMemberPath: 'наименование' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ТрудозатратыL', 'i-i-s-fotokiosk1-трудозатраты', {
    датаОтчета: attr('Дата отчета', { index: 0 }),
    сотрудники: belongsTo('i-i-s-fotokiosk1-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};

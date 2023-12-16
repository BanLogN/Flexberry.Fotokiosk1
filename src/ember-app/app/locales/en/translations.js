import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFotokiosk1ЗаписьВремяLForm from './forms/i-i-s-fotokiosk1-запись-время-l';
import IISFotokiosk1ЗаписьКлиентаLForm from './forms/i-i-s-fotokiosk1-запись-клиента-l';
import IISFotokiosk1МатериалLForm from './forms/i-i-s-fotokiosk1-материал-l';
import IISFotokiosk1ПрайсLForm from './forms/i-i-s-fotokiosk1-прайс-l';
import IISFotokiosk1СотрудникиLForm from './forms/i-i-s-fotokiosk1-сотрудники-l';
import IISFotokiosk1ТрудозатратыLForm from './forms/i-i-s-fotokiosk1-трудозатраты-l';
import IISFotokiosk1ЗаписьВремяEForm from './forms/i-i-s-fotokiosk1-запись-время-e';
import IISFotokiosk1ЗаписьКлиентаEForm from './forms/i-i-s-fotokiosk1-запись-клиента-e';
import IISFotokiosk1МатериалEForm from './forms/i-i-s-fotokiosk1-материал-e';
import IISFotokiosk1ПрайсEForm from './forms/i-i-s-fotokiosk1-прайс-e';
import IISFotokiosk1СотрудникиEForm from './forms/i-i-s-fotokiosk1-сотрудники-e';
import IISFotokiosk1ТрудозатратыEForm from './forms/i-i-s-fotokiosk1-трудозатраты-e';
import IISFotokiosk1ЗаписьВремяModel from './models/i-i-s-fotokiosk1-запись-время';
import IISFotokiosk1ЗаписьКлиентаModel from './models/i-i-s-fotokiosk1-запись-клиента';
import IISFotokiosk1МатериалModel from './models/i-i-s-fotokiosk1-материал';
import IISFotokiosk1ПрайсModel from './models/i-i-s-fotokiosk1-прайс';
import IISFotokiosk1РасходМатериалаModel from './models/i-i-s-fotokiosk1-расход-материала';
import IISFotokiosk1СотрудникиModel from './models/i-i-s-fotokiosk1-сотрудники';
import IISFotokiosk1ТрудозатратыModel from './models/i-i-s-fotokiosk1-трудозатраты';
import IISFotokiosk1УслугаModel from './models/i-i-s-fotokiosk1-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk1-запись-время': IISFotokiosk1ЗаписьВремяModel,
    'i-i-s-fotokiosk1-запись-клиента': IISFotokiosk1ЗаписьКлиентаModel,
    'i-i-s-fotokiosk1-материал': IISFotokiosk1МатериалModel,
    'i-i-s-fotokiosk1-прайс': IISFotokiosk1ПрайсModel,
    'i-i-s-fotokiosk1-расход-материала': IISFotokiosk1РасходМатериалаModel,
    'i-i-s-fotokiosk1-сотрудники': IISFotokiosk1СотрудникиModel,
    'i-i-s-fotokiosk1-трудозатраты': IISFotokiosk1ТрудозатратыModel,
    'i-i-s-fotokiosk1-услуга': IISFotokiosk1УслугаModel
  },

  'application-name': 'Fotokiosk1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Fotokiosk1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk1',
          title: 'Fotokiosk1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'работа-с-клиентами': {
          caption: 'Работа с клиентами',
          title: 'Работа с клиентами',
          'i-i-s-fotokiosk1-запись-время-l': {
            caption: 'Запись время',
            title: ''
          },
          'i-i-s-fotokiosk1-прайс-l': {
            caption: 'Прайс',
            title: ''
          },
          'i-i-s-fotokiosk1-запись-клиента-l': {
            caption: 'Запись клиента',
            title: ''
          }
        },
        'отчет-по-трудозатратам': {
          caption: 'Отчет по трудозатратам',
          title: 'Отчет по трудозатратам',
          'i-i-s-fotokiosk1-трудозатраты-l': {
            caption: 'Трудозатраты',
            title: ''
          }
        },
        'расходуемые-материалы': {
          caption: 'Расходуемые материалы',
          title: 'Расходуемые материалы',
          'i-i-s-fotokiosk1-материал-l': {
            caption: 'Материал',
            title: ''
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-fotokiosk1-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-fotokiosk1-запись-время-l': IISFotokiosk1ЗаписьВремяLForm,
    'i-i-s-fotokiosk1-запись-клиента-l': IISFotokiosk1ЗаписьКлиентаLForm,
    'i-i-s-fotokiosk1-материал-l': IISFotokiosk1МатериалLForm,
    'i-i-s-fotokiosk1-прайс-l': IISFotokiosk1ПрайсLForm,
    'i-i-s-fotokiosk1-сотрудники-l': IISFotokiosk1СотрудникиLForm,
    'i-i-s-fotokiosk1-трудозатраты-l': IISFotokiosk1ТрудозатратыLForm,
    'i-i-s-fotokiosk1-запись-время-e': IISFotokiosk1ЗаписьВремяEForm,
    'i-i-s-fotokiosk1-запись-клиента-e': IISFotokiosk1ЗаписьКлиентаEForm,
    'i-i-s-fotokiosk1-материал-e': IISFotokiosk1МатериалEForm,
    'i-i-s-fotokiosk1-прайс-e': IISFotokiosk1ПрайсEForm,
    'i-i-s-fotokiosk1-сотрудники-e': IISFotokiosk1СотрудникиEForm,
    'i-i-s-fotokiosk1-трудозатраты-e': IISFotokiosk1ТрудозатратыEForm
  },

});

export default translations;

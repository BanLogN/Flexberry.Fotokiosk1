import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.работа-с-клиентами.caption'),
          title: i18n.t('forms.application.sitemap.работа-с-клиентами.title'),
          children: [{
            link: 'i-i-s-fotokiosk1-запись-время-l',
            caption: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk1-запись-время-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk1-запись-время-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-fotokiosk1-прайс-l',
            caption: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk1-прайс-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk1-прайс-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-fotokiosk1-запись-клиента-l',
            caption: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk1-запись-клиента-l.caption'),
            title: i18n.t('forms.application.sitemap.работа-с-клиентами.i-i-s-fotokiosk1-запись-клиента-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отчет-по-трудозатратам.caption'),
          title: i18n.t('forms.application.sitemap.отчет-по-трудозатратам.title'),
          children: [{
            link: 'i-i-s-fotokiosk1-трудозатраты-l',
            caption: i18n.t('forms.application.sitemap.отчет-по-трудозатратам.i-i-s-fotokiosk1-трудозатраты-l.caption'),
            title: i18n.t('forms.application.sitemap.отчет-по-трудозатратам.i-i-s-fotokiosk1-трудозатраты-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.расходуемые-материалы.caption'),
          title: i18n.t('forms.application.sitemap.расходуемые-материалы.title'),
          children: [{
            link: 'i-i-s-fotokiosk1-материал-l',
            caption: i18n.t('forms.application.sitemap.расходуемые-материалы.i-i-s-fotokiosk1-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.расходуемые-материалы.i-i-s-fotokiosk1-материал-l.title'),
            icon: 'folder',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-fotokiosk1-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-fotokiosk1-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-fotokiosk1-сотрудники-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})
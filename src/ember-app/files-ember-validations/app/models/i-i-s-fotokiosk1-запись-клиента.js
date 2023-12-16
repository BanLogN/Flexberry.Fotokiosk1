import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьКлиентаMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk1-запись-клиента';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьКлиентаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

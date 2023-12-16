import {
  defineNamespace,
  defineProjections,
  Model as ЗаписьВремяMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk1-запись-время';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаписьВремяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

import {
  defineNamespace,
  defineProjections,
  Model as МатериалMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk1-материал';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МатериалMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

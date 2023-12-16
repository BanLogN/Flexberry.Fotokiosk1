import {
  defineNamespace,
  defineProjections,
  Model as РасходМатериалаMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk1-расход-материала';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасходМатериалаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

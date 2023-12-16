import {
  defineNamespace,
  defineProjections,
  Model as ПрайсMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk1-прайс';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПрайсMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

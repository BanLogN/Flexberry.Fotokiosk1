import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МатериалMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk1-материал';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МатериалMixin, Validations, {
});

defineProjections(Model);

export default Model;

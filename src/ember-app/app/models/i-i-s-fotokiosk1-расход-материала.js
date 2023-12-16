import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасходМатериалаMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk1-расход-материала';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасходМатериалаMixin, Validations, {
});

defineProjections(Model);

export default Model;

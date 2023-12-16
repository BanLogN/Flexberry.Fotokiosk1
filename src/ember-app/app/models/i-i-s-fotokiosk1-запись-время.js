import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаписьВремяMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk1-запись-время';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаписьВремяMixin, Validations, {
});

defineProjections(Model);

export default Model;

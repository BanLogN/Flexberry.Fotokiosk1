import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-fotokiosk1-запись-клиента-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-fotokiosk1-услуга+прайс':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'прайс',
            projection: 'ПрайсL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-fotokiosk1-услуга+записьВремя':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'время',
            required: true,
            relationName: 'записьВремя',
            projection: 'ЗаписьВремяL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});

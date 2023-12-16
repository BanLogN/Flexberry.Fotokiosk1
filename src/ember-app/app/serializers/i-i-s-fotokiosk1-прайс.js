import { Serializer as ПрайсSerializer } from
  '../mixins/regenerated/serializers/i-i-s-fotokiosk1-прайс';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПрайсSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

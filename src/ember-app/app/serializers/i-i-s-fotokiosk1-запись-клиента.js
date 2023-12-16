import { Serializer as ЗаписьКлиентаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-fotokiosk1-запись-клиента';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаписьКлиентаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

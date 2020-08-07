export const getId = record => record.dynamodb.Keys.id.S
export const getType = record => record.dynamodb.NewImage['__typename'].S
export const getArn = record => record.eventSourceARN
export const getTableName = record => getArn(record).split('/')[1]

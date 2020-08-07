import { DynamoDB } from 'aws-sdk'

const docClient = new DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })

export const getById = (table, id, callback) => {
  return docClient.get({ TableName: table, Key: { id } }, callback)
}

export const deleteById = (table, id, callback) => {
  docClient.delete({ TableName: table, Key: { id } }, callback)
}

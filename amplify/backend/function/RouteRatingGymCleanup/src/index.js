'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var awsSdk = require('aws-sdk');

const getId = record => record.dynamodb.Keys.id.S;
const getType = record => record.dynamodb.NewImage['__typename'].S;
const getArn = record => record.eventSourceARN;
const getTableName = record => getArn(record).split('/')[1];

const docClient = new awsSdk.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

const deleteById = (table, id, callback) => {
  docClient.delete({ TableName: table, Key: { id } }, callback);
};

/* Amplify Params - DO NOT EDIT
	API_ROUTERATINGAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_ROUTERATINGAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

async function handler(event) {
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(record => {
    console.log('Event source:', getArn(record));
    console.log('ID:', getId(record));
    console.log('Type:', getType(record));

    const params = {
      TableName: getTableName(record),
      Key: { id: getId(record) },
      ReturnValues: 'ALL_OLD',
    };

    console.log('Params:', params);

    deleteById(getTableName(record), getId(record), (data, error) => {
      console.log(data);
      console.error(error);
    });
  });

  return 'Successfully processed DynamoDB record'
}

exports.handler = handler;

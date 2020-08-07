const AWS = require('aws-sdk')
AWS.config.update({ region: process.env.REGION })
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

exports.handler = event => {
  console.log(JSON.stringify(event, null, 2))
  event.Records.forEach(record => {
    console.log('Event source:', record.eventSourceARN)
    console.log('ID:', record.Keys.id.S)
    console.log('Type:', record.NewImage['__typename'].S)

    const splitArn = record.eventSourceARN.split('/')

    const params = {
      RequestItems: {},
    }

    params.RequestItems[splitArn[1]] = {
      Keys: [{ id: { N: record.Keys.id.S } }],
      ProjectionExpression: 'KEY_NAME, ATTRIBUTE',
    }

    ddb.batchGetItem(params, function (err, data) {
      if (err) {
        console.log('Error', err)
      } else {
        data.Responses[splitArn[1]].forEach(function (element, index, array) {
          console.log(element)
        })
      }
    })
  })
  return Promise.resolve('Successfully processed DynamoDB record')
}

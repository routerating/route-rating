/* Amplify Params - DO NOT EDIT
	API_ROUTERATINGAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_ROUTERATINGAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import { getArn, getId, getType, getTableName } from '../records/common'
import { deleteById } from '../dynamodb/common'

export async function handler(event) {
  console.log(JSON.stringify(event, null, 2))
  event.Records.forEach(record => {
    console.log('Event source:', getArn(record))
    console.log('ID:', getId(record))
    console.log('Type:', getType(record))

    const params = {
      TableName: getTableName(record),
      Key: { id: getId(record) },
      ReturnValues: 'ALL_OLD',
    }

    console.log('Params:', params)

    deleteById(getTableName(record), getId(record), (data, error) => {
      console.log(data)
      console.error(error)
    })
  })

  return 'Successfully processed DynamoDB record'
}

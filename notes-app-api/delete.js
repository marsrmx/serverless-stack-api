import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

//If the cognitoIdentityId doesn't mathc with the noteId it stills return 200
export async function main(event, context) {
  const params = {
    TableName: process.env.tableName,
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("delete", params);
    return success({ status: true, result: result });
  } catch (e) {
    return failure({ status: false });
  }
}
# Cognito

Service from AWS to create user pools and to manage authentication and authorization from users.

1. Create an user pool
2. In your terminal run the next script to create a new user

`aws cognito-idp sign-up \
  --region YOUR_COGNITO_REGION \
  --client-id YOUR_COGNITO_APP_CLIENT_ID \
  --username admin@example.com \
  --password Passw0rd!`

3. After this you'll need to verify the user, you can do this with this administration command (after this command you will not see anything in the terminal, you can verify it in AWS)

`aws cognito-idp admin-confirm-sign-up \
  --region YOUR_COGNITO_REGION \
  --user-pool-id YOUR_COGNITO_USER_POOL_ID \
  --username admin@example.com`
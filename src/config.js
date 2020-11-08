export default {
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-app-uploads-serverless-stack-learn",
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://4749g3o662.execute-api.ap-south-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_k0KqweHhB",
    APP_CLIENT_ID: "73vpqd4mfmlcomg4m0aqqiatbu",
    IDENTITY_POOL_ID: "ap-south-1:9ba900b4-9557-432a-9a60-9a954294b595",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

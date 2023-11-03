import { Client } from 'contensis-delivery-api';

const ContensisClient = Client.create({
  rootUrl: `https://cms-${process.env.VUE_APP_ALIAS}.cloud.contensis.com`,
  accessToken: process.env.VUE_APP_ACCESS_TOKEN,
  projectId: process.env.VUE_APP_PROJECT_API_ID,
});

export default ContensisClient;

// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819702\",\"not_before\":\"1459815802\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1ODAyLCJuYmYiOjE0NTk4MTU4MDIsImV4cCI6MTQ1OTgxOTcwMiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.sez5PHQyFIdwo21Bh5hLsq3DslRw0djc66W8oEhMs4boMGPOQ-LMkU4pn09wWk4XYrR4AezOz85Xs6kIRK__GFNck7evYITCByxukqOgoGsaYBbU259HFa9pLe1fvIfQ2j7FPQ6KBNIQj2ivyPYFNDdVCbLLRLwVUcjKbDN35xCOQyrQB3YsaTSk_W1OWHtxvYcJAeYsFWhHt6oqZ5QeVV0k4E8ULRCbbS6SZiygNTZUVbWz95l4RDODoUHQnEEWq6ezfdERorIM-sQ2CZDyxGd2JlTvxm5cEhir5YoUidQ_-uUe8XRs4HMc0-36wPOBS0Z3cGhEikJsNBB8zCztpg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '2e57606f-8b55-4ada-8efe-b5635e83ae7d',
  'client-request-id': '633e0613-a528-4adc-b6e3-477adec680a9',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_67',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:28:21 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459819702\",\"not_before\":\"1459815802\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODE1ODAyLCJuYmYiOjE0NTk4MTU4MDIsImV4cCI6MTQ1OTgxOTcwMiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.sez5PHQyFIdwo21Bh5hLsq3DslRw0djc66W8oEhMs4boMGPOQ-LMkU4pn09wWk4XYrR4AezOz85Xs6kIRK__GFNck7evYITCByxukqOgoGsaYBbU259HFa9pLe1fvIfQ2j7FPQ6KBNIQj2ivyPYFNDdVCbLLRLwVUcjKbDN35xCOQyrQB3YsaTSk_W1OWHtxvYcJAeYsFWhHt6oqZ5QeVV0k4E8ULRCbbS6SZiygNTZUVbWz95l4RDODoUHQnEEWq6ezfdERorIM-sQ2CZDyxGd2JlTvxm5cEhir5YoUidQ_-uUe8XRs4HMc0-36wPOBS0Z3cGhEikJsNBB8zCztpg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '2e57606f-8b55-4ada-8efe-b5635e83ae7d',
  'client-request-id': '633e0613-a528-4adc-b6e3-477adec680a9',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_67',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 05 Apr 2016 00:28:21 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain8977\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain8977\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '538',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9aa6befe-c33b-42a9-9b2c-1e7f80766219',
  'x-ms-client-request-id': 'df63e395-873c-4977-a9e6-74a271cb5847',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7cf48b12-8243-4d2c-aa21-b56459fa93b3',
  'x-ms-routing-request-id': 'WESTUS:20160405T002823Z:7cf48b12-8243-4d2c-aa21-b56459fa93b3',
  date: 'Tue, 05 Apr 2016 00:28:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain8977\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup9566/providers/Microsoft.Cdn/profiles/cdnTestProfile2775/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomains/cdnTestCustomDomain8977\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n        \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge-test.net\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '538',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '9aa6befe-c33b-42a9-9b2c-1e7f80766219',
  'x-ms-client-request-id': 'df63e395-873c-4977-a9e6-74a271cb5847',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7cf48b12-8243-4d2c-aa21-b56459fa93b3',
  'x-ms-routing-request-id': 'WESTUS:20160405T002823Z:7cf48b12-8243-4d2c-aa21-b56459fa93b3',
  date: 'Tue, 05 Apr 2016 00:28:22 GMT',
  connection: 'close' });
 return result; }]];
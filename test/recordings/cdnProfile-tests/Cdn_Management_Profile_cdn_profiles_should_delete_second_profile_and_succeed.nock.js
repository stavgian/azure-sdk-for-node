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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459968159\",\"not_before\":\"1459964259\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MjU5LCJuYmYiOjE0NTk5NjQyNTksImV4cCI6MTQ1OTk2ODE1OSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.SoqNTxSwW_J54ir8sHn8vWUBzFZBj4iCcvk_LsNGKbKAVOCYnlpJoLa7RT-wT-zj3MCcMUfkH_1jehjgS1jS7cNZDsgVL0zwdrBljzlMa-aF2fDwgiRiPaoEj_Sk8Vt0eZ7NMdT5EMJhI6lXJqMY1ILQzJvEIOdKkwSkQIcRv9vNu-jQCNz_w9zbhEWpVf7HrYXhUSJ1Unt8HP1gG8vxG5TbWHEYXOk_RvQgM95-J8Zmmy53HaY8u-AveSi1UIaurxwspN-IG8-WyrlgD7v3PYiXBmfu3LlHvX_iiYLT1c14N5Ip635RddvnYFsAWNFrSNajAHfHGP0kZeFCWlzQNA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e06d56e4-1583-4830-b7d0-41af356072b0',
  'client-request-id': 'fa56d4a2-9b7b-42bd-8a6d-3e34f330972f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_296',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:42:39 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459968159\",\"not_before\":\"1459964259\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MjU5LCJuYmYiOjE0NTk5NjQyNTksImV4cCI6MTQ1OTk2ODE1OSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.SoqNTxSwW_J54ir8sHn8vWUBzFZBj4iCcvk_LsNGKbKAVOCYnlpJoLa7RT-wT-zj3MCcMUfkH_1jehjgS1jS7cNZDsgVL0zwdrBljzlMa-aF2fDwgiRiPaoEj_Sk8Vt0eZ7NMdT5EMJhI6lXJqMY1ILQzJvEIOdKkwSkQIcRv9vNu-jQCNz_w9zbhEWpVf7HrYXhUSJ1Unt8HP1gG8vxG5TbWHEYXOk_RvQgM95-J8Zmmy53HaY8u-AveSi1UIaurxwspN-IG8-WyrlgD7v3PYiXBmfu3LlHvX_iiYLT1c14N5Ip635RddvnYFsAWNFrSNajAHfHGP0kZeFCWlzQNA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e06d56e4-1583-4830-b7d0-41af356072b0',
  'client-request-id': 'fa56d4a2-9b7b-42bd-8a6d-3e34f330972f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_296',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:42:39 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3941/providers/Microsoft.Cdn/profiles/cdnTestProfile9510?api-version=2015-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3941/providers/Microsoft.Cdn/operationresults/99f9bb45-6eb9-4451-ab40-377e814cb6aa/profileresults/cdnTestProfile9510?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '87f9b3ce-3675-4574-aa39-21e159ede65e',
  'x-ms-client-request-id': '3a6cfff1-3aca-4d9b-b6f7-f1b96367dc42',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3941/providers/Microsoft.Cdn/operationresults/99f9bb45-6eb9-4451-ab40-377e814cb6aa?api-version=2015-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4fc791e2-51ae-4546-8f57-0a39aa1f14be',
  'x-ms-routing-request-id': 'WESTUS:20160406T174241Z:4fc791e2-51ae-4546-8f57-0a39aa1f14be',
  date: 'Wed, 06 Apr 2016 17:42:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup3941/providers/Microsoft.Cdn/profiles/cdnTestProfile9510?api-version=2015-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3941/providers/Microsoft.Cdn/operationresults/99f9bb45-6eb9-4451-ab40-377e814cb6aa/profileresults/cdnTestProfile9510?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '87f9b3ce-3675-4574-aa39-21e159ede65e',
  'x-ms-client-request-id': '3a6cfff1-3aca-4d9b-b6f7-f1b96367dc42',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3941/providers/Microsoft.Cdn/operationresults/99f9bb45-6eb9-4451-ab40-377e814cb6aa?api-version=2015-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4fc791e2-51ae-4546-8f57-0a39aa1f14be',
  'x-ms-routing-request-id': 'WESTUS:20160406T174241Z:4fc791e2-51ae-4546-8f57-0a39aa1f14be',
  date: 'Wed, 06 Apr 2016 17:42:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459968191\",\"not_before\":\"1459964291\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MjkxLCJuYmYiOjE0NTk5NjQyOTEsImV4cCI6MTQ1OTk2ODE5MSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.ejBbmNsK2l9Tb3qZqLfcexquVP0_BlBhi8hnMxcQFQ5GbTpJtA5pYwjtwNF16UnR746j0yjFs-ofiTkhZkN8nyQyhBl6y3I6sr3Q71hPWj024zHTbM37AveSxG_yaoh8EEM5wwOPEFvKeVPVG-sYoIHaPOIELyb4XOA817sskgZcnmdxUlrUY15bnry9VPAyRcJ7zUk4sykdimKhgweQEoJn8Sqj0SkP5eu1TklmOijH8Ql25u0jxKfJE19uHUYZsKHNxMeTu15Esi7dIDT8pnSc954b4-zyXYTXsv0AbfZI5h9JR3kZZ4q2_ds-exvOhqQBNjx6VhfXIvM1ho57LQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e2534467-dea1-4fa5-994a-c06a041d8e36',
  'client-request-id': 'e3adfdc3-19c8-45e4-8111-eea59fb9cebe',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_146',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:43:11 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459968191\",\"not_before\":\"1459964291\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5OTY0MjkxLCJuYmYiOjE0NTk5NjQyOTEsImV4cCI6MTQ1OTk2ODE5MSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.ejBbmNsK2l9Tb3qZqLfcexquVP0_BlBhi8hnMxcQFQ5GbTpJtA5pYwjtwNF16UnR746j0yjFs-ofiTkhZkN8nyQyhBl6y3I6sr3Q71hPWj024zHTbM37AveSxG_yaoh8EEM5wwOPEFvKeVPVG-sYoIHaPOIELyb4XOA817sskgZcnmdxUlrUY15bnry9VPAyRcJ7zUk4sykdimKhgweQEoJn8Sqj0SkP5eu1TklmOijH8Ql25u0jxKfJE19uHUYZsKHNxMeTu15Esi7dIDT8pnSc954b4-zyXYTXsv0AbfZI5h9JR3kZZ4q2_ds-exvOhqQBNjx6VhfXIvM1ho57LQ\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e2534467-dea1-4fa5-994a-c06a041d8e36',
  'client-request-id': 'e3adfdc3-19c8-45e4-8111-eea59fb9cebe',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_146',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Wed, 06 Apr 2016 17:43:11 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3941/providers/Microsoft.Cdn/operationresults/99f9bb45-6eb9-4451-ab40-377e814cb6aa?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'b828c915-aac8-432b-ae22-b7c96c6532bd',
  'x-ms-client-request-id': 'b6f6a492-4db1-4039-9e80-8a1c528be392',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'ebc50adc-7d80-46d7-85c8-1c25fd6e97cd',
  'x-ms-routing-request-id': 'WESTUS:20160406T174312Z:ebc50adc-7d80-46d7-85c8-1c25fd6e97cd',
  date: 'Wed, 06 Apr 2016 17:43:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup3941/providers/Microsoft.Cdn/operationresults/99f9bb45-6eb9-4451-ab40-377e814cb6aa?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'b828c915-aac8-432b-ae22-b7c96c6532bd',
  'x-ms-client-request-id': 'b6f6a492-4db1-4039-9e80-8a1c528be392',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'ebc50adc-7d80-46d7-85c8-1c25fd6e97cd',
  'x-ms-routing-request-id': 'WESTUS:20160406T174312Z:ebc50adc-7d80-46d7-85c8-1c25fd6e97cd',
  date: 'Wed, 06 Apr 2016 17:43:12 GMT',
  connection: 'close' });
 return result; }]];
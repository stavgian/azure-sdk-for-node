// This file has been autogenerated.

exports.setEnvironment = function () {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2015-12-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': 'c94c12dd-5fa3-413a-b60b-89e586ab8496',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'e3a2a09f-2601-4d7a-990c-766db70ab853',
  'x-ms-correlation-request-id': 'e3a2a09f-2601-4d7a-990c-766db70ab853',
  'x-ms-routing-request-id': 'WESTUS:20160310T234934Z:e3a2a09f-2601-4d7a-990c-766db70ab853',
  date: 'Thu, 10 Mar 2016 23:49:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/603663e9-700c-46de-9d41-e080ff1d461e/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2015-12-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': 'c94c12dd-5fa3-413a-b60b-89e586ab8496',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': 'e3a2a09f-2601-4d7a-990c-766db70ab853',
  'x-ms-correlation-request-id': 'e3a2a09f-2601-4d7a-990c-766db70ab853',
  'x-ms-routing-request-id': 'WESTUS:20160310T234934Z:e3a2a09f-2601-4d7a-990c-766db70ab853',
  date: 'Thu, 10 Mar 2016 23:49:33 GMT',
  connection: 'close' });
 return result; }]];
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRestAzure from 'ms-rest-azure';
exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * The pricing tier (defines a CDN provider, feature list and rate) of the CDN
 * profile.
 *
 * @member {string} [name] Name of the pricing tier. Possible values include:
 * 'Standard_Verizon', 'Premium_Verizon', 'Custom_Verizon', 'Standard_Akamai',
 * 'Standard_ChinaCdn'
 *
 */
export interface Sku {
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The Resource definition.
 *
 * @member {string} [id] Resource ID.
 *
 * @member {string} [name] Resource name.
 *
 * @member {string} [type] Resource type.
 *
 * @member {string} location Resource location.
 *
 * @member {object} [tags] Resource tags.
 *
 */
export interface Resource extends BaseResource {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Profile class.
 * @constructor
 * CDN profile represents the top level resource and the entry point into the
 * CDN API. This allows users to set up a logical grouping of endpoints in
 * addition to creating shared configuration settings and selecting pricing
 * tiers and providers.
 *
 * @member {object} sku The pricing tier (defines a CDN provider, feature list
 * and rate) of the CDN profile.
 *
 * @member {string} [sku.name] Name of the pricing tier. Possible values
 * include: 'Standard_Verizon', 'Premium_Verizon', 'Custom_Verizon',
 * 'Standard_Akamai', 'Standard_ChinaCdn'
 *
 * @member {string} [resourceState] Resource status of the profile. Possible
 * values include: 'Creating', 'Active', 'Deleting', 'Disabled'
 *
 * @member {string} [provisioningState] Provisioning status of the profile.
 *
 */
export interface Profile extends Resource {
  sku: Sku;
  resourceState?: string;
  provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the ProfileListResult class.
 * @constructor
 * Result of the request to list profiles. It contains a list of profile
 * objects and a URL link to get the the next set of results.
 *
 * @member {array} [value] List of CDN profiles within a resource group.
 *
 * @member {string} [nextLink] URL to get the next set of profile objects if
 * there are any.
 *
 */
export interface ProfileListResult {
  value?: Profile[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ProfileUpdateParameters class.
 * @constructor
 * Properties required to update a profile.
 *
 * @member {object} tags Profile tags
 *
 */
export interface ProfileUpdateParameters extends BaseResource {
  tags: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the SsoUri class.
 * @constructor
 * SSO URI required to login to the supplemental portal.
 *
 * @member {string} [ssoUriValue] The URI used to login to the supplemental
 * portal.
 *
 */
export interface SsoUri {
  ssoUriValue?: string;
}

/**
 * @class
 * Initializes a new instance of the DeepCreatedOrigin class.
 * @constructor
 * Origin to be added when creating a CDN endpoint.
 *
 * @member {string} name Origin name
 *
 * @member {string} hostName The address of the origin. It can be a domain
 * names, IPv4 address, or IPv6 address.
 *
 * @member {number} [httpPort] The value of the HTTP port. Must be between 1
 * and 65535
 *
 * @member {number} [httpsPort] The value of the HTTPS port. Must be between 1
 * and 65535
 *
 */
export interface DeepCreatedOrigin extends BaseResource {
  name: string;
  hostName: string;
  httpPort?: number;
  httpsPort?: number;
}

/**
 * @class
 * Initializes a new instance of the Endpoint class.
 * @constructor
 * CDN endpoint is the entity within a CDN profile containing configuration
 * information such as origin, protocol, content caching and delivery behavior.
 * The CDN endpoint uses the URL format <endpointname>.azureedge.net.
 *
 * @member {string} [originHostHeader] The host header CDN sends along with
 * content requests to origin. The default value is the host name of the
 * origin.
 *
 * @member {string} [originPath] The path used when CDN sends request to
 * origin.
 *
 * @member {array} [contentTypesToCompress] List of content types on which
 * compression applies. The value should be a valid MIME type.
 *
 * @member {boolean} [isCompressionEnabled] Indicates whether content
 * compression is enabled on CDN. Default value is false. If compression is
 * enabled, content will be served as compressed if user requests for a
 * compressed version. Content won't be compressed on CDN when requested
 * content is smaller than 1 byte or larger than 1 MB.
 *
 * @member {boolean} [isHttpAllowed] Indicates whether HTTP traffic is allowed
 * on the endpoint. Default value is true. At least one protocol (HTTP or
 * HTTPS) must be allowed.
 *
 * @member {boolean} [isHttpsAllowed] Indicates whether HTTPS traffic is
 * allowed on the endpoint. Default value is true. At least one protocol (HTTP
 * or HTTPS) must be allowed.
 *
 * @member {string} [queryStringCachingBehavior] Defines the query string
 * caching behavior. Possible values include: 'IgnoreQueryString',
 * 'BypassCaching', 'UseQueryString', 'NotSet'
 *
 * @member {string} [optimizationType] Customer can specify what scenario they
 * want this CDN endpoint to optimize, e.g. Download, Media services. With this
 * information we can apply scenario driven optimization.
 *
 * @member {array} [geoFilters] List of rules defining user geo access within a
 * CDN endpoint. Each geo filter defines an acess rule to a specified path or
 * content, e.g. block APAC for path /pictures/
 *
 * @member {string} [hostName] The host name of the endpoint structured as
 * {endpointName}.{DNSZone}, e.g. consoto.azureedge.net
 *
 * @member {array} origins The source of the content being delivered via CDN.
 *
 * @member {string} [resourceState] Resource status of the endpoint. Possible
 * values include: 'Creating', 'Deleting', 'Running', 'Starting', 'Stopped',
 * 'Stopping'
 *
 * @member {string} [provisioningState] Provisioning status of the endpoint.
 *
 */
export interface Endpoint extends Resource {
  originHostHeader?: string;
  originPath?: string;
  contentTypesToCompress?: string[];
  isCompressionEnabled?: boolean;
  isHttpAllowed?: boolean;
  isHttpsAllowed?: boolean;
  queryStringCachingBehavior?: string;
  optimizationType?: string;
  geoFilters?: GeoFilter[];
  hostName?: string;
  origins: DeepCreatedOrigin[];
  resourceState?: string;
  provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the EndpointListResult class.
 * @constructor
 * Result of the request to list endpoints. It contains a list of endpoint
 * objects and a URL link to get the the next set of results.
 *
 * @member {array} [value] List of CDN endpoints within a profile
 *
 * @member {string} [nextLink] URL to get the next set of endpoint objects if
 * there are any.
 *
 */
export interface EndpointListResult {
  value?: Endpoint[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the GeoFilter class.
 * @constructor
 * Rules defining user geo access within a CDN endpoint.
 *
 * @member {string} relativePath Relative path applicable to geo filter. (e.g.
 * '/mypictures', '/mypicture/kitty.jpg', and etc.)
 *
 * @member {string} action Action of the geo filter, i.e. allow or block
 * access. Possible values include: 'Block', 'Allow'
 *
 * @member {array} countryCodes Two letter country codes defining user country
 * access in a geo filter, e.g. AU, MX, US.
 *
 */
export interface GeoFilter {
  relativePath: string;
  action: string;
  countryCodes: string[];
}

/**
 * @class
 * Initializes a new instance of the EndpointUpdateParameters class.
 * @constructor
 * Properties required to create a new endpoint.
 *
 * @member {object} [tags] Endpoint tags.
 *
 * @member {string} [originHostHeader] The host header CDN sends along with
 * content requests to origin. The default value is the host name of the
 * origin.
 *
 * @member {string} [originPath] The path used when CDN sends request to
 * origin.
 *
 * @member {array} [contentTypesToCompress] List of content types on which
 * compression applies. The value should be a valid MIME type.
 *
 * @member {boolean} [isCompressionEnabled] Indicates whether content
 * compression is enabled on CDN. Default value is false. If compression is
 * enabled, content will be served as compressed if user requests for a
 * compressed version. Content won't be compressed on CDN when requested
 * content is smaller than 1 byte or larger than 1 MB.
 *
 * @member {boolean} [isHttpAllowed] Indicates whether HTTP traffic is allowed
 * on the endpoint. Default value is true. At least one protocol (HTTP or
 * HTTPS) must be allowed.
 *
 * @member {boolean} [isHttpsAllowed] Indicates whether HTTPS traffic is
 * allowed on the endpoint. Default value is true. At least one protocol (HTTP
 * or HTTPS) must be allowed.
 *
 * @member {string} [queryStringCachingBehavior] Defines the query string
 * caching behavior. Possible values include: 'IgnoreQueryString',
 * 'BypassCaching', 'UseQueryString', 'NotSet'
 *
 * @member {string} [optimizationType] Customer can specify what scenario they
 * want this CDN endpoint to optimize, e.g. Download, Media services. With this
 * information we can apply scenario driven optimization.
 *
 * @member {array} [geoFilters] List of rules defining user geo access within a
 * CDN endpoint. Each geo filter defines an acess rule to a specified path or
 * content, e.g. block APAC for path /pictures/
 *
 */
export interface EndpointUpdateParameters extends BaseResource {
  tags?: { [propertyName: string]: string };
  originHostHeader?: string;
  originPath?: string;
  contentTypesToCompress?: string[];
  isCompressionEnabled?: boolean;
  isHttpAllowed?: boolean;
  isHttpsAllowed?: boolean;
  queryStringCachingBehavior?: string;
  optimizationType?: string;
  geoFilters?: GeoFilter[];
}

/**
 * @class
 * Initializes a new instance of the PurgeParameters class.
 * @constructor
 * Parameters required for content purge.
 *
 * @member {array} contentPaths The path to the content to be purged. Can
 * describe a file path or a wild card directory.
 *
 */
export interface PurgeParameters {
  contentPaths: string[];
}

/**
 * @class
 * Initializes a new instance of the LoadParameters class.
 * @constructor
 * Parameters required for content load.
 *
 * @member {array} contentPaths The path to the content to be loaded. Path
 * should be a relative file URL of the origin.
 *
 */
export interface LoadParameters {
  contentPaths: string[];
}

/**
 * @class
 * Initializes a new instance of the Origin class.
 * @constructor
 * CDN origin is the source of the content being delivered via CDN. When the
 * edge nodes represented by an endpoint do not have the requested content
 * cached, they attempt to fetch it from one or more of the configured origins.
 *
 * @member {string} hostName The address of the origin. Domain names, IPv4
 * addresses, and IPv6 addresses are supported.
 *
 * @member {number} [httpPort] The value of the HTTP port. Must be between 1
 * and 65535.
 *
 * @member {number} [httpsPort] The value of the https port. Must be between 1
 * and 65535.
 *
 * @member {string} [resourceState] Resource status of the origin. Possible
 * values include: 'Creating', 'Active', 'Deleting'
 *
 * @member {string} [provisioningState] Provisioning status of the origin.
 *
 */
export interface Origin extends Resource {
  hostName: string;
  httpPort?: number;
  httpsPort?: number;
  resourceState?: string;
  provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the OriginUpdateParameters class.
 * @constructor
 * Origin properties needed for origin creation or update.
 *
 * @member {string} [hostName] The address of the origin. Domain names, IPv4
 * addresses, and IPv6 addresses are supported.
 *
 * @member {number} [httpPort] The value of the HTTP port. Must be between 1
 * and 65535.
 *
 * @member {number} [httpsPort] The value of the HTTPS port. Must be between 1
 * and 65535.
 *
 */
export interface OriginUpdateParameters extends BaseResource {
  hostName?: string;
  httpPort?: number;
  httpsPort?: number;
}

/**
 * @class
 * Initializes a new instance of the OriginListResult class.
 * @constructor
 * Result of the request to list origins. It contains a list of origin objects
 * and a URL link to get the next set of results.
 *
 * @member {array} [value] List of CDN origins within an endpoint
 *
 * @member {string} [nextLink] URL to get the next set of origin objects if
 * there are any.
 *
 */
export interface OriginListResult {
  value?: Origin[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the CustomDomain class.
 * @constructor
 * Customer provided domain for branding purposes, e.g. www.consoto.com.
 *
 * @member {string} hostName The host name of the custom domain. Must be a
 * domain name.
 *
 * @member {string} [resourceState] Resource status of the custom domain.
 * Possible values include: 'Creating', 'Active', 'Deleting'
 *
 * @member {string} [customHttpsProvisioningState] Provisioning state of Custom
 * Https of the custom domain. Possible values include: 'Enabling', 'Enabled',
 * 'Disabling', 'Disabled', 'Failed'
 *
 * @member {string} [validationData] Special validation or data may be required
 * when delivering CDN to some regions due to local compliance reasons. E.g.
 * ICP license number of a custom domain is required to deliver content in
 * China.
 *
 * @member {string} [provisioningState] Provisioning status of the custom
 * domain.
 *
 */
export interface CustomDomain extends Resource {
  hostName: string;
  resourceState?: string;
  customHttpsProvisioningState?: string;
  validationData?: string;
  provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the CustomDomainParameters class.
 * @constructor
 * The customDomain JSON object required for custom domain creation or update.
 *
 * @member {string} hostName The host name of the custom domain. Must be a
 * domain name.
 *
 */
export interface CustomDomainParameters {
  hostName: string;
}

/**
 * @class
 * Initializes a new instance of the CustomDomainListResult class.
 * @constructor
 * Result of the request to list custom domains. It contains a list of custom
 * domain objects and a URL link to get the next set of results.
 *
 * @member {array} [value] List of CDN CustomDomains within an endpoint.
 *
 * @member {string} [nextLink] URL to get the next set of custom domain objects
 * if there are any.
 *
 */
export interface CustomDomainListResult {
  value?: CustomDomain[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ValidateCustomDomainInput class.
 * @constructor
 * Input of the custom domain to be validated for DNS mapping.
 *
 * @member {string} hostName The host name of the custom domain. Must be a
 * domain name.
 *
 */
export interface ValidateCustomDomainInput {
  hostName: string;
}

/**
 * @class
 * Initializes a new instance of the ValidateCustomDomainOutput class.
 * @constructor
 * Output of custom domain validation.
 *
 * @member {boolean} [customDomainValidated] Indicates whether the custom
 * domain is validated or not.
 *
 * @member {string} [reason] The reason why the custom domain is not valid.
 *
 * @member {string} [message] Error message describing why the custom domain is
 * not valid.
 *
 */
export interface ValidateCustomDomainOutput {
  customDomainValidated?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityInput class.
 * @constructor
 * Input of CheckNameAvailability API.
 *
 * @member {string} name The resource name to validate.
 *
 */
export interface CheckNameAvailabilityInput {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityOutput class.
 * @constructor
 * Output of check name availability API.
 *
 * @member {boolean} [nameAvailable] Indicates whether the name is available.
 *
 * @member {string} [reason] The reason why the name is not available.
 *
 * @member {string} [message] The detailed error message describing why the
 * name is not available.
 *
 */
export interface CheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceUsage class.
 * @constructor
 * Output of check resource usage API.
 *
 * @member {string} [resourceType] Resource type of the usages.
 *
 * @member {string} [unit] Unit of the usage. e.g. Count.
 *
 * @member {number} [currentValue] Actual value of the resource type.
 *
 * @member {number} [limit] Quota of the resource type.
 *
 */
export interface ResourceUsage {
  resourceType?: string;
  unit?: string;
  currentValue?: number;
  limit?: number;
}

/**
 * @class
 * Initializes a new instance of the ResourceUsageListResult class.
 * @constructor
 * Output of check resource usage API.
 *
 * @member {array} [value] List of resource usages.
 *
 * @member {string} [nextLink] URL to get the next set of custom domain objects
 * if there are any.
 *
 */
export interface ResourceUsageListResult {
  value?: ResourceUsage[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.Cdn
 *
 * @member {string} [resource] Resource on which the operation is performed:
 * Profile, endpoint, etc.
 *
 * @member {string} [operation] Operation type: Read, write, delete, etc.
 *
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * CDN REST API operation
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}
 *
 * @member {object} [display] The object that represents the operation.
 *
 * @member {string} [display.provider] Service provider: Microsoft.Cdn
 *
 * @member {string} [display.resource] Resource on which the operation is
 * performed: Profile, endpoint, etc.
 *
 * @member {string} [display.operation] Operation type: Read, write, delete,
 * etc.
 *
 */
export interface Operation {
  name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list CDN operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {array} [value] List of CDN operations supported by the CDN resource
 * provider.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 *
 */
export interface OperationListResult {
  value?: Operation[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the CidrIpAddress class.
 * @constructor
 * CIDR Ip address
 *
 * @member {string} [baseIpAddress] Ip adress itself.
 *
 * @member {number} [prefixLength] The length of the prefix of the ip address.
 *
 */
export interface CidrIpAddress {
  baseIpAddress?: string;
  prefixLength?: number;
}

/**
 * @class
 * Initializes a new instance of the IpAddressGroup class.
 * @constructor
 * CDN Ip address group
 *
 * @member {string} [deliveryRegion] The delivery region of the ip address
 * group
 *
 * @member {array} [ipv4Addresses] The list of ip v4 addresses.
 *
 * @member {array} [ipv6Addresses] The list of ip v6 addresses.
 *
 */
export interface IpAddressGroup {
  deliveryRegion?: string;
  ipv4Addresses?: CidrIpAddress[];
  ipv6Addresses?: CidrIpAddress[];
}

/**
 * @class
 * Initializes a new instance of the EdgeNode class.
 * @constructor
 * Edge node of CDN service.
 *
 * @member {array} ipAddressGroups List of ip address groups.
 *
 */
export interface EdgeNode extends Resource {
  ipAddressGroups: IpAddressGroup[];
}

/**
 * @class
 * Initializes a new instance of the EdgenodeResult class.
 * @constructor
 * Result of the request to list CDN edgenodes. It contains a list of ip
 * address group and a URL link to get the next set of results.
 *
 * @member {array} [value] Edge node of CDN service.
 *
 * @member {string} [nextLink] URL to get the next set of edgenode list results
 * if there are any.
 *
 */
export interface EdgenodeResult {
  value?: EdgeNode[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error reponse indicates CDN service is not able to process the incoming
 * request. The reason is provided in the error message.
 *
 * @member {string} [code] Error code.
 *
 * @member {string} [message] Error message indicating why the operation
 * failed.
 *
 */
export interface ErrorResponse {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the ProfileListResult class.
 * @constructor
 * Result of the request to list profiles. It contains a list of profile
 * objects and a URL link to get the the next set of results.
 *
 * @member {array} [value] List of CDN profiles within a resource group.
 *
 * @member {string} [nextLink] URL to get the next set of profile objects if
 * there are any.
 *
 */
export interface ProfileListResult {
  value?: Profile[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceUsageListResult class.
 * @constructor
 * Output of check resource usage API.
 *
 * @member {array} [value] List of resource usages.
 *
 * @member {string} [nextLink] URL to get the next set of custom domain objects
 * if there are any.
 *
 */
export interface ResourceUsageListResult {
  value?: ResourceUsage[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the EndpointListResult class.
 * @constructor
 * Result of the request to list endpoints. It contains a list of endpoint
 * objects and a URL link to get the the next set of results.
 *
 * @member {array} [value] List of CDN endpoints within a profile
 *
 * @member {string} [nextLink] URL to get the next set of endpoint objects if
 * there are any.
 *
 */
export interface EndpointListResult {
  value?: Endpoint[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OriginListResult class.
 * @constructor
 * Result of the request to list origins. It contains a list of origin objects
 * and a URL link to get the next set of results.
 *
 * @member {array} [value] List of CDN origins within an endpoint
 *
 * @member {string} [nextLink] URL to get the next set of origin objects if
 * there are any.
 *
 */
export interface OriginListResult {
  value?: Origin[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the CustomDomainListResult class.
 * @constructor
 * Result of the request to list custom domains. It contains a list of custom
 * domain objects and a URL link to get the next set of results.
 *
 * @member {array} [value] List of CDN CustomDomains within an endpoint.
 *
 * @member {string} [nextLink] URL to get the next set of custom domain objects
 * if there are any.
 *
 */
export interface CustomDomainListResult {
  value?: CustomDomain[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list CDN operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {array} [value] List of CDN operations supported by the CDN resource
 * provider.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 *
 */
export interface OperationListResult {
  value?: Operation[];
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the EdgenodeResult class.
 * @constructor
 * Result of the request to list CDN edgenodes. It contains a list of ip
 * address group and a URL link to get the next set of results.
 *
 * @member {array} [value] Edge node of CDN service.
 *
 * @member {string} [nextLink] URL to get the next set of edgenode list results
 * if there are any.
 *
 */
export interface EdgenodeResult {
  value?: EdgeNode[];
  nextLink?: string;
}


/**
 * @class
 * Initializes a new instance of the ProfileListResult class.
 * @constructor
 * Result of the request to list profiles. It contains a list of profile
 * objects and a URL link to get the the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of profile objects if
 * there are any.
 *
 */
export interface ProfileListResult extends Array<Profile> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceUsageListResult class.
 * @constructor
 * Output of check resource usage API.
 *
 * @member {string} [nextLink] URL to get the next set of custom domain objects
 * if there are any.
 *
 */
export interface ResourceUsageListResult extends Array<ResourceUsage> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the EndpointListResult class.
 * @constructor
 * Result of the request to list endpoints. It contains a list of endpoint
 * objects and a URL link to get the the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of endpoint objects if
 * there are any.
 *
 */
export interface EndpointListResult extends Array<Endpoint> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OriginListResult class.
 * @constructor
 * Result of the request to list origins. It contains a list of origin objects
 * and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of origin objects if
 * there are any.
 *
 */
export interface OriginListResult extends Array<Origin> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the CustomDomainListResult class.
 * @constructor
 * Result of the request to list custom domains. It contains a list of custom
 * domain objects and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of custom domain objects
 * if there are any.
 *
 */
export interface CustomDomainListResult extends Array<CustomDomain> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list CDN operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 *
 */
export interface OperationListResult extends Array<Operation> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the EdgenodeResult class.
 * @constructor
 * Result of the request to list CDN edgenodes. It contains a list of ip
 * address group and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of edgenode list results
 * if there are any.
 *
 */
export interface EdgenodeResult extends Array<EdgeNode> {
  nextLink?: string;
}
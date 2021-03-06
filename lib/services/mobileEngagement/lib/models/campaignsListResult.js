/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The campaigns list result.
 */
class CampaignsListResult extends Array {
  /**
   * Create a CampaignsListResult.
   * @member {string} [nextLink] When using `top` parameter and if partial
   * results are returned, this property describes a URI path to get the next
   * results. This property is not set when reaching the last page.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CampaignsListResult
   *
   * @returns {object} metadata of CampaignsListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CampaignsListResult',
      type: {
        name: 'Composite',
        className: 'CampaignsListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CampaignListResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'CampaignListResult'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CampaignsListResult;

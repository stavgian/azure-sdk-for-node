/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the CertificateMergeParameters class.
 * @constructor
 * The certificate merge parameters
 *
 * @member {array} x509Certificates The certificate or the certificate chain to
 * merge
 * 
 * @member {object} [certificateAttributes] The attributes of the certificate
 * (optional)
 * 
 * @member {object} [tags] Application-specific metadata in the form of
 * key-value pairs
 * 
 */
function CertificateMergeParameters() {
}

/**
 * Defines the metadata of CertificateMergeParameters
 *
 * @returns {object} metadata of CertificateMergeParameters
 *
 */
CertificateMergeParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CertificateMergeParameters',
    type: {
      name: 'Composite',
      className: 'CertificateMergeParameters',
      modelProperties: {
        x509Certificates: {
          required: true,
          serializedName: 'x5c',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'BufferElementType',
                type: {
                  name: 'ByteArray'
                }
            }
          }
        },
        certificateAttributes: {
          required: false,
          serializedName: 'attributes',
          type: {
            name: 'Composite',
            className: 'CertificateAttributes'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = CertificateMergeParameters;
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
 * The registry node that generated the event. Put differently, while the actor
 * initiates the event, the source generates it.
 *
 */
class Source {
  /**
   * Create a Source.
   * @member {string} [addr] The IP or hostname and the port of the registry
   * node that generated the event. Generally, this will be resolved by
   * os.Hostname() along with the running port.
   * @member {string} [instanceID] The running instance of an application.
   * Changes after each restart.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Source
   *
   * @returns {object} metadata of Source
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Source',
      type: {
        name: 'Composite',
        className: 'Source',
        modelProperties: {
          addr: {
            required: false,
            serializedName: 'addr',
            type: {
              name: 'String'
            }
          },
          instanceID: {
            required: false,
            serializedName: 'instanceID',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Source;
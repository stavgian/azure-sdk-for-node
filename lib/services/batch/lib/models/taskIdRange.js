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
 * @class
 * Initializes a new instance of the TaskIdRange class.
 * @constructor
 * @summary A range of task IDs that a task can depend on. All tasks with IDs
 * in the range must complete successfully before the dependent task can be
 * scheduled.
 *
 * The start and end of the range are inclusive. For example, if a range has
 * start 9 and end 12, then it represents tasks '9', '10', '11' and '12'.
 *
 * @member {number} start The first task ID in the range.
 * 
 * @member {number} end The last task ID in the range.
 * 
 */
function TaskIdRange() {
}

/**
 * Defines the metadata of TaskIdRange
 *
 * @returns {object} metadata of TaskIdRange
 *
 */
TaskIdRange.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TaskIdRange',
    type: {
      name: 'Composite',
      className: 'TaskIdRange',
      modelProperties: {
        start: {
          required: true,
          serializedName: 'start',
          type: {
            name: 'Number'
          }
        },
        end: {
          required: true,
          serializedName: 'end',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = TaskIdRange;
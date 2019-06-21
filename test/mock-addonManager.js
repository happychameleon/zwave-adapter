/**
 * mock-addonManager.js - AddonManager used for testing.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

'use strict';

const EventEmitter = require('events').EventEmitter;

class MockAddonManager extends EventEmitter {
  constructor() {
    super();
    this.nodes = {};
  }

  handleDeviceAdded(node) {
    this.nodes[node.nodeId] = node;
  }

}

module.exports = MockAddonManager;

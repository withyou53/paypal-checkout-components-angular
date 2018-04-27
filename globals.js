/* @flow */
/* eslint import/no-commonjs: off */

let postRobotGlobals = require('post-robot/globals');
let xcomponentGlobals = require('xcomponent/globals');

function getNextVersion() : string {
    let version = require('./package.json').version;
    version = version.split('.');
    version[2] = (parseInt(version[2], 10) + 1).toString();
    version = version.join('.');
    return version;
}

function getNextMajorVersion() : string {
    return getNextVersion().split('.')[0];
}

function getNextMinorVersion() : string {
    return getNextVersion();
}

module.exports = Object.assign({}, postRobotGlobals, xcomponentGlobals, {
    __PAYPAL_CHECKOUT__: {
        __LEGACY_SUPPORT__:    true,
        __DEFAULT_LOG_LEVEL__: 'warn',
        __MAJOR__:             true,
        __MAJOR_VERSION__:     getNextMajorVersion(),
        __MINOR_VERSION__:     getNextMinorVersion(),
        __sdk__:               undefined,
        __paypal_checkout__:   undefined
    }
});

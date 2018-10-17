/* @flow */
/* eslint no-restricted-globals: 0, promise/no-native: 0 */

import { getWebpackConfig } from 'grumbler-scripts/config/webpack.config';

import { webpackCompileToString } from '../screenshot/lib/compile';
import { testGlobals } from '../globals';

const fundingEligibility = testGlobals.__paypal_checkout__.serverConfig.fundingEligibility;

jest.setTimeout(120000);

const cache = {};

async function getButtonScript() : Promise<{ Buttons : (Object) => string, DEFAULT_PROPS : Object }> {

    const config = {
        entry:         './src/buttons/template/componentTemplate.jsx',
        libraryTarget: 'commonjs',
        web:           false
    };

    const cacheKey = JSON.stringify(config);
    if (cache[cacheKey]) {
        return cache[cacheKey];
    }

    const script = await webpackCompileToString(getWebpackConfig(config));

    const exports : Object = {};
    eval(script); // eslint-disable-line no-eval,security/detect-eval-with-expression

    if (typeof exports.Buttons !== 'function') {
        throw new TypeError(`Expected componentTemplate to be a function`);
    }

    cache[cacheKey] = exports;

    return exports;
}

test(`Button should render with ssr, with minimal options`, async () => {

    const { Buttons } = await getButtonScript();

    const html = Buttons({
        locale:          { country: 'US', lang: 'en' },
        platform:        'desktop',
        sessionID:       'xyz',
        buttonSessionID: 'abc',
        fundingEligibility
    }).toString();

    if (!html || typeof html !== 'string') {
        throw new Error(`Expected html to be a non-empty string`);
    }
});

test(`Button should fail to render with ssr, with invalid style option`, async () => {

    const { Buttons } = await getButtonScript();

    let expectedErr;

    try {
        Buttons({
            style:           { color: 'red' },
            locale:          { country: 'US', lang: 'en' },
            platform:        'desktop',
            sessionID:       'xyz',
            buttonSessionID: 'abc',
            fundingEligibility
        }).toString();
    } catch (err) {
        expectedErr = err;
    }

    if (!expectedErr) {
        throw new Error(`Expected button render to error out`);
    }
});

test(`Button should fail to render with ssr, with invalid locale`, async () => {

    const { Buttons } = await getButtonScript();

    let expectedErr;

    try {
        Buttons({
            locale:          { country: 'FR', lang: 'de' },
            platform:        'desktop',
            sessionID:       'xyz',
            buttonSessionID: 'abc',
            fundingEligibility
        }).toString();
    } catch (err) {
        expectedErr = err;
    }

    if (!expectedErr) {
        throw new Error(`Expected button render to error out`);
    }
});

test(`Button renderer should export DEFAULT_PROPS`, async () => {

    const { DEFAULT_PROPS } = await getButtonScript();

    if (!DEFAULT_PROPS) {
        throw new Error(`Expected DEFAULT_PROPS to be exported`);
    }

    if (!DEFAULT_PROPS.hasOwnProperty('COMMIT')) {
        throw new Error(`Expected DEFAULT_PROPS.COMMIT to be exported`);
    }

    if (!DEFAULT_PROPS.hasOwnProperty('VAULT')) {
        throw new Error(`Expected DEFAULT_PROPS.VAULT to be exported`);
    }

    if (!DEFAULT_PROPS.hasOwnProperty('INTENT')) {
        throw new Error(`Expected DEFAULT_PROPS.INTENT to be exported`);
    }

    if (!DEFAULT_PROPS.hasOwnProperty('ENV')) {
        throw new Error(`Expected DEFAULT_PROPS.ENV to be exported`);
    }

    if (!DEFAULT_PROPS.hasOwnProperty('PLATFORM')) {
        throw new Error(`Expected DEFAULT_PROPS.PLATFORM to be exported`);
    }
});

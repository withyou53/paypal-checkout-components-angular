/* @flow */

import { config } from '../config';
import { awaitKey } from '../lib';

export function validateProps(props : Object, required : boolean = true) {

    if (!required) {
        return;
    }

    if (props.env && !config.paypalUrls[props.env]) {
        throw new Error(`Invalid env: ${props.env}`);
    }

    if (!props.payment) {
        throw new Error(`Must specify payment method`);
    }

    if (!props.onAuthorize) {
        throw new Error(`Must specify onAuthorize callback`);
    }
    
    if (props.style && props.style.size) {
        if (config.buttonSizes.indexOf(props.style.size) === -1) {
            throw new Error(`Invalid button size: ${props.style.size}`);
        }
    }

    let env = props.env || config.env;

    if (props.client) {
        let clientID = props.client[env];

        if (!clientID) {
            throw new Error(`Client ID not found for env: ${env}`);
        }

        if (clientID.match(/^(.)\1+$/)) {
            throw new Error(`Invalid client ID: ${clientID}`);
        }
    }
}

export function getNativeStart() : ?Function {
    return window.ppnativexo && window.ppnativexo.start && window.ppnativexo.start.bind(window.ppnativexo);
}

export function awaitNativeStart() : SyncPromise<Function> {
    return awaitKey(window, 'ppnativexo').then(nativexo => {
        return nativexo.start.bind(nativexo);
    });
}

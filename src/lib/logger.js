/* @flow */

import { useLogger } from 'zoid/src';
import { getLogger, FPTI_KEY } from 'paypal-braintree-web-client/src';
import { getQueryParam } from 'belter/src';

import { getVersion } from '../globals';
import { FPTI_CONTEXT_TYPE } from '../constants';

import { getButtonSessionID } from './session';

function getRefererDomain() : string {
    return (window.xchild && window.xchild.getParentDomain)
        ? window.xchild.getParentDomain()
        : window.location.host;
}

function getOrderID() : ?string {
    if (window.root && window.root.token) {
        return window.root.token;
    }

    let queryToken = getQueryParam('token');

    if (queryToken) {
        return queryToken;
    }
}

export function setupLogger() {
    let logger = getLogger();
    
    useLogger(logger);

    logger.addTrackingBuilder(() => {

        let orderID = getOrderID();
        let buttonSessionID = getButtonSessionID();

        let contextType;
        let contextID;

        if (orderID) {
            contextType = FPTI_CONTEXT_TYPE.ORDER_ID;
            contextID = orderID;
        } else if (buttonSessionID) {
            contextType = FPTI_CONTEXT_TYPE.BUTTON_SESSION_ID;
            contextID = buttonSessionID;
        }

        return {
            [FPTI_KEY.CONTEXT_TYPE]:       contextType,
            [FPTI_KEY.CONTEXT_ID]:         contextID,
            [FPTI_KEY.BUTTON_SESSION_UID]: buttonSessionID,
            [FPTI_KEY.VERSION]:            getVersion(),
            [FPTI_KEY.TOKEN]:              orderID,
            [FPTI_KEY.REFERER]:            getRefererDomain()
        };
    });
}

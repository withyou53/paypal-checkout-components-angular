/* @flow */

import { generateECToken } from '../../tests/common';

// eslint-disable-next-line promise/catch-or-return
window.paypal.Button.render({

    payment() : string {
        return generateECToken();
    },

    onAuthorize() {
        window.paypal.postRobot.send(window.top.frames[0], 'onAuthorize');
    }

}, document.body).then(button => {

    button.window.paypal.Checkout.contexts.iframe = (window.location.hash === '#iframe');
    button.window.document.querySelector('button').click();
});

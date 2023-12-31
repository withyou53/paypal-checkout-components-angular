/* @flow */
/** @jsx node */
/* eslint max-lines: 0 */

import { node, dom } from "@krakenjs/jsx-pragmatic/src";
import {
  getLogger,
  getPayPalDomainRegex,
  getSDKMeta,
  getPayPalDomain,
  getLocale,
  getCSPNonce,
} from "@paypal/sdk-client/src";
import { create, type ZoidComponent } from "@krakenjs/zoid/src";
import { inlineMemoize } from "@krakenjs/belter/src";
import { Overlay, SpinnerPage } from "@paypal/common-components/src";

import { type InstallmentsProps } from "./props";

export type InstallmentsComponent = ZoidComponent<InstallmentsProps>;

export function getInstallmentsComponent(): InstallmentsComponent {
  return inlineMemoize(getInstallmentsComponent, () => {
    return create({
      tag: "paypal-installments",
      url: () =>
        `${getPayPalDomain()}${__PAYPAL_CHECKOUT__.__URI__.__INSTALLMENTS__}`,

      domain: getPayPalDomainRegex(),

      autoResize: {
        width: false,
        height: true,
      },

      dimensions: {
        width: "100%",
        height: "100%",
      },

      // 2023-08-23 Shane Brunson
      // I don't think Zoid uses this logger prop and I don't think we the SDK
      // use it anywhere either. I'm trying to fix the main branch from building
      // though and removing all these logger calls is more of risky change than
      // I'm willing to make right now though.
      // $FlowIssue mismatch between beaver-logger and zoid logger type
      logger: getLogger(),

      prerenderTemplate: ({ doc, props }) => {
        const nonce = props.nonce || getCSPNonce();
        return (<SpinnerPage nonce={nonce} />).render(dom({ doc }));
      },

      containerTemplate: ({
        context,
        close,
        focus,
        doc,
        event,
        frame,
        prerenderFrame,
        props,
      }) => {
        const { nonce } = props;
        return (
          <Overlay
            context={context}
            close={close}
            focus={focus}
            event={event}
            frame={frame}
            prerenderFrame={prerenderFrame}
            autoResize={true}
            hideCloseButton={true}
            nonce={nonce}
          />
        ).render(dom({ doc }));
      },

      props: {
        sdkMeta: {
          type: "string",
          queryParam: true,
          sendToChild: false,
          value: getSDKMeta,
        },

        clientID: {
          type: "string",
          queryParam: true,
        },

        locale: {
          type: "object",
          queryParam: true,
          value: getLocale,
        },
        nonce: {
          type: "string",
          default: getCSPNonce,
          required: false,
        },
      },
    });
  });
}

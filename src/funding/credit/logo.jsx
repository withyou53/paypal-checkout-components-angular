
/* @flow */
/* @jsx jsxToHTML */

import { COUNTRY, type LocaleType } from 'paypal-sdk-constants/src';
import { jsxToHTML, JsxHTMLNode } from 'belter/src'; // eslint-disable-line no-unused-vars

import { SVGLogo, type LogoColorMap } from '../common';
import { LOGO_COLOR, BUTTON_LOGO } from '../../constants';

const CREDIT_LOGO_COLORS : LogoColorMap = {
    [ LOGO_COLOR.WHITE ]: {
        primary:   '#ffffff',
        secondary: '#ffffff'
    }
};

export function CreditLogo({ logoColor, locale, nonce } :
    { logoColor : $Values<typeof LOGO_COLOR>, locale? : LocaleType, nonce : string }) : JsxHTMLNode {

    if (!CREDIT_LOGO_COLORS[logoColor]) {
        throw new Error(`No ${ logoColor } credit logo available`);
    }

    let { country } = locale || {};
    let { primary } = CREDIT_LOGO_COLORS[logoColor];

    return (
        <SVGLogo
            nonce={ nonce }
            name={ BUTTON_LOGO.CREDIT }
            logoColor={ logoColor }
            render={ () => {
                switch (country) {
                case COUNTRY.DE:
                    return (
                        <svg width="135" height="32" viewBox="0 0 135 32" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1.3333333,0,0,-1.3333333,10,40)" fill={ primary }>
                                <g transform="matrix(0.17016911,0,0,0.17819595,39.327112,22.053803)">
                                    <path d="m 0,0 -1.35,-8.619 c -0.146,-0.929 -0.946,-1.613 -1.886,-1.613 h -40.935 c -0.922,0 -1.445,1.057 -0.884,1.79 l 29.853,39.007 h -19.237 c -0.683,0 -1.205,0.611 -1.099,1.286 l 1.35,8.619 c 0.145,0.929 0.945,1.613 1.885,1.613 H 7.112 c 0.922,0 1.444,-1.055 0.886,-1.788 L -21.724,1.286 H -1.1 C -0.416,1.286 0.106,0.675 0,0 m 203.3312,42.0833 c 0.684,0 1.206,-0.611 1.1,-1.287 l -4.446,-28.132 c -1.041,-6.73 -2.359,-13.391 -8.395,-18.456 -5.065,-4.302 -12.143,-5.828 -18.248,-5.828 -6.106,0 -12.767,1.526 -16.444,5.828 -4.371,5.065 -3.608,11.726 -2.567,18.456 l 4.394,27.808 c 0.146,0.928 0.946,1.611 1.885,1.611 h 10.668 c 0.683,0 1.205,-0.61 1.1,-1.285 l -4.101,-26.261 c -1.11,-6.799 -1.804,-14.223 6.938,-14.223 8.743,0 10.408,7.424 11.518,14.223 l 4.05,25.932 c 0.145,0.929 0.945,1.614 1.885,1.614 z m -361.2517,-52.3157 h -10.665 c -0.685,0 -1.207,0.611 -1.1,1.287 l 6.249,39.511 h -9.939 c -0.684,0 -1.206,0.61 -1.1,1.285 l 1.35,8.619 c 0.146,0.929 0.946,1.614 1.886,1.614 h 33.145 c 0.684,0 1.206,-0.611 1.1,-1.286 l -1.35,-8.619 c -0.145,-0.929 -0.945,-1.613 -1.885,-1.613 h -9.608 l -6.198,-39.188 c -0.147,-0.927 -0.946,-1.61 -1.885,-1.61 m -98.5277,28.8638 h 1.318 c 4.441,0 9.549,0.837 10.477,6.522 0.929,5.688 -2.034,6.505 -6.779,6.522 h -1.927 c -0.58,0 -1.075,-0.422 -1.166,-0.995 z m 23.345,-28.864 h -13.977 c -0.594,0 -1.136,0.341 -1.393,0.878 l -9.224,19.244 h -0.139 l -2.985,-18.819 c -0.119,-0.75 -0.766,-1.303 -1.526,-1.303 h -10.977 c -0.684,0 -1.206,0.611 -1.1,1.287 l 7.848,49.725 c 0.119,0.751 0.766,1.304 1.526,1.304 h 19.009 c 10.339,0 17.416,-4.926 15.681,-16.097 -1.179,-7.216 -6.175,-13.461 -13.807,-14.779 l 12.015,-19.748 c 0.451,-0.742 -0.083,-1.692 -0.951,-1.692 m 445.918,52.3159 h 11.349 c 0.385,0 0.743,-0.199 0.946,-0.526 l 19.517,-31.46 h 0.139 l 4.81,30.376 c 0.147,0.927 0.946,1.61 1.885,1.61 h 10.667 c 0.684,0 1.206,-0.611 1.099,-1.287 l -7.799,-49.418 c -0.147,-0.927 -0.946,-1.611 -1.886,-1.611 h -11.347 c -0.386,0 -0.744,0.2 -0.947,0.528 l -19.517,31.528 h -0.139 l -4.811,-30.445 c -0.146,-0.928 -0.946,-1.611 -1.885,-1.611 h -10.666 c -0.684,0 -1.206,0.611 -1.1,1.287 l 7.8,49.418 c 0.146,0.928 0.946,1.611 1.885,1.611 m -304.5422,0 h 11.349 c 0.385,0 0.743,-0.199 0.946,-0.526 l 19.517,-31.46 h 0.139 l 4.81,30.376 c 0.147,0.927 0.946,1.61 1.885,1.61 h 10.667 c 0.684,0 1.206,-0.611 1.099,-1.287 l -7.799,-49.418 c -0.147,-0.927 -0.946,-1.611 -1.886,-1.611 h -11.347 c -0.386,0 -0.744,0.2 -0.947,0.528 l -19.517,31.528 h -0.139 l -4.811,-30.445 c -0.146,-0.928 -0.946,-1.611 -1.885,-1.611 h -10.666 c -0.684,0 -1.206,0.611 -1.1,1.287 l 7.8,49.418 c 0.146,0.928 0.946,1.611 1.885,1.611 M 131.156,1.2855 h 15.004 c 0.684,0 1.206,-0.61 1.1,-1.286 l -1.35,-8.619 c -0.145,-0.928 -0.945,-1.613 -1.885,-1.613 h -26.969 c -0.685,0 -1.207,0.611 -1.1,1.287 l 7.799,49.418 c 0.147,0.927 0.946,1.611 1.885,1.611 h 10.666 c 0.684,0 1.206,-0.612 1.099,-1.287 z m -33.5321,20.607 2.937,18.58 c 0.147,0.928 0.946,1.611 1.885,1.611 h 10.666 c 0.684,0 1.206,-0.611 1.1,-1.287 l -7.8,-49.418 c -0.146,-0.927 -0.946,-1.611 -1.885,-1.611 h -10.664 c -0.685,0 -1.207,0.612 -1.1,1.288 l 3.196,20.152 h -19.636 l -3.145,-19.83 c -0.147,-0.927 -0.946,-1.61 -1.885,-1.61 h -10.666 c -0.685,0 -1.207,0.611 -1.1,1.287 l 7.799,49.418 c 0.147,0.928 0.946,1.611 1.885,1.611 h 10.666 c 0.684,0 1.206,-0.611 1.099,-1.287 l -2.988,-18.904 z m 221.8207,-2.9142 c 0.699,0 1.224,-0.638 1.094,-1.325 -1.342,-7.069 -3.07,-13.21 -8.427,-19.351 -6.245,-7.147 -14.432,-10.269 -23.175,-10.269 -16.444,0 -26.088,11.171 -23.521,27.615 2.706,16.999 15.958,28.17 32.819,28.17 10.373,0 17.776,-4.519 20.966,-13.617 0.198,-0.566 -0.087,-1.189 -0.644,-1.409 l -11.599,-4.569 c -0.598,-0.236 -1.275,0.081 -1.466,0.694 -1.354,4.349 -4.637,7.175 -9.686,7.175 -8.95,0 -14.987,-8.535 -16.236,-16.514 -1.318,-8.118 2.29,-16.374 11.24,-16.374 5.898,0 10.894,3.053 12.351,9.089 h -9.793 c -0.686,0 -1.209,0.614 -1.099,1.292 l 1.373,8.458 c 0.088,0.539 0.553,0.935 1.099,0.935 z m -438.1464,9.9777 -1.132,-7.133 h 14.032 c 0.684,0 1.206,-0.61 1.1,-1.285 l -1.35,-8.619 c -0.145,-0.929 -0.945,-1.613 -1.885,-1.613 h -12.076 c -0.937,0 -1.735,-0.68 -1.884,-1.605 l -1.198,-7.415 h 14.865 c 0.684,0 1.206,-0.611 1.1,-1.286 l -1.35,-8.619 c -0.145,-0.929 -0.945,-1.613 -1.885,-1.613 h -26.831 c -0.684,0 -1.206,0.611 -1.099,1.286 l 7.799,49.418 c 0.146,0.928 0.946,1.611 1.885,1.611 h 26.834 c 0.683,0 1.206,-0.61 1.1,-1.285 l -1.35,-8.619 c -0.146,-0.929 -0.946,-1.614 -1.886,-1.614 h -12.904 c -0.939,0 -1.738,-0.682 -1.885,-1.609 M 34.135,25.9168 H 33.996 L 25.739,9.2648 h 11.31 z m -13.807,-27.06 -4.747,-8.518 c -0.197,-0.353 -0.569,-0.571 -0.973,-0.571 H 2.701 c -0.844,0 -1.381,0.902 -0.979,1.644 l 27.171,50.089 c 0.194,0.359 0.57,0.583 0.978,0.583 h 13.29 c 0.523,0 0.976,-0.365 1.088,-0.876 L 55.21,-8.8812 c 0.152,-0.694 -0.377,-1.351 -1.088,-1.351 H 41.905 c -0.525,0 -0.979,0.367 -1.089,0.88 l -1.755,8.209 z m -216.5493,27.06 h -0.139 l -8.257,-16.652 h 11.31 z m -13.807,-27.06 -4.747,-8.518 c -0.197,-0.353 -0.569,-0.571 -0.973,-0.571 h -11.907 c -0.844,0 -1.381,0.902 -0.979,1.644 l 27.171,50.089 c 0.194,0.359 0.57,0.583 0.978,0.583 h 13.29 c 0.523,0 0.976,-0.365 1.088,-0.876 l 10.961,-50.089 c 0.152,-0.694 -0.377,-1.351 -1.088,-1.351 h -12.217 c -0.525,0 -0.979,0.367 -1.089,0.88 l -1.755,8.209 z m 517.9793,-39.4791 -6.146,-39.098 c -0.119,-0.757 0.467,-1.442 1.233,-1.442 h 6.181 c 1.024,0 1.896,0.745 2.055,1.756 l 6.06,38.396 c 0.119,0.757 -0.466,1.442 -1.233,1.442 h -6.917 c -0.614,0 -1.138,-0.447 -1.233,-1.054 m -77.0618,-12.7966 h -7.207 c -0.689,0 -1.334,-0.342 -1.721,-0.912 l -9.942,-14.642 -4.213,14.07 c -0.263,0.88 -1.073,1.484 -1.993,1.484 h -7.084 c -0.856,0 -1.457,-0.842 -1.182,-1.651 l 7.936,-23.294 -7.464,-10.531 c -0.586,-0.827 0.005,-1.97 1.018,-1.97 h 7.2 c 0.683,0 1.322,0.334 1.71,0.895 l 23.968,34.591 c 0.574,0.828 -0.019,1.96 -1.026,1.96 m 58.6183,-13.956 c -0.693,-4.097 -3.945,-6.847 -8.093,-6.847 -2.08,0 -3.744,0.669 -4.815,1.935 -1.06,1.256 -1.46,3.045 -1.123,5.037 0.645,4.06 3.95,6.899 8.035,6.899 2.036,0 3.689,-0.675 4.78,-1.954 1.099,-1.287 1.53,-3.088 1.216,-5.07 m 9.992,13.956 h -7.169 c -0.615,0 -1.138,-0.447 -1.234,-1.054 l -0.315,-2.004 -0.501,0.726 c -1.553,2.254 -5.014,3.007 -8.469,3.007 -7.922,0 -14.689,-6.003 -16.006,-14.422 -0.685,-4.201 0.288,-8.215 2.669,-11.016 2.189,-2.574 5.311,-3.646 9.031,-3.646 6.385,0 9.927,4.102 9.927,4.102 l -0.321,-1.993 c -0.12,-0.758 0.466,-1.443 1.233,-1.443 h 6.457 c 1.024,0 1.896,0.744 2.055,1.756 l 3.876,24.545 c 0.12,0.757 -0.466,1.442 -1.233,1.442 m -116.7913,-13.956 c -0.693,-4.097 -3.945,-6.847 -8.093,-6.847 -2.08,0 -3.744,0.669 -4.815,1.935 -1.06,1.256 -1.46,3.045 -1.123,5.037 0.645,4.06 3.95,6.899 8.035,6.899 2.036,0 3.689,-0.675 4.78,-1.954 1.099,-1.287 1.531,-3.088 1.216,-5.07 m 9.992,13.956 h -7.169 c -0.615,0 -1.138,-0.447 -1.233,-1.054 l -0.316,-2.004 -0.501,0.726 c -1.553,2.254 -5.014,3.007 -8.469,3.007 -7.921,0 -14.689,-6.003 -16.006,-14.422 -0.685,-4.201 0.288,-8.215 2.669,-11.016 2.189,-2.574 5.311,-3.646 9.031,-3.646 6.385,0 9.927,4.102 9.927,4.102 l -0.321,-1.993 c -0.12,-0.758 0.466,-1.443 1.233,-1.443 h 6.457 c 1.024,0 1.896,0.744 2.055,1.756 l 3.876,24.545 c 0.12,0.757 -0.466,1.442 -1.233,1.442 m -43.0269,-0.172 c -0.818,-5.375 -4.924,-5.375 -8.894,-5.375 h -2.259 l 1.585,10.035 c 0.096,0.607 0.618,1.054 1.233,1.054 h 1.035 c 2.703,0 5.256,0 6.572,-1.54 0.787,-0.922 1.026,-2.287 0.728,-4.174 m -1.728,14.023 h -14.974 c -1.024,0 -1.896,-0.745 -2.055,-1.756 l -6.055,-38.396 c -0.119,-0.757 0.466,-1.442 1.233,-1.442 h 7.149 c 1.024,0 1.896,0.745 2.055,1.756 l 1.634,10.358 c 0.16,1.012 1.031,1.757 2.055,1.757 h 4.739 c 9.863,0 15.555,4.773 17.043,14.233 0.669,4.138 0.027,7.389 -1.911,9.665 -2.129,2.502 -5.904,3.825 -10.913,3.825 m 108.5272,-14.023 c -0.818,-5.375 -4.923,-5.375 -8.894,-5.375 h -2.259 l 1.585,10.035 c 0.096,0.607 0.619,1.054 1.233,1.054 h 1.035 c 2.703,0 5.256,0 6.572,-1.54 0.787,-0.922 1.026,-2.287 0.728,-4.174 m -1.728,14.023 h -14.974 c -1.024,0 -1.896,-0.745 -2.055,-1.756 l -6.055,-38.396 c -0.119,-0.757 0.466,-1.442 1.233,-1.442 h 7.683 c 0.717,0 1.327,0.521 1.438,1.229 l 1.717,10.885 c 0.16,1.012 1.031,1.757 2.055,1.757 h 4.739 c 9.863,0 15.555,4.773 17.043,14.233 0.669,4.138 0.027,7.389 -1.911,9.665 -2.129,2.502 -5.903,3.825 -10.913,3.825 m -161.6161,-40.475 -4.55,18.557 h 3.561 l 3.442,-14.442 7.914,14.442 h 3.798 l -15.748,-27.656 h -3.758 z M 82.525,-65.6994 c -0.989,1.121 -2.328,1.681 -4.016,1.681 -1.319,0 -2.546,-0.356 -3.679,-1.068 -1.135,-0.712 -2.045,-1.701 -2.731,-2.967 -0.686,-1.267 -1.028,-2.691 -1.028,-4.274 0,-1.767 0.5,-3.205 1.503,-4.313 1.002,-1.107 2.242,-1.661 3.719,-1.661 1.346,0 2.612,0.369 3.799,1.108 1.187,0.738 2.136,1.746 2.848,3.026 0.713,1.28 1.069,2.672 1.069,4.175 0,1.74 -0.495,3.171 -1.484,4.293 m -8.527,12.206 -1.661,-10.604 c 0.791,0.976 1.806,1.761 3.047,2.354 1.239,0.594 2.65,0.891 4.233,0.891 1.529,0 2.908,-0.376 4.135,-1.128 1.226,-0.752 2.182,-1.787 2.868,-3.106 0.686,-1.319 1.029,-2.809 1.029,-4.472 0,-2.162 -0.515,-4.153 -1.543,-5.974 -1.029,-1.819 -2.388,-3.264 -4.075,-4.332 -1.689,-1.068 -3.469,-1.602 -5.342,-1.602 -1.635,0 -2.981,0.329 -4.036,0.988 -1.055,0.659 -1.912,1.623 -2.571,2.889 l -0.515,-3.205 h -3.403 l 4.313,27.301 z M 39.4576,-76.5416 c 0.976,-1.121 2.308,-1.681 3.996,-1.681 1.319,0 2.552,0.356 3.699,1.069 1.148,0.712 2.064,1.701 2.751,2.967 0.685,1.266 1.028,2.691 1.028,4.273 0,1.767 -0.501,3.198 -1.503,4.293 -1.003,1.095 -2.256,1.642 -3.759,1.642 -1.32,0 -2.572,-0.37 -3.759,-1.108 -1.187,-0.738 -2.136,-1.741 -2.849,-3.007 -0.712,-1.266 -1.068,-2.651 -1.068,-4.155 0,-1.741 0.488,-3.171 1.464,-4.293 m 9.892,-4.253 0.474,2.968 c -0.844,-1.108 -1.899,-1.986 -3.165,-2.631 -1.266,-0.647 -2.704,-0.969 -4.313,-0.969 -1.53,0 -2.902,0.369 -4.115,1.107 -1.214,0.738 -2.163,1.767 -2.848,3.086 -0.687,1.319 -1.029,2.823 -1.029,4.51 0,2.111 0.507,4.083 1.523,5.916 1.016,1.833 2.347,3.29 3.996,4.372 1.648,1.081 3.357,1.622 5.124,1.622 3.297,0 5.553,-1.279 6.766,-3.837 l 1.781,11.157 h 3.521 l -4.313,-27.301 z m -28.8284,15.3321 c -1.253,-1.094 -2.104,-2.421 -2.552,-3.976 h 11.474 c 0.026,0.21 0.04,0.501 0.04,0.87 0,1.478 -0.395,2.638 -1.187,3.482 -0.792,0.844 -1.913,1.266 -3.363,1.266 -1.688,0 -3.159,-0.548 -4.412,-1.642 m 10.406,2.454 c 1.306,-1.439 1.958,-3.305 1.958,-5.6 0,-0.764 -0.039,-1.397 -0.118,-1.899 -0.079,-0.501 -0.212,-1.095 -0.396,-1.78 h -14.877 c -0.079,-1.979 0.435,-3.502 1.543,-4.57 1.108,-1.068 2.612,-1.602 4.511,-1.602 1.319,0 2.519,0.164 3.601,0.494 1.081,0.33 2.149,0.824 3.205,1.484 l -0.476,-2.968 c -2.031,-1.371 -4.431,-2.057 -7.201,-2.057 -1.82,0 -3.396,0.39 -4.728,1.167 -1.332,0.777 -2.348,1.854 -3.046,3.225 -0.699,1.371 -1.049,2.914 -1.049,4.629 0,1.688 0.422,3.435 1.266,5.243 0.845,1.806 2.124,3.323 3.839,4.55 1.714,1.226 3.824,1.84 6.33,1.84 2.453,0 4.333,-0.719 5.638,-2.156 m -18.0138,-1.4448 c -1.556,0 -2.875,-0.561 -3.956,-1.681 -1.082,-1.122 -1.794,-2.751 -2.137,-4.888 l -1.543,-9.772 h -3.522 l 3.047,19.308 h 3.403 l -0.515,-3.283 c 1.583,2.268 3.483,3.402 5.698,3.402 0.554,0 1.068,-0.039 1.543,-0.119 l -0.475,-3.086 c -0.474,0.079 -0.989,0.119 -1.543,0.119 m -24.5657,-1.0092 c -1.253,-1.094 -2.104,-2.421 -2.552,-3.976 h 11.474 c 0.026,0.21 0.04,0.501 0.04,0.87 0,1.478 -0.396,2.638 -1.187,3.482 -0.792,0.844 -1.913,1.266 -3.363,1.266 -1.689,0 -3.159,-0.548 -4.412,-1.642 m 10.406,2.454 c 1.305,-1.439 1.958,-3.305 1.958,-5.6 0,-0.764 -0.039,-1.397 -0.118,-1.899 -0.079,-0.501 -0.212,-1.095 -0.396,-1.78 h -14.877 c -0.079,-1.979 0.435,-3.502 1.543,-4.57 1.108,-1.068 2.612,-1.602 4.511,-1.602 1.319,0 2.519,0.164 3.601,0.494 1.081,0.33 2.149,0.824 3.204,1.484 l -0.475,-2.968 c -2.031,-1.371 -4.431,-2.057 -7.201,-2.057 -1.82,0 -3.396,0.39 -4.728,1.167 -1.332,0.777 -2.348,1.854 -3.046,3.225 -0.699,1.371 -1.049,2.914 -1.049,4.629 0,1.688 0.422,3.435 1.266,5.243 0.844,1.806 2.124,3.323 3.838,4.55 1.715,1.226 3.824,1.84 6.331,1.84 2.453,0 4.333,-0.719 5.638,-2.156 m -24.4869,-17.7856 h -3.561 l -2.057,14.837 -6.766,-14.837 h -3.522 l -2.77,19.308 h 3.522 l 1.741,-15.193 6.805,15.193 h 3.324 l 2.017,-15.154 6.529,15.154 h 3.6 z M -59.063,-65.225 c -1.201,-0.778 -2.124,-1.807 -2.77,-3.086 -0.647,-1.28 -0.969,-2.619 -0.969,-4.017 0,-1.741 0.494,-3.171 1.484,-4.292 0.988,-1.122 2.261,-1.682 3.817,-1.682 1.53,0 2.889,0.402 4.076,1.207 1.187,0.805 2.11,1.852 2.769,3.146 0.659,1.292 0.99,2.637 0.99,4.035 0,1.715 -0.495,3.12 -1.484,4.215 -0.989,1.093 -2.262,1.641 -3.818,1.641 -1.53,0 -2.896,-0.389 -4.095,-1.167 M -50.28,-62 c 1.332,-0.766 2.368,-1.827 3.106,-3.185 0.738,-1.359 1.108,-2.896 1.108,-4.61 0,-1.952 -0.482,-3.825 -1.444,-5.618 -0.963,-1.794 -2.321,-3.251 -4.075,-4.372 -1.755,-1.122 -3.766,-1.682 -6.034,-1.682 -1.688,0 -3.199,0.383 -4.531,1.148 -1.331,0.764 -2.374,1.833 -3.125,3.205 -0.752,1.37 -1.128,2.914 -1.128,4.628 0,1.979 0.481,3.859 1.444,5.639 0.963,1.781 2.321,3.224 4.076,4.332 1.753,1.108 3.764,1.663 6.033,1.663 1.715,0 3.238,-0.383 4.57,-1.148 m -20.7559,4.1545 c -0.897,0.87 -2.255,1.305 -4.075,1.305 h -4.471 l -1.82,-11.513 h 4.668 c 2.401,0 4.175,0.639 5.322,1.919 1.148,1.279 1.721,2.894 1.721,4.847 0,1.424 -0.448,2.571 -1.345,3.442 m 3.027,2.373 c 1.464,-1.318 2.196,-3.112 2.196,-5.38 0,-3.113 -0.944,-5.599 -2.829,-7.459 -1.887,-1.859 -4.715,-2.789 -8.487,-2.789 h -4.748 l -1.543,-9.694 h -3.759 l 4.313,27.301 h 8.309 c 2.901,0 5.084,-0.66 6.548,-1.979" />
                                </g>
                            </g>
                        </svg>
                    );
                default:
                    return (
                        <svg width="100" height="32" viewBox="0 0 95 32" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
                            <path fill={ primary } d="M 52.732 6.347 C 52.83 5.963 53.122 5.675 53.512 5.675 L 60.626 5.675 C 66.571 5.675 70.664 10.187 69.69 15.851 C 68.813 21.515 63.16 25.931 57.313 25.931 L 50.004 25.931 C 49.711 25.931 49.516 25.739 49.614 25.451 L 52.732 6.347 Z M 55.753 21.515 L 57.02 21.515 C 60.236 21.515 63.355 19.787 64.037 15.851 C 64.622 12.203 62.478 10.187 58.97 10.187 L 57.995 10.187 C 57.8 10.187 57.605 10.283 57.605 10.475 L 55.753 21.515 Z" />
                            <path fill={ primary } d="M 43.571 10.763 L 43.084 13.547 L 48.737 13.547 C 49.029 13.547 49.224 13.739 49.224 14.027 L 48.639 17.387 C 48.542 17.771 48.249 17.963 47.859 17.963 L 42.987 17.963 C 42.597 17.963 42.304 18.251 42.207 18.635 L 41.72 21.515 L 47.762 21.515 C 48.054 21.515 48.249 21.707 48.152 21.995 L 47.665 25.355 C 47.567 25.643 47.275 25.931 46.885 25.931 L 36.067 25.931 C 35.775 25.931 35.58 25.643 35.58 25.451 L 38.699 6.347 C 38.796 5.963 39.186 5.675 39.478 5.675 L 50.393 5.675 C 50.588 5.675 50.881 5.963 50.783 6.155 L 50.296 9.515 C 50.198 9.899 49.906 10.091 49.516 10.091 L 44.254 10.091 C 43.864 10.187 43.571 10.379 43.571 10.763 Z" />
                            <path fill={ primary } d="M 74.563 25.931 L 70.274 25.931 C 69.982 25.931 69.787 25.739 69.787 25.451 L 73.003 6.347 C 73.003 5.963 73.393 5.675 73.685 5.675 L 78.071 5.675 C 78.266 5.675 78.558 5.963 78.461 6.251 L 75.342 25.355 C 75.245 25.643 74.952 25.931 74.563 25.931 Z" />
                            <path fill={ primary } d="M 34.118 25.931 L 28.466 25.931 C 28.173 25.931 27.978 25.835 27.881 25.643 L 24.178 18.155 L 24.08 18.155 L 22.911 25.451 C 22.813 25.739 22.618 25.931 22.326 25.931 L 17.843 25.931 C 17.551 25.931 17.356 25.739 17.453 25.451 L 20.572 6.251 C 20.669 5.963 20.864 5.675 21.156 5.675 L 28.855 5.675 C 33.046 5.675 35.97 7.595 35.288 11.915 C 34.8 14.699 32.754 17.195 29.635 17.675 L 34.508 25.355 C 34.703 25.547 34.411 25.931 34.118 25.931 Z M 24.665 14.795 L 25.152 14.795 C 27.004 14.795 29.05 14.411 29.44 12.203 C 29.83 10.091 28.661 9.707 26.711 9.707 L 25.932 9.707 C 25.639 9.707 25.445 9.899 25.445 10.091 L 24.665 14.795 Z" />
                            <path fill={ primary } d="M 86.16 25.931 L 81.872 25.931 C 81.579 25.931 81.384 25.739 81.482 25.451 L 83.918 10.187 L 79.923 10.187 C 79.63 10.187 79.435 9.899 79.533 9.611 L 80.02 6.347 C 80.118 5.963 80.41 5.675 80.8 5.675 L 94.249 5.675 C 94.444 5.675 94.736 5.963 94.639 6.251 L 94.054 9.515 C 94.054 9.899 93.761 10.187 93.372 10.187 L 89.473 10.187 L 86.939 25.355 C 86.939 25.643 86.647 25.931 86.16 25.931 Z" />
                            <path fill={ primary } d="M 17.648 11.435 C 17.648 11.819 17.161 12.011 16.868 11.723 C 15.894 10.763 14.529 10.283 13.068 10.283 C 9.657 10.283 7.025 12.779 6.441 15.851 C 5.953 19.019 7.902 21.323 11.313 21.323 C 12.678 21.323 14.237 20.843 15.407 19.979 C 15.796 19.787 16.284 20.075 16.186 20.459 L 15.407 25.067 C 15.309 25.355 15.114 25.547 14.822 25.643 C 13.165 26.123 11.898 26.507 10.339 26.507 C 1.178 26.507 -0.284 19.019 0.203 15.851 C 1.47 6.923 9.072 4.907 13.652 5.195 C 15.114 5.195 16.479 5.387 17.745 5.867 C 18.233 6.059 18.428 6.443 18.33 6.923 L 17.648 11.435 Z" />
                        </svg>
                    );

                }
            } }
        />
    );
}

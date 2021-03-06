'use strict';

var _ = require('lodash');

var htmlUtil = exports;

// inject script into html
htmlUtil.injectScriptIntoHtml = function (html, script) {
    html = html.replace(/(<\/head>)/ig, function (match) {
        return script + match;
    });
    html = html.replace(/Content-Security-Policy/ig, function (match) {
        return 'hacky';
    });
    return html;
};

htmlUtil.createScriptTag = function (tpl, showIframe, weinreDomain) {
    return _.template(tpl)({
        showIframe: showIframe,
        weinreDomain: weinreDomain
    });
};
/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';

        var base_url = $.environmentVar(
            'https://apibodegas.loadingplay.com/',
            'https://apibodegas.ondev.today/',
            'https://apibodegas.loadingplay.com/');
        var checkout_url = $.environmentVar(
            'http://localhost:8522/',
            'https://lpcheckout.ondev.today/',
            'https://pay.loadingplay.com');
        var app_public = $.environmentVar('fm','fm','fm');
        var site_name = $.environmentVar('familymarket', 'familymarket', 'familymarket');

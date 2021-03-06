/* global $ */
'use strict';

$(document).ready(function()
{

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

    // functions
    // productos relacionados
    var related = function(tag)
    {
        var config = {
            'app_public': app_public,
            'base_url': base_url,
            'maxProducts': 8,
            'templateOrigin': '#product_template',
            'tag': tag,
            'ignore_stock': false
        };

        $('.product-related').ecommerce('product_box', config);
    };

    //cambia imagenes pequeñas en detalle de producto
    $(document).on("click", '.little', function(){
        $("#img_detail").attr("src", $(this).attr('src'));
    });

});

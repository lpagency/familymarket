$(document).ready(function()
{

    $(document).on("click", ".botonMasFiltros", function(ev)
    {
        $(".filtro-filtros").toggle(1000);
        $(".filtro-filtros").css("overflow", "visible");
    });

    $(document).on("click", ".botonMasCategorias", function(ev)
    {
        $(".filtro-categorias").toggle(1000);
        $(".filtro-categorias").css("overflow", "visible");
    });

    $(document).on("click", ".botonMasMarca", function(ev)
    {
        $(".filtro-marca").toggle(1000);
        $(".filtro-marca").css("overflow", "visible");
    });

    $(document).on("click", ".botonMasTalla", function(ev)
    {
        $(".filtro-talla").toggle(1000);
        $(".filtro-talla").css("overflow", "visible");
    });

    $(document).on("click", ".botonMasColor", function(ev)
    {
        $(".filtro-color").toggle(1000);
        $(".filtro-color").css("overflow", "visible");
    });

    // EXCLUSIVO PARA PLACARE
    $("title").html("Family Market - Listado de productos");
    $("meta[name=description]").attr("content", "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.");

    $(document).on("click", ".background-color-producto", function()
    {
        $(this).css("border", "black solid 2px");
    });

    $(document).on("click", ".categ", function(ev)
    {

        $(".subcateg").removeClass('active');
        $(this).addClass('active');
    });

    var hyper2 = Utils.getUrlParameter('search_query');

    if (hyper2 != undefined)
    {
        $(".tag-header").html("Resultados");
    }

    var hyper = Utils.getUrlParameter('tag').split(',');

    if (hyper[0] == "perro")
    {
        $(".tag-header").html("PERROS");
        $(".perros").removeClass("hidden");
    }

    if (hyper[0] == "gato")
    {
        $(".tag-header").html("GATOS");
        $(".gatos").removeClass("hidden");
        $(".opw").html("TIPO DE GATO");
    }

    if (hyper[0] == "marca")
    {
        $(".tag-header").html("MARCAS");
        $(".gatos").removeClass("hidden");
        $(".perros").removeClass("hidden");
    }

    if (hyper[0] == "oferta")
    {
        $(".tag-header").html("Oferta");
    }

    if (hyper[0] != "perro" && hyper[0] != "gato")
    {
        $(".filter-col").html("");
    }
});

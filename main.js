// menu hamburguer mobile


    $(document).ready(function () {
        $('ul').hover(function () {
            $(this).find('.menu-content').slideDown();
        }, function () {
            $(this).find('.menu-content').slideUp();
        });
    });


// menu hamburguer mobile

<script>
    $(document).ready(function () {
        $('ul').hover(function () {
            $(this).find('.menu-content').slideDown();
        }, function () {
            $(this).find('.menu-content').slideUp();
        });
    });
</script>

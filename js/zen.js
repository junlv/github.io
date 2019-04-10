$(document).ready(function () {
    $("#toc_toggle").on("click", function () {
        console.log('toc_container')
        if ($("#toc_container").hasClass('toc-show')) {
            $('#toc_container').removeClass('toc-show')
            $('#toc_container').addClass('toc-hide')
        } else {
            $('#toc_container').removeClass('toc-hide')
            $('#toc_container').addClass('toc-show')
        }
    });
});
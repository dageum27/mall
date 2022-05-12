$(function () {
    $('a:nth-of-type(1)').click(function () {
        $('#f1').fadeIn();
        $('#f2').hide();
        $('#f3').hide();
        $('#f4').hide();
    });

    $('a:nth-of-type(2)').click(function () {
        $('#f2').fadeIn();
        $('#f1').hide();
        $('#f3').hide();
        $('#f4').hide();
    });

    $('a:nth-of-type(3)').click(function () {
        $('#f3').fadeIn();
        $('#f2').hide();
        $('#f1').hide();
        $('#f4').hide();
    });

    $('a:nth-of-type(4)').click(function () {
        $('#f4').fadeIn();
        $('#f2').hide();
        $('#f3').hide();
        $('#f1').hide();
    });
});
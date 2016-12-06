$(document).ready(function() {
    $(".menu .menu-icon").on("click", function(e) {
        e.preventDefault();
        $("nav").find("ul").slideToggle();
    });
    $('a[href^="#"]').on("click", function(e) {
        var t = $($(this).attr("href"));
        if (t.length) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: t.offset().top
            }, 1e3)
        }
    });



    $(function() {
        var loc = window.location.pathname;
        $('.menu-list a[href="' + loc + '"]').addClass("active");
    });
    // $('#gender').on('click', function() { var dimensionValue = $(this).val(); });
    $(function() {
        var $vvForm = $('#vv-form');
        // ga('set', {
        //     'dimension1': $('#gender :selected').val(),
        //     'metric1': 1
        // });
        $vvForm.submit(function(e) {
            e.preventDefault();
            $.ajax({
                url: '//formspree.io/bansalvipul.111@gmail.com',
                method: 'POST',
                data: $(this).serialize(),
                dataType: 'json',
                beforeSend: function() {
                    $('input[type="submit"]').val('Sending...');
                },
                success: function(data) {
                    console.log(data);
                    $('input[type="submit"]').val('Thank You').prop('disabled', true);
                    console.log($('#gender :selected').val());
                    ga('set', 'dimension1', $('#gender :selected').val());
                    console.log($('#gender :selected').val());
                    // ga('set', 'dimension1', dimensionValue);
                    // ga('send', 'pageview', '/work/');
                    // console.log(dimensionValue);
                    // ga('send', 'pageview', {
                    //     'dimension1': dimensionValue
                    // });



                },
                error: function(err) {
                    $('input[type="submit"]').val('Resend!');
                }
            });
        });
    });

});

$(document).ready(function () {
    $('.filter-btn').click(function () {
        var filter = $(this).data('filter');

        $('.gallery-item').fadeOut(200);

        if (filter === 'all') {
            $('.gallery-item').fadeIn(500);
        } else {
            $('.' + filter).fadeIn(500);
        }
    });

    $('.gallery-item').each(function (index) {
        $(this).delay(index * 200).fadeTo(1000, 1); 
    });
});

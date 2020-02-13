$(function () {
    $("#getting-started")
        .countdown("2020/03/01", function (event) {
            $('.days').text(
                event.strftime('%D')
            );
            $('.hours').text(
                    event.strftime('%H')
                );
            $('.minuit').text(
                    event.strftime('%M')
                );
            $('.seconds').text(
                    event.strftime('%S ')
                );
        });
        
    $('.counter').counterUp();
    
});
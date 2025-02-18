$(document).ready(function () {
       
        $('img.logo').hover(
                function () {
                    $(this).animate({ width: '200px', backgroundColor: '#ffcc00' }, 1000);
                },
                function () {
                    $(this).animate({ width: '140px', backgroundColor: '#f8f9fa' }, 500);
                }
            );
    });
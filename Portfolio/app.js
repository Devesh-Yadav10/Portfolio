$(".right img").on('mouseover', function(){
    $(".right").addClass("paused");
    $(".hover-text").animate({opacity:1}, 300);
});
$(".right img").on('mouseout', function(){
    $(".right").removeClass("paused");
    $(".hover-text").animate({opacity:0}, 200);
});
$(".project").on('mouseover', function(){
    $(".project").addClass("paused");
});

var itemhovered = $(".contacts-image img");

for (var i = 0; i < itemhovered.length; i++) {
    $(itemhovered[i]).on('mouseover', function(){
        // Get the id of the current element
        var colorId = $(this).attr('id');
        
        // Ensure the ID exists and is valid
        if (colorId) {
            // Apply the drop shadow using the id as the color
            $(this).css('filter', `drop-shadow(0 0 3px #${colorId})`);
        }
    });
    $(itemhovered[i]).on('mouseout', function(){
        // Get the id of the current element
        var colorId = $(this).attr('id');
        
        // Ensure the ID exists and is valid
        if (colorId) {
            // Apply the drop shadow using the id as the color
            $(this).css('filter', `drop-shadow(0 0 0px #${colorId})`);
        }
    });
}

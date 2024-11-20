var mediaQuery = window.matchMedia('(max-width: 600px)');
var widerScreen = window.matchMedia('(min-width: 601px)');


$(function(){
    $('.show-content').hide()
    $('.primary-content').show();
    $('.wider-show-content').hide();


    $('.share-icon').on('click', ()=>{
        if(mediaQuery.matches){
            $('.show-content').toggle();
            $('.primary-content').toggle();
        }
    else if(widerScreen.matches)
        {
        $('.primary-content').show();
        $('.wider-show-content').toggle();

    }}
)})


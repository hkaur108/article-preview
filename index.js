$(document).ready(()=>{
    let showContent=$('.show-content');
    let smallScreen=$('.smaller-screen');
    if($(window).width() > 650){
        $('.wider-screen').css({
            'opacity':'1'
        },'slow')
        $('.share-icon').on('click',()=>{
                showContent.toggleClass('show')
        })}
        else{
            $('.share-icon').on('click',()=>{ 
                console.log('I am getting clicked') 
                $('.smaller-screen').remove() 
                // $('.smaller-screen').css({
                //     'opacity':'0'
                // });
                $('.wider-show-content').css({
                    'opacity':'1'
                })
                $('.wider-show-content').children('.share-icon').on('click',()=>{
                    $('.wider-show-content').css({
                        'opacity':'0'
                    });
                    $('.bottom-container').append(smallScreen);
                    // $('.smaller-screen').css({
                    //     'opacity':'1'
                    // });
                });
            })
            

        }
       
    })


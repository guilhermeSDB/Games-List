$(document).ready(function(){

    //Filtra os card com base na pesquisa no Input
    let $inputSearch = $('.search__input')
    $inputSearch.on('keyup', function(){
        var value = $(this).val().toLowerCase()
        $('.game__card').filter( function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        }).css('opacity','0')
    })

    $('h1#txtFilterMobile').on('click', function(){
        $('svg.arrowFilterMobile').toggleClass('arrowUP')
        $('.filter_category').toggle('filterHeight')
    })

    AOS.init();

    new fullpage('#fullpage', {
        //options here
    });

})
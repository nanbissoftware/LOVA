$(function () {

    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('show');
        $('body').toggleClass('hidden');
        $('nav .search-result').hide();
        $('nav .menu').show();
        $('.bonita').show();
        $('.navHead .search').removeClass('show');
        $('.menu li a').next().removeClass('d-block');
        $('.menu li a').next().addClass('d-none');
        $(window).scrollTop(0);
        if ($("nav").hasClass("show")) {
            $('.bonita').show();
        }
        else{
            $('.bonita').hide();
        }
        return false;
    });

    $('.navHead .search button').on('click', function(){

        $('.bonita').toggle();
        $(this).parent().toggleClass('show');
        $(this).prev().focus();
        $('nav .menu').toggle();
        $('nav .search-result').toggle();
        
        return false;
    });

    $('.menu .menu-item a').on('click', function(){
        // $('.menu li').removeClass('active');
        // $(this).parent().addClass('active');
        $('.menu-trigger').addClass('active');
        $('nav').addClass('show');
        $('body').toggleClass('hidden');
        $('nav .search-result').hide();
        $('nav .menu').show();
        $('.bonita').show();
        $('.navHead .search').removeClass('show');
        $(this).next().show();
        $(window).scrollTop(0);

        if ($("nav").hasClass("show")) {
            $(this).next().toggleClass('d-block');
        }
        
        return false;
    });


    $("*").click(function(event){
        if ($("nav").hasClass("show") && !$(event.target).is("nav *")) {
            $('.menu-trigger').removeClass('active');
            $('nav').removeClass('show');
            $('body').removeClass('hidden');
            $('nav .search-result').hide();
            $('nav .menu').show();
            $('.bonita').show();
            $('.navHead .search').removeClass('show');
            $('.menu li a').next().removeClass('d-block');
            $('.menu li a').next().addClass('d-none');
            if ($("nav").hasClass("show")) {
                $(this).next().toggleClass('d-block');
            }
            
            return false;
        }
    });


    // $('.sub-01 li a').on('click', function(){
    //     alert('deneme');
    // });
    

});
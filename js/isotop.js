$(function(){
  var content = $('.tab-content'),
       tab = $('ul.tab li');

   content.isotope({
       filter: '*',
       animationOptions: {
           duration: 1000
       }
   });

  tab.on('click', function(e){
      tab.removeClass('active').filter(this).addClass('active');
      var filter = $(this).data('filter');
      content.isotope({
          filter: filter,
          animationOptions: {
              duration: 1000
          }
      });
      e.preventDefault();
  });
});

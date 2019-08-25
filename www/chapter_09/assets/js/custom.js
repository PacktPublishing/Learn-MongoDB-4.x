  (function($) {
    "use strict";
        $('.site-header').affix({
          offset: {
            top: 100,
            bottom: function () {
              return (this.bottom = $('.footer').outerHeight(true))
            }
          }
        })

        function count($this){
          var current = parseInt($this.html(), 10);
              current = current + 1; /* Where 50 is increment */  
              $this.html(++current);
                  if(current > $this.data('count')){
                      $this.html($this.data('count'));
                  } else {    
                      setTimeout(function(){count($this)}, 50);
                  }
              }           
              $(".stat-count").each(function() {
                $(this).data('count', parseInt($(this).html(), 10));
                $(this).html('0');
          count($(this));
        });

        $('[data-toggle="tooltip"]').tooltip();
        
  })(jQuery);
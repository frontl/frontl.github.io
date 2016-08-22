		var xy=function(x,y){
			return 'a'+x+'-'+y;
		}
        var hang=20;
		for(var i=0;i<hang;i++){
		  for(var j=0;j<hang;j++){
		  	var lei=Math.random()>0.98;
		    $('<div>')
		    .addClass(function(){
		    	 return 'block '+(lei?'lei':'')
		    })
		    .attr('id',xy(i,j))
		    .appendTo($('.xibox'))
		  }


		}
		$('.xibox').on('click',".lei",function(){
			
			
		  $(".block")
		 // .css('background','yellow')
		 .addClass("xa")
		 .each(function(){
		
		$('.xixibox').removeClass("x");

		})
		 $(this).removeClass("xa")
			.css('background','pink');
		
		})





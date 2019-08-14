
function getOuterHTML(object) {
var element;
if (!object) return null;
element = document.createElement("div");
element.appendChild(object.cloneNode(true));
return element.innerHTML;
}
function readmorep(pnumber){
 var pCount = 1;
	var numOfP = jQuery('.category-description > p, .short-description .std p').length;
	var testArray = [];
	if(pnumber < numOfP){
	jQuery('.category-description, .short-description .std').children().each(function(){
		if(pCount==pnumber)
		{ if(jQuery(this).is('h2,h3,h4,h5,h6,ul,ol,table,td,tr')){
			 return true;
			}
			var hiddenDiv = jQuery(this).after('<div class="hiddencontent" />');	
		}
		if(pCount>pnumber)
		{
			testArray.push(getOuterHTML(jQuery(this)[0]));
		
			jQuery(this).remove();			
			
		}
	    	if(jQuery(this).is('h2,h3,h4,h5,h6,ul,ol,table,td,tr')){
			 return true;
			}
				pCount++;
			 
			
	});
	}
	
	testArray = testArray.join('');
	jQuery('.hiddencontent').append('<p>').html(testArray);

	
	jQuery('.hiddencontent').css('display', 'none').after('<a href="javascript:void(0);" title="readmore" class="contentreadmore">Read More</a>'); 
	
	jQuery('.contentreadmore').click(function(){
		
			jQuery(this).prev().toggleClass('selecteddiv').slideToggle();
			
			var button = jQuery('.contentreadmore').text();
			
			if(button == 'Read More'){
				
				jQuery(this).text('Read Less');
				
				}
				if(button == 'Read Less'){
					
					
				jQuery(this).text('Read More');
					}
			
			
			
			
		
		});
}
	
	
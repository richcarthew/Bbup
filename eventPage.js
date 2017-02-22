chrome.alarms.onAlarm.addListener(function(alarm) {
  /*
  var stretch = new Audio("stretch.mp3");
  stretch.onplay = function () { alert("foo"); };
  stretch.play();
  
   var x = new Audio("stretch.mp3");
  x.addEventListener('load', function() {
    x.play();
    alert("foo2");
	});
	
  */
 
	
	var x = new Audio("stretch.mp3");
	
	x.play();
	
	
	x.onplay = function ()
		{
  			// alert("Stretch!");
		}
		
  

});

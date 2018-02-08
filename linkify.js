var links = document.getElementsByTagName("a"); 
				
for(var i = 0; i < links.length; i++) 
{ 
	if(links[i].style.display != "none") 
	{ 
		var start = Date.now(); 
		var request = new XMLHttpRequest(); 
		request.linkIndex = i; 
		request.open("GET", links[i].getAttribute("href"), true); 
		
		request.onload = function() 
		{ 
			var loadTime = Date.now() - start; 
			
			if(loadTime > 500) 
			{ 
				if(loadTime < 850) color = "yellow"; 
				else if(loadTime < 1500) color = "orange"; 
				else if(loadTime < 2500) color = "red"; 
				else color = "darkred"; 
			}
			
			links[this.linkIndex].style.setProperty("color", color, "important"); 
		}; 
		
		request.send(); 
	} 
}
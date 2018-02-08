chrome.webNavigation.onCompleted.addListener(function(details)
{
	if(details.frameId == 0)
	{
		var tabID = details.tabId;

		chrome.tabs.executeScript
		(
			tabID,
			{
				code:
				'function frameLoaded(element, start) \
				{ \
				    console.log("done in " + (Date.now() - start) + "ms"); \
				} \
				\
				var links = document.getElementsByTagName("a"); \
				\
				for(var i = 0; i < Math.min(links.length, 5); i++) \
				{ \
					if(links[i].style.display != "none") \
					{ \
						document.body.innerHTML += "<iframe src=\'" + links[i].getAttribute(\'href\') + "\' onload=\'frameLoaded(" + i + ", " + Date.now() + ")\'></iframe>"; \
					} \
				}'
			}
		);
	}
});
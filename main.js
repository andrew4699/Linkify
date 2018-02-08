chrome.webNavigation.onCompleted.addListener(function(details)
{
	if(details.frameId == 0)
	{
		chrome.tabs.executeScript
		(
			details.tabId,
			{
				file: "linkify.js"
			}
		);
	}
});
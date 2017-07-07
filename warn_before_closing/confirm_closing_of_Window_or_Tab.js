//  Instructions:
//  ============
//  1. Install the "Page Modifier" Chrome extension from:
//     https://chrome.google.com/webstore/detail/page-modifier/pgmllbdmhhcjoehklfhifiagoemhlieb
//  2. Click on the new icon on the top right (or left) corner 
// 	   and fill in the following fields:
//
//  	 New/Edit Script: Warn before closing Chrome tab or window
//
// 	     Applied to: *
//
//  3. Copy and paste this script into the "Script Source" section  
//     and hit the "Save" button
//
//  Based on the script and Extension by guris.cz    petr.gurecky<AT>gmail.com
//  http://pm.guris.cz/   -> search for:  "Prevent page from closing"
//  http://www.gtricks.com/chrome/4-handy-ways-prevent-google-chrome-closing-accidently/
//
//
//  NOTE: a page must FIRST finish loading COMPLETELY before it will be protected by a "Close Warning" ...

var __debug=0; // change value to 1 for debug prints

function PopIt() {
    return 'Are you sure you want to leave?';
}
 
function UnPopIt() {
    /* nothing to return */
}

var url_hostname = window.location.hostname;
var googleSearch = url_hostname.indexOf("google") > -1;
if (__debug) {
	alert("url_hostname="+url_hostname + "\n" 
		+ "googleSearch="+googleSearch);
}

$(document).ready(function () {
	if (!googleSearch) {
		// If we're not coming from a Google Search..
		window.onbeforeunload = PopIt;
	}

	$('a').click(function () {
		window.onbeforeunload = UnPopIt;
	});
});

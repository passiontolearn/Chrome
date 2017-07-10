/*
  NOTE !
  1. Currently a confirmation popup will appear every time a user clicks on an external link 
     or is redirected etc'... Ideally we'd like to display a confirmation popup for a tab *only* 
	 if the 'X' button or Ctrl+W were pressed...
	 In the meantime until then.. we can use a workaround of attaching to different events and then allowing them.
    https://eureka.ykyuen.info/2011/02/22/jquery-javascript-capture-the-browser-or-tab-closed-event/
  
  Instructions:
  ============
  1. Install the "Page Modifier" Chrome extension from:
     https://chrome.google.com/webstore/detail/page-modifier/pgmllbdmhhcjoehklfhifiagoemhlieb
  2. Click on the new icon on the top right (or left) corner 
 	   and fill in the following fields:

  	 New/Edit Script: Warn before closing Chrome tab or window

 	     Applied to: *

  3. Copy and paste this script into the "Script Source" section  
     and hit the "Save" button

  Based on the script and Extension by guris.cz    petr.gurecky<AT>gmail.com
  http://pm.guris.cz/   -> search for:  "Prevent page from closing"
  http://www.gtricks.com/chrome/4-handy-ways-prevent-google-chrome-closing-accidently/


  NOTE: a page must FIRST finish loading COMPLETELY before it will be protected by a "Close Warning" ...
*/

var __debug=0; // change value to 1 for debug prints

function PopIt() {
    return 'Are you sure you want to leave?';
}
 
function UnPopIt() {
    /* nothing to return */
}

var url_hostname = window.location.hostname;
var googlePage = url_hostname.indexOf("google") > -1;
if (__debug) {
	alert("url_hostname="+url_hostname + "\n" 
		+ "googlePage="+googlePage);
}

$(document).ready(function () {
	if (!googlePage) {
		// If we're not coming from a  Search..
		window.onbeforeunload = PopIt;
	}

	$('a').click(function () {
		window.onbeforeunload = UnPopIt;
	});
});

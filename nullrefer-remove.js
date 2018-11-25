// ==UserScript==
// @name			Remove nullrefer from URL
// @namespace		JayBrown
// @version			1.0.2
// @description		Remove nullrefer from URL
// @author			Joss Brown
// @match			www.nullrefer.com/?*
// @grant			none
// @run-at			document-start
// ==/UserScript==

var regExp = /www\.nullrefer\.com\/\?/;
var theURL = window.location.toString();
var matchURL = regExp.exec(theURL);

if (matchURL !== null) {

   var splitURL = theURL.split("nullrefer.com/?");
   var newURL = splitURL[1];
   window.location = newURL;

}

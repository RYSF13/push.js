/* 
 * push.js: make your HTML tidier
 * Author: Robert L. Ryan(1085908428@qq.com)
 * Time: 2025-01-21T15:32:00Z
 * Licensed under the GNU GPL License
 */
( function( global, DOM ) {
	"use strict"
	global.push = function( url ) {
		var script = DOM.createElement('script'); 
		var scriptOld = DOM.getElementsByTagName('script')[0]; 
		script.src = url; 
		scriptOld.parentNode.insertBefore(script,scriptOld); 
	};
}) ( typeof window === "object" ? window : this, document );

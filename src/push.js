/* 
 * push.js: make your HTML tidier
 * Version: 1.1.0
 * Author: Robert L. Ryan(1085908428@qq.com)
 * Time: 2025-01-21T17:50:00Z
 * Licensed under the GNU GPL License
 */
( function( global, DOM ) {
	"use strict"
	global.push = function( url ) {
		if( url instanceof Array ){
			for(var i=0;i<url.length;i++)push(url[i])
		} else {
			var script = DOM.createElement('script'); 
			var scriptOld = DOM.getElementsByTagName('script')[0]; 
			script.src = url; 
			scriptOld.parentNode.insertBefore(script,scriptOld); 
		};
	};
}) ( typeof window === "object" ? window : this, document );

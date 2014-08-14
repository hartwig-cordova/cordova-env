/**
 * Copyright (C) 2014, Oliver Salzburg
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 * Created: 2014-08-12 17:05
 *
 * @author Oliver Salzburg
 * @copyright Copyright (C) 2014, Oliver Salzburg, HARTWIG Communication & Events
 * @license http://opensource.org/licenses/mit-license.php MIT License
 */


(function() {
	"use strict";

	function resolveEnvironment() {
		console.log( "Resolving Cordova environment..." );
		window.CordovaEnvironment = {
			isLoaded   : false,
			isBrowser  : false,
			isEmulated : false
		};

		if( document.URL.indexOf( "http://" ) !== -1 || document.URL.indexOf( "https://" ) !== -1 ) {
			window.CordovaEnvironment.isBrowser = true;
		}

		if( typeof window.device === "undefined" ) {
			window.CordovaEnvironment.isLoaded = false;

		} else {
			window.CordovaEnvironment.isLoaded = true;
			if( window.device.platform.toLowerCase() === "android" && window.device.model === "sdk" ) {
				window.CordovaEnvironment.isEmulated = true;
			}
			if( window.device.platform.toLowerCase() === "blackberry10" && window.device.model === "All Touch [1280x768]" ) {
				window.CordovaEnvironment.isEmulated = true;
			}
			if( window.device.platform.toLowerCase() === "ios" && window.device.model === "x86_64" ) {
				window.CordovaEnvironment.isEmulated = true;
			}
		}

		console.log( window.CordovaEnvironment );
	}

	resolveEnvironment();

	document.addEventListener( "deviceready", resolveEnvironment, false );
}());

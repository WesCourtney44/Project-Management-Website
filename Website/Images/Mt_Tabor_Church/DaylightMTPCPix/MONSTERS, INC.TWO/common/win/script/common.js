// common
// InterActual Technologies
// Common function container scripts
// (c) 2001 - 2002 InterActual Technologies
// Author: Scott M. Bruck

var winObj;


function PlayMovieX(urlf){

	PlayMovie(urlf,platform);
	
	top.vari.trapPlaying=0;

}

function setCookie(cookieName, cookieValue, expires, path, domain, secure)
{
   document.cookie = escape(cookieName) + '=' + escape(cookieValue)
      + (expires ? '; EXPIRES=' + expires.toGMTString() : '')
      + (path ? '; PATH=' + path : '')
      + (domain ? '; DOMAIN=' + domain : '')
      + (secure ? '; SECURE' : '');
}




function getCookie(cookieName)
{
   var cookieValue = null;
   var posName = document.cookie.indexOf(escape(cookieName) + '=');

   if (posName != -1)
   {
      var posValue = posName + (escape(cookieName) + '=').length;
      var endPos = document.cookie.indexOf(';', posValue);
      if (endPos != -1)
      {
         cookieValue = unescape(document.cookie.substring(posValue, endPos));
      }
      else
      {
         cookieValue = unescape(document.cookie.substring(posValue));
      }
   }
   return cookieValue;
}



function funCookie(name,Title,eTime,tTime){

InterActual.ShowControls();
var now = new Date();
var tomorrow = new Date(now.getTime() + 1000 * 60 * 60 * 24);
setCookie ('nTitle', Title, tomorrow);
setCookie ('neTime', eTime, tomorrow);
setCookie ('ntTime', tTime, tomorrow);

var valuenT=getCookie('nTitle');
var valueeT=getCookie('neTime');
var valuetT=getCookie('ntTime');

//alert('Title = '+valuenT);
//alert('Elapsed Time= '+valueeT);
//alert('Total Time= '+valuetT);

}


function rePlay(){

	top.location="index2.htm";

}


$(function(){$("#j_username").focus();var e=navigator.appName,t=navigator.appVersion,n=t.split(";"),r=n[1].replace(/[ ]/g,"");"Microsoft Internet Explorer"==e&&"MSIE7.0"==r?(document.getElementById("loginbtn").disabled=!0,alert("当前IE版本为IE7，请升级到IE8以上版本！")):"Microsoft Internet Explorer"==e&&"MSIE6.0"==r&&(document.getElementById("loginbtn").disabled=!0,alert("当前IE版本为IE6，请升级到IE8以上版本！"))});
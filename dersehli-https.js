var secssl = /^https/i;
var blog = document.location.hostname;
var slug = document.location.pathname;
var subs = window.location.search;
if (!window.location.origin.match(secssl)) {
window.location = "https://" + blog + slug + subs;
}
check_secure();
//https://dersehli.blogspot.com.tr/
//https://dersehli.blogspot.com/
//http://dersehli.blogspot.com.tr/
//http://dersehli.blogspot.com/
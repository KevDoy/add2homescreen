
/*SetCookie Code*/
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};


/* Main Script */
var dismissApp = getCookie('dismissapp'); // Check if User dismissed App
        var ua = window.navigator.userAgent; // Read User Agent
        var appmode = (window.matchMedia('(display-mode: standalone)').matches); // Check if user is in App Mode
        var iOS = !window.MSStream && /iPhone|iPod/.test(navigator.userAgent) && !ua.match(/CriOS/i) && !ua.match(/EdgiOS/i); // Check if on iOS Safari; Exclude Chrome for iOS; Exclude Edge for iOS
        var android = !window.MSStream && /Android/.test(navigator.userAgent) && /Chrome/.test(navigator.userAgent); // Check if on Chrome for Android
        if (iOS && appmode == false && dismissApp != "true") { // If on iOS Safari, NOT in App Mode, NOT dismissed in the last 30 days

            var ifIos = document.getElementById('ifIOS');
            ifIos.remove(); // Remove 'Hide App Notice'

        };
		if (android && appmode == false && dismissApp != "true") { // If on iOS Safari, NOT in App Mode, NOT dismissed in the last 30 days

            var ifAndroid = document.getElementById('ifAndroid');
            ifAndroid.remove(); // Remove 'Hide App Notice'

        };
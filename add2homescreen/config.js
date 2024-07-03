/*

Edit the values such as "Full App Name" and "#34333b".
Replace the png file the add2homescreen folder with your app or site icon.

*/

var add2homescreen = {
    "name": "Full App Name",
    "short_name": "App Name",
    "description": "App Description",
    "start_url": "/",
    "background_color": "#23222b",
    "theme_color": "#23222b",
    "display": "standalone",
    "icons": [{
        "src": "/add2homescreen/appicon.png",
        "sizes": "180x180",
        "type": "image/png"
    }]
}
const stringManifest = JSON.stringify(add2homescreen);
const blob = new Blob([stringManifest], { type: 'application/json' });
const manifestURL = URL.createObjectURL(blob);
document.querySelector('#add2homescreen').setAttribute('href', manifestURL);
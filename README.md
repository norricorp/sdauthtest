This repository holds a cut down svelte app to show use of the directus authentication sdk. Currently the logout api does not work as expected. You will need your own directus instance. The UI of this app is basic - I essentially took an existing app and hacked away anything unnecessary.

After cloning the repository, run npm install. Edit .env to add the url for your directus instance. You may need to change the CORS_ORIGIN entry in the .env of your directus instance.

Start this app (npm run dev), open the browser window and open browser tools (F12).

Click on guest, click on login, enter details in the popup.

After login, click on name -> logout. Note console.log.


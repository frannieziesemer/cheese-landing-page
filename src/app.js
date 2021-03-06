console.log("Hello world");
function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client
    .init({
      apiKey: "YAIzaSyCk2nZpeF8rEzop2KTgcouaUKfzvdVnqcA",
      // clientId and scope are optional if auth is not required.
      //clientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
      //scope: "https://www.googleapis.com/auth/calendar.events.readonly"
    })
    .then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.request({
        path:
          "https://www.googleapis.com/calendar/v3/calendars/calendarId/events/eventId"
      });
    })
    .then(
      function(response) {
        console.log(response.result);
      },
      function(reason) {
        console.log("Error: " + reason.result.error.message);
      }
    );
}
// 1. Load the JavaScript client library.
gapi.load("client", start);

function swapi(uri) {
  fetch("https://swapi.co/api" + uri)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(json) {
      console.log(json.name);

      for (var key of Object.keys(json)) {
        $("#" + key).text(json[key]);
      }
    });
}

$(function() {
  console.log("start");
});

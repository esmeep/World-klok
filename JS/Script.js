setInterval(function () {
  //Los Angeles
  let losAngelesElement = document.querySelector("#Los-Angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "H:mm:ss [<small>]A[</small]"
  );
}, 1000);
function updateSydneyTime() {
  //Sydney
  let SydneyElement = document.querySelector("#Sydney");
  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");

  SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");
  SydneyTimeElement.innerHTML = SydneyTime.format(
    "H:mm:ss [<small>]A[</small]"
  );
}
setInterval(updateSydneyTime, 1000);

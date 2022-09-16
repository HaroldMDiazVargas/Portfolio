// Tip Calculator

let result = document.getElementsByClassName("total__result");

const calculateTip = () => {
  let bill = Number(document.getElementById("totalBill").value);
  let numOfPerson = Number(document.getElementById("numOfPerson").value);
  let tipPercentage = Number(document.getElementById("tipPercentage").value);

  let tip = bill * (tipPercentage / 100);
  let totalBill = bill + tip;
  let perPersonPay = totalBill / numOfPerson;

  document.getElementsByClassName(
    "calculator-tip__percent"
  )[0].innerHTML = `${tipPercentage}%`;
  document.getElementsByClassName(
    "calculator-tip__people"
  )[0].innerHTML = `${numOfPerson}`;

  let totalElements = document.getElementsByClassName("total__result");
  totalElements[0].innerHTML = `${tip.toFixed(2)}`;
  totalElements[1].innerHTML = `${totalBill.toFixed(2)}`;
  totalElements[2].innerHTML = `${perPersonPay.toFixed(2)}`;
};

// Calculator

//Function To Display Values On screen
function dis(value) {
  document.getElementsByClassName("calculator__screen")[0].value += value;
}

// Function For Evaluation
function solve() {
  let x = document.getElementsByClassName("calculator__screen")[0].value;
  let y = eval(x);
  document.getElementsByClassName("calculator__screen")[0].value = y;
}

//Function For clearing the screen
function clr() {
  document.getElementsByClassName("calculator__screen")[0].value = "";
}

//backspacing
function backspace() {
  let screen = document.getElementsByClassName("calculator__screen")[0].value;
  document.getElementsByClassName("calculator__screen")[0].value =
    screen.substring(0, screen.length - 1);
}

// Random quote generator

const generateQuote = () => {
  let url = "https://type.fit/api/quotes";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let randNum = Math.floor(Math.random() * 1500 + 1);
      let randomQuote = data[randNum];
      document.getElementsByClassName(
        "quote-gen__text"
      )[0].innerHTML = `"${randomQuote.text}"`;
      document.getElementsByClassName("quote-gen__author")[0].innerHTML = `- ${
        randomQuote.author ? randomQuote.author : ""
      }`;
    });
};

// Digital Clock

setInterval(showTime, 1000);

function showTime() {
  let date = new Date();
  let hour = date.getHours() % 12 || 12;
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
}

// Slick slide

$(".slider__top").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider__bottom",
});
$(".slider__bottom").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider__top",
  dots: true,
  // arrows: true,
  focusOnSelect: true,
});

$(".slider__action button[data-slide]").click(function (e) {
  e.preventDefault();
  let slide = $(this).data("slide");
  $(".slider__bottom").slick("slickGoTo", slide - 1);
});

// Music Player

// Select all the elements in the HTML page
// and assign them to a variable
let player = document.querySelector(".player");
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement("audio");

// Define the list of tracks that have to be played
let track_list = [
  {
    name: "Ukelele",
    artist: "Violett",
    image:
      "https://freemusicarchive.org/image/?file=images%2Falbums%2FVarious_Artists_-_Aires_Buenos_-_2009113014203475.jpg&width=290&height=290&type=image",
    path: "https://files.freemusicarchive.org//storage-freemusicarchive-org//music//no_curator//violett//Aires_Buenos//violett_-_04_-_ukelele_seph_remix.mp3",
  },
  {
    name: "Equation",
    artist: "The hermit",
    image:
      "https://freemusicarchive.org/image/?file=track_image%2FRsh7OEv17bMsBhJZx3HZiLr1O4dxRxf4nBOzmtww.jpeg&width=290&height=290&type=track",
    path: "https://files.freemusicarchive.org//storage-freemusicarchive-org//tracks//52XGYrH1sFstSczS6T52mpAN4xP2Bg0Ig9A4W2S5.mp3",
  },
  {
    name: "Flat Blue Acid",
    artist: "Simon Mathewson",
    image:
      "https://freemusicarchive.org/image/?file=image%2Fz392j03jzX54ASsJi3Ywig71W3k6fR7jSTX0BbHM.jpeg&width=290&height=290&type=image",
    path: "https://files.freemusicarchive.org//storage-freemusicarchive-org//tracks//ggBEwSSzoiiBNwSCrmn49MzfB7NuMloebARGSsGj.mp3",
  },
];

function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();

  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  // Update details of the track
  track_art.style.backgroundImage =
    "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);

  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);

  // Apply a random background color
  random_gradient();
}

function random_gradient() {
  let deg = Math.floor(Math.random() * 360);

  let gradient =
    "linear-gradient(" +
    deg +
    "deg, " +
    "#" +
    createHex() +
    ", " +
    "#" +
    createHex() +
    ")";
  player.style.background = gradient;
}

function createHex() {
  var hexCode1 = "";
  var hexValues1 = "0123456789abcdef";

  for (var i = 0; i < 6; i++) {
    hexCode1 += hexValues1.charAt(
      Math.floor(Math.random() * hexValues1.length)
    );
  }
  return hexCode1;
}

// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;

  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;

  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length - 1;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);

  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}

function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    // Add a zero to the single digit time values
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// Load the first track in the tracklist
loadTrack(track_index);

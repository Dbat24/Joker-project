const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// Disable/Enable Button
function toggleButton() {
  button.disable = !button.disable;
}

// VoiceRSS Speech Function
function tellMe(joke) {
  const jokeString = joke.trim().replace(/ /g, "%20");
  // VoiceRSS Speech Parameters
  VoiceRSS.speech({
    key: "70184fc4771a47a9a6eb712f031ed479",
    src: jokeString,
    hl: "en-us",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get Jokes From Joke API
async function getJokes() {
  let joke = " ";
  const apiUrl =
    // "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${dat.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Text-to-Speech
    tellMe(joke);
    //Disable Button
    toggleButton();
    tellMe(joke);
  } catch (error) {
    // Catch Error Here
    console.log("whoops", error);
  }
}

// Event Listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("eneded", toggleButton);

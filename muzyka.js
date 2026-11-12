function makeButtons(buttonClass) {
  const buttons = document.querySelectorAll(buttonClass);

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const wrapper = this.closest(".buttons");
      const text = wrapper.querySelector(".hiddenText");

      if (text) {
        text.classList.toggle("hidden");
      }
    });
  });
}

const allAudios = document.querySelectorAll("audio");

allAudios.forEach((audio) => {
  audio.addEventListener("play", () => {
    allAudios.forEach((otherAudio) => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
  });
});

makeButtons(".artist");
makeButtons(".song");
makeButtons(".appearance");

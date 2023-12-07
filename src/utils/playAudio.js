export const playNoteAudio = (tone) => {
  console.log(`/src/assets/sounds/kurd9/${tone}.wav`);
  let audio = new Audio(
    `/src/assets/sounds/kurd9/${tone.replace("#", "_")}.wav`
  );
  audio.play();
};

export const playNoteAudio = (tone) => {
  const audioUrl = new URL(
    `../assets/sounds/kurd9/${tone.replace("#", "_")}.wav`,
    import.meta.url
  ).href;

  let audio = new Audio(audioUrl);
  audio.play();
};

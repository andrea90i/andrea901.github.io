let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(1)
  .typeString('mamawebo')
  .pauseFor(1)
  .deleteChars(1)
  .start();
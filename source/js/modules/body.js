export default () => {
  if (typeof window !== `undefined`) {
    window.addEventListener(`DOMContentLoaded`, () => document.body.classList.add(`loaded`));
  }
};

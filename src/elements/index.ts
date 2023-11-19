const fileInput = document.querySelector<HTMLInputElement>("input[type=file]")!;
const form = document.querySelector<HTMLFormElement>("#form")!;
const occurrencesCard =
  document.querySelector<HTMLDivElement>("#occurences-card")!;

export { fileInput, form, occurrencesCard };

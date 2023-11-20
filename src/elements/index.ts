const fileInput = document.querySelector<HTMLInputElement>("input[type=file]")!;
const form = document.querySelector<HTMLFormElement>("#form")!;
const container = document.querySelector<HTMLDivElement>("#main-container")!;
const occurrencesCard =
  document.querySelector<HTMLDivElement>("#occurrences-card")!;

export { fileInput, form, container, occurrencesCard };

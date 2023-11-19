import { fileInput, occurrencesCard } from "../elements";
import processText from "../utilities/processText";

const handleSubmit = (event: Event) => {
  event.preventDefault();
  const file = fileInput.files?.[0];
  if (!file) {
    return;
  }

  if (file.type !== "text/plain") {
    alert("Only text files are allowed!");
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    const content = event.target!.result as string;
    const occurences = processText(content);

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    occurrencesCard.appendChild(cardBodyDiv);

    const list = document.createElement("ol");
    list.classList.add("list-group");

    occurences.forEach(([word, count]) => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = `${word}: ${count}`;
      list.appendChild(listItem);
    });

    cardBodyDiv.appendChild(list);
  };
  reader.readAsText(file);
};

export default handleSubmit;

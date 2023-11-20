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
    /*
     * Table structure:
     *
     * <tr>
     *   <th>{ranking}</th>
     *   <td>{word}/td>
     *   <td>{occurrences}</td>
     * </tr>
     *
     */

    const tableBody = document.getElementById("table-body")!;
    tableBody.innerHTML = "";

    const content = event.target!.result as string;
    const occurrences = processText(content);

    console.log(occurrencesCard);
    occurrencesCard.classList.remove("hidden");

    occurrences.forEach(([word, count], index) => {
      const rankingCell = document.createElement("th");
      const wordCell = document.createElement("td");
      const occurrencesCell = document.createElement("td");

      rankingCell.textContent = (index + 1).toString();
      wordCell.textContent = word;
      occurrencesCell.textContent = count.toString();

      const tableRow = document.createElement("tr");
      tableRow.appendChild(rankingCell);
      tableRow.appendChild(wordCell);
      tableRow.appendChild(occurrencesCell);

      tableBody.appendChild(tableRow);
    });
  };

  reader.readAsText(file);
};

export default handleSubmit;

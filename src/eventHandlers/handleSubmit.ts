import { fileInput } from "../elements";
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
    processText(content);
  };
  reader.readAsText(file);
};

export default handleSubmit;

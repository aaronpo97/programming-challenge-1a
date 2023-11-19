const processText = (text: string) => {
  const words = text
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => !/\d/.test(word))
    .map((word) => word.replace(/[^a-z'-]/g, ""))
    .filter((word) => word.length > 0);

  const wordCounts: { [key: string]: number } = {};

  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  const wordCountArray = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

  const topTen = wordCountArray.slice(0, 10);

  return topTen;
};

export default processText;

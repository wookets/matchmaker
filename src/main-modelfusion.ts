import { OllamaTextEmbeddingModel, embedMany } from "modelfusion";

const embeddings = await embedMany(
  new OllamaTextEmbeddingModel({ model: "llama2" }),
  [
    "At first, Nox didn't know what to do with the pup.",
    "He keenly observed and absorbed everything around him, from the birds in the sky to the trees in the forest.",
  ]
);

console.log(embeddings)
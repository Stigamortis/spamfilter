let model;
let wordIndex;
const MAX_LEN = 30;
const OOV_TOKEN = 1;

async function loadResources() {
  model = await tf.loadLayersModel("model/model.json");
  const tokenizer = await fetch("tokenizer.json").then(r => r.json());
  wordIndex = tokenizer.word_index;
  console.log("Model and tokenizer loaded");
}

loadResources();

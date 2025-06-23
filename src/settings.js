import {
  Settings,
} from "llamaindex";
import { OllamaEmbedding } from "@llamaindex/ollama";
import { OLLAMA_URL } from './env.js';
import { llm } from './llm.js';

Settings.llm = llm;
Settings.embedModel = new OllamaEmbedding({
  model: "nomic-embed-text",
  config: { host: OLLAMA_URL },
});

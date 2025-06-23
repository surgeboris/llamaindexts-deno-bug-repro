import { ollama } from "@llamaindex/ollama";
import { MODEL, OLLAMA_URL } from './env.js';

export const llm = ollama({ model: MODEL, config: { host: OLLAMA_URL } });

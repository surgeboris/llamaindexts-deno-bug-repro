import { queryIndex } from './queryIndex.js';
import { agent } from "@llamaindex/workflow";
import { llm } from './llm.js';

const queryTool = queryIndex.queryTool({
  includeSourceNodes: true,
  options: { similarityTopK: 10 },
});

export const queryAgent = agent({
  llm,
  tools: [queryTool],
});

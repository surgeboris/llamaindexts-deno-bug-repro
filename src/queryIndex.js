import {
  storageContextFromDefaults,
  VectorStoreIndex
} from "llamaindex";
import { QdrantVectorStore } from "@llamaindex/qdrant";
import { QDRANT_URL, QDRANT_COLLECTION } from './env.js';
import './settings.js';

const vectorStore = new QdrantVectorStore({
  url: QDRANT_URL,
  collectionName: QDRANT_COLLECTION,
});
const storageContext = await storageContextFromDefaults({ vectorStore });

export const queryIndex = await VectorStoreIndex.init({ nodes: [], storageContext });

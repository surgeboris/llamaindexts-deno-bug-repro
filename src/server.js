import { LlamaIndexServer } from "@llamaindex/server";
import { queryAgent } from './queryAgent.js';
import './settings.js';

const server = new LlamaIndexServer({
  async workflow() {
    return queryAgent;
  }
});

server.start();

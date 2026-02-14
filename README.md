## Reproducing the NPM package installation

1. Optional: create a folder of your liking and copy `package.json` and `src/` to that folder (to prevent `deno.lock` and `package-lock.json` from affecting the installation).
1. Run `deno install --allow-scripts` in the folder.
1. Run `deno info src/server.js` and search output for `@llamaindex+workflow`: there will be two instances with the same version.


## Reproducing the actual problem

This requires a Docker setup. Also requires powerful CPU, otherwise you might have to wait a very long time for LLM to output an answer.

1. Run `docker compose up -d` from the folder of this project on your host machine.
1. Run `docker compose exec llm /bin/ollama pull llama3.2` and download 2GB model.
1. (Once model is downloaded) navigate to `http://localhost:8080` — it should show a chat interface. Type any query into chat - and behold that server never responds.

1. Run `docker compose down`.
1. Remove `node_modules` folder
1. Swap the `CMD` line in the `Dockerfile.server` with its commented counterpart.
1. Swap the `CMD` line in the `Dockerfile.server` with its commented counterpart.
1. Run `docker compose build --no-cache`.
1. Run `docker compose up -d`.
1. Navigate to `http://localhost:8080` and type any query into chat - and behold that server responds correctly.

# matchmaker
An experiment with LLMs to determine how adequate it is at matchmaking. 

## Usage

In `src/`, main files for each different tool will load `mockdata/` into the target llm. From there, you can query the llm to analyze the provided embeddings. 


## Llama Index

This defaults to OpenAI. It will submit relevant document context with your OpenAI prompt. Maybe they will add assistant support? 

```sh
# set OPENAI_API_KEY= in .env
bun run src/main-llamaindex.ts
```

## Model Fusion

This is meant to work with ollama locally. Docs are scattered at best. 

## OpenAI

This uses the openai chatgpt api assistants. Pay per use. 

## PrivateGPT

The first and most complete uses privategpt. Note that privategpt is still very early - you cant even delete documents via the API. And the API is undocumented / partially not working properly. 

## Notes

* test/data/05-versions-space.pdf is added because llamaindex users something with nextjs which uses a pdf parser which for some reason needs to access this...
* OpenAI Assistants only seem to like txt files / format... It doesn't like json. It would be trivial to convert structured data to unstructured with code. If you use json it doesn't produce good results. 
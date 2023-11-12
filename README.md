# matchmaker
An experiment with LLMs to determine how adequate it is at matchmaking. 

## Usage

In `src/`, main files for each different tool will load `mockdata/` into the target llm. From there, you can query the llm to analyze the provided embeddings. 


## main-modelfusion

This is meant to work with ollama locally. Docs are scattered at best. 

## main-openai

This uses the openai chatgpt api assistants. 

## main-privategpt

The first and most complete uses privategpt. Note that privategpt is still very early - you cant even delete documents via the API. And the API is undocumented / partially not working properly. 

## mockdata/companies_txt

OpenAI Assistants only seem to like txt files / format... It doesn't like to ingest json. It would be trivial to convert structured data to unstructured with code. 
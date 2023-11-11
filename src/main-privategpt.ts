
import { readdir, readFile } from 'fs/promises';

// delete existing docs 
const existingDocsResponse = await fetch("http://0.0.0.0:8001/v1/ingest/list", {
  headers: { "Content-Type": "application/json" },
});
const existingDocsData = await existingDocsResponse.json()

for (const doc of existingDocsData.data) {
  const docId = doc.doc_id
  console.log(`Found ${docId}... Deleting...`)
  
  const response = await fetch(`http://0.0.0.0:8001/v1/ingest/${docId}`, {
    method: "DELETE"
  });
  console.log(response)
  const result = await response.json()
  console.log(result)
}


async function processJsonFiles(directory: string) {
  // Read the directory
  const files = await readdir(directory);

  // Filter out only JSON files
  const jsonFiles = files.filter(file => file.endsWith('.json'));

  // Loop through each JSON file
  for (const file of jsonFiles) {
    // Read the JSON file
    const data = await readFile(`${directory}/${file}`, 'utf8');

    // Parse and process the JSON data
    const jsonData = JSON.parse(data);
    // Process jsonData as needed
    //console.log(jsonData)
    // send documents to privategpt
    const response = await fetch("http://0.0.0.0:8001/v1/ingest", {
      method: "POST",
      body: JSON.stringify(jsonData),// file: `${directory}/${file}` },
      headers: { "Content-Type": "application/json" },
    });

    const body = await response.json();
    console.log(body)
  }
}

// Replace 'path/to/directory' with your directory path
processJsonFiles(`./mockdata/companies`);



// load companies from fs
// const path = "./mockdata/companies/aquapure.json";
// const file = Bun.file(path);

// const contents = await file.json();
// // { name: "my-package" }

// file.type; // => "application/json;charset=utf-8";





// make queries
import { useState } from 'react';

import './index.css';

function App() {
  const [selectedFile, setSelectedFile] = useState();
  // const [isSelected, setIsSelected] = useState(false);

  // function fileloaded(e) {
  //   let status = []; // Status output
  //   // e.target.result is the file's content as text
  //   const fileContents = e.target.result;
  //   status.push(`File name: "${selectedFile.name}". Length: ${fileContents.length} bytes.`);
  //   // Show first 80 characters of the file
  //   const first80char = fileContents.substring(0, 80);
  //   status.push(`First 80 characters of the file:\n${first80char}`)
  //   setStatus({ status: status.join("\n") })
  //   reader.onload = fileloaded;
  // }

  const onChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file)

    const reader = new FileReader();
    reader.onload = (e) => console.log("result", e.target.result);
    reader.readAsText(file);

    if (file) {
      setSelectedFile(file)
      console.log("selectedFile", selectedFile)
    }
  };

  function onClickPreventDefault(e) {
    e.preventDefault();
  }

  return (
    <div className="">
      <h1>File Archive</h1>
      <div>
        <input
          type="file"
          name="file"
          multiple={false}
          accept=".xml,.pdf,.jpeg"
          onChange={onChange}
        />
        {/* {isSelected ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )} */}
        <div>
          <button onClick={onClickPreventDefault}>Upload file</button>
        </div>
      </div>
    </div>
  );
}

export default App;

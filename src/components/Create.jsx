import React from 'react'
import { useState } from 'react';
import {AiOutlineFileText} from 'react-icons/ai'

const Create = () => {
    const [fileName, setFileName] = useState('');
    const [fileContent, setFileContent] = useState('');
    const [create, setCreate] = useState(false)
    // const [data, setData] = useState('');
    const [keys, setKeys] = useState('')
    const [clicked,setClicked] = useState(true)
  
    const handleFileNameChange = (event) => {
      setFileName(event.target.value);
   
    }
  
    const handleFileContentChange = (event) => {
      setFileContent(event.target.value);
    }
  
    const handleCreateFile = () => {
      localStorage.setItem(fileName, fileContent);
      setCreate(false)
      setFileName('');
      setFileContent('');
    }

    const handleGetAllData = () => {
        const keys = Object.keys(localStorage);
        setKeys(keys)
        // const values = keys.map((key) => localStorage.getItem(key));
        // setData(values);
        setClicked(false)
      }
  
    return (

      <div className='createPage'>
       
       <div className='createSide'>

        
           { create ?
<>
       <div>

          <input id='id' placeholder='File name' type="text" value={fileName} onChange={handleFileNameChange} />
       </div>
      
        <div>

          <textarea id='textarea' placeholder='Text information ...' value={fileContent} onChange={handleFileContentChange} />
        </div>
        
       
        <button className='button' onClick={handleCreateFile}>Save information</button>
</>
:
<button className='createBtn' onClick={() => setCreate(true)}>Create newFile</button>
}
       </div>

       <div className='fileSide'> 
       <div>
        {
            clicked?
            <button className='button' onClick={handleGetAllData}>Show Files</button>
            :
            <>

            <button className='button' onClick={()=> setClicked(true)}>Hide Files</button>
      {keys && keys.map((key) => <p className='file-box'><AiOutlineFileText /> {key}</p>)}

    
            </>
        }
    </div>
       </div>
      
       
      </div>
    );
  }


export default Create
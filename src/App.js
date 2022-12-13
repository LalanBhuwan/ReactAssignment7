
import './App.css';
import Screen from './Components/Screen.js';
import InputBox from './Components/InputBox';
import {useState} from 'react';

function App() {
  // const markUpLang = ` # Markdown Preview
  // # This Is Header 1
  // ## This Is Header 2
  // ### This Is Header 3`
  const [markupLang, setMarkupLang] = useState("")

  return (
    <div style={{display: "flex"}}>
      <InputBox setMarkupDataFn = {setMarkupLang}/>
      <Screen markupData = {markupLang} />
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import iconPet from "./images/icons/icons8-bat.gif"
import iconLight from "./images/icons/icons8-light.gif"
import LanguageContext from "./Context/LanguageContext";
import TranslationArabic from './Translation/TranslationAR.json'
import TranslationEnglish from './Translation/TranslationEN.json'
function App() {

  let isBackground = true;
  const imgRef = useRef();
  const app = useRef(null);
  const [language, setLanguage] = useState("en");
  const [content, setContent] = useState(TranslationEnglish);
  
  // change language site  (arabic/english)
  useEffect(() => {
    if (language === "ar") {
      setContent(TranslationArabic);
      document.body.dir='rtl'
      app.current.classList.remove('arabic_font')
      app.current.classList.add('arabic_font')
      document.documentElement.style.setProperty("--fontTitles","'Noto Nastaliq Urdu', serif");
      // font-family: 'Noto Nastaliq Urdu', serif;
    } 
    else if (language === "en") {
        setContent(TranslationEnglish);
        document.body.dir='ltr'
        app.current.classList.remove('arabic_font')
        app.current.classList.add('english_font')
        document.documentElement.style.setProperty("--fontTitles","'Rubik Wet Paint', cursive");
      }

  });
  // change background and colors 
  const darkMood=  _=> {
    imgRef.current.src = "icons8-bat.gif"
    isBackground =false
    // 
    document.documentElement.style.setProperty("--background-dark",'linear-gradient(to top, #ffffff 81%, #ace0f9 97%)');
    document.documentElement.style.setProperty("--background-box", 'transparent');
    document.documentElement.style.setProperty("--c-namePage",'linear-gradient(1deg, rgb(0 0 0) 25%, rgb(0 0 0) -1%, rgb(247 247 247) 45%)');
    document.documentElement.style.setProperty("--c-titleSection", 'linear-gradient(1deg, rgb(207 207 207) 37%, rgb(0 0 0) 61%, rgb(255 255 255) 95%)');
    document.documentElement.style.setProperty("--c-second", 'linear-gradient(270deg, rgb(0 0 0) 41%, rgb(169 169 169) 72%)');

    document.documentElement.style.setProperty("--c-progress", '#d1d1d1');
    document.documentElement.style.setProperty("--c-first", '#4d4d4dd6');

    //c-first: #4d4d4dd6
    //c-titleSection:linear-gradient(1deg, rgb(207 207 207) 37%, rgb(0 0 0) 61%, rgb(255 255 255) 95%)
  }
  // dark =>->->->
  const lightMood = _=> {
    document.documentElement.style.setProperty("--background-dark",'linear-gradient(to right, #121212 0%, #000000 100%)');
    document.documentElement.style.setProperty("--c-namePage",'linear-gradient(1deg, rgb(255 255 255) 10%, rgb(61 61 61) 28%, rgb(255 255 255) 51%)');
    document.documentElement.style.setProperty("--background-box", '#2727272b');
    document.documentElement.style.setProperty("--c-titleSection", 'linear-gradient(1deg, rgb(255 255 255) 37%, rgb(61 61 61) 61%, rgb(255 255 255) 95%)');
    document.documentElement.style.setProperty("--c-second", 'linear-gradient(270deg, rgb(255 255 255) 41%, rgb(95, 94, 94) 72%)');
    document.documentElement.style.setProperty("--c-progress", '#ffffff');
    document.documentElement.style.setProperty("--c-first", '#d9d9d9d6');

  //--c-first:#d9d9d9d6;
    imgRef.current.src = "icons8-light.gif"
    isBackground = true;
  }
  const handleColors = _=> isBackground ? darkMood() : lightMood() ;
  

  return (
    <div className="App" ref={app}>
      <div className="Container-fulid">
          <div className="header-content justify-content-between d-flex align-items-center">
            <select
              className="c-first"
              onChange={(e) =>{setLanguage(e.target.value)}}
            >
              <option value="en">English</option>
              <option value="ar">عربي</option>
            </select>
            <button onClick={handleColors}>
              <img ref={imgRef} className="light-dark-page" src={iconLight} alt="" />
            </button>
          </div>
      </div>
      <LanguageContext.Provider value={content}>
        <HomePage />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
// color-gray : #3b3b3b 
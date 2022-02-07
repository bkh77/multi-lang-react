import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";


function App() {

  const { t, i18n, ready } = useTranslation();

  const [selectedLng, setSelectedLng] = useState(null)


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLng(lng)
  };


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <div>

          {
            ready ? (

              <section>
                <h4>Support multi-language with React-i18next in Create React App</h4>

                <ul>
                  {["en", "ru", "uz"].map((lng) => (
                    <li key={lng} className={selectedLng === lng ? "selected" : ''} onClick={() => changeLanguage(lng)} >{lng}</li>
                  ))}
                </ul>


                <h4>{t("title")}</h4>
                <p>
                  {t('body')}
                </p>

                <a className="App-link" href="https://medium.com/@smeyradvrn/support-multi-language-with-react-i18next-in-create-react-app-e10d2fafd36e">More info</a>
              </section>
            ) : (
              <span>Loading...</span>
            )
          }


        </div>
      </header>
    </div>
  );
}

export default App;

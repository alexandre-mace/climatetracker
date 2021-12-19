import './App.css';
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import {useEffect, useState} from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('climate-lab-dark-mode') === 'true');

  useEffect(() => {
      if (isDarkMode) {
          document.body.classList.add('dark-mode')
      } else {
          document.body.classList.remove('dark-mode')
      }

      localStorage.setItem('climate-lab-dark-mode', isDarkMode.toString())
  }, [isDarkMode]);

  const tools = [
      {
          title: 'Footprint',
          description: 'Dynamic carbon footprint (CO2eq) of individual actions data visualization, using Ademe base carbone\'s data.',
          logo: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/foot_1f9b6.png',
          backgroundColor: '#E7E1E1',
          color: '#ff4b31',
          link: 'https://alexandre-mace.github.io/footprint/'
      }
  ]

  return (
    <div className={"App"}>
        <div className="container header">
            <div className="row align-items-center">
                <div className="col d-flex justify-content-between">
                    <a href={"/"} className={"d-flex align-items-center"}>
                            <img height={27} width={27} className={"logo-img mr-3"} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/alembic_2697-fe0f.png" alt="Thermomètre"/> ClimateLab
                    </a>
                    <nav className={"d-none d-sm-flex align-items-center"}>
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                isDarkMode={isDarkMode}
                                size={55}
                            />
                        <div className={"header-links-trigger ml-3"}>
                            <div className={"d-flex align-items-center"}>
                                <div className={"mr-2 text-nowrap"}>Les outils</div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"
                                     className="Navigation_pageArrow__3E5fm" role="presentation">
                                    <path d="M.371 2.995A.6.6 0 01.822 2h4.356a.6.6 0 01.451.995L3.602 5.312a.8.8 0 01-1.204 0z"
                                          fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="header-links-wrapper">
                                <ul className={"header-links"}>
                                    {tools.map((tool, index) => (
                                        <li key={index}>
                                            <a rel="noreferrer noopener" target={"blank"} href={tool.link} className={"header-link d-flex align-items-center"}>
                                                <img height={25} width={25} className={"mr-2"} src={tool.logo} alt="Logo du projet"/>
                                                {tool.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav className={"d-block d-sm-none"} role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox" onChange={e => {
                                if (e.target.checked) {
                                    document.body.classList.add('overflow-y-hidden')
                                } else {
                                    document.body.classList.remove('overflow-y-hidden')
                                }
                            }} />

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id="menu">
                                <li style={{height: '50px'}} className={"text-right"}>
                                    <DarkModeToggle
                                        onChange={setIsDarkMode}
                                        isDarkMode={isDarkMode}
                                        size={55}
                                    />
                                </li>
                                {tools.map((tool, index) => (
                                    <li key={index}>
                                        <a rel="noreferrer noopener" target={"blank"} href={tool.link} className={"header-link d-flex align-items-center"}>
                                            <img height={25} width={25} className={"mr-2"} src={tool.logo} alt="Logo du projet"/>
                                            {tool.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div className="container mt-3 mt-md-5">
            <div className="row">
                <div className="col d-flex flex-column align-items-center text-center">
                    <h1>ClimateLab</h1>
                    <h2 className={"app-subtitle"}>Des outils numériques pour le climat qui permettent de s'approprier les ordres de grandeurs et se familiariser avec les objectifs de neutralité carbone.</h2>
                </div>
            </div>
        </div>
        <div className="container mt-3 mt-md-5 pt-4">
            <div className="row">
                {tools.map((tool, index) => (
                    <div className="col-12 col-md-6" key={index}>
                        <a rel="noreferrer noopener" className="tool p-4 p-md-5" href={tool.link} target={"_blank"} style={{'backgroundColor': tool.backgroundColor, 'color': tool.color}}>
                            <div className={"text-center mb-2 mt-2"}>
                                <img height={130} width={130} src={tool.logo} alt="Logo du projet"/>
                            </div>
                            <div>
                                <h3 className={"tool-title mb-1"}>{tool.title}</h3>
                                <p className={"tool-description mt-2"}>{tool.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;

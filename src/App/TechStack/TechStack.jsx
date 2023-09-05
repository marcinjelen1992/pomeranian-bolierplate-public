import './styles.css';
import cssLogo from '../Images/tech-stack/html.svg';
import jsLogo from '../Images/tech-stack/js.svg';
import redmineLogo from '../Images/tech-stack/redmine.png';

export const TechStack = () => {
  return (
    <div>
      Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłem się podczas
      kursu:
      <div className="tech-stack-container">
        <div></div>
        <div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>CSS</p>
          </div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>bitbucket</p>
          </div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>Discord</p>
          </div>
        </div>
        <div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>HTML</p>
          </div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>jest</p>
          </div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>jira</p>
          </div>
        </div>
        <div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>typescript</p>
          </div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>firebase</p>
          </div>
          <div>
            <img src={redmineLogo} alt="logo CSS" />
            <p>Redmine</p>
          </div>
        </div>
        <div>
          <div>
            <img src={jsLogo} alt="logo JS" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>redux</p>
          </div>
        </div>
        <div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>react</p>
          </div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>git</p>
          </div>
        </div>
        <div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>github</p>
          </div>
          <div>
            <img src={cssLogo} alt="logo CSS" />
            <p>vscode</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

import './styles.css';
import { BellIcon } from './BellIcon';

export const Blog = () => {
  return (
    <div className="blog-whole">
      <div className="post-in-my-blog-1">
        <span>
          30-11-2022 <BellIcon />
        </span>
        <h1>Why are we so nostalgic for the 1990s?</h1>
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own.
        </p>
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </p>
        <p>
          <strong>Radosława Majdan</strong>
          <div>Senior Marketing Specialist</div>
        </p>
      </div>
      <div className="post-in-my-blog-2">
        <span>30-11-2022</span>
        <h1>I make mistakes</h1>

        <p>
          “I'm selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can't handle me
          at my worst, then you sure as hell don't deserve me at my best.”
          <span>Marilyn Monroe</span>
        </p>
        <p>
          <strong>Radosława Majdan</strong>
          <div>Senior Marketing Specialist</div>
        </p>
      </div>
      <div className="post-in-my-blog-3">
        <span>30-11-2022</span>
        <h1>18 Record-Breaking, Controversial, and Weird Facts</h1>
        <p>
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </p>
        <ul>
          <li>WP.PL 1</li>
          <li>WP.PL 2</li>
          <li>ONET.PL</li>
        </ul>
        <p>
          <strong>Radosława Majdan</strong>
          <div>Senior Marketing Specialist</div>
        </p>
      </div>
    </div>
  );
};

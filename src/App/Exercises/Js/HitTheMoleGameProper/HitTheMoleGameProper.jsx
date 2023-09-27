import './styles.css';
import { useState } from 'react';
import { HitTheMoleGameScreenOne } from './HitTheMoleGameScreenOne.jsx';
import { HitTheMoleGameScreenTwo } from './HitTheMoleGameScreenTwo.jsx';

export const HitTheMoleGameProper = () => {
  const [screenSwitch, setScreenSwitch] = useState(false);

  const DEFAULT_MOLE_GAME_TIME = [
    {
      isHighlightedTime: false,
    },
    {
      isHighlightedTime: false,
    },
    {
      isHighlightedTime: false,
    },
  ];

  const [exportItemsTime, setExportItemsTime] = useState(
    DEFAULT_MOLE_GAME_TIME
  );

  const DEFAULT_MOLE_GAME_MOLE = [
    {
      isHighlightedMole: false,
    },
    {
      isHighlightedMole: false,
    },
    {
      isHighlightedMole: false,
    },
  ];

  const [exportItemsMole, setExportItemsMole] = useState(
    DEFAULT_MOLE_GAME_MOLE
  );

  const [score, setScore] = useState(false);
  const congratulationsString = 'Gratulacje! Twój wynik to ';

  return (
    <div className="moleGameWrapper">
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <strong>
        {!screenSwitch && score ? congratulationsString + score : ''}
      </strong>
      {!screenSwitch ? (
        <HitTheMoleGameScreenOne
          screenSwitch={screenSwitch}
          setScreenSwitch={setScreenSwitch}
          exportItemsTime={exportItemsTime}
          setExportItemsTime={setExportItemsTime}
          exportItemsMole={exportItemsMole}
          setExportItemsMole={setExportItemsMole}
        />
      ) : (
        <HitTheMoleGameScreenTwo
          screenSwitch={screenSwitch}
          setScreenSwitch={setScreenSwitch}
          exportItemsTime={exportItemsTime}
          setExportItemsTime={setExportItemsTime}
          exportItemsMole={exportItemsMole}
          setExportItemsMole={setExportItemsMole}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
};

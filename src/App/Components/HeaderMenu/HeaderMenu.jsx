import './styles.css';

import { SettingIcon } from '../Icons/SettingIcon';
import { PointingDownIcon } from '../Icons/PointingDownIcon';
import { RoundImage } from '../RoundImage/RoundImage';
import flexfacepic from './flexfacepic.png';

export const HeaderMenu = () => {
  return (
    <div className="header-menu-class">
      <SettingIcon />
      <div className="header-menu-icon">
        <RoundImage src={flexfacepic} size={50} />
      </div>
      <div className="header-user">
        <p>Marcin</p>
        <p>kursant</p>
      </div>
      <PointingDownIcon />
    </div>
  );
};

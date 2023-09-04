import './styles.css';

import { SettingIcon } from '../Icons/SettingIcon';
import { PointingDownIcon } from '../Icons/PointingDownIcon';
import { RoundImage } from '../RoundImage/RoundImage';
import flexfacepic from './flexfacepic.png';

export const HeaderMenu = () => {
  return (
    <div className="header-menu-class">
      <SettingIcon />
      <RoundImage src={flexfacepic} size={50} />
      <div>
        <span>Marcin</span>
        <span>kursant</span>
      </div>
      <PointingDownIcon />
    </div>
  );
};

import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { PointingDownIcon } from '../Components/Icons/PointingDownIcon';
import { Link } from 'react-router-dom';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';

export function AppHeader() {
  return (
    <header>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header-title">
        <HeaderMenu />
      </div>
    </header>
  );
}

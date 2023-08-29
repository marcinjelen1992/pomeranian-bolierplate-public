import { NavLink } from 'react-router-dom';

import { HouseIcon } from '../../App/Components/Icons/HouseIcon';

import { ElementIcon } from '../../App/Components/Icons/ElementIcon';

import { EditIcon } from '../../App/Components/Icons/EditIcon';

import { PersonalCardIcon } from '../../App/Components/Icons/PersonalCardIcon';

import { CalendarIcon } from '../../App/Components/Icons/CalendarIcon';

import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li className="aside-row">
            <ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li className="aside-row">
            <EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li className="aside-row">
            <PersonalCardIcon />
            <NavLink to="cv">CV</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li className="aside-row">
            <PersonalCardIcon />
            <NavLink to="Blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}

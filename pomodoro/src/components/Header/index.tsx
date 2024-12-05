import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import { HeaderContainer } from './styles';

import logoPomodoro from '../../assets/logo-pomodoro.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoPomodoro} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

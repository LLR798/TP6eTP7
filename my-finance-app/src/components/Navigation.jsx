import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" end>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/despesas" activeClassName="active">
            Despesas
          </NavLink>
        </li>
        <li>
          <NavLink to="/investimentos" activeClassName="active">
            Investimentos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

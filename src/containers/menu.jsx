/**
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'src/components';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: '60px',
  width: '100%',
  padding: '10px 20px',
  boxSizing: 'border-box',
  background: '#f5f6fb',
  top: 0,
  position: 'fixed',
  zIndex: '9999'
};

const linkStyle = {
  color: 'black',
  marginRight: '30px',
  textDecoration: 'none'
};

const inputStyle = {
  padding: 5,
  marginRight: 10
};

export default function Menu() {
  // Lo usaremos para guardar el valor del buscador
  const [search, setSearch] = useState('');

  // Lo usaremos ir al link con la búsqueda solicitada
  const history = useHistory();

  return (
    <div style={styles}>
      <NavLink style={linkStyle} to="/">HOME</NavLink>
      <NavLink style={linkStyle} to="/news?category=1">POÍTICA</NavLink>
      <NavLink style={linkStyle} to="/news?category=2">INTERNACIONAL</NavLink>
      <NavLink style={linkStyle} to="/news?category=3">TECNOLOGÍA</NavLink>
      <NavLink style={linkStyle} to="/news?category=4">ESPECTÁCULOS</NavLink>
      <NavLink style={linkStyle} to="/news?category=5">DEPORTES</NavLink>
      <input style={inputStyle} type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button onClick={() => history.push(`/news?search=${search}`)}>Buscar</Button>
    </div>
  );
}

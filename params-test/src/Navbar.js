import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
        <ul>
        <li>
          <Link to="/netflix">Netflix</Link>
        </li>
        <li>
          <Link to="/zillow-group">Zillow Group</Link>
        </li>
        <li>
          <Link to="/yahoo">Yahoo</Link>
        </li>
        <li>
          <Link to="/modus-create">Modus Create</Link>
        </li>
      </ul>
        </div>
    )
}

export default Navbar

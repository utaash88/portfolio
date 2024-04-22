import React from 'react'
import{Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
        <div className="logo">
            <h1>ポートフォリオ</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                    
                </li>
                <li>
                <Link to="/sns">SNS</Link>
                </li>
            </ul>
        </nav>
    </header>
    
  )
}

export default Header
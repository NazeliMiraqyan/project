import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './leftSideMenu.scss'
import vector1 from '../content/img/Vector1.svg'
import vector2 from '../content/img/Vector2.svg'
import vector3 from '../content/img/Vector3.svg'
import vector4 from '../content/img/Vector4.svg'
import list2 from '../content/img/list2.svg'
import list from '../content/img/list.svg'
import r1 from '../content/img/r1.svg'
import r2 from '../content/img/r2.svg'
import r3 from '../content/img/r3.svg'
import r4 from '../content/img/r4.svg'


const Layout: React.FC = () => {
  const {pathname} = useLocation()
  console.log(pathname);
  
  return (
    <div style={{display:'flex'}}>
      <nav className="menu">
        <ul >
          <li className="menuIcones">
            <Link className={(pathname === '/') ? 'getColor' : ''} to="/" >
              <div className="iconOne">
                  <img src={vector2} className="img2"/>
                    <div style={{display:'flex'}}>
                        <div>
                            <img src={vector1} className="img1"/>
                        </div>
                        <div className="minIcones">
                            <img src={vector3} className="img3"/>
                            <img src={vector4} className="img4"/>
                        </div>
                    </div>  
              </div>
            </Link>
          </li>
          <li className="menuIcones">
            <Link className={(pathname === '/list') ? 'getColor' : ''} to="/list" >
                <div className="iconTwo">
                    <img src={list2} className='img5'/>
                    <img src={list} className='img6'/>
                </div>
            </Link>
          </li>
          <li className="menuIcones">
            <Link className={(pathname === '/users') ? 'getColor' : ''} to="/users" >
                <div className="users">
                    <div className="head">
                        <img src={r1} className='head1'/>
                        <img src={r1} className='head2'/>
                        <img src={r1} className='head1'/>
                    </div>
                    <div className="body">
                        <img src={r4} className='body3'/>
                        <img src={r2} className='body2'/>
                        <img src={r3} className='body3'/>
                    </div>
                </div>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './leftSideMenu.scss'
import line from '../content/img/Line1.png'


const Layout: React.FC = () => {

  const {pathname} = useLocation()
  
  return (
    <div style={{display:'flex'}}>
      <nav className="menu">
        <ul >
          <li className="menuIcones">
            <Link className={(pathname === '/') ? 'getColor' : ''} to="/"  >
            <div style={{position:'absolute', left:'1px'}}><img src={line} style={{ opacity: "0" }} /></div>
              <div className="iconOne">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="12" viewBox="0 0 48 12" fill="none" id='img2'>
                    <path d="M44.5 0H3.5C1.57 0 0 1.57 0 3.5V8.5C0 10.43 1.57 12 3.5 12H44.5C46.43 12 48 10.43 48 8.5V3.5C48 1.57 46.43 0 44.5 0Z" fill="#E1AA98"/>
                </svg>
                </div>
                    <div style={{display:'flex'}}>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 22 32" fill="none" id='img1'>
                            <path d="M3.5 32H18.5C20.43 32 22 30.43 22 28.5V3.5C22 1.57 20.43 0 18.5 0H3.5C1.57 0 0 1.57 0 3.5V28.5C0 30.43 1.57 32 3.5 32Z" fill="#E1AA98"/>
                        </svg>
                        
                        <div className="minIcones">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none" id='img3'>
                          <path d="M18.5 0H3.5C1.57 0 0 1.57 0 3.5V10.5C0 12.43 1.57 14 3.5 14H18.5C20.43 14 22 12.43 22 10.5V3.5C22 1.57 20.43 0 18.5 0Z" fill="#E1AA98"/>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none" id='img4'>
                          <path d="M18.5 0H3.5C1.57 0 0 1.57 0 3.5V10.5C0 12.43 1.57 14 3.5 14H18.5C20.43 14 22 12.43 22 10.5V3.5C22 1.57 20.43 0 18.5 0Z" fill="#E1AA98"/>
                        </svg>
                        </div>
                    </div>  
              </div>
              
            </Link>
          </li>
          <li className="menuIcones">
            <Link className={(pathname === '/list') ? 'getColor' : ''} to="/list" >
            <div style={{position:'absolute', left:'1px'}}><img src={line} style={{ opacity: "0",  }} /></div>
                <div className="iconTwo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none" id="img5">
                      <path d="M16.5 3H13.242C12.624 1.254 10.956 0 9 0C7.044 0 5.376 1.254 4.755 3H1.5C0.672 3 0 3.672 0 4.5V10.5C0 11.328 0.672 12 1.5 12H16.5C17.328 12 18 11.328 18 10.5V4.5C18 3.672 17.328 3 16.5 3Z" fill="#E1AA98" />
                </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="42" viewBox="0 0 36 42" fill="none" id="img6">
                        <path d="M33 0H30V4.5C30 6.981 27.981 9 25.5 9H10.5C8.019 9 6 6.981 6 4.5V0H3C1.347 0 0 1.347 0 3V39C0 40.683 1.317 42 3 42H33C34.683 42 36 40.683 36 39V3C36 1.317 34.683 0 33 0ZM17.562 26.562L11.562 32.562C11.268 32.853 10.884 33 10.5 33C10.116 33 9.732 32.853 9.438 32.562L6.438 29.562C5.853 28.977 5.853 28.026 6.438 27.441C7.023 26.856 7.974 26.856 8.559 27.441L10.5 29.379L15.438 24.441C16.023 23.856 16.974 23.856 17.559 24.441C18.144 25.026 18.147 25.974 17.562 26.562ZM17.562 14.562L11.562 20.562C11.268 20.853 10.884 21 10.5 21C10.116 21 9.732 20.853 9.438 20.562L6.438 17.562C5.853 16.977 5.853 16.026 6.438 15.441C7.023 14.856 7.974 14.856 8.559 15.441L10.5 17.379L15.438 12.441C16.023 11.856 16.974 11.856 17.559 12.441C18.144 13.026 18.147 13.974 17.562 14.562ZM28.5 30H22.5C21.672 30 21 29.328 21 28.5C21 27.672 21.672 27 22.5 27H28.5C29.328 27 30 27.672 30 28.5C30 29.328 29.328 30 28.5 30ZM28.5 18H22.5C21.672 18 21 17.328 21 16.5C21 15.672 21.672 15 22.5 15H28.5C29.328 15 30 15.672 30 16.5C30 17.328 29.328 18 28.5 18Z" fill="#E1AA98" />
                    </svg>
                </div>
            </Link>
          </li>
          <li className="menuIcones">
            <Link className={(pathname === '/users') ? 'getColor' : ''} to="/users" >
            <div style={{position:'absolute', left:'1px'}}><img src={line} style={{ opacity: "0" }} /></div>
                <div className="users">
                    <div className="head">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" className='head1'>
                      <path d="M9 16.3717C13.5046 16.3717 17.1562 12.72 17.1562 8.21541C17.1562 3.71084 13.5046 0.0591583 9 0.0591583C4.49543 0.0591583 0.84375 3.71084 0.84375 8.21541C0.84375 12.72 4.49543 16.3717 9 16.3717Z" fill="#E1AA98"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" id='head2'>
                      <path d="M9 16.3717C13.5046 16.3717 17.1562 12.72 17.1562 8.21541C17.1562 3.71084 13.5046 0.0591583 9 0.0591583C4.49543 0.0591583 0.84375 3.71084 0.84375 8.21541C0.84375 12.72 4.49543 16.3717 9 16.3717Z" fill="#E1AA98"/>
                    </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" className='head1'>
                      <path d="M9 16.3717C13.5046 16.3717 17.1562 12.72 17.1562 8.21541C17.1562 3.71084 13.5046 0.0591583 9 0.0591583C4.49543 0.0591583 0.84375 3.71084 0.84375 8.21541C0.84375 12.72 4.49543 16.3717 9 16.3717Z" fill="#E1AA98"/>
                    </svg>
                    </div>
                    <div className="body">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none" className='body3'>
                          <path d="M12.5803 2.00197C10.5506 0.339035 8.71247 0.55916 6.36563 0.55916C2.85563 0.55916 0 3.39791 0 6.88635V17.1248C0 18.6398 1.23656 19.8717 2.75719 19.8717C9.32213 19.8717 8.53125 19.9904 8.53125 19.5885C8.53125 12.3336 7.67194 7.01319 12.5803 2.00197Z" fill="#E1AA98"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none" id='body1'>
                          <path d="M15.2322 0.596562C11.1331 0.254656 7.57012 0.6005 4.49691 3.13719C-0.645938 7.25656 0.34378 12.8031 0.34378 19.5884C0.34378 21.3837 1.80441 22.8716 3.62691 22.8716C23.4158 22.8716 24.2034 23.5099 25.3769 20.9113C25.7617 20.0324 25.6563 20.3117 25.6563 11.9047C25.6563 5.22725 19.8744 0.596562 15.2322 0.596562Z" fill="#E1AA98"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20" viewBox="0 0 13 20" fill="none" className='body3'>
                          <path d="M6.63437 0.559065C4.27468 0.559065 2.44665 0.341188 0.419678 2.00188C5.2914 6.97588 4.46874 11.9333 4.46874 19.5884C4.46874 19.9929 3.81221 19.8716 10.1444 19.8716C11.7194 19.8716 13 18.5956 13 17.0272V6.88625C13 3.39781 10.1444 0.559065 6.63437 0.559065Z" fill="#E1AA98"/>
                        </svg>
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
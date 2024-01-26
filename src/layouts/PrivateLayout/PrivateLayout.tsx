import React, { useContext, useEffect, useRef, useState } from 'react';
import './PrivateLayout.scss';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import { NavLink } from 'react-router-dom';


import campaigns from '../../assets/images/icons/campaigns.png';
import statistics from '../../assets/images/icons/statistics.png';
import surveys from '../../assets/images/icons/surveys.png';
import media from '../../assets/images/icons/media.png';
import contacts from '../../assets/images/icons/contacts.png';
import users from '../../assets/images/icons/users.png';
import logoutIcon from '../../assets/images/icons/logout.png';
import { store } from '../../redux/store';
import { AppState } from '../../redux/rootReducer';

interface Props {
  children: React.ReactNode;
}

const PrivateLayout = (props: Props) => {

  const dispatch = useDispatch();
  const authUser = useSelector((state: AppState) => state.auth.user);

  let location = useLocation();
  const progressBar = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const pathString = window.location.pathname;
    const pageName = pathString.split('/');
    const capitalize = (s: String) => { return s[0].toUpperCase() + s.slice(1); }
    if(pageName[1]) setCurrentPage(capitalize(pageName[1]));

    onChangeRoute();

  }, [location])


  const onChangeRoute = () => {
    let progressBarWidth = 1;
    let originalClassList = (progressBar as any).current.className;
    let id:any = null;

    const animateFrame = () => {
      if (progressBarWidth >= 100) {
        clearInterval(id);
        (progressBar as any).current.style.width = 0;
        (progressBar as any).current.className += ' done';
        (progressBar as any).current.className = originalClassList;
        id = null;
      } else {
        progressBarWidth++;
        (progressBar as any).current.style.width = progressBarWidth + '%';
      }
    }

    if(progressBar) {id = setInterval((animateFrame), 1); }
    
  }


  return (
    <div className="private-layout">
      <div className="menu-wrapper">

        <NavLink to="/" className='sidebar-top-link'>
          <p>AUTHENTICATION</p>
        </NavLink>

        <ul>
          <li>
            <NavLink to="/campaigns"
              className={({ isActive }) => {
                const linkClasses = ["list-item"];
                if (isActive) linkClasses.push("selected");
                return linkClasses.join(" ");
              }}>
              <div className="item-icon-wrapper">
                <img src={campaigns} alt="Home" className="item-img" />
              </div>
              CAMPAIGNS
            </NavLink>
          </li>

          <li>
            <NavLink to="/statistics"
              className={({ isActive }) => {
                const linkClasses = ["list-item"];
                if (isActive) linkClasses.push("selected");
                return linkClasses.join(" ");
              }}>
              <div className="item-icon-wrapper">
                <img src={statistics} alt="Home" className="item-img" />
              </div>
              STATISTICS
            </NavLink>
          </li>

          <li>
            <NavLink to="/surveys"
              className={({ isActive }) => {
                const linkClasses = ["list-item"];
                if (isActive) linkClasses.push("selected");
                return linkClasses.join(" ");
              }}>
              <div className="item-icon-wrapper">
                <img src={surveys} alt="Home" className="item-img" />
              </div>
              SURVEYS
            </NavLink>
          </li>

          <li>
            <NavLink to="/media"
              className={({ isActive }) => {
                const linkClasses = ["list-item"];
                if (isActive) linkClasses.push("selected");
                return linkClasses.join(" ");
              }}>
              <div className="item-icon-wrapper">
                <img src={media} alt="Home" className="item-img" />
              </div>
              MEDIA
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacts"
              className={({ isActive }) => {
                const linkClasses = ["list-item"];
                if (isActive) linkClasses.push("selected");
                return linkClasses.join(" ");
              }}>
              <div className="item-icon-wrapper">
                <img src={contacts} alt="Home" className="item-img" />
              </div>
              CONTACTS
            </NavLink>
          </li>

          {(authUser && authUser.role === 1) &&
            <>
              <li>
                <NavLink to="/users"
                  className={({ isActive }) => {
                    const linkClasses = ["list-item"];
                    if (isActive) linkClasses.push("selected");
                    return linkClasses.join(" ");
                  }}>
                  <div className="item-icon-wrapper">
                    <img src={users} alt="Home" className="item-img" />
                  </div>
                  USERS
                </NavLink>
              </li>
            </>
          }


        </ul>

      </div>
      <div className="content-wrapper" role="presentation" onClick={() => {}} onKeyDown={() => {}}>
        <div className="topbar">
          <div className='topbar-actions'>

              <div className='user-dropdown'>

                <div className='avatar' onClick={() => {setDropdownOpen(!dropdownOpen)}}><p>{authUser && authUser.name[0]}</p></div>

                <div className={`dropdown-content ${dropdownOpen ? 'visible' : ''}`}>
                  <div className='dropdownTriangle'></div>
                  <div className='triangleArrowLeft'></div>
                  <div className='triangleArrowRight'></div>

                  {authUser && <>
                    <div className="userDetails">
                      <p className='name'>{authUser.name}</p>
                      <p className='email'>{authUser.email}</p>
                    </div>
                  </>}

                  <Link to="/" className="settings-list-item-link" onClick={() => {dispatch(logout());}} >
                    <img src={logoutIcon} alt="Logout" />
                    <p>LOGOUT</p>
                  </Link>
                </div>

              </div>

          </div>
          <div className='topbar-title'>
            <p>{currentPage}</p>
            <div ref={progressBar} className='progress-bar'></div>
          </div>
        </div>
        <div className="page-content">{props.children}</div>
      </div>
    </div>
  );
}

export default PrivateLayout;
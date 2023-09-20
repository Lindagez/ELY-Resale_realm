import { useEffect, useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLink, navigationLinks, navigationLinkss } from '../../data/data';
import "./Sidebar.css";
import { useContext } from 'react';
import { SidebarContext } from '../../context/sidebarContext';

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);
  const handleClick = (id) => {
    navigate(`/page/${id}`);
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">Linda gez</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {
            navigationLinks.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <a href="/po" className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : null}`}
                  onClick={() => handleClick(navigationLink.id)}>
                  <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </a>
              </li>
            ))

          }
        </ul>
        <ul className="nav-list">
          {
            navigationLink.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <a href="/page" className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : null}`}
                  onClick={() => handleClick(navigationLink.id)}>
                  <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </a>
              </li>
            ))

          }
        </ul>
        <ul className="nav-list">
          {
            navigationLinkss.map((navigationLink) => (
              <li className="nav-item" key={navigationLink.id}>
                <a href="/settings" className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : null}`}
                  onClick={() => handleClick(navigationLink.id)}>
                  <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                  <span className="nav-link-text">{navigationLink.title}</span>
                </a>
              </li>
            ))

          }
        </ul>
      </nav>
    </div>

  )
}

export default Sidebar

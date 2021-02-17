import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";
import mainLogo from'../assets/123.jpg';

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export default function SideBar (){
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
      <div className="absolute right-0">
        <a href="https://github.com/abhijithvijayan/react-minimal-side-navigation">
           GitHub
        </a>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
         
        <img src={mainLogo} style={{  borderRadius: "50%"}} alt="Cinque Terre"></img>
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            Saber Mekki
          </span>
        
        </div>
        <span className="email text-center justify-center flex items-center"><i className="icon-mail"></i> saber.mekki6@gmail.com</span>
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/home",
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "About",
              itemId: "/about",
              elemBefore: () => <Icon name="bell" />
            },
            {
              title: "Recommendation",
              itemId: "/recommendation",
              elemBefore: () => <Icon name="eye" />
            },
            {
              title: "About",
              itemId: "/about",
              elemBefore: () => <Icon name="user" />,
              // subNav: [
              //   {
              //     title: "Projects",
              //     itemId: "/about/projects"
              //   },
              //   {
              //     title: "Members",
              //     itemId: "/about/members"
              //   }
              // ]
            },
            {
              title: "Contact",
              itemId: "/contact",
              elemBefore: () => <Icon name="mail" />,
            }
          ]}
        />
        

        <div style={{textAlign: "center"}} className="email text-center justify-center flex items-center">
              <ul>
                <li><a href="https://www.facebook.com/saber.mekki" target="_blank" rel="noopener noreferrer"><Icon name="facebook" /></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Icon name="twitter" /></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><Icon name="instagram" /></a></li>
               
                <li><a href="https://github.com/saber-mekki" target="_blank" rel="noopener noreferrer"><i className="fab fa-github">GitHub</i></a></li>
     
              </ul>
            </div>
        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Icon name="activity" />
              }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
      </div>
       { !isSidebarOpen&& <div>
        <button
          className="btn-menu"
          onClick={(): void => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>}
    </React.Fragment>
  );
};

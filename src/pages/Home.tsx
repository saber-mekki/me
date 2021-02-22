import React from "react";

import mainLogo from '../assets/1.jpg';
import BodyWrapper from "../components/BodyWrapper";
import SideBar from "../components/SideBar";
import "../Styles/main.css"


export default function Home() {

  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <SideBar />
        <div className="flex flex-col flex-1 overflow-hidden img-fluid" style={{
          background: `url(${mainLogo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: "auto",
          height: 'auto',
        }}>
          <main className="content ">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                <div
                >
                  <h1 className="textHome-md textHome-sm ">Saber Mekki</h1>
                  <h5 style={{
                    color: "white",
                    fontSize: "47px",
                    textShadow: "8px 0px 18px wheat",
                    marginLeft: "305px",
                  }}>Web Developper</h5>

                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  )

}
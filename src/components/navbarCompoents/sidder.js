import React from "react";
import Logouserpiolt from "./imgs/userpilot.PNG";
import { FaAngleRight, FaUserFriends } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import { useState } from "react";
import { DiChrome } from "react-icons/di";
import { FiLayers } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { BiAlignRight, BiAlignLeft } from "react-icons/bi";

const Sidder = ({ onOpen }) => {
  const [isClose, setIsColse] = useState(true);
  const [profileInfo, setProfileInfo] = useState(false);
  return (
    <div>
      <div className={`${isClose ? "siderBoxClose" : "siderBox"}`}>
        <div className="BigsiderBox">
          <div className="siderboxA">
            <img
              src={Logouserpiolt}
              className="imglogouer"
              style={{ display: isClose ? "none" : "block" }}
              alt="pic"
            />

            <BiAlignLeft
              size="2rem"
              className="imgClosIconClose"
              style={{ display: !isClose ? "none" : "block" }}
              onClick={() => {
                setIsColse(false);
                onOpen(true);
              }}
            ></BiAlignLeft>

            <BiAlignRight
              size="2rem"
              className="imgClosIconCloseBB"
              style={{ display: isClose ? "none" : "block" }}
              onClick={() => {
                setIsColse(true);
                onOpen(false);
              }}
            ></BiAlignRight>
          </div>
          <div className="siderboxB">
            <FaUserFriends
              size="2rem"
              className={`${isClose ? "imgClosIconClose" : "imggesOpen"}`}
            ></FaUserFriends>

            <b
              className="txtSid"
              style={{ display: isClose ? "none" : "block" }}
            >
              PEOPLE
            </b>

            <FaAngleRight
              className="jj"
              size="1rem"
              onClick={() => {
                setProfileInfo(!profileInfo);
              }}
              style={{ display: isClose ? "none" : "block" }}
            ></FaAngleRight>
            {!isClose && profileInfo == true && (
              <React.Fragment>
                <div className="boxInfoProfile">
                  <div className="InfoProfile">
                    <h>Users</h>
                  </div>
                  <div className="InfoProfileA">
                    <h>Companies</h>
                  </div>
                  <div className="InfoProfileA">
                    <h>Segments</h>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
          <div className="siderboxC">
            <FiBarChart
              size="2rem"
              className={`${isClose ? "imgClosIconClose" : "imggesOpen"}`}
            >
              {" "}
            </FiBarChart>

            <b
              className="txtSid"
              style={{ display: isClose ? "none" : "block" }}
            >
              GROWTH INSIGHTS
            </b>
          </div>

          <div className="siderboxC">
            <FiLayers
              size="2rem"
              className={`${isClose ? "imgClosIconClose" : "imggesOpen"}`}
            >
              {" "}
            </FiLayers>

            <b
              className="txtSid"
              style={{ display: isClose ? "none" : "block" }}
            >
              ENGAGEMENT LAYER
            </b>
          </div>

          <div className="siderboxC">
            <DiChrome
              size="2rem"
              className={`${isClose ? "imgClosIconClose" : "imggesOpen"}`}
            />

            <b
              className="txtSid"
              style={{ display: isClose ? "none" : "block" }}
            >
              NPS
            </b>
          </div>
          <div className="siderboxD">
            <FiSettings
              size="2rem"
              className={`${isClose ? "imgClosIconClose" : "imggesOpen"}`}
            />

            <b
              className="txtSid"
              style={{ display: isClose ? "none" : "block" }}
            >
              CONFIGURE
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidder;

import React from "react";

const PlaneType = ({
  imgPlane,
  namePlane,
  price,
  pmonth,
  planBtn,
  reach,
  fetureS,
  talk,
  feturesAll = [],
  className,
  onClickStandard,
  classNameOfBtn,
  classNameOfBtnEn,
}) => {
  return (
    <div>
      <div className={className}>
        <div className="simgChange">
          <img className="scimgg" src={imgPlane} alt="pic" />
        </div>
        <div className="titChangeBox">
          <b>{namePlane}</b>
        </div>
        <div className="standardBoxChange-A">
          <b>{price}</b>
        </div>
        <div className="standardBoxChange-AA">
          <b> {reach}</b>
        </div>
        <div className="standardBoxChange-B">
          <h> {talk}</h>
        </div>

        <div className="standardBoxChange-B">
          <h> {pmonth}</h>
        </div>

        <div className="bttnChnage">
          <button
            className={`${
              namePlane === "Standard" ? classNameOfBtn : classNameOfBtnEn
            } `}
            onClick={onClickStandard}
          >
            {planBtn}
          </button>
        </div>

        <div className="listst">
          <b>{fetureS}</b>
        </div>

        {feturesAll.map((data) => {
          return (
            <div className="listCh">
              <b>* {data}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlaneType;

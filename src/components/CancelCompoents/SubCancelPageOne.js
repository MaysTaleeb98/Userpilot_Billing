import React from "react";

const SubCancelPageOne = ({
  imgCancel,
  titleCancel,
  pragCancel,
  nameBtnCancel,
  classNameCancel,
  colorLine,
  btnCancel,
}) => {
  return (
    <div>
      <div className={classNameCancel}>
        <div className="SubCancelPageOneBox-A">
          <div className={colorLine}></div>
          <div className="SubCancelPageOneBoxImg">
            <img className="imgset" src={imgCancel} alt="pic" />
          </div>
          <div className="SubCancelPageOneBox-B">
            <b>{titleCancel}</b>
            <div className="SubCancelPageOneBox-C">
              <h>{pragCancel}</h>
            </div>
            <div className="SubCancelBtn">
              <button className={btnCancel}>{nameBtnCancel}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCancelPageOne;

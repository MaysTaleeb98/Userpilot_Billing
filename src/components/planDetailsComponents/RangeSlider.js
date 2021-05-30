import Slider from "react-input-slider";
import React, { useState } from "react";

function SliderRange({ onChange, api }) {
  const [state, setState] = useState({ x: api.organization.plan_details.mua });

  return (
    <div>
      <div
        className="slider"
        style={{
          marginTop: "30px",
          marginLeft: "260px",
        }}
      >
        <Slider
          styles={{
            track: {
              backgroundColor: "gray",
              width: 800,
            },
            active: {
              backgroundColor: "#ff0075;",
            },
            thumb: {
              width: 30,
              height: 30,
            },
            disabled: {
              opacity: 0.5,
            },
          }}
          xstep={1}
          xmin={0}
          xmax={50000}
          // axis="x"
          x={state.x}
          onChange={({ x }) => {
            setState((state) => ({ ...state, x }));
            onChange(x);
          }}
        />
      </div>
    </div>
  );
}

export default SliderRange;

// import
import React from "react";
import Week from "./week";

const TmpThing = (props) => {
  const videoItems = props.things.map((thing) => {
    return <Week key={thing} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

// export
export default TmpThing;

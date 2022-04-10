import React, { useEffect, useRef } from "react";

const TrailerList = (props) => {
  return (
    <>
      <Trailer embed={props.trailer} />
    </>
  );
};

const Trailer = (props) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="trailer">
      <div className="trailer__title">
        <h2>Official Trailer</h2>
      </div>
      <iframe
        style={{ borderRadius: 12 }}
        src={props.embed}
        ref={iframeRef}
        width="100%"
        title="video"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default TrailerList;

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import VideoPlugin from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

import Video from './videoElement';
import Image from './imageElement';

function Wrapper(images) {
  const [index, setIndex] = useState(-1);

  const slides = images.images.map((element) => {
    if (element.type === 'video') {
      return {
        type: "video",
        sources: [
          {
            src: element.media,
            type: "video/mp4"
          }
        ],
        poster: element.image,
      };
    }
    return { src: element.image };
  });

  return (
    <>
      <div className="row justify-content-start gallery">
        {images.images.map((element, i) => (
          element.type == 'video'
            ? (<Video key={i} element={element} onClick={() => setIndex(i)} />)
            : (<Image key={i} element={element} onClick={() => setIndex(i)} />)
        ))}
      </div>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[VideoPlugin]}
      />
    </>
  );
}
export default Wrapper;
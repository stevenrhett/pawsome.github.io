import React from "react";
import PropTypes from "prop-types";


export const YoutubeEmbed = ({embedId}) => (
    <div className="video-responsive">
        <iframe
            autoplay="true"
            loop="true"
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
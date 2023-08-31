import './styles.css';

export const MediaFiles = () => {
  return (
    <>
      <div className="media-files">
        <div>
          <video width="250" controls>
            <source
              src="https://images.all-free-download.com/footage_preview/mp4/cute_wild_deer_grazing_in_nature_6892279.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=LgKlFaioZ9sGcTAe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

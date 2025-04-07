import React, { useEffect, useRef } from "react";

const SongListReverse = () => {
  const songListRef = useRef(null);

  const songs = [
    { title: "Minnale", artist: "Amaran", albumCover: "https://i.scdn.co/image/ab67616d0000b273a673424f0029d8cccb1859b2", spotifyUrl: "https://open.spotify.com/track/1kmJ0EvXClJAt0fSSQLX1m?si=835176c212a74f6f" },
    { title: "Kaisey Jiyun", artist: "Local Train", albumCover: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWl05xyWz/size_l.jpg", spotifyUrl: "https://open.spotify.com/track/6vIpkg9mdc5kDYvwuO6Qtc?si=df01e4c9657a4451" },
    { title: "Choo Lo", artist: "Local Train", albumCover: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWl05xyWz/size_l.jpg", spotifyUrl: "https://open.spotify.com/track/6vIpkg9mdc5kDYvwuO6Qtc?si=df01e4c9657a4451" },
    { title: "Sadqay", artist: "Aashir Wajahat", albumCover: "https://th.bing.com/th/id/OIP.-bUa5--F-btKEwc2c_OHcQHaEK?rs=1&pid=ImgDetMain", spotifyUrl: "https://open.spotify.com/track/2lX53kXvYnvpV8Vqfe4S7s?si=5db3a599e08f457f" },
    { title: "A Thousand Years", artist: "Christina Perri", albumCover: "https://th.bing.com/th/id/R.6a18db76fd63c82fb5611bc7c7cd0d3d?rik=knHOMCvl99CdQg&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26100000%2f-A-Thousand-Years-artwork-christina-perri-26124208-960-960.jpg&ehk=dViW8Kc4W5tHZ2azXGJBMjtbtUweTFP5h7UpiXHdvc4%3d&risl=&pid=ImgRaw&r=0", spotifyUrl: "https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl?si=1e1efcfaf63d4217" },
    { title: "Aaj Se Teri", artist: "Arijit Singh", albumCover: "https://i.ytimg.com/vi/iX6n0luiC10/maxresdefault.jpg", spotifyUrl: "https://open.spotify.com/track/0EwRpK9wY6lHfcJSt82w4x?si=6b651ff8d3a04ee1" },
    { title: "Lut Put Gaya", artist: "Arijit Singh", albumCover: "https://i.ytimg.com/vi/iv_TKytXi88/maxresdefault.jpg", spotifyUrl: "https://open.spotify.com/track/72Z2D7jpKevicRkyL45mbw?si=dccc9a15c9e648b1" },
    { title: "Minnale", artist: "Amaran", albumCover: "https://i.scdn.co/image/ab67616d0000b273a673424f0029d8cccb1859b2", spotifyUrl: "https://open.spotify.com/track/1kmJ0EvXClJAt0fSSQLX1m?si=835176c212a74f6f" },
    { title: "Kaisey Jiyun", artist: "Local Train", albumCover: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWl05xyWz/size_l.jpg", spotifyUrl: "https://open.spotify.com/track/6vIpkg9mdc5kDYvwuO6Qtc?si=df01e4c9657a4451" },
    { title: "Choo Lo", artist: "Local Train", albumCover: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWl05xyWz/size_l.jpg", spotifyUrl: "https://open.spotify.com/track/6vIpkg9mdc5kDYvwuO6Qtc?si=df01e4c9657a4451" },
    { title: "Sadqay", artist: "Aashir Wajahat", albumCover: "https://th.bing.com/th/id/OIP.-bUa5--F-btKEwc2c_OHcQHaEK?rs=1&pid=ImgDetMain", spotifyUrl: "https://open.spotify.com/track/2lX53kXvYnvpV8Vqfe4S7s?si=5db3a599e08f457f" },
    { title: "A Thousand Years", artist: "Christina Perri", albumCover: "https://th.bing.com/th/id/R.6a18db76fd63c82fb5611bc7c7cd0d3d?rik=knHOMCvl99CdQg&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26100000%2f-A-Thousand-Years-artwork-christina-perri-26124208-960-960.jpg&ehk=dViW8Kc4W5tHZ2azXGJBMjtbtUweTFP5h7UpiXHdvc4%3d&risl=&pid=ImgRaw&r=0", spotifyUrl: "https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl?si=1e1efcfaf63d4217" },
    { title: "Aaj Se Teri", artist: "Arijit Singh", albumCover: "https://i.ytimg.com/vi/iX6n0luiC10/maxresdefault.jpg", spotifyUrl: "https://open.spotify.com/track/0EwRpK9wY6lHfcJSt82w4x?si=6b651ff8d3a04ee1" },
    { title: "Lut Put Gaya", artist: "Arijit Singh", albumCover: "https://i.ytimg.com/vi/iv_TKytXi88/maxresdefault.jpg", spotifyUrl: "https://open.spotify.com/track/72Z2D7jpKevicRkyL45mbw?si=dccc9a15c9e648b1" },
    { title: "Minnale", artist: "Amaran", albumCover: "https://i.scdn.co/image/ab67616d0000b273a673424f0029d8cccb1859b2", spotifyUrl: "https://open.spotify.com/track/1kmJ0EvXClJAt0fSSQLX1m?si=835176c212a74f6f" },
    { title: "Kaisey Jiyun", artist: "Local Train", albumCover: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWl05xyWz/size_l.jpg", spotifyUrl: "https://open.spotify.com/track/6vIpkg9mdc5kDYvwuO6Qtc?si=df01e4c9657a4451" },
    { title: "Choo Lo", artist: "Local Train", albumCover: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWl05xyWz/size_l.jpg", spotifyUrl: "https://open.spotify.com/track/6vIpkg9mdc5kDYvwuO6Qtc?si=df01e4c9657a4451" },
    { title: "Sadqay", artist: "Aashir Wajahat", albumCover: "https://th.bing.com/th/id/OIP.-bUa5--F-btKEwc2c_OHcQHaEK?rs=1&pid=ImgDetMain", spotifyUrl: "https://open.spotify.com/track/2lX53kXvYnvpV8Vqfe4S7s?si=5db3a599e08f457f" },
    { title: "A Thousand Years", artist: "Christina Perri", albumCover: "https://th.bing.com/th/id/R.6a18db76fd63c82fb5611bc7c7cd0d3d?rik=knHOMCvl99CdQg&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f26100000%2f-A-Thousand-Years-artwork-christina-perri-26124208-960-960.jpg&ehk=dViW8Kc4W5tHZ2azXGJBMjtbtUweTFP5h7UpiXHdvc4%3d&risl=&pid=ImgRaw&r=0", spotifyUrl: "https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl?si=1e1efcfaf63d4217" },
    { title: "Aaj Se Teri", artist: "Arijit Singh", albumCover: "https://i.ytimg.com/vi/iX6n0luiC10/maxresdefault.jpg", spotifyUrl: "https://open.spotify.com/track/0EwRpK9wY6lHfcJSt82w4x?si=6b651ff8d3a04ee1" },
    { title: "Lut Put Gaya", artist: "Arijit Singh", albumCover: "https://i.ytimg.com/vi/iv_TKytXi88/maxresdefault.jpg", spotifyUrl: "https://open.spotify.com/track/72Z2D7jpKevicRkyL45mbw?si=dccc9a15c9e648b1" },
  ];

  useEffect(() => {
    const container = songListRef.current;
    if (!container) return;

    const scrollStep = 1;
    const scrollSpeed = 20;

    const scrollInterval = setInterval(() => {
      // 👉 Reverse scroll (right-to-left)
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollStep;
      }
    }, scrollSpeed);

    return () => clearInterval(scrollInterval);
  }, []);

  const handlePlayClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <h2 className="bg-black text-white px-3 py-1 rounded-md text-sm text-center w-max mx-auto">Music</h2>
      <h1 className="text-4xl font-jakarta font-bold mt-4 text-black text-center">
        I like listening to my jam 
      </h1>
      <div
        ref={songListRef}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          padding: "20px",
          overflowX: "auto",
          maxHeight: "80vh",
          scrollBehavior: "smooth",
        }}
      >
        {songs.map((song, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              width: "200px",
              backgroundImage: `url(${song.albumCover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                color: "white",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <h3 className="font-bold text-lg">{song.title}</h3>
              <p className="text-sm">{song.artist}</p>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios-filled/50/circled-play.png"
                alt="play"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayClick(song.spotifyUrl);
                }}
                style={{ marginTop: "10px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongListReverse;

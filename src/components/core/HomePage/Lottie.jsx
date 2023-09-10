import React from 'react';

function Lottie() {
  return (
    <div>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie
        src="https://lottie.host/beaad173-60fa-427f-b0bf-65873e4b3684/b6ThWi11xu.json"
        background="#FFFFFF"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        controls
        autoplay
        direction="1"
        mode="normal"
      ></lottie>
    </div>
  );
}

export default Lottie;

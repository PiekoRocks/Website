export const tornado = {
  title: "Tornado Animation",
  category: "3D Graphics",
  description:
    "A low poly, shader driven tornado scene featuring animated objects (house, cow), procedural clouds, rain, and environmental details.",
  tags: ["Three.js", "WebGL", "OpenGL", "Animation", "Shaders", "Low poly", "Audio"],
  videoSrc: "https://media.oregonstate.edu/media/t/1_i1kyr7ks",
  repo: "https://github.com/PiekoRocks/Final-Project",
  media: {
    recording: "https://media.oregonstate.edu/media/t/1_i1kyr7ks",
    screenshots: ["media/tornado-1.png", "media/tornado-2.png"],
    embedHtml: `
      <iframe id="kaltura_player" src='https://cdnapisec.kaltura.com/p/391241/embedPlaykitJs/uiconf_id/44855082?iframeembed=true&amp;entry_id=1_i1kyr7ks&amp;config%5Bprovider%5D=%7B%22widgetId%22%3A%221_zj1kf8p4%22%7D&amp;config%5Bplayback%5D=%7B%22startTime%22%3A0%7D'  style="width: 400px;height: 225px;border: 0;" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" title="Final Project Recording"></iframe>
    `,
  },
  summaryBullets: [
    "Proposal: build a spinning, form changing tornado with a cone shape, wobble, debris (house, cow), rain, and a forest background.",
    "Tools: Three.js / WebGL / OpenGL, GLSL shaders, JavaScript; assets sourced from free object sites.",
    "Approach: low poly osu cone tornado with a wobble shader; per object animation (house rotation and keyframes, cow orbit), tree generator that accepts parameter arrays.",
    "Clouds: assembled from many low poly spheres in clumps, layered by height for darker and lighter tones.",
    "Ground: tiled quads with a pregenerated heightmap to ensure connected vertex heights and a bumpy, grassy look.",
    "Rain: raindrops drawn as lines moved in the animation loop with lifetimes (spawn/despawn) to simulate continuous rain.",
    "Sound: background wind audio played via a looping PlaySoundA() function (.wav file).",
    "Results: interactive, visually satisfying tornado with animated debris, clouds, rain, and sound; adjustable parameters for wobble, intensity, and object counts.",
    "Limitations: lightning and advanced fog particle effects were not completed due to time; lighting on shader objects remains imperfect.",
    "Lessons: learned heightmap generation for terrain, shader tweaking, procedural cloud assembly, and integrating audio.",
  ],
  notes: {
    house:
      "Found online; animated with rotation keyframes and a point light following it.",
    trees:
      "Generated from a single tree maker function with per tree params (r,g,b,speed,rotation,x,y,z,scale) and a shake shader.",
    clouds:
      "Randomly generated clumps made from spheres, sized and colored by height to create layered clouds.",
    ground: "Used pregenerated heightmap tiles to connect vertex heights cleanly.",
    rain:
      "Implemented with an animate/display loop that reuses raindrop objects for infinite rain effect.",
    audio: "PlaySoundA() used for looping wind sound; demo includes audio in the recording.",
  },
};

export default tornado;

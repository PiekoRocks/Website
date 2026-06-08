export const gridSound = {
  title: "Sounds Good Music Sequencer",
  category: "Web Dev",
  description:
    "Interactive sample based music player and sequencer built with Express, Handlebars, JavaScript, and the Web Audio API. Users can place sounds on a beat grid, adjust pitch, play loops, save tracks, load saved tracks, and browse available sound sets.",
  tags: ["JavaScript", "Node.js", "Express", "Handlebars", "Web Audio", "Tone.js", "HTML/CSS"],
  repo: "https://github.com/PiekoRocks/final-project-sounds-good",
  media: {
    screenshots: ["media/sounds-good-sequencer.png"],
  },
  summaryBullets: [
    "Built a browser based sequencer where users arrange samples across multiple rows and timed steps.",
    "Implemented audio playback with the Web Audio API, including decoded sample buffers, pitch shifting, play/stop transport controls, and a moving playhead.",
    "Added save/load workflows backed by Express routes and JSON storage for saved tracks.",
    "Supported sound set browsing and dynamic sound library population from server provided sound metadata.",
  ],
  notes: {
    backend: "Express server with Handlebars views and JSON backed saved track/soundset data.",
    interface:
      "Grid sequencer, sound library, soundset selector, tempo slider, and save/load controls.",
    audio:
      "Uses AudioContext sample buffers and playback rate pitch changes for interactive loop creation.",
  },
};

export default gridSound;

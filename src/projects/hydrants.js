export const hydrants = {
  title: "StreamLine Fire Hydrant Tracker",
  category: "Database Systems",
  description:
    "Full stack Flask and MySQL application for managing 5,000+ fire hydrants, inspections, maintenance records, worker assignments, and service regions. Built a normalized relational database with complete CRUD functionality and complex entity relationships.",
  tags: ["Python", "Flask", "MySQL", "Jinja2", "HTML/CSS", "JavaScript", "SQL", "Git/GitHub"],
  backend: "Flask with MySQL",
  demoLink: "http://classwork.engr.oregonstate.edu:9119/",
  repo: "https://github.com/PiekoRocks/StreamLine",
  media: {
    screenshots: ["media/streamline-hydrants.png"],
  },
  summaryBullets: [
    "Centralized hydrant data that had been spread across spreadsheets, handwritten logs, and legacy systems into one searchable platform.",
    "Implemented CRUD workflows for hydrants, inspections, maintenance records, workers, and regions.",
    "Designed a 7 table relational database in Third Normal Form with primary keys, foreign keys, one to many relationships, many to many relationships, and cascade operations.",
    "Improved data entry with dynamic forms, foreign key dropdown selectors, navigation updates, and responsive interface improvements.",
    "Supported worker assignment tracking, inspection history, maintenance cost logging, and regional management/reporting.",
    "Live classwork deployment is available on the OSU network or VPN.",
  ],
  notes: {
    scale: "Managed data for 5,000+ hydrants across multiple service regions.",
    database:
      "7 interconnected tables with normalized relationships and junction tables for many to many associations.",
    scope:
      "Supports hydrants, workers, inspections, maintenance logs, and regional record management.",
  },
};

export default hydrants;

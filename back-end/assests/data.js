// In-memory storage for channels and messages
let channels = [
  {
    id: 1,
    title: "General Chat",
    description:
      "A place for general discussions A place for general discussions A place for general discussions A place for general discussions A place for general discussions A place for general discussions A place for general discussions",
    avatar: null,
    backgroundImg: "general-background-url.jpg",
    messages: [],
  },
  {
    id: 2,
    title: "Announcements",
    description: "Important announcements and updates",
    avatar: null,
    backgroundImg: "announcements-background-url.jpg",
    messages: [
      {
        avatar: null,
        alias: "Data crussador",
        subject: "Immdidiate Meeting",
        id: 1,
        text: "Hello, this is a message in the General Chat!",
        timestamp: "2024-01-25T12:00:00Z",
      },
      {
        avatar: null,
        alias: "Frank",
        subject: "Test",
        id: 2,
        text: "Hello, this is a comment in the General Chat!",
        timestamp: "2024-01-25T12:00:00Z",
      },
    ],
  },
];

module.exports = channels;

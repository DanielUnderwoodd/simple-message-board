const express = require("express");
const router = express.Router();
delete require.cache[require.resolve("../assests/data")];
const channels = require("../assests/data");
const multer = require("multer");
const formValidator = require("../validator/formValidator");
const messageValidator = require("../validator/messageValidator");
const uniqid = require("uniqid");
const validateData = require("../middleware/Validation");

//preconfig the multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// File upload middleware for avatar and background image
const uploadFields = upload.fields([
  { name: "avatar" },
  { name: "backgroundImage" },
]);
router.get("/channels", (req, res) => {
  res.send(channels);
});

router.post(
  "/add-channel",
  uploadFields,
  validateData(formValidator),
  (req, res) => {
    const avatarBuffer =
      req.files && req.files["avatar"] ? req.files["avatar"][0].buffer : null;
    const backgroundImageBuffer =
      req.files && req.files["backgroundImage"]
        ? req.files["backgroundImage"][0].buffer
        : null;

    // Access other form fields
    const { title, description } = req.body;

    const newChannel = {
      id: uniqid(),
      title,
      description,
      messages: [],
      avatar: avatarBuffer ? avatarBuffer.toString("base64") : null,
      backgroundImage: backgroundImageBuffer
        ? backgroundImageBuffer.toString("base64")
        : null,
    };

    channels.push(newChannel);

    res.json({
      success: true,
      message: "Channel created successfully",
      channels,
    });
  }
);

router.post(
  "/channel/add-message",
  uploadFields,
  validateData(messageValidator),
  (req, res) => {
    const avatarBuffer =
      req.files && req.files["avatar"] ? req.files["avatar"][0].buffer : null;

    // Access other form fields
    const { alias, subject, text, channelId } = req.body;

    const newMessage = {
      id: uniqid(),
      alias,
      subject,
      text,
      timestamp: new Date().getTime(),
      avatar: avatarBuffer ? avatarBuffer.toString("base64") : null,
    };

    const pushMessageToChannel = (channelsArray, channelId, message) => {
      const channel = channelsArray.find((channel) => channel.id == channelId);

      if (channel) {
        channel.messages.push(message);
        return true; // Return success
      }

      return false; // Indicate that the channel with the given ID was not found
    };
    const success = pushMessageToChannel(channels, channelId, newMessage);
    if (success) {
      res.json({
        success: true,
        message: "Message Added successfully",
        channels,
      });
    } else {
      res.status(500).json("Channel not found with the specified ID.");
    }
  }
);
router.get("/channel/:id", (req, res) => {
  const channel =
    channels.find((channel) => channel.id == req.params.id) || null;
  if (channel) {
    res.status(200).json(channel);
  } else {
    let err = " There is no channel with this id number";
    res.status(500).json(err);
  }
});

module.exports = router;

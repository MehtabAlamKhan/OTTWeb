import express from "express"
const router = express.Router();
import fs from "fs";

router.get("/video", function (req, res) {
  // Ensure there is a range given for the video
  // console.log(req);

  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  // console.log(range);
  // get video stats (about 61MB)
  const videoPath =
    "D:/Mehtab/Movies/Jack Reacher (2012) [1080p]/Jack Reacher 2012.mp4";
  const videoSize = fs.statSync(
    "D:/Mehtab/Movies/Jack Reacher (2012) [1080p]/Jack Reacher 2012.mp4"
  ).size;

  // Parse Range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);
});

export default router;

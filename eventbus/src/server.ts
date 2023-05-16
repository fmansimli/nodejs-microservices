import http from "http";
import app from "./app";

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`*** server listening on http://localhost:${PORT}  (event-bus)`);
});

import http from "http";
import app from "./app";

const server = http.createServer(app);

const PORT = process.env.PORT || 4001;

if (!process.env.JWT_KEY) {
  throw new Error("JWT_KEY must be defined");
}

server.listen(PORT, () => {
  console.log(`*** server listening on http://localhost:${PORT}  (projects)`);
});

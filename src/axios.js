import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone2434.cloudfunctions.net/api",
  // "http://localhost:5001/clone2434/us-central1/api",
});

export default instance;

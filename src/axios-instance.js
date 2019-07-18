import axios from "axios";
import url from "./fburl";
const instance = axios.create({
  baseURL: url,
});
export default instance;

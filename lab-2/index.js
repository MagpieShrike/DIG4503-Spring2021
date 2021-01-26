import Fetch from "./fetch.js";

const f = new Fetch("farfetchd", "#97b821");
const fe = new Fetch("farfetch'd", "#97b821")

f.fetch();  // valid
fe.fetch(); // invalid
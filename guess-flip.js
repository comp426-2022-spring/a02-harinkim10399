import { flipACoin } from "./modules/coin.mjs";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));
args["call"];
const call = args.call;

if (call != "heads" && call != "tails" ) {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");
} else {
    console.log(flipACoin(call));
}
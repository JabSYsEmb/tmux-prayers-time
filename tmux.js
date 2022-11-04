#!/usr/bin/env node

const { fetch_next_prayer_time } = require("./index.js");

const time = new Date();
const time_utc =`${time.getHours().toString()}:${time.getMinutes().toString()}`; 

fetch_next_prayer_time(time_utc, "Istanbul", "Turkey", 12).then(prayer_time => console.log(prayer_time.join(': ')));

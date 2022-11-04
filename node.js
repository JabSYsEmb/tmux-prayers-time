#!/usr/bin/env node

const add_time_prefix = (str) => `01/01/2000 ${str}`;
const parse_time      = (time) => Date.parse(add_time_prefix(time));

const time = new Date();
const time_utc =`${time.getHours().toString()}:${time.getMinutes().toString()}`; 

const delete_sunset_time_out_of_timings = (timings) => {
	timings.splice(4,1);
	return timings;
}
const get_next_time = (timings, current_time) => {
		for(const prayer_time of timings) {
			if (parse_time(prayer_time[1]) > current_time)
				return prayer_time;
		}
		return timings[0];
}

const fetch_next_prayer_time = (current_time) => {
	current_time = parse_time(current_time);
	return fetch(`http://api.aladhan.com/v1/timingsByCity?city=Istanbul&country=Turkey&method=12`)
		.then(response => response.json())
		.then(data => Object.entries(data['data']['timings']).splice(0,8))
		.then(timings_with_sunset => delete_sunset_time_out_of_timings(timings_with_sunset))
		.then(timings => get_next_time(timings,current_time))
		.catch(err => console.error(err));
}

fetch_next_prayer_time(time_utc).then(prayer_time => console.log(prayer_time.join(': ')));

module.exports = {
	fetch_next_prayer_time,
}

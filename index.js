#!/usr/bin/env node

const add_time_prefix = (str) => `01/01/2000 ${str}`;
const parse_time      = (time) => Date.parse(add_time_prefix(time));

const get_prayers_timings = (data) => Object.entries(data['data']['timings']).splice(0,8)

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

const url_builder = (city="Istanbul", country="Turkey", method=3) => {
	return `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`
}

const fetch_next_prayer_time = (current_time, city, country, method) => {
	current_time = parse_time(current_time);
	return fetch(url_builder())
		.then(response => response.json())
		.then(get_prayers_timings)
		.then(delete_sunset_time_out_of_timings)
		.then(timings => get_next_time(timings,current_time))
		.catch(err => console.error(err));
}

module.exports = {
	fetch_next_prayer_time,
}

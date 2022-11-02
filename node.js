#!/usr/bin/env node

 const axios = require("axios");

 axios
 	.get("http://api.aladhan.com/v1/timingsByCity?city=Istanbul&country=Turkey&method=13")
 	.then(res => res.data)
 	.then(data => data['data']['timings'])
 	.then(timings => {
		console.log(timings)
		return timings;
	})
	.catch(
		err => console.error(err)
	);


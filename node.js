#!/usr/bin/env node

fetch("http://api.aladhan.com/v1/timingsByCity?city=Istanbul&country=Turkey&method=13")
	.then(response => response.json())
	.then(data => console.log(data['data']['timings']));

#!/usr/bin/env mocha

const assert = require('assert');
const {fetch_next_prayer_time} = require("./node.js");

const test_cases = [
	{
		input: "23:00",
		output: "Fajr",
	},
	{
		input: "09:00",
		output: "Dhuhr",
	},
	{
		input: "14:00",
		output: "Asr",
	},
	{
		input: "17:20",
		output: "Maghrib",
	},
	{
		input: "18:30",
		output: "Isha",
	},
];


describe('Next prayer`s time:', function () {
	it('fetch_next_prayer_time returns Promise', function () {
		assert.ok(fetch_next_prayer_time(test_cases[0]['input']) instanceof Promise)
	});
	it('Current time `23:00` => Fajr should be returned', function () {
		fetch_next_prayer_time(test_cases[0]['input'])
			.then(time => {assert.ok(test_cases[0]['output']===time[0]);})
	});
	it('Current time `09:00` => Dhuhr should be returned', function () {
		fetch_next_prayer_time(test_cases[1]['input'])
			.then(time => {assert.ok(test_cases[1]['output']===time[0]);})
	});
	it('Current time `14:00` => Asr should be returned', function () {
		fetch_next_prayer_time(test_cases[2]['input'])
			.then(time => {assert.ok(test_cases[2]['output']===time[0]);})
	});
	it('Current time `17:20` => Maghrib should be returned', function () {
		fetch_next_prayer_time(test_cases[3]['input'])
			.then(time => {assert.ok(test_cases[3]['output']===time[0]);})
	});
	it('Current time `18:30` => Isha should be returned', function () {
		fetch_next_prayer_time(test_cases[4]['input'])
			.then(time => {
				assert.ok(test_cases[4]['output']===time[0]);})
	});
});


#!/usr/bin/env mocha

const assert = require('assert');
const {fetch_next_prayer_time} = require("./index.js");

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
	[
		"Istanbul",
		"Turkey",
		12
	]
];


describe('Next prayer`s time:', function () {
	it('fetch_next_prayer_time returns Promise', function () {
		assert.ok(fetch_next_prayer_time(test_cases[0]['input']) instanceof Promise)
	});
	it('Current time `23:00` => Fajr should be returned', async function () {
		const data = await fetch_next_prayer_time(test_cases[0]['input'], ...test_cases.at(-1));
		assert.ok(data[0] === test_cases[0]['output']);
	});
	it('Current time `09:00` => Dhuhr should be returned', async function () {
		const data = await fetch_next_prayer_time(test_cases[1]['input'], ...test_cases.at(-1));
		assert.ok(data[0] === test_cases[1]['output']);
	});
	it('Current time `14:00` => Asr should be returned', async function () {
		const data = await fetch_next_prayer_time(test_cases[2]['input'], ...test_cases.at(-1));
		assert.ok(data[0] === test_cases[2]['output']);
	});
	it('Current time `17:20` => Maghrib should be returned', async function () {
		const data = await fetch_next_prayer_time(test_cases[3]['input'], ...test_cases.at(-1));
		assert.ok( data[0] === test_cases[3]['output'] );
	});
	it('Current time `18:30` => Isha should be returned', async function () {
		const data = await fetch_next_prayer_time(test_cases[4]['input'], ...test_cases.at(-1));
		assert.ok(data[0] === test_cases[4]['output']);
	});
});


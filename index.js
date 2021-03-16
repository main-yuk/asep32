const express = require('express');

const app = express();

app.get('/home', (req, res) => {

	res.send('homepage menu');

});

app.get('/hehe', (req, res) => {
	res.send("ini ketawa");
});

app.get('/api/jasa', (req, res) => {
	res.json({
		message: "mie sukses isi 2",
		name: "sule",
		img: "hahaha.jpg",
		price: "90000",
		tag: null
	});
});

app.get('/api/cok', (req, res) => {
	res.json({
		message: "kalkun",
		name: "sule",
		img: "hahaha.jpg",
		price: "90000",
		tag: null
	});
});

app.get('/api/kazuma', (req, res) => {
	res.json({
		message: "lol",
		name: "sule",
		img: "hahaha.jpg",
		price: "90000",
		tag: null
	});
});

app.get('/api/deku', (req, res) => {
	res.json({
		message: "boku no hero",
		name: "sule",
		img: "hahaha.jpg",
		price: "90000",
		tag: null
	});
});

app.listen(9000, () => {
	console.log('server running on port 9000');
});

const express = require('express');

const app = express();


app.get('/vt/reine', (req, res) => {
	res.json({
		message: "kalkun",
		name: "vtuber",
		img: "wkwkwk.jpg",
		tag: null
	});
});

app.get('/vt/bulan', (req, res) => {
	res.json({
		message: "moona",
		name: "vtuber",
		img: "hehe.jpg",
		tag: null
	});
});

app.get('/login', (req, res) => {

	res.send('successfully');

});

app.get('/logout', (req, res) => {
	res.send("successfully");
});

app.listen(2000, () => {
	console.log('server running on port 9000');
});

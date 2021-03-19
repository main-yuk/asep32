const express = require('express');

const app = express();


app.get('/api/products', (req, res) => {
	res.json({
		message: "kalung",
		name: "ranah",
		img: "kalung.jpg",
		tag: null
	});
});

app.get('/api/detail', (req, res) => {
	res.json({
		message: "asepsan",
		name: "punya",
		img: "node.png",
		tag: null
	});
});

app.get('/login', (req, res) => {

	res.send('successfully');

});

app.get('/logout', (req, res) => {
	res.send("successfully");
});

app.listen(5000, () => {
	console.log('server running on port 5000');
});

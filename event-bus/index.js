const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
	const event = req.body;

	await axios.post('http://localhost:4000/events', event).catch(err => {
		console.log(err.message);
	});
	await axios.post('http://localhost:4001/events', event).catch(err => {
		console.log(err.message);
	});
	await axios.post('http://localhost:4002/events', event).catch(err => {
		console.log(err.message);
	});

	res.send({ status: 'Ok' });
});

app.listen(4005, (req, res) => {
	console.log('Listening on port: 4005');
})

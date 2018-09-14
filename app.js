const http = require("http")
const { getDataFromPOST, updateDataFromPUT, deleteDataFromDELETE } = require("./functions")
const User = require("./model")

const hostname = "127.0.0.1"
const port = 3000
let time = `${new Date().getHours()}:${new Date().getMinutes()}`

const server = http.createServer((req, res) => {

	switch (req.method) {
		case "GET":
			res.end(
				`Here are the letters: ${emptyObject.letters}; here are the numbers: ${emptyObject.numbers}; here are the booleans, bro: ${emptyObject.booleansBro}`
			)

		case "POST":
			return getDataFromPOST(req, response => {
				res.end(`DONE! ${Object.keys(response)} : ${Object.values(response)}`)
			})

		case "PUT":
			res.end("SUCCCESSSSS!!!")
			return updateDataFromPUT(req, response => {
				res.end(`Updated! ${Object.keys(response)} : ${Object.values(response)}`)
			})

		case "DELETE":
			return deleteDataFromDELETE(req, response => {
				res.end(`DELETED! ${response}`)
			})

		default:
			res.end("That's the default message for /users/. Hopefully, you will never see it.")

	}
})

server.listen(port, hostname, User, () => {
	User.sync()
	console.log(`Server running at http://${hostname}:${port}/ in ${time}`)
})
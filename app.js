const http = require("http")
const { getDataFromPOST, emptyObject, updateDataFromPUT } = require("./functions")

const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {

	switch (req.url) {

		case "/":
			switch (req.method) {
				case "GET":
					res.end(
						`Here are the letters: ${emptyObject.letters}; here are the numbers: ${emptyObject.numbers}; here are the booleans, bro: ${emptyObject.booleansBro}`
					)

				case "POST":
					return getDataFromPOST(req, response => {
						console.log("Success from POST 2 /.")
						res.end(`DONE! ${response.name}`)
					})

				case "PUT":
					return updateDataFromPUT(req, response => {
						console.log("Success from PUT 2 /.")
						res.end(`Updated! ${response}`)
					})

				default:
					res.end("That's the default message for /. Hopefully, you will never see it.")
			}

		case "":

		case "":

		case "":

		default:
			res.end("That's not a valid URL. Please, go back to the homepage.")
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})
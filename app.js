const http = require("http")
const { parse } = require("querystring")

const hostname = "127.0.0.1"
const port = 3000

let emptyObject = {
	letters: "abc & xyz",
	numbers: 12345,
	booleansBro: false
}

const server = http.createServer((req, res) => {
	// console.log(" __ REQUEST __ : ", req.url)
	// res.setHeader(200, {"Content-Type": "text/plain"})
	// res.end("Hello, World!\n")

	let getDataFromPOST = (request, callback) => {
		let jsonHeader = "application/json"

		if (request.headers["content-type"] === jsonHeader) {
			let body = ""

			request.on("data", (chunk) => {
				body += chunk.toString()
			})

			request.on("end", () => {
				let parsedBody = JSON.parse(body)
				console.log(" ___ Parsed Body ___ : ", parsedBody)
				callback(parsedBody)
			})
		} else {
			callback("That's not what it had to be but ... I AM SORRY!")
		}
	}

	switch (req.url) {
		// if (req.method === "GET") {}
		case "/":
			switch (req.method) {
				case "GET":
					res.end(
						`Here are the letters: ${emptyObject.letters}; here are the numbers: ${emptyObject.numbers}; here are the booleans, bro: ${emptyObject.booleansBro}`
					)

				case "POST":
					return getDataFromPOST(req, response => {
						console.log("Success from POST 2 /")
						res.end(`DONE! ${response.name}`)
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
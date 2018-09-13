const { parse } = require("querystring")

function getDataFromPOST(request, callback) {
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

module.exports = { getDataFromPOST }
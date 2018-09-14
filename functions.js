const { parse } = require("querystring")

let emptyObject = {
	letters: "abc & xyz",
	numbers: 12345,
	booleansBro: false
}

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

function updateDataFromPUT(request, callback) {
	let jsonHeader = "application/json"

	if (request.headers["content-type"] === jsonHeader) {
		let body = ""

		request.on("data", (chunk) => {
			body += chunk.toString()
		})

		request.on("end", () => {
			let parsedBody = JSON.parse(body)

			switch (Object.keys(parsedBody).toString()) {
				case "letters":
					emptyObject.letters = parsedBody.letters
					callback(`${Object.keys(emptyObject)} : ${Object.values(emptyObject)}`)

				default:
					callback("Nothing to update here, man.")
			}

			console.log(" ___ Parsed Body ___ : ", parsedBody)
			callback(parsedBody)
		})
	} else {
		callback("That's not what it had to be but ... I AM SORRY!")
	}
}

module.exports = { emptyObject, getDataFromPOST, updateDataFromPUT }
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
			callback(`${Object.keys(parsedBody)} : ${Object.values(parsedBody)}`)
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

			if (!parsedBody.letters && parsedBody.numbers && parsedBody.booleansBro) {
				callback("Nothing to update here, man.")
			}
			if (parsedBody.letters) {
				emptyObject.letters = parsedBody.letters
			}
			if (parsedBody.numbers) {
				emptyObject.numbers = parsedBody.numbers
			}
			if (parsedBody.booleansBro) {
				emptyObject.booleansBro = parsedBody.booleansBro
			}

			console.log(" ___ Parsed Body ___ : ", emptyObject)
			callback(`${Object.keys(emptyObject)} : ${Object.values(emptyObject)}`)
		})
	} else {
		callback("That's not what it had to be but ... I AM SORRY!")
	}
}

module.exports = { emptyObject, getDataFromPOST, updateDataFromPUT }
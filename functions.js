const { parse } = require("querystring")
const User = require("./model")

function getDataFromPOST(request, callback) {
	let jsonHeader = "application/json"

	if (request.headers["content-type"] === jsonHeader) {
		let body = ""

		request.on("data", (chunk) => {
			body += chunk.toString()
		})

		request.on("end", () => {
			let parsedBody = JSON.parse(body)

			const user = {
				name: parsedBody.name,
				email: parsedBody.email
			}

			User.create(user)

			callback(user)
		})
	} else {
		callback("That's not what it had to be but ... I AM SORRY!")
	}
}

function updateDataFromPUT(request, callback) {
	let jsonHeader = "application/json"

	let urlParts = parseInt(request.url.split("/")[2], 10)

	if (request.headers["content-type"] === jsonHeader) {
		let body = ""

		request.on("data", (chunk) => {
			body += chunk.toString()
		})

		request.on("end", () => {
			let parsedBody = JSON.parse(body)

			const user = {
				name: parsedBody.name,
				email: parsedBody.email
			}

			if (!parsedBody.name && !parsedBody.email) {
				callback("Nothing to update here, man.")
			}

			User.findById(urlParts).then(res => res.update(user))

			callback(user)
		})
	} else {
		callback("That's not what it had to be but ... I AM SORRY!")
	}
}

function deleteDataFromDELETE(request, callback) {

	let urlParts = parseInt(request.url.split("/")[2], 10)

	User.findById(urlParts).then(res => { return res.destroy() }).then(_ => { "DELETED" })

	callback("DELETED USER - BOOM!")

}

module.exports = { getDataFromPOST, updateDataFromPUT, deleteDataFromDELETE }
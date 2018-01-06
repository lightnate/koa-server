const {Users} = require('../models')

async function create (ctx, next) {
	const data = ctx.request.body
	return await Users.create(data)
}

async function remove (ctx, next) {
	const data = ctx.request.body
	return await Users.destroy({where: data})
}

async function get (ctx, next) {
	ctx.body = await Users.findAll()
}

async function update (ctx, next) {
	const data = ctx.request.body
	return await Users.update(data, {
		where: {
			name: data.name
		}
	})
}

module.exports = {
	create,
	remove,
	get,
	update
}

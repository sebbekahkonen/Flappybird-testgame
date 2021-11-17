const Joi = require('joi')
const pattern = '^[a-zA-Z0-9]{8,32}$'

module.exports = {
	register(req, res, next) {
		const schema = Joi.object({
			email: Joi.string().email(),
			password: Joi.string().regex(
				new RegExp(pattern)
			)
		})

		const { error } = schema.validate(req.body)

		if (error) {
			switch (error.details[0].context.key) {
				case 'email':
					res.status(400).send({
						error: 'You must provide a valid email adress'
					})
					break
				case 'password':
					res.status(400).send({
						error: `Password rules:
<br>
1. It must be: Characters, Numerics.
<br>
2. It must be: 8-32 characters in length
`
					})
					break
				default:
					res.status(400).send({
						error: 'Invalid registration information'
					})
			}
		} else {
			next()
		}
	}
}

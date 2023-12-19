const AppError = require("../utils/AppError")

const { default: test } = require("node:test")

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body
    if (!name) {
      throw new AppError("Name is a required field!")
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = UsersController



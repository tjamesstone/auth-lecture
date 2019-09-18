const bcrypt = require('bcryptjs')
module.exports = {
  register: async (req, res) => {
    /*
    1. Check to see if email already exists in database
      a. if so, send proper response
    2. hash and salt password, and create new user in db
    3. put new user on session
    4. respond with user info
    */
    const db = req.app.get('db')
    const {email, password} = req.body

    // check if email is already in use
    const user = await db.find_user({email})
    if (user[0]) return res.status(200).send({message: 'Email already in use.'})

    // hash password
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const hashId = await db.add_hash([hash])
    const createdUser = await db.create_cust({email, hash_id: hashId[0].hash_id})

    // put user on session
    req.session.user = {id: createdUser[0].cust_id, email: createdUser[0].email}
    res.status(200).send({message: 'Logged in', userData: req.session.user})
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const {email, password} = req.body
    // check if email has an account
    const user = await db.find_hash({email})
    // not found - send message
    if (!user[0]) return res.status(200).send({message: 'Email not found'})
    
    // email was found - compare hashes
    const result = bcrypt.compareSync(password, user[0].hash_value)
    if (result === true) {
      req.session.user = {id: user[0].cust_id, email: user[0].email}
      return res.status(200).send({message: 'Logged in', userData: req.session.user})
    }
  },
  logout: async (req, res) => {
    req.session.destroy()
    res.status(200).send({message: 'Logged out'})
  }
}
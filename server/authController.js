module.exports = {
    register: (req, res) => {
        /*
            1. Check to see if the email already exists in the database
                a. if so, send the proper response
            2. Hash and salt the password, and create a new user in the database(including the hash and cust tables)
            3. Put that new user on session
            4. Send back the user info
        */
       const db = req.app.get('db')
       const {email, password} = req.body

       //CHeck if email is already in use

       db.find_user(email)
    }
}
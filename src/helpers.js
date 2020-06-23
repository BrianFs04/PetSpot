const bcrypt = require('bcrypt');
const helpers = {};

// Function to encrypt the user password
helpers.encryptPassword = async (password) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
};

// Function to match the password in the database
helpers.matchPassword = async (password, savepassword) => {
        try {
                return await bcrypt.compare(password, savepassword);
        } catch (e) {
                console.log(e);
        }
};


module.exports = helpers;
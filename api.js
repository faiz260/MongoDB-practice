

const home = (req, res) => {
    res.send('Home Page')
}

const login = (req, res) => {
    res.send('Your login')
}

module.exports = {
    home,
    login
}
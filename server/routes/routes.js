var appRouter = function(app) {

    app.get("/", function(req, res) {
        res.send("Hello World")
    })

    app.get("/account", function(req, res) {
        var accountMock = {
            "username": "nraboy",
            "password": "1234",
            "twitter": "@nraboy"
        }
        console.log(req.query)
        if(!req.query.username) {
            return res.send(accountMock)
        }
    })

    app.post("/account", function(req, res) {
        return res.send(req.body)
    })
}

module.exports = appRouter

export const renderLogin = (req, res) => {
    res.render("login")
}

export const renderRegister = (req, res) => {
    res.render("register")
}

export const renderCurrent = (req, res) => {
    res.render("current", {
        user: req.user
    })
}
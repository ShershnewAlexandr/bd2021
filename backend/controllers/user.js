module.exports.get = (req, res) => {
    res.status(200).json({
        login: "login from controller",
    });
};

module.exports.create = (req, res) => {
    res.status(200).json({
        login: "register from controller",
    });
};

module.exports.update = (req, res) => {
    res.status(200).json({
        login: "login from controller",
    });
};

module.exports.delete = (req, res) => {
    res.status(200).json({
        login: "register from controller",
    });
};
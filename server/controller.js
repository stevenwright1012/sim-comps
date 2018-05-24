module.exports={
    getDogs: (req, res) => {
        const db = req.app.get('db');

        db.get_all([]).then(products => {
            res.status(200).send(products)
        })
    }
}
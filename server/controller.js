module.exports={
    getDogs: (req, res) => {
        const db = req.app.get('db');

        db.get_all([]).then(products => {
            res.status(200).send(products)
        })
    },
    getWishlist: (req, res) => {
        const db = req.app.get('db');

        db.get_cart([]).then(wishlist => {
            res.status(200).send(wishlist)
        })
    },
    search: (req, res) => {
        const db = req.app.get('db');
        console.log(req.query);
        // let query = req.query.dog + '%'
        
        db.search([req.search]).then(dog => {
            // console.log(dog);
            
            res.status(200).send(dog)
        }).catch(console.log)
    },
    addToWishlist: (req, res) => {
        const db = req.app.get('db');

        db.add_to_cart([req.params.id]).then(result => {
            console.log(result);
            
            res.status(200).send(result)
        })
    },
}
select w.id, doggie_id, qty, d.name, price, img_url, energy from wishlist w
join doggies d on w.doggie_id = d.id
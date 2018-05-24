UPDATE cart
SET qty = $1
WHERE id = $2;

select c.id, product_id, qty, p.name, price, img_url from cart c
join products p on c.product_id = p.id;
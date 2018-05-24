insert into cart(product_id)
select $1
Where not exists(Select * from cart where product_id = $1);

update cart
set qty = qty + 1
where product_id = $1
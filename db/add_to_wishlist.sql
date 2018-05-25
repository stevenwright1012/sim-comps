insert into wishlist(doggie_id)
select $1
Where not exists(Select * from wishlist where doggie_id = $1);

update wishlist
set qty = qty + 1
where doggie_id = $1;

select w.id, doggie_id, qty, d.name, price, img_url, energy from wishlist w
join doggies d on w.doggie_id = d.id
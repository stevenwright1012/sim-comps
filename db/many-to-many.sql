--This schema can also be found in doggies_tabl_seed.sql
CREATE TABLE doggies(
    id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    price DECIMAL,
    img_url TEXT,
    energy FLOAT DEFAULT 99.998765,
    legs INT DEFAULT 4
)

CREATE TABLE owners(
    id SERIAL PRIMARY KEY,
    name VARCHAR(80)
);

CREATE TABLE doggie_owners(
ownerId INT REFERENCES owners(id), 
doggieId INT REFERENCES doggies(id)
);

-- Insert a bunch of owners into owners table
INSERT INTO owners(name)
values ('Sue');  
-- ect.....      

-- Insert a bunch of rows into doggie_owners table
INSERT INTO doggie_owners(ownerId, doggieId)
values (1,1);
--ect....

--To get what dogs an owner has, use this query
Select o.name, o.id, d.name from owners o
join doggie_owners g on g.ownerId = o.id
join doggies d on d.id = g.doggieId
where o.id = $1

--To get all the owners who own a particular kind of dog use this query
select d.id, d.name, o.name from doggies d
join doggie_owners g on g.doggieId = d.id
join owners o on o.id = g.ownerId
where d.id = 1



--This fits the pattern of many-to-many. Each owner had many dogs, and each type of dog has many owners
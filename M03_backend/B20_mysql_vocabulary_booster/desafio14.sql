SELECT 
    Country AS País
FROM
    w3schools.suppliers AS S
UNION SELECT 
    Country AS País
FROM
    w3schools.customers AS C
ORDER BY País
LIMIT 5;

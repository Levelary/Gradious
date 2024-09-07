use gradious;
select * from products;
select * from customers;
select * from employees;
select * from offices;
select * from orders;
select * from orderdetails;
select * from payments;
select * from productlines;




-- MySql Assignment 3
-- 1. Write a query to retrieve the product details for order 10103.
select ps.* from products ps inner join orderdetails ods
on ps.productCode = ods.productCode where orderNumber = 10103;
-- 2. Write a query to get the customer information for order 10127.
select cs.* from customers cs inner join orders os
on cs.customerNumber = os.customerNumber where orderNumber = 10127;
-- 3. Write a query to retrieve the employee information for customer 166
select es.* from employees es inner join customers cs
on cs.salesRepEmployeeNumber = es.employeeNumber where customerNumber = 166;
-- 4. Write a query to get the official information for office code 4
select * from offices where officeCode = 4;
-- 5. Write a query to retrieve the product line for each product in an order.
select ps.productCode, ods.orderNumber, ps.productLine from products ps
inner join orderdetails ods on ps.productCode = ods.productCode;
-- 6. Write a query to get the customer information and order status for all orders that
-- contain products belonging to the 'Classic Cars' product line.
select cs.*, os.status from customers cs 
inner join orders os on os.customerNumber = cs.customerNumber
inner join orderdetails ods on ods.orderNumber = os.orderNumber
inner join products ps on ps.productCode = ods.productCode
where ps.productLine = "Classic Cars";
-- 7. Write a query to retrieve the payment details and customer details of customer
-- number 103.
select pys.* , cs.* from customers cs inner join payments pys
on pys.customerNumber = cs.customerNumber where cs.customerNumber = 103;
-- 8. Write a query to get the orders and their corresponding payments to the same customer.
select cs.customerNumber , pys. from customers cs inner join payments pys
on pys.customerNumber = cs.customerNumber where cs.customerNumber = 103;
-- 9. Write a query to retrieve the customers and their associated orders.
-- 10. Write a query to get the products and their corresponding product lines.
-- 11. Write a query to retrieve the employees and their respective managers.
-- 12. Write a query to retrieve the customers, their orders, and the corresponding
-- product details.
-- 13. Write a query to get the payment details, order details, and the associated
-- products.
-- 14. Write a query to retrieve the payment details and the customer information for the
-- check number - JM555205.
select paymentDetails, customerInformation from payments where checkNumber = "JM555205";
-- 15. Write a query to retrieve the orders and their corresponding customer and
-- employee information for a canceled status.
-- 16. Write a query to get the payments, order details, and associated product
-- information for the payment date - 2004-12-17.
select * from  where paymentDate = 2004-12-17;
-- 17. Write a query to retrieve the products, order details, and corresponding customer
-- information for customer 112.
select * from  where customerNumber = 112;
-- 18. Write a query to retrieve the customers, their orders, and the associated product
-- line information for the customers who are all from Boston.
-- 19. Write a query to get the employees, their respective managers, and the
-- corresponding office details of the Sales Rep.
-- 20. Write a query to retrieve the product lines, products, and the corresponding
-- customer information for Vintage Cars.
select ps.productCode, ps.productName, ps.productLine, cs.* from products ps
inner join customers cs 
where ps.pro



























-- Assignment-1

-- 1. Write the query to get only the product Code and product name from the products table.
select productCode, productName from products;
-- 2. Write the query to arrange the customer details based on the country name in descending order.
select * from customers order by country desc;
-- 3. Write the query to find the order number, order date, and status for the customers having comments about shipment.
select orderNumber, orderDate, status, comments from orders where comments like '%shipment%' ; -- is not NULL;
-- 4. Write the query to find the customer who has made the highest payment along with the payment date.
select customerNumber, paymentDate, amount as maxAmount from payments where amount = (select max(amount) from payments);
-- 5. I have a list of the top five customers who made the highest payment and write a query to find the next top five customers who made the highest payment.
select customerNumber, amount from payments order by amount desc limit 5 offset 5;
-- 6. Write the query to find the customer details whose credit limit is between 10,000 to 1,00,000.
select * from customers where creditLimit between 10000 and 100000;
-- 7. Write the query to get the Employee number, lastname, and first name from the employees' table whose last name starts with 'B'.
select employeeNumber, lastName, firstName from employees where lastName like "B%";
-- 8. write a query to select the order whose total amount is greater than 50,000.
select orderNumber, sum(quantityOrdered * priceEach) as totalAmount from orderdetails group by orderNumber having totalAmount > 50000;
-- 9. Write the query to find the product code, product name & text description from the tables products and product lines.
-- select productCode, productName, textDescription from products, productLines;
select ps.productCode, ps.productName, pls.textDescription from products ps
inner join productlines pls on ps.productLine = pls.productLine;
-- 10. Write the query to get the customer number, customer name, order number, status from the tables orders, payments, and customers who have no order.
select cs.customerNumber, cs.customerName, os.orderNumber, os.status from customers cs
left join orders os on cs.customerNumber = os.customerNumber
left join payments ps on ps.customerNumber = ps.customerNumber
group by cs.customerNumber, os.orderNumber;








-- Assignment-2

-- 1. Write a query to calculate the total number of products in the database.
select count(productCode) as totalProducts from products;
-- 2. Write a query to find the average buy price of all products.
select avg(buyPrice) as avgProducts from products;
-- 3. Write a query to determine the maximum quantity in stock across all products.
select productCode, quantityInStock as maxQuality from products where quantityInStock = (select max(quantityInStock) from products);
-- 4. Write a query to calculate the total sales revenue for each line.
select ps.productLine, sum( ods.quantityOrdered * ods.priceEach ) as totalSalesRevenue
from orderdetails ods inner join products ps
on ps.productCode = ods.productCode
group by ps.productLine;
-- 5. Write a query to determine the average credit limit for all customers.
select avg(creditLimit) as avgCreditLimit from customers;
-- 6. Write a query to find the highest payment amount made by a customer.
select max(amount) as highestPayment from payments;
-- 7. write a query to calculate the total quantity ordered for each product.
select productCode, sum(quantityOrdered) as totalProducts
from orderdetails group by productCode;
-- 8. write a query to determine the number of employees in each office.
select officeCode, count(*) as totalEmployees from employees group by officeCode;
-- 9. write a query to calculate the average price for each order.
select orderNumber, avg(quantityOrdered * priceEach) as avgPrice
from orderdetails group by orderNumber;
-- 10. Write a query to determine the total sales revenue for each country.
select cs.country, sum( ods.quantityOrdered * ods.priceEach ) as totalSalesRevenue
from orders os inner join customers cs
on  os.customerNumber = cs.customerNumber
inner join orderdetails ods
on os.orderNumber = ods.orderNumber
group by cs.country;
-- 11. Write a query to calculate the average quantity in stock for each product line.
select productLine, avg(quantityInStock) as avgQuantityInStock
from products group by productLine;
-- 12. Write a query to determine the total number of orders placed by each customer.
select cs.customerName, count(os.orderNumber ) as totalSalesRevenue
from customers cs inner join orders os
on  os.customerNumber = cs.customerNumber
group by cs.customerName;
-- 13. Write a query to find the maximum credit limit among all customers.
select max(creditLimit) as maxCreditLimit from customers;
-- 14. Write a query to count the number of offices in each country.
select country, count(officeCode) as totalOffices 
from offices group by country;
-- 15. Write a query to calculate the average payment amount for each customer.
select customerNumber, avg(amount) as avgPayment 
from payments group by customerNumber;
-- 16. write a query to determine the number of products in each product line.
select productLine, count(productCode) as totalProducts 
from products group by productline;
-- 17. write a query to count the number of customers in each state.
select state, count(customerNumber) as totalcustomers 
from customers group by state;
-- 18. Write a query to find the minimum payment amount among all customers.
select min(amount) as minPayment from payments;
-- 19. Write a query to calculate the average sales revenue per order.
select orderNumber, avg( quantityOrdered * priceEach ) as avgSalesRevenue
from orderdetails group by orderNumber;
-- 20. Write a query to determine the total quantity ordered for each product line.
select ps.productLine, sum(ods.quantityOrdered) as totalQuantityOrdered
from orderdetails ods inner join products ps
on ps.productCode = ods.productCode group by ps.productLine;

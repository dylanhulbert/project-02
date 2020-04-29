DROP DATABASE IF EXISTS drinkDB;
CREATE DATABASE drinkDB; 
USE drinkDB; 

CREATE TABLE drinks (
id INT AUTO_INCREMENT, 
drinkName VARCHAR(200) NOT NULL, 
ingOne VARCHAR(200) NOT NULL,
ingOneOz DECIMAL (4,2) NOT NULL, 
ingTwo VARCHAR(200), 
ingTwoOz DECIMAL (4,2), 
ingThree VARCHAR(200),
ingThreeOz DECIMAL (4,2),
ingFour VARCHAR(200),
ingFourOz DECIMAL (4,2), 
notes VARCHAR(1000),  
PRIMARY KEY(id)
); 
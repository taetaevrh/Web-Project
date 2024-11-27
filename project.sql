CREATE DATABASE IF NOT EXISTS ramen;

USE ramen;

CREATE TABLE IF NOT EXISTS Users (
    UID INT AUTO_INCREMENT PRIMARY KEY,
    Fname VARCHAR(50) NOT NULL,
    Lname VARCHAR(50) NOT NULL,
    DoB DATE NOT NULL,
    Phone VARCHAR(10),
	Address VARCHAR(200),
    Email VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(50) NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS Products (
    PID INT AUTO_INCREMENT PRIMARY KEY, -- Product ID (Unique and Auto Increment)
    Pname VARCHAR(50) NOT NULL,         -- Name of the product
    Desp varchar(100),                          -- Description of the product
    Price int NOT NULL,      -- Price of the product with up to 2 decimal places
    Spice INT DEFAULT 0,                -- Spice level (e.g., 0-10 scale)
    Star DECIMAL(2, 1) DEFAULT 0.0,     -- Star rating (e.g., 0.0 - 5.0 scale)
    Img VARCHAR(255)                    -- Path or URL to the product image
);

INSERT INTO Users (Fname, Lname, DoB, Phone, Address, Email, Password, isAdmin)
VALUES ("Varich", "Maleevan", "2004-11-20", "0846454399", "It's a secret", "varich.mal@student.mahidol.edu", "taetar2016", 1),
("Siriprapas", "Kimpee", "2005-07-21", "", "", "siriprapas.kim@student.mahidol.edu", "Image0123456", 1)
;
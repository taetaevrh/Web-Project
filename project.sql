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
("Siriprapas", "Kimpee", "2005-07-21", "", "", "siriprapas.kim@student.mahidol.edu", "Image0123456", 1),
("User", "User", "2000-01-01", "", "", "user@user.com", "user", 0),
("Admin", "Admin", "2000-01-01", "", "", "admin@admin.com", "admin", 1)
;

INSERT INTO Products (Pname, Desp, Price, Spice, Star, Img) VALUES
("ทงโคะสึ โชยุ ราเมน", "ราเมนในซุปกระดูกหมู รสซีอิ๊วญี่ปุ่นหน้าหมูชาชู", "108", 0, 5.0, "https://www.hachiban.co.th/_files/product/full/5WIN3CZY.png"),
("โกโมะคึ ราเมน", "ราเมนราดหน้าทะเลญี่ปุ่น", 133, 0, 3.0, "https://www.hachiban.co.th/_files/product/full/8NRG7WRY.png"),
(" ต้มยำ ชาชูเมน", "ราเมนในน้ำซุปต้มยำหน้าหมูชาชู", 108, 2, 3.0, "https://www.hachiban.co.th/_files/product/full/5X0FZ408.png"),
("ฮะจังเมน", "ราเมนสูตรต้นตำรับฮะจิบัง ราเมน", 83, 0, 5.0, "https://www.hachiban.co.th/_files/product/full/4FVDPZCA.png"),
("ชาชูเมน", "ราเมนหน้าหมูชาชู", 108, 0, 5.0, "https://www.hachiban.co.th/_files/product/full/1VJRBJZX.png"),
("คาโมะนิ ราเมน", "ราเมนหน้าเป็ดพะโล้และเห็ดหอม", 110, 0, 4.0, "https://www.hachiban.co.th/_files/product/full/L8I7Z37X.png"),
("มิโซะ ราเมน", "ราเมนผัดผักในน้ำซุปเต้าเจี้ยวญี่ปุ่น", 100, 0, 4.0, "https://www.hachiban.co.th/_files/product/full/K4LIDK3N.png"),
(" มิโซะ ชาชูเมน", "ราเมนผัดผักในน้ำซุปเต้าเจี้ยวญี่ปุ่น", 115, 0, 4.0, "https://www.hachiban.co.th/_files/product/full/OUWSLO93.png"),
(" ไพตัน ราเมน", "ราเมนผัดผักในน้ำซุปกระดูกหมูหน้าหมูชาชู", 103, 0, 4.0, "https://www.hachiban.co.th/_files/product/full/ORXJ7UUB.png"),
(" ไพตัน ชาชูเมน", "ราเมนผัดผักในน้ำซุปกระดูกหมูหน้าหมูชาชู", 118, 0, 5.0, "https://www.hachiban.co.th/_files/product/full/3T5C2E25.png"),
("ทงโคะสึ ทันตัมเมน", "ราเมนน้ำซุปกระดูกหมู หน้าซอสหมูสับและไก่สับ", 105, 2, 3.0, "https://www.hachiban.co.th/_files/product/full/XPJBAH4C.png"),
(" โกมะ ทันตัมเมน", "ราเมนในซุปงาขาวคั่ว เสิร์ฟพร้อมซอสหมูสับและไก่สับปรุงรส", 105, 2, 4.0, "https://www.hachiban.co.th/_files/product/full/YZDSP9BU.png"),
("เทริยากิ ชิกเก้น ราเมน", "ราเมนหน้าไก่ย่างเทริยากิ สูตรต้นตำรับจากญี่ปุ่น", 108, 0, 4.0, "https://www.hachiban.co.th/_files/product/full/2MIZ6ORA.png"),
("เรเมน", "ราเมนเย็นหน้าหมูชาชู กุ้ง แฮม ไข่ ราดซอสเลมอน", 118, 0, 2.0, "https://www.hachiban.co.th/_files/product/full/JPJO1ET9.png"),
("เนงิ ชาชูเมน", "ราเมนแห้งหน้าหมูชาชู สาหร่ายโนริ ราดซอสน้ำมันพริกเผา", 98, 0, 3.0, "https://www.hachiban.co.th/_files/product/full/UYYQ6DWY.png"),
("ยากิโซบะ", "ราเมนผัดผัก ไก่ ปลาหมึก และเห็ดหูหนู ซอสยากิโซบะ", 105, 0, 4.0, "https://www.hachiban.co.th/_files/product/full/JATR42MA.png"),
("คาราเมน", "ราเมนแห้งราดซอสหมูสับ และไก่สับ", 103, 1, 5.0, "https://www.hachiban.co.th/_files/product/full/7KQ2J52L.png"),
("โทริโซบะ", "ราเมนแห้งหน้าไก่ย่างเทริยากิ", 108, 0, 3.0, "https://www.hachiban.co.th/_files/product/full/3N1NW3CC.png"),
(" ชาฮั่ง", "ข้าวผัดหมูชาชู หอมกลิ่นซีอิ๊วญี่ปุ่น", 100, 0, 2.0, "https://www.hachiban.co.th/_files/product/full/5M2PADUX.png"),
("วาฟู ชิกเก้น สลัด", "สลัดไก่ทอด ราดซอสญี่ปุ่น", 100, 0, 2.0, "https://www.hachiban.co.th/_files/product/full/I7EAMAE3.png"),
("ญาซัย อิตาเมะ", "ผัดผักกับไก่ ปลาหมึกและเห็ดหูหนู", 100, 0, 1.0, "https://www.hachiban.co.th/_files/product/full/RGQRVATN.png"),
("ทาโกะยากิ", "ทาโกะยากิไส้ปลาหมึกยักษ์", 96, 0, 4.0, "https://www.hachiban.co.th/_files/product/full/9Q99I662.png"),
("คาโมะนิ", "เป็ดตุ๋นเห็ดหอม", 108, 0, 3.0, "https://www.hachiban.co.th/_files/product/full/PRREX63T.png"),
("ลูกชิ้นปลาหมายเลข 8", "ลูกชิ้นปลาหมายเลข 8", 53, 0, 2.0, "https://www.hachiban.co.th/_files/product/full/O92RX6WM.png"),
("เกี๊ยวซ่า 6 ชิ้น", "เกี๊ยวซ่า", 83, 0, 5.0, "https://www.hachiban.co.th/_files/product/full/1LF4YSYG.png"),
("เกี๊ยวซ่า 12 ชิ้น", "เกี๊ยวซ่า", 164, 0, 5.0, "https://www.hachiban.co.th/_files/product/full/1LF4YSYG.png"),
("โพเทโท้", "มันฝรั่งทอด", 63, 0, 3.0, "https://www.hachiban.co.th/_files/product/full/KEWFOO8L.png"),
("เทบะ คาระ", "ปีกไก่ทอดราดซอส", 83, 0, 2.0, "https://www.hachiban.co.th/_files/product/full/KV8D4RNO.png"),
("เทริยากิ ชิกเก้น", "ไก่ย่างเทริยากิ", 105, 0, 3.0, "https://www.hachiban.co.th/_files/product/full/R2U0V99E.png"),
("เอบิโรล", "เปาะเปี๊ยะกุ้ง", 83, 0, 5.0, "https://www.hachiban.co.th/_files/product/full/MVVEQCSN.png")
;
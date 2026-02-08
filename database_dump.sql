CREATE DATABASE IF NOT EXISTS server_management;
USE server_management;

CREATE TABLE IF NOT EXISTS companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name ENUM('Microsoft', 'IBM', 'GoDaddy', 'DigitalO') NOT NULL
);

CREATE TABLE IF NOT EXISTS servers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    company_id INT,
    status ENUM('active', 'inactive') DEFAULT 'inactive',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(id)
);

INSERT INTO companies (name) VALUES ('Microsoft'), ('IBM'), ('GoDaddy'), ('DigitalO');
INSERT INTO servers (name, ip_address, company_id, status, created_at) VALUES 
('Production-Server', '192.168.1.10', 1, 'active', NOW()),
('Backup-Database', '10.0.0.5', 2, 'inactive', '2026-02-01 12:00:00'),
('Web-Host-Main', '172.16.0.1', 4, 'active', NOW()),
('Test-Node', '127.0.0.1', 3, 'inactive', '2026-01-15 09:00:00');
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '19991999';
FLUSH PRIVILEGES;
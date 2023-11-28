-- Database setup script

CREATE USER IF NOT EXISTS 'tutorship_dev'@'localhost' IDENTIFIED BY 'tutorship_dev_pwd';
CREATE DATABASE IF NOT EXISTS tutorship_db;
GRANT ALL PRIVILEGES ON tutorship_db.* TO 'tutorship_dev'@'localhost';

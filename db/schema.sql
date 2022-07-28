/*creates the database, drops if exists*/

/*creates the database, drops if exists*/
DROP DATABASE IF exists user_db;
CREATE DATABASE user_db;

USE user_db;

CREATE TABLE user_profile (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL
);


CREATE TABLE user_tables (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    over_rating INT,
    physical_rating INT,
    emotional_rating INT,
    spirtitual_rating INT,
    social_rating INT,
    mental_rating INT,
    user_profile INT,
    FOREIGN KEY (user_profile)
    REFERENCES user_profile(id)
    ON DELETE SET NULL
);

CREATE TABLE user_favorites (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(50) NOT NULL,
    quote VARCHAR(50) NOT NULL,
    user_profile INT,
    FOREIGN KEY (user_profile)
    REFERENCES user_profile(id)
    ON DELETE SET NULL
);

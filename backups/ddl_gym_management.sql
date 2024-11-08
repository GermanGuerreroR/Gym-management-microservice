CREATE DATABASE GYM_MANAGEMENT_DEV_MAIN_SERVICES;

USE GYM_MANAGEMENT_DEV_MAIN_SERVICES;

CREATE TABLE Coach (
    id_coach INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    specialities TEXT,
    experience INT,
    certifications TEXT
);

CREATE TABLE Apprentice (
    id_apprentice INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    date_birth DATE,
    gender varchar(50) DEFAULT NULL,
    training_goals text,
    fitness_level varchar(50) DEFAULT NULL,
    id_coach INT,
    FOREIGN KEY (id_coach) REFERENCES Coach (id_coach) ON DELETE SET NULL
);
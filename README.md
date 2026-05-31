# Business Listings Dashboard

## Project Overview

This project is a full-stack Business Listings Dashboard built using React.js, FastAPI, and MySQL.

The dashboard collects business listing data, stores it in MySQL, and displays visual reports through charts.

## Tech Stack

* Frontend: React.js
* Backend: FastAPI
* Database: MySQL
* Charts: Recharts

## Features

* City-wise business count
* Category-wise business count
* Source-wise business count
* MySQL database integration
* REST APIs using FastAPI
* Interactive charts and dashboard

## Database Schema

Table: listing_master

Fields:

* id
* business_name
* category
* city
* address
* phone
* source
* created_at

## API Endpoints

* /stats/city
* /stats/category
* /stats/source

## Setup Instructions

### Backend

cd backend

pip install fastapi uvicorn mysql-connector-python

uvicorn main:app --reload

### Frontend

cd frontend

npm install

npm start

## Challenges Faced

* Connecting React with FastAPI
* Configuring CORS
* Integrating MySQL with FastAPI
* Visualizing data using charts

## Outcome

A complete dashboard displaying business listing analytics using React, FastAPI, and MySQL.

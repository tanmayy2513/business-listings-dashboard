from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Tanmay(06)",
    database="business_dashboard"
)

@app.get("/stats/city")
def city_stats():
    cursor = db.cursor()
    cursor.execute("""
        SELECT city, COUNT(*)
        FROM listing_master
        GROUP BY city
    """)
    data = cursor.fetchall()
    return data

@app.get("/stats/category")
def category_stats():
    cursor = db.cursor()
    cursor.execute("""
        SELECT category, COUNT(*)
        FROM listing_master
        GROUP BY category
    """)
    data = cursor.fetchall()
    return data

@app.get("/stats/source")
def source_stats():
    cursor = db.cursor()
    cursor.execute("""
        SELECT source, COUNT(*)
        FROM listing_master
        GROUP BY source
    """)
    data = cursor.fetchall()
    return data
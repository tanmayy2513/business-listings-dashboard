import mysql.connector
import random

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Tanmay(06)",
    database="business_dashboard"
)

cursor = db.cursor()

cities = ["Mumbai", "Pune", "Thane", "Navi Mumbai", "Nagpur"]
categories = ["Restaurant", "Hospital", "Education", "Gym", "Hotel"]
sources = ["Google", "Justdial", "Sulekha"]

for i in range(1, 501):
    business_name = f"Business {i}"
    category = random.choice(categories)
    city = random.choice(cities)
    address = f"Address {i}"
    phone = f"98{random.randint(10000000,99999999)}"
    source = random.choice(sources)

    cursor.execute("""
        INSERT INTO listing_master
        (business_name, category, city, address, phone, source)
        VALUES (%s,%s,%s,%s,%s,%s)
    """, (
        business_name,
        category,
        city,
        address,
        phone,
        source
    ))

db.commit()

print("500 records inserted successfully!")
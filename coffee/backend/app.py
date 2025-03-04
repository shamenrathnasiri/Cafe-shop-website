from flask import Flask, request, jsonify
from flask_cors import CORS;
import mysql.connector;

app = Flask(__name__) 

CORS(app)

db=mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='cozy_bean_cafe'
)

cursor = db.cursor()

#create for table if not exist

cursor.execute("""
    CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        address TEXT,
        quantity INT,
        shipping_code VARCHAR(50),
        country VARCHAR(100),
        item_name VARCHAR(255),
        item_weight VARCHAR(50),
        item_price VARCHAR(20)
    )
""")
db.commit()

@app.route("/order", methods=["POST"])
def place_order():
    data = request.json

    try:
        name = data["name"]
        address = data["address"]
        quantity = int(data["quantity"])
        shipping_code = data["shipping_code"]
        country = data["country"]
        item_name = data["item_name"]
        item_weight = data["item_weight"]
        item_price = data["item_price"]

        query = "INSERT INTO orders (name, address, quantity, shipping_code, country, item_name, item_weight, item_price) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
        values = (name, address, quantity, shipping_code, country, item_name, item_weight, item_price)

        cursor.execute(query, values)
        db.commit()

        return jsonify({"message": "Order placed successfully!"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
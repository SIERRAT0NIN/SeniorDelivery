from flask import Flask, request, jsonify, redirect
import stripe
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

VITE_STRIPE_PUBLISHABLE_KEY = os.getenv('VITE_STRIPE_PUBLISHABLE_KEY')
VITE_STRIPE_SECRET_KEY = os.getenv('VITE_STRIPE_SECRET_KEY')

if not VITE_STRIPE_SECRET_KEY:
    raise ValueError("Stripe Secret Key is missing. Please check your .env.local file.")

app = Flask(__name__, 
            static_url_path='',
            static_folder='public')
# CORS(app)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

YOUR_DOMAIN = 'http://localhost:5173'

stripe.api_key = VITE_STRIPE_SECRET_KEY   


stripe.Price.create(
    product='prod_QlzQyynhFSX32M',
    unit_amount=51000,
    currency="usd",

)

@app.route('/api/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': 'price_1PuRRnFms80vHfE0qiErAnu1',
                    'quantity': 1,
                },
            ],
            mode='subscription',
            success_url=YOUR_DOMAIN + '/success',
            cancel_url=YOUR_DOMAIN + '/cancel',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)

if __name__ == '__main__':
    app.run(port=5000)

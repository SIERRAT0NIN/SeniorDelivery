from flask import Flask, request, jsonify, redirect
import stripe
import os
from dotenv import load_dotenv

# Load the .env file
load_dotenv()

VITE_STRIPE_PUBLISHABLE_KEY = os.getenv('VITE_STRIPE_PUBLISHABLE_KEY')
VITE_STRIPE_SECRET_KEY = os.getenv('VITE_STRIPE_SECRET_KEY')

if not VITE_STRIPE_SECRET_KEY:
    raise ValueError("Stripe Secret Key is missing. Please check your .env.local file.")


app = Flask(__name__, 
            static_url_path='',
            static_folder='public')

YOUR_DOMAIN = 'http://localhost:5173/'

stripe.api_key = VITE_STRIPE_SECRET_KEY  # Replace with your Stripe secret key
# stripe.api_key = "sk_test_51PuQvaFms80vHfE08i6Z9Be2Cr0JTpIGk2xFkpatSHDOeSAQHhgEOna1Pj5NtWFNvONNO41sDGBRudjX2EDq7OX800459Kgp67"  # Replace with your Stripe secret key


stripe.Price.create(
    # name="SeniorDeliverMembership",
    product='prod_QlzQyynhFSX32M',
    # mode="payment",
    unit_amount=51,
    currency="usd",
    # success_url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}",
    # cancel_url="https://example.com/cancel",
)

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': '{{PRICE_ID}}',
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '/success.html',
            cancel_url=YOUR_DOMAIN + '/cancel.html',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)

if __name__ == '__main__':
    app.run(port=5000)

from flask import Flask, request, jsonify
import stripe

app = Flask(__name__)

stripe.api_key = "your_secret_key_here"  # Replace with your Stripe secret key

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    data = request.json
    try:
        # Create a new Stripe Checkout Session
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price': data['price_id'],
                'quantity': 1,
            }],
            mode='subscription',
            success_url='http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url='http://localhost:3000/cancel',
        )
        return jsonify({'id': session.id})
    except Exception as e:
        return jsonify(error=str(e)), 403

if __name__ == '__main__':
    app.run(port=5000)

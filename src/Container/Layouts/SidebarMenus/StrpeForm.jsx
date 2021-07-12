import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51JArDsSINdHuan3mx8Xl320YXSjhnnbJhhFbuF25ddubzFr23pDdNw6rsMmTZcrISuBeHZy4dBYwM320SsXc6OfD00ki3CHXjA')

const StrpeForm = () => {
    const [stripeError, setStripeError] = useState();
    const [loading, setLoading] = useState();

    const handleClick = async() => {
        setLoading(true);

        const stripe = stripePromise;

        const { error } =  (await stripe).redirectToCheckout({
            lineItems : [
                {
                    price: 'price_1JCN3bSINdHuan3mxpZtBte5',
                    quantity: 1
                }
            ],
            mode: 'payment',
            cancelUrl: window.location.origin,
            successUrl: `${window.location.origin}/thankyou`,
        });

        if(error){
            setLoading(false);
            setStripeError(error);
        }
    };

    return (
        <>
        {stripeError && <p style ={{color:'red'}}>{{stripeError}}</p>}
        <button role='link' onClick={handleClick} disabled={loading}>
            Go to Checkout
        </button>
        </>
    );
};

export default StrpeForm;
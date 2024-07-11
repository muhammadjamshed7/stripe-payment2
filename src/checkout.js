import { loadStripe } from "@stripe/stripe-js";

let stripePromise = null;

const getStripe = () => {
  if (!stripePromise) {
    // console.log("Stripe Key: ", process.env.NEXT_PUBLIC_KEY_KEY); // Log the Stripe key
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_KEY_KEY);
  }
  return stripePromise;
};

export async function checkout({ lineItems }) {
  const stripe = await getStripe();
  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
}

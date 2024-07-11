import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51PauITG65rFYH6qRpwYsHz6tCblk7x9pOsyjy9ICLGvxI3wIu45TdJAvQ5hyItrfGllUsM8MW4UCkcTzlQsRxAZ300Hern32Fx'); // Replace with your actual publishable key
  }
  return stripePromise;
};

export const checkout = async ({ lineItems }) => {
  const stripe = await getStripe();

  const { error } = await stripe.redirectToCheckout({
    mode: 'subscription', // Set the mode to 'subscription'
    lineItems,
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/canceled`,
  });

  if (error) {
    console.error('Stripe Checkout error:', error);
  }
};

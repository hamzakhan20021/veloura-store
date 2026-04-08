import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { items, customerEmail } = await req.json();

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: customerEmail,
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.numericPrice * 100,
        },
        quantity: 1,
      })),
      success_url: `${origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}?canceled=true`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return Response.json(
      { error: error.message || "Checkout failed" },
      { status: 500 }
    );
  }
}
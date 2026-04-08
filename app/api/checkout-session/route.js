import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return Response.json(
        { error: "Missing session_id" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return Response.json({
      id: session.id,
      customer_email: session.customer_email,
      amount_total: session.amount_total,
      currency: session.currency,
      payment_status: session.payment_status,
    });
  } catch (error) {
    console.error("Checkout session fetch error:", error);
    return Response.json(
      { error: error.message || "Failed to fetch session" },
      { status: 500 }
    );
  }
}
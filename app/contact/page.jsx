export default function ContactPage() {
  return (
    <main className="pt-24 pb-20">
      <section className="container">
        <div className="py-12 md:py-20 lg:py-24">
          <p className="tag">Get in Touch</p>
          <h1 className="section-title mb-6">Contact Us</h1>
          <div className="w-20 h-1 bg-secondary mb-8" />
          <p className="text-body max-w-3xl mb-12">
            Reach out to our team for investment inquiries, media, or general
            questions.
          </p>

          <div className="max-w-xl bg-white p-8 rounded-xl2 shadow-soft border border-gray-100">
            <p className="text-body font-primary">
              <strong>Email:</strong> hello@swaramventures.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

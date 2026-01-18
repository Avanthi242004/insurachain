export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "Policy Holder",
      text:
        "InsuraChain made insurance completely transparent. I can track my claims in real time and trust the records because everything is on blockchain.",
    },
    {
      name: "Ananya Verma",
      role: "Small Business Owner",
      text:
        "Claim processing was surprisingly fast. Smart contracts removed delays and I received updates instantly without any manual follow-ups.",
    },
    {
      name: "Karthik R",
      role: "Healthcare Subscriber",
      text:
        "The tamper-proof policy records give me complete peace of mind. This is how modern insurance should work.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <span className="testimonials-label">— Testimonials</span>
        <h2 className="testimonials-title">
          What Our <span>Users Say</span>
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">

              <p className="testimonial-text">“{t.text}”</p>

              <div className="testimonial-user">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

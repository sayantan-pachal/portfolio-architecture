import UIFramework from "ui-library";

// Reusable contact UI blocks
import SocialGrid from "components/SocialGrid";
import MessageForm from "components/MessageForm";

// Contact-related data source
import contactList from "data/contactList";

export default function ContactPage() {
  return (
    <section className="page-wrapper">
      <header className="page-header">
        <h1>Let’s work together</h1>
        <p><em>How do you take your coffee?</em></p>
      </header>

      {/* Social / external contact links */}
      <div className="contact-grid">
        {contactList.map((item) => (
          <SocialGrid
            key={item.id}
            platform={item.platform}
            link={item.url}
            handle={item.handle}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Direct contact form */}
      <section className="contact-form-section">
        <MessageForm />
      </section>
    </section>
  );
}

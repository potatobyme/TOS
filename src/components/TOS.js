import React from "react";
import "./TOS.css";

const TOS = () => {
  return (
    <div className="tos-container">
      <h1 className="tos-header">Terms of Service (TOS)</h1>
      <p><strong>Effective Date:</strong> January 4, 2025</p>
      <p><strong>Business Name:</strong> POTATO.SERVICE</p>

      <section>
        <h2>1. Scope of Services</h2>
        <p>
          POTATO.SERVICE provides digital products and services, including but not limited to:
        </p>
        <ul>
          <li>Discord bot source codes</li>
          <li>Custom tools</li>
          <li>Website code</li>
          <li>APIs</li>
          <li>Other related digital solutions</li>
        </ul>
        <p>All products and services are provided on an <strong>"as-is"</strong> basis, and it is the Client's responsibility to ensure the purchase meets their requirements.</p>
      </section>

      <section>
        <h2>2. Payment Terms</h2>
        <p>
          All payments must be made in full upfront before the delivery of any product or service. Accepted payment methods will be confirmed during the transaction process.
        </p>
      </section>

      <section>
        <h2>3. No Refund Policy</h2>
        <p>
          <strong>All sales are final.</strong> No refunds will be issued once payment is received, regardless of circumstances. Clients are encouraged to ask questions and request details about products or services before making a purchase.
        </p>
      </section>

      <section>
        <h2>4. "As-Is" and Error Disclaimer</h2>
        <p>
          All bots, tools, website codes, APIs, and other delivered codes are provided <strong>as-is</strong>. While the Provider strives to deliver high-quality products, it is acknowledged that:
        </p>
        <ul>
          <li>The tools, codes, and services may not be completely error-free.</li>
          <li>Errors or bugs may arise depending on usage, integration, or updates by third-party platforms.</li>
          <li>The Provider is not liable for any malfunctions or technical issues that occur post-delivery.</li>
        </ul>
        <p>Clients are advised to thoroughly test and review the purchased products before implementing them.</p>
      </section>

      <section>
        <h2>5. Ownership and Usage Rights</h2>
        <p>
          Upon full payment, the Client is granted a non-transferable license to use the purchased product or service for their personal or business purposes. Reselling, redistributing, or sublicensing any product or service from POTATO.SERVICE without prior written consent is strictly prohibited.
        </p>
      </section>

      <section>
        <h2>6. Liability Disclaimer</h2>
        <p>
          POTATO.SERVICE is not responsible for:
        </p>
        <ul>
          <li>Any damages, losses, or disruptions arising from the use of the products or services.</li>
          <li>Compatibility issues with third-party systems or platforms.</li>
        </ul>
        <p>The Client assumes all risks associated with integrating or using the purchased products and services.</p>
      </section>

      <section>
        <h2>7. Customization and Support</h2>
        <p>
          Any customization requests must be discussed and agreed upon before purchase. Additional charges may apply. Post-purchase support is available at the Provider's discretion and may involve additional fees for advanced issues or changes.
        </p>
      </section>

      <section>
        <h2>8. Termination of Service</h2>
        <p>
          The Provider reserves the right to terminate any ongoing service or deny future services to Clients who violate these terms.
        </p>
      </section>

      <section>
        <h2>9. Changes to Terms</h2>
        <p>
          POTATO.SERVICE reserves the right to update or modify these Terms of Service at any time without prior notice. Clients are encouraged to review the Terms regularly to stay informed of any changes.
        </p>
      </section>

      <section>
        <h2>10. Governing Law</h2>
        <p>
          These Terms of Service are governed by and construed in accordance with the laws of [your country or state].
        </p>
      </section>

      <p>
        By completing a purchase with <strong>POTATO.SERVICE</strong>, you acknowledge that you have read, understood, and agree to these Terms of Service.
      </p>
    </div>
  );
};

export default TOS;

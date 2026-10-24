import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function CookiesPolicy() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Cookies Policy</h1>
            <p className="text-muted-foreground mb-8">
              Last updated: February 2025
            </p>

            <div className="space-y-8 text-foreground [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-muted-foreground [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:text-muted-foreground [&_li]:leading-relaxed [&_a]:text-primary [&_a]:underline">
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p>
                Cookies can be "session" cookies (which are deleted when you close your browser) or "persistent" cookies (which remain on your device for a set period or until you delete them).
              </p>

              <h2>2. Data Controller</h2>
              <p>
                <strong>Company Name:</strong> RESTRICTED OUTREACH<br />
                <strong>Address:</strong> Benet Cortada 8, Escalera F, 2º 1ª, 08174 Sant Cugat del Vallés, Barcelona, Spain<br />
                <strong>Email:</strong> raul.pelaez@palantircode.com
              </p>

              <h2>3. Types of Cookies We Use</h2>
              
              <h3>3.1 Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for the website to function properly. They enable basic functions like page navigation, security, and access to secure areas. The website cannot function properly without these cookies.
              </p>
              <table className="w-full border-collapse border border-border my-4">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-2 text-left">Cookie</th>
                    <th className="border border-border p-2 text-left">Purpose</th>
                    <th className="border border-border p-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 text-muted-foreground">cookie_consent</td>
                    <td className="border border-border p-2 text-muted-foreground">Stores your cookie consent preferences</td>
                    <td className="border border-border p-2 text-muted-foreground">1 year</td>
                  </tr>
                </tbody>
              </table>

              <h3>3.2 Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
              </p>
              <table className="w-full border-collapse border border-border my-4">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-2 text-left">Cookie</th>
                    <th className="border border-border p-2 text-left">Provider</th>
                    <th className="border border-border p-2 text-left">Purpose</th>
                    <th className="border border-border p-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 text-muted-foreground">_ga</td>
                    <td className="border border-border p-2 text-muted-foreground">Google Analytics</td>
                    <td className="border border-border p-2 text-muted-foreground">Distinguishes unique users</td>
                    <td className="border border-border p-2 text-muted-foreground">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 text-muted-foreground">_gid</td>
                    <td className="border border-border p-2 text-muted-foreground">Google Analytics</td>
                    <td className="border border-border p-2 text-muted-foreground">Distinguishes unique users</td>
                    <td className="border border-border p-2 text-muted-foreground">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 text-muted-foreground">_gat</td>
                    <td className="border border-border p-2 text-muted-foreground">Google Analytics</td>
                    <td className="border border-border p-2 text-muted-foreground">Limits data collection</td>
                    <td className="border border-border p-2 text-muted-foreground">1 minute</td>
                  </tr>
                </tbody>
              </table>

              <h3>3.3 Marketing Cookies</h3>
              <p>
                These cookies are used to track visitors across websites to display relevant advertisements. They are usually placed by advertising networks with the website operator's permission.
              </p>
              <p>
                We currently do not use marketing cookies on this website.
              </p>

              <h2>4. Your Cookie Choices</h2>
              <p>
                When you first visit our website, you will be shown a cookie banner asking for your consent to use non-essential cookies. You can:
              </p>
              <ul>
                <li><strong>Accept all cookies:</strong> Allow all cookies including analytics</li>
                <li><strong>Reject non-essential cookies:</strong> Only allow strictly necessary cookies</li>
                <li><strong>Customize preferences:</strong> Choose which types of cookies to allow</li>
              </ul>
              <p>
                You can change your cookie preferences at any time by clicking on the cookie settings in our website footer.
              </p>

              <h2>5. How to Manage Cookies in Your Browser</h2>
              <p>
                You can also control cookies through your browser settings. Here's how to do it in popular browsers:
              </p>
              
              <h3>Google Chrome</h3>
              <ol>
                <li>Click the menu icon (three dots) in the top-right corner</li>
                <li>Select "Settings"</li>
                <li>Click "Privacy and security"</li>
                <li>Click "Cookies and other site data"</li>
                <li>Choose your preferred cookie settings</li>
              </ol>

              <h3>Mozilla Firefox</h3>
              <ol>
                <li>Click the menu icon (three lines) in the top-right corner</li>
                <li>Select "Settings"</li>
                <li>Click "Privacy & Security"</li>
                <li>Under "Cookies and Site Data", choose your preferences</li>
              </ol>

              <h3>Safari</h3>
              <ol>
                <li>Click "Safari" in the menu bar</li>
                <li>Select "Preferences"</li>
                <li>Click the "Privacy" tab</li>
                <li>Choose your cookie settings under "Cookies and website data"</li>
              </ol>

              <h3>Microsoft Edge</h3>
              <ol>
                <li>Click the menu icon (three dots) in the top-right corner</li>
                <li>Select "Settings"</li>
                <li>Click "Cookies and site permissions"</li>
                <li>Click "Manage and delete cookies and site data"</li>
                <li>Choose your preferred settings</li>
              </ol>

              <p>
                Please note that disabling cookies may affect the functionality of our website and other websites you visit.
              </p>

              <h2>6. Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and recommend reviewing the privacy policies of these third parties:
              </p>
              <ul>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics Privacy Policy</a></li>
              </ul>

              <h2>7. Legal Compliance</h2>
              <p>
                This Cookies Policy complies with:
              </p>
              <ul>
                <li>EU General Data Protection Regulation (GDPR)</li>
                <li>EU ePrivacy Directive (Cookie Law)</li>
                <li>Spanish Law 34/2002 on Information Society Services (LSSI-CE)</li>
                <li>Spanish Data Protection Agency (AEPD) guidelines</li>
              </ul>

              <h2>8. Updates to This Policy</h2>
              <p>
                We may update this Cookies Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p>
                <strong>RESTRICTED OUTREACH</strong><br />
                Email: <a href="mailto:raul.pelaez@palantircode.com">raul.pelaez@palantircode.com</a><br />
                Address: Benet Cortada 8, Escalera F, 2º 1ª, 08174 Sant Cugat del Vallés, Barcelona, Spain
              </p>
              <p>
                You may also contact the Spanish Data Protection Agency (AEPD) at{" "}
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>{" "}
                if you have concerns about our cookie practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

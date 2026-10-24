import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">
              Last updated: February 2025
            </p>

            <div className="space-y-8 text-foreground [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-muted-foreground [&_li]:leading-relaxed [&_a]:text-primary [&_a]:underline">
              <h2>1. Legal Information</h2>
              <p>
                In compliance with Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), we provide the following information:
              </p>
              <p>
                <strong>Company Name:</strong> RESTRICTED OUTREACH<br />
                <strong>Address:</strong> Benet Cortada 8, Escalera F, 2º 1ª, 08174 Sant Cugat del Vallés, Barcelona, Spain<br />
                <strong>Email:</strong> raul.pelaez@palantircode.com
              </p>

              <h2>2. Object and Scope</h2>
              <p>
                These Terms of Service govern access to and use of the website restrictedoutreach.com (hereinafter, the "Website") operated by RESTRICTED OUTREACH (hereinafter, "RESTRICTED OUTREACH", "we", "us", or "our").
              </p>
              <p>
                By accessing or using our Website and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website or services.
              </p>

              <h2>3. Services</h2>
              <p>
                RESTRICTED OUTREACH provides professional services including but not limited to:
              </p>
              <ul>
                <li>AI strategy and adoption services</li>
                <li>Applications and agentic solutions</li>
                <li>Custom software development</li>
                <li>Managed services and support</li>
              </ul>
              <p>
                Specific terms for individual services or products may be provided separately and shall be considered part of these Terms.
              </p>

              <h2>4. User Obligations</h2>
              <p>By using our Website and services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information when required</li>
                <li>Use the Website and services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of the Website</li>
                <li>Not transmit any viruses, malware, or harmful code</li>
                <li>Not infringe upon intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                All content on this Website, including but not limited to text, graphics, logos, icons, images, audio clips, software, and compilations, is the property of RESTRICTED OUTREACH or its content suppliers and is protected by Spanish and international intellectual property laws.
              </p>
              <p>
                The reproduction, distribution, public communication, transformation, or any other activity involving the content of this Website, as well as its design and the selection and form of presentation of the materials included therein, is prohibited without the prior written consent of RESTRICTED OUTREACH.
              </p>
              <p>
                Third-party product names and trademarks belong to their respective owners.
              </p>

              <h2>6. Third-Party Links</h2>
              <p>
                Our Website may contain links to third-party websites. These links are provided for convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites.
              </p>
              <p>
                Your use of third-party websites is at your own risk and subject to the terms and conditions of those sites.
              </p>

              <h2>7. Disclaimer of Warranties</h2>
              <p>
                The Website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul>
                <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
                <li>Warranties that the Website will be uninterrupted, timely, secure, or error-free</li>
              </ul>
              <p>
                We do not warrant that defects will be corrected or that the Website is free of viruses or other harmful components.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, RESTRICTED OUTREACH shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul>
                <li>Loss of profits, revenue, data, or use</li>
                <li>Business interruption</li>
                <li>Cost of substitute services</li>
                <li>Any other commercial damages or losses</li>
              </ul>
              <p>
                Our total liability for any claim arising from or related to these Terms or our services shall not exceed the amount paid by you to RESTRICTED OUTREACH for the services giving rise to such claim during the twelve (12) months preceding the claim.
              </p>

              <h2>9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless RESTRICTED OUTREACH, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul>
                <li>Your use of the Website or services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit through our services</li>
              </ul>

              <h2>10. Service Modifications</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our Website or services at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance.
              </p>

              <h2>11. Termination</h2>
              <p>
                We may terminate or suspend your access to our Website and services immediately, without prior notice or liability, for any reason, including breach of these Terms.
              </p>
              <p>
                Upon termination, your right to use our services will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive.
              </p>

              <h2>12. Governing Law and Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Spain, without regard to its conflict of law provisions.
              </p>
              <p>
                <strong>Any disputes arising from or relating to these Terms or our services shall be submitted to the exclusive jurisdiction of the Courts and Tribunals of Barcelona, Spain.</strong>
              </p>
              <p>
                For users in the European Union, this choice of jurisdiction does not affect your rights as a consumer under mandatory provisions of consumer protection laws in your country of residence.
              </p>

              <h2>13. International Users</h2>
              <p>
                Our services are controlled and operated from Spain. If you access our services from outside Spain, you do so at your own initiative and are responsible for compliance with local laws.
              </p>

              <h2>14. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>

              <h2>15. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and Cookies Policy, constitute the entire agreement between you and RESTRICTED OUTREACH regarding the use of our Website and services.
              </p>

              <h2>16. Waiver</h2>
              <p>
                Our failure to enforce any right or provision of these Terms shall not be considered a waiver of such right or provision.
              </p>

              <h2>17. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website after changes are posted constitutes your acceptance of the modified Terms.
              </p>

              <h2>18. Contact Information</h2>
              <p>
                For any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                <strong>RESTRICTED OUTREACH</strong><br />
                Email: <a href="mailto:raul.pelaez@palantircode.com">raul.pelaez@palantircode.com</a><br />
                Address: Benet Cortada 8, Escalera F, 2º 1ª, 08174 Sant Cugat del Vallés, Barcelona, Spain
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

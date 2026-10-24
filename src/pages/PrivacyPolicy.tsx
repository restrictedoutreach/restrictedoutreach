import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">
              Last updated: February 2025
            </p>

            {/* Basic Information Table */}
            <div className="bg-muted/30 rounded-xl p-6 mb-8 border border-border">
              <h2 className="text-xl font-semibold mb-4">Basic Information on Data Protection</h2>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Data Controller</span>
                  <span className="md:col-span-2">RESTRICTED OUTREACH</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Purpose</span>
                  <span className="md:col-span-2">Managing your inquiries and providing requested services</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Legal Basis</span>
                  <span className="md:col-span-2">Consent of the data subject and legitimate interest</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Recipients</span>
                  <span className="md:col-span-2">No data will be transferred to third parties except under legal obligation</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Rights</span>
                  <span className="md:col-span-2">Access, rectification, erasure, restriction, portability, and objection</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <span className="font-medium">Additional Information</span>
                  <span className="md:col-span-2">See detailed information below</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-foreground [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-muted-foreground [&_li]:leading-relaxed [&_a]:text-primary [&_a]:underline">
              <h2>1. Data Controller</h2>
              <p>
                <strong>Identity:</strong> RESTRICTED OUTREACH<br />
                <strong>Address:</strong> Benet Cortada 8, Escalera F, 2º 1ª, 08174 Sant Cugat del Vallés, Barcelona, Spain<br />
                <strong>Email:</strong> raul.pelaez@palantircode.com
              </p>

              <h2>2. Purpose of Data Processing</h2>
              <p>At RESTRICTED OUTREACH, we process the information you provide to:</p>
              <ul>
                <li>Respond to your inquiries and requests</li>
                <li>Provide the services you have contracted</li>
                <li>Send commercial communications about our products and services (only with your express consent)</li>
                <li>Manage our business relationship</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>3. Legal Basis for Processing</h2>
              <p>The legal basis for processing your data is:</p>
              <ul>
                <li><strong>Consent:</strong> When you contact us through our forms or email</li>
                <li><strong>Contractual necessity:</strong> When processing is necessary for the performance of a contract</li>
                <li><strong>Legitimate interest:</strong> For fraud prevention and IT security</li>
                <li><strong>Legal obligation:</strong> When required by applicable law</li>
              </ul>

              <h2>4. Data Retention Period</h2>
              <p>
                Personal data will be retained for as long as necessary to fulfill the purpose for which it was collected and to determine any liabilities arising from such purpose and data processing. Applicable statutes of limitations will apply.
              </p>
              <p>
                For inquiries and contact requests, data will be retained for a maximum of one (1) year from your last contact with us.
              </p>

              <h2>5. Data Recipients</h2>
              <p>
                Your data will not be transferred to third parties except where there is a legal obligation or where necessary for the provision of the service (e.g., cloud service providers, payment processors).
              </p>
              <p>
                We may use third-party service providers who act as data processors, with whom we have signed appropriate data processing agreements that guarantee compliance with data protection regulations.
              </p>

              <h2>6. International Data Transfers</h2>
              <p>
                Some of our service providers may be located outside the European Economic Area (EEA). In such cases, we ensure that appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, or that the recipient country has been deemed to provide an adequate level of data protection.
              </p>

              <h2>7. Your Rights</h2>
              <p>Under applicable data protection laws, you have the following rights:</p>
              <ul>
                <li><strong>Right of Access:</strong> To know whether we are processing your data and obtain a copy</li>
                <li><strong>Right to Rectification:</strong> To correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> To request deletion of your data when no longer necessary</li>
                <li><strong>Right to Restriction:</strong> To limit data processing under certain circumstances</li>
                <li><strong>Right to Data Portability:</strong> To receive your data in a structured, machine-readable format</li>
                <li><strong>Right to Object:</strong> To object to processing based on legitimate interest</li>
                <li><strong>Right to Withdraw Consent:</strong> To withdraw consent at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us at: <a href="mailto:raul.pelaez@palantircode.com">raul.pelaez@palantircode.com</a>
              </p>
              <p>
                You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) at <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a> if you believe your rights have been violated.
              </p>

              <h2>8. Security Measures</h2>
              <p>
                We have implemented appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, regular security assessments, and staff training.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you become aware that a child has provided us with personal data, please contact us immediately.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2>11. Contact Information</h2>
              <p>
                For any questions about this Privacy Policy or our data practices, please contact us at:
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

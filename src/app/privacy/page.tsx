import RouteHeader from "@/components/ui/RouteHeader";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default function Privacy() {
  return (
    <div>
      <RouteHeader route="privacy" heading="Privacy Policy" />
      <section className="bg-background dark:bg-backgroundDark py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-secondaryBackground dark:bg-dropMenuDark rounded-lg p-8 md:p-12">
            <Paragraph className="!text-sm !text-gray-500 dark:!text-gray-400 !mb-8 !mx-0">
              Last updated: January 1, 2025
            </Paragraph>

            <div className="space-y-8">
              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">1. Information We Collect</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">2. How We Use Your Information</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  We use the information we collect to:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Communicate with you about products, services, and events</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">3. Information Sharing</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist us in operating our website</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">4. Data Security</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">5. Cookies and Tracking</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, but disabling cookies may affect your experience on our website.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">6. Your Rights</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">7. Third-Party Services</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party services you visit.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">8. Children's Privacy</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">9. Changes to This Policy</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">10. Contact Us</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </Paragraph>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>Email: privacy@startup.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Main Street, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
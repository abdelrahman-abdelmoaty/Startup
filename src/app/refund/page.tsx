import RouteHeader from "@/components/ui/RouteHeader";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default function Refund() {
  return (
    <div>
      <RouteHeader route="refund" heading="Refund Policy" />
      <section className="bg-background dark:bg-backgroundDark py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-secondaryBackground dark:bg-dropMenuDark rounded-lg p-8 md:p-12">
            <Paragraph className="!text-sm !text-gray-500 dark:!text-gray-400 !mb-8 !mx-0">
              Last updated: January 1, 2025
            </Paragraph>

            <div className="space-y-8">
              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">1. Refund Eligibility</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  We offer refunds for our services under the following conditions:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>Request is made within 30 days of purchase</li>
                  <li>Service has not been fully utilized</li>
                  <li>Technical issues that cannot be resolved</li>
                  <li>Duplicate charges or billing errors</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">2. Non-Refundable Items</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  The following items are not eligible for refunds:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>Services that have been fully delivered</li>
                  <li>Custom or personalized services</li>
                  <li>Digital products that have been downloaded</li>
                  <li>Services purchased more than 30 days ago</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">3. Refund Process</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  To request a refund, please follow these steps:
                </Paragraph>
                <ol className="list-decimal ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>Contact our support team at support@startup.com</li>
                  <li>Provide your order number and reason for refund</li>
                  <li>Wait for our team to review your request</li>
                  <li>Receive confirmation and refund processing details</li>
                </ol>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">4. Processing Time</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  Refunds are typically processed within 5-10 business days after approval. The time it takes for the refund to appear in your account depends on your payment method:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>Credit/Debit Cards: 3-5 business days</li>
                  <li>PayPal: 1-2 business days</li>
                  <li>Bank Transfer: 5-7 business days</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">5. Partial Refunds</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  In some cases, we may offer partial refunds for:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>Partially used services</li>
                  <li>Services with minor issues that don't warrant a full refund</li>
                  <li>Subscription services (prorated refunds)</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">6. Subscription Cancellations</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  For subscription services:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>You can cancel your subscription at any time</li>
                  <li>Cancellation takes effect at the end of the current billing cycle</li>
                  <li>No refund for the current billing period unless eligible under our refund policy</li>
                  <li>You retain access to services until the end of the paid period</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">7. Disputes and Chargebacks</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  Before initiating a chargeback with your bank or credit card company, please contact us directly. We're committed to resolving issues quickly and fairly. Chargebacks may result in account suspension until the dispute is resolved.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">8. Contact Information</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  For refund requests or questions about this policy, please contact us:
                </Paragraph>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>Email: support@startup.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Business Hours: Monday-Friday, 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">9. Changes to This Policy</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  We reserve the right to modify this refund policy at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the new policy.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
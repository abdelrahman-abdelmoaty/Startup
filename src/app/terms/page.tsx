import RouteHeader from "@/components/ui/RouteHeader";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default function Terms() {
  return (
    <div>
      <RouteHeader route="terms" heading="Terms and Conditions" />
      <section className="bg-background dark:bg-backgroundDark py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-secondaryBackground dark:bg-dropMenuDark rounded-lg p-8 md:p-12">
            <Paragraph className="!text-sm !text-gray-500 dark:!text-gray-400 !mb-8 !mx-0">
              Last updated: January 1, 2025
            </Paragraph>

            <div className="space-y-8">
              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">1. Agreement to Terms</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">2. Use License</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">3. Disclaimer</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">4. Limitations</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">5. Privacy Policy</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">6. User Accounts</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">7. Prohibited Uses</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0 !mb-4">
                  You may not use our service:
                </Paragraph>
                <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                </ul>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">8. Termination</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">9. Changes to Terms</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  We reserve the right to modify these terms at any time. We will always post the most current version on our website. By continuing to use the service after changes become effective, you agree to be bound by the revised terms.
                </Paragraph>
              </div>

              <div className="bg-background dark:bg-backgroundDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">10. Contact Information</Heading>
                <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !leading-relaxed !mx-0">
                  If you have any questions about these Terms and Conditions, please contact us at support@startup.com.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
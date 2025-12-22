import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white text-gray-900 py-12 px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
                >
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
                <p className="text-gray-500 mb-2">Effective as of November 2025</p>
                <p className="text-gray-500 mb-8">Last updated: November 1, 2025</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">Your Privacy Matters</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At Clavr, we take your privacy seriously. We built our autonomous intelligent productivity platform with privacy and security at the core. This policy explains how we handle your data and what measures we take to protect it.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Data We Access</h2>
                    <p className="text-gray-700 mb-4">
                        Clavr requires access to certain data to provide our services. All access is granted only with your explicit permission:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Your email messages (only those you explicitly grant access to)</li>
                        <li>Your sent emails (to learn your writing style and patterns)</li>
                        <li>Your Google Calendar events (if you enable calendar integration)</li>
                        <li>Your Google Tasks (if you enable task integration)</li>
                        <li>Your Slack messages and channels (if you connect your Slack workspace)</li>
                        <li>Your Notion pages and databases (if you enable Notion integration)</li>
                        <li>Basic account information (name and email address)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">How We Handle Your Emails</h2>
                    <p className="text-gray-700 mb-4">
                        <strong>We don&apos;t store your emails.</strong> This is a key principle of how Clavr works:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Emails are fetched from your email provider in real-time as you use the app</li>
                        <li>We process them to understand context and generate responses</li>
                        <li>Once processed, we don&apos;t keep copies of your email content</li>
                        <li>We only store minimal metadata needed for the service to function</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Third-Party Integrations</h2>
                    <p className="text-gray-700 mb-6">
                        Clavr integrates with various third-party services to provide a seamless workflow experience. Here&apos;s how we handle data from each integration:
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-4">
                        <h3 className="text-xl font-semibold mb-3">Google Calendar</h3>
                        <p className="text-gray-700 mb-3">When you enable Google Calendar integration:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>We access your calendar events to detect conflicts and suggest optimal meeting times</li>
                            <li>We can create, update, and manage calendar events based on your requests</li>
                            <li>Calendar data is accessed in real-time and not stored permanently</li>
                            <li>We only access calendars you explicitly grant permission to</li>
                            <li>You can revoke access at any time through your Google Account settings</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-4">
                        <h3 className="text-xl font-semibold mb-3">Slack</h3>
                        <p className="text-gray-700 mb-3">When you connect your Slack workspace:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>We access messages and channels you explicitly grant permission to</li>
                            <li>We process messages to understand context and extract action items</li>
                            <li>We can send messages and create tasks based on your instructions</li>
                            <li>Message content is processed in real-time and not stored permanently</li>
                            <li>We comply with Slack&apos;s API Terms of Service and security requirements</li>
                            <li>You can disconnect Slack integration at any time through your Clavr settings</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-4">
                        <h3 className="text-xl font-semibold mb-3">Notion</h3>
                        <p className="text-gray-700 mb-3">When you connect your Notion workspace:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>We access pages and databases you explicitly grant permission to</li>
                            <li>We process content to understand context and extract actionable information</li>
                            <li>We can create, update, and manage pages and databases based on your instructions</li>
                            <li>Content is processed in real-time and not stored permanently</li>
                            <li>We comply with Notion&apos;s API Terms of Service and security requirements</li>
                            <li>You can disconnect Notion integration at any time through your Clavr settings</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                        <p className="text-gray-700">
                            <strong>Important:</strong> For all integrations, we follow the same privacy principles as with email: we access data only with your explicit permission, process it in real-time when possible, and minimize data storage. You maintain full control and can revoke access to any integration at any time.
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Google Security Verification</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Clavr has passed Google&apos;s extensive security checks and reviews. Google requires all apps that access Gmail data to undergo rigorous security audits. We maintain compliance with Google&apos;s API Services User Data Policy, including the Limited Use requirements.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">What We Store</h2>
                    <p className="text-gray-700 mb-4">While we don&apos;t store your actual emails, we do store:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Writing Style Profile:</strong> Patterns from your writing to match your tone (not the full email content)</li>
                        <li><strong>User Preferences:</strong> Your settings and configurations</li>
                        <li><strong>Usage Data:</strong> How you interact with Clavr (to improve the service)</li>
                        <li><strong>Tasks and Reminders:</strong> Items you create through Clavr</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Data Encryption</h2>
                    <p className="text-gray-700 leading-relaxed">
                        All data transmitted between your device and Clavr is encrypted using industry-standard TLS/SSL protocols. Any data we store is encrypted at rest using AES-256 encryption.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">We Never Share Your Data</h2>
                    <p className="text-gray-700 mb-4">
                        We will never sell, rent, or share your personal data with third parties for their marketing purposes. <strong>Period.</strong>
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        We only share data when legally required (such as responding to valid legal requests) or when necessary to provide our service (such as using secure cloud infrastructure providers who are bound by strict confidentiality agreements).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Your Control Over Your Data</h2>
                    <p className="text-gray-700 mb-4">You maintain full control over your data:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li><strong>Revoke Access:</strong> You can revoke Clavr&apos;s access to your email at any time through your Google Account settings</li>
                        <li><strong>Delete Your Data:</strong> Request deletion of all your data at any time</li>
                        <li><strong>Export Your Data:</strong> Download your writing style profile and preferences</li>
                        <li><strong>Review Permissions:</strong> See exactly what data Clavr can access</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We retain your writing style profile and preferences for as long as you maintain an active account. If you cancel your subscription, your data is kept for 30 days (in case you want to return) and then permanently deleted. You can request immediate deletion at any time.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We use minimal cookies necessary for the service to function (authentication, preferences). We don&apos;t use tracking cookies or third-party advertising cookies.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Clavr is not intended for users under 13 years of age. We don&apos;t knowingly collect data from children under 13.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We may update this privacy policy from time to time. We&apos;ll notify you of any material changes by email or through the Clavr interface. Your continued use of Clavr after changes become effective constitutes acceptance of the updated policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        If you have questions about this privacy policy or how we handle your data, please contact us:
                    </p>
                    <ul className="text-gray-700 space-y-2 ml-4">
                        <li><strong>Email:</strong> <a href="mailto:founders@clavr.io" className="text-blue-600 hover:underline">founders@clavr.io</a></li>
                        <li><strong>Address:</strong> Redmond, WA, USA</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>The short version:</strong> We access your emails only with your permission, we don&apos;t store them, we&apos;ve passed Google&apos;s security checks, we encrypt everything, we never share your data with third parties, and you can delete your data anytime. <strong>Your privacy is our priority.</strong>
                    </p>
                </section>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <Link
                        href="/"
                        className="text-blue-600 hover:underline"
                    >
                        ← Back to Clavr
                    </Link>
                </div>
            </div>
        </main>
    );
}

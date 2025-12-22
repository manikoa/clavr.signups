"use client";

import Link from "next/link";
import { ArrowLeft, Monitor, UserCheck, Copyright, Link2, MessageSquare, AlertCircle, ShieldCheck, RefreshCw, Mail } from "lucide-react";

export default function TermsOfUse() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 pb-16 px-4 md:px-8">
            {/* Sticky Back Button */}
            <div className="fixed top-0 left-0 right-0 z-50 py-5 px-4 md:px-8 bg-gradient-to-b from-gray-50 via-gray-50/95 to-gray-50/0">
                <div className="max-w-2xl mx-auto">
                    <Link
                        href="/"
                        className="clay-back-btn inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm px-4 py-2 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back
                    </Link>
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                {/* Header Card */}
                <div className="clay-card p-8 mb-8">
                    <h1 className="text-4xl font-bold mb-2" style={{ color: '#000000' }}>Terms of Use</h1>
                    <p className="text-gray-400 text-base">Last updated: November 1, 2025</p>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <Section icon={<Monitor className="w-5 h-5" />} title="Website Use">
                        <p>
                            This website and the Clavr platform are provided for your personal and non-commercial use. By accessing this site, you agree to these Terms of Use. If you do not agree, please do not use this website.
                        </p>
                    </Section>

                    <Section icon={<UserCheck className="w-5 h-5" />} title="Eligibility">
                        <p>
                            You must be at least 13 years old to use this website. By using Clavr, you represent that you meet this age requirement and have the legal capacity to enter into these terms.
                        </p>
                    </Section>

                    <Section icon={<Copyright className="w-5 h-5" />} title="Intellectual Property">
                        <p className="mb-3">All content on this website is owned by Clavr or its licensors:</p>
                        <ul className="space-y-2">
                            <li>Logos, trademarks, and brand elements</li>
                            <li>Text, graphics, and visual design</li>
                            <li>Software and underlying technology</li>
                            <li>Documentation and marketing materials</li>
                        </ul>
                        <p className="mt-3">
                            You may not copy, modify, distribute, or create derivative works without our written permission.
                        </p>
                    </Section>

                    <Section icon={<Link2 className="w-5 h-5" />} title="External Links">
                        <p>
                            This website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of these external sites. Accessing them is at your own risk.
                        </p>
                    </Section>

                    <Section icon={<MessageSquare className="w-5 h-5" />} title="User Submissions">
                        <p>
                            Any feedback, suggestions, or ideas you submit to us become our property. We may use them without compensation or attribution. Do not submit confidential information through public channels.
                        </p>
                    </Section>

                    <Section icon={<AlertCircle className="w-5 h-5" />} title="Prohibited Conduct">
                        <p className="mb-3">When using this website, you agree not to:</p>
                        <ul className="space-y-2">
                            <li>Attempt to access restricted areas or systems</li>
                            <li>Use automated tools to scrape or collect data</li>
                            <li>Interfere with the website&apos;s functionality</li>
                            <li>Post harmful, offensive, or illegal content</li>
                            <li>Impersonate others or misrepresent your identity</li>
                        </ul>
                    </Section>

                    <Section icon={<ShieldCheck className="w-5 h-5" />} title="Disclaimer">
                        <p>
                            This website is provided &quot;as is&quot; without warranties. We do not guarantee accuracy, completeness, or availability of the content. Use the information at your own discretion.
                        </p>
                    </Section>

                    <Section icon={<RefreshCw className="w-5 h-5" />} title="Changes to Terms">
                        <p>
                            We may update these Terms of Use at any time. Continued use of the website after changes constitutes acceptance of the updated terms. Check this page periodically for updates.
                        </p>
                    </Section>

                    <Section icon={<Mail className="w-5 h-5" />} title="Contact">
                        <p>
                            Questions about these Terms of Use? Contact us at: <a href="mailto:founders@clavr.me" className="font-medium hover:underline">founders@clavr.me</a>
                            <br />Redmond, WA, USA
                        </p>
                    </Section>
                </div>

                {/* Summary Card */}
                <div className="clay-card-highlight p-6 mt-8">
                    <p className="text-gray-700 text-base leading-relaxed">
                        <strong>Summary:</strong> Use this website responsibly, respect our intellectual property, don&apos;t misuse the site, and check back for updates to these terms.
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-6 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Clavr
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .clay-card {
                    background: linear-gradient(145deg, #ffffff, #f0f0f0);
                    border-radius: 24px;
                    box-shadow: 
                        8px 8px 20px rgba(0, 0, 0, 0.08),
                        -8px -8px 20px rgba(255, 255, 255, 0.9),
                        inset 1px 1px 2px rgba(255, 255, 255, 0.8),
                        inset -1px -1px 2px rgba(0, 0, 0, 0.03);
                }
                
                .clay-card-highlight {
                    background: linear-gradient(145deg, #fafafa, #f5f5f5);
                    border-radius: 20px;
                    box-shadow: 
                        6px 6px 16px rgba(0, 0, 0, 0.06),
                        -6px -6px 16px rgba(255, 255, 255, 0.9),
                        inset 1px 1px 2px rgba(255, 255, 255, 0.9),
                        inset -1px -1px 2px rgba(0, 0, 0, 0.02);
                }
                
                .clay-section {
                    background: linear-gradient(145deg, #ffffff, #f5f5f5);
                    border-radius: 20px;
                    box-shadow: 
                        5px 5px 15px rgba(0, 0, 0, 0.05),
                        -5px -5px 15px rgba(255, 255, 255, 0.95),
                        inset 1px 1px 1px rgba(255, 255, 255, 0.8);
                    transition: all 0.3s ease;
                }
                
                .clay-section:hover {
                    box-shadow: 
                        7px 7px 18px rgba(0, 0, 0, 0.07),
                        -7px -7px 18px rgba(255, 255, 255, 1),
                        inset 1px 1px 1px rgba(255, 255, 255, 0.9);
                    transform: translateY(-2px);
                }
                
                .clay-icon {
                    background: linear-gradient(145deg, #f8f8f8, #e8e8e8);
                    border-radius: 12px;
                    box-shadow: 
                        3px 3px 8px rgba(0, 0, 0, 0.08),
                        -3px -3px 8px rgba(255, 255, 255, 0.9),
                        inset 1px 1px 2px rgba(255, 255, 255, 0.7);
                }
                
                .clay-back-btn {
                    background: linear-gradient(145deg, #ffffff, #f0f0f0);
                    border-radius: 12px;
                    box-shadow: 
                        4px 4px 10px rgba(0, 0, 0, 0.06),
                        -4px -4px 10px rgba(255, 255, 255, 0.9),
                        inset 1px 1px 2px rgba(255, 255, 255, 0.8);
                    transition: all 0.2s ease;
                }
                
                .clay-back-btn:hover {
                    box-shadow: 
                        5px 5px 12px rgba(0, 0, 0, 0.08),
                        -5px -5px 12px rgba(255, 255, 255, 1),
                        inset 1px 1px 2px rgba(255, 255, 255, 0.9);
                }
            `}</style>
        </main>
    );
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
    return (
        <div className="clay-section p-5">
            <div className="flex items-start gap-4">
                <div className="clay-icon p-2.5 text-gray-600 shrink-0">
                    {icon}
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-black mb-2">{title}</h2>
                    <div className="text-gray-700 text-base leading-relaxed [&_ul]:list-disc [&_ul]:ml-4 [&_li]:pl-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

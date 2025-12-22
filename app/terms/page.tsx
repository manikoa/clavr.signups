"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Scale, AlertTriangle, Ban, CreditCard, Shield, RefreshCw, Gavel, Globe, Bell } from "lucide-react";

export default function TermsOfService() {
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
                    <h1 className="text-4xl font-bold mb-2" style={{ color: '#000000' }}>Terms of Service</h1>
                    <p className="text-gray-400 text-base">Last updated: November 1, 2025</p>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <Section icon={<FileText className="w-5 h-5" />} title="Agreement to Terms">
                        <p>
                            By accessing or using Clavr, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
                        </p>
                    </Section>

                    <Section icon={<Scale className="w-5 h-5" />} title="Description of Service">
                        <p>
                            Clavr is an autonomous intelligent productivity platform that helps you manage emails, calendar, tasks, and integrations with third-party services like Slack and Notion. We provide AI-powered assistance to streamline your workflow.
                        </p>
                    </Section>

                    <Section icon={<Shield className="w-5 h-5" />} title="Account Responsibilities">
                        <p className="mb-3">You are responsible for:</p>
                        <ul className="space-y-2">
                            <li>Maintaining the confidentiality of your account credentials</li>
                            <li>All activities that occur under your account</li>
                            <li>Ensuring your use complies with applicable laws</li>
                            <li>Providing accurate account information</li>
                        </ul>
                    </Section>

                    <Section icon={<Ban className="w-5 h-5" />} title="Acceptable Use">
                        <p className="mb-3">You agree not to:</p>
                        <ul className="space-y-2">
                            <li>Use the service for any unlawful purpose</li>
                            <li>Attempt to gain unauthorized access to any systems</li>
                            <li>Interfere with or disrupt the service</li>
                            <li>Transmit malware or harmful code</li>
                            <li>Violate any third-party rights</li>
                        </ul>
                    </Section>

                    <Section icon={<Globe className="w-5 h-5" />} title="Third-Party Integrations">
                        <p>
                            Clavr integrates with third-party services (Google, Slack, Notion). Your use of these integrations is subject to their respective terms of service. We are not responsible for the availability or functionality of third-party services.
                        </p>
                    </Section>

                    <Section icon={<CreditCard className="w-5 h-5" />} title="Billing and Payments">
                        <p>
                            Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days notice.
                        </p>
                    </Section>

                    <Section icon={<RefreshCw className="w-5 h-5" />} title="Cancellation">
                        <p>
                            You may cancel your subscription at any time. Upon cancellation, you will retain access until the end of your current billing period. Your data will be retained for 30 days after cancellation, then permanently deleted.
                        </p>
                    </Section>

                    <Section icon={<AlertTriangle className="w-5 h-5" />} title="Limitation of Liability">
                        <p>
                            Clavr is provided &quot;as is&quot; without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
                        </p>
                    </Section>

                    <Section icon={<Gavel className="w-5 h-5" />} title="Governing Law">
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of the State of Washington, USA, without regard to conflict of law principles.
                        </p>
                    </Section>

                    <Section icon={<Bell className="w-5 h-5" />} title="Contact">
                        <p>
                            For questions about these terms, contact us at: <a href="mailto:founders@clavr.me" className="font-medium hover:underline">founders@clavr.me</a>
                            <br />Redmond, WA, USA
                        </p>
                    </Section>
                </div>

                {/* Summary Card */}
                <div className="clay-card-highlight p-6 mt-8">
                    <p className="text-gray-700 text-base leading-relaxed">
                        <strong>Summary:</strong> By using Clavr, you agree to use it responsibly, maintain your account security, and comply with applicable laws. We provide the service as-is and you can cancel anytime.
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

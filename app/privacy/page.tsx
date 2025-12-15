import { LegalLayout } from "@/components/layout/LegalLayout";

export default function PrivacyPolicy() {
    return (
        <LegalLayout title="Privacy Policy" date="January 1, 2025">
            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Processing and Privacy Commitment</h2>
                <p>
                    Stellar Infomatica is committed to protecting the privacy and confidentiality of all patient data processed through our prenatal screening software. Our platform is designed as an on-premise clinical decision support tool, meaning all data processing occurs exclusively within your laboratory's infrastructure. We do not transmit, store, or access any patient information on external servers or cloud-based systems.
                </p>
                <p>
                    This Privacy Policy outlines how we handle data in compliance with the General Data Protection Regulation (GDPR) and the Health Insurance Portability and Accountability Act (HIPAA). As a software provider, we recognize that your laboratory is the primary data controller, and we act solely as a processor of the software tools you utilize. All Protected Health Information (PHI) and Personally Identifiable Information (PII) remain under your direct control and are never harvested, collected, or analyzed by Stellar Infomatica.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">On-Premise Architecture</h2>
                <p>
                    Our software operates entirely within your laboratory's secure network environment. All calculations, data transformations, and clinical logic processing occur locally on your systems. This architecture ensures that sensitive prenatal screening data—including maternal age, biomarker values, ultrasound measurements, and risk calculations—never leaves your facility. We do not maintain any backdoor access, remote monitoring capabilities, or data exfiltration mechanisms that would compromise patient privacy.
                </p>
                <p>
                    Your laboratory retains full ownership and control over all patient data. Stellar Infomatica does not require internet connectivity for core functionality, and we do not collect telemetry, usage statistics, or any form of analytics that could be used to identify individual patients or laboratories. Any optional support or update services are provided through secure, encrypted channels and only with your explicit authorization.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Your Responsibilities</h2>
                <p>
                    As the data controller, your laboratory is responsible for ensuring compliance with all applicable privacy regulations, including obtaining appropriate patient consent, maintaining audit trails, and implementing access controls. We recommend that you maintain comprehensive data retention policies, secure backup procedures, and regular security assessments of your infrastructure. Stellar Infomatica provides the software tools, but the responsibility for HIPAA and GDPR compliance rests with your organization.
                </p>
                <p>
                    If you have questions about how our software handles data or require additional documentation for compliance audits, please contact our support team. We are committed to transparency and can provide technical documentation detailing our data processing architecture and security measures.
                </p>
            </section>
        </LegalLayout>
    );
}


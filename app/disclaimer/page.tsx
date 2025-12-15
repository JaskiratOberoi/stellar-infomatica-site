import { LegalLayout } from "@/components/layout/LegalLayout";

export default function MedicalDisclaimer() {
    return (
        <LegalLayout title="Medical Disclaimer" date="January 1, 2025">
            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Intended Use and Professional Requirements</h2>
                <p>
                    <strong className="text-white">WARNING: This software is intended for use by qualified pathology professionals only.</strong> Stellar Infomatica's prenatal screening software is a sophisticated clinical decision support tool that requires extensive knowledge of prenatal screening protocols, biomarker interpretation, statistical risk assessment, and cytogenetic principles. Access to and use of this software is restricted to licensed healthcare providers, certified laboratory professionals, and authorized personnel working under the direct supervision of qualified medical directors.
                </p>
                <p>
                    The software generates risk calculations and screening results that must be validated by a licensed cytogeneticist or board-certified pathologist with expertise in prenatal screening. These calculations are based on complex algorithms that incorporate maternal age, biomarker concentrations, ultrasound measurements, and other clinical parameters. The interpretation of these results requires specialized training and clinical judgment that cannot be replaced by automated calculations.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Not a Diagnostic Tool</h2>
                <p>
                    This software is designed to assist in screening and risk assessment, not to provide definitive diagnoses. Screening tests are designed to identify pregnancies at increased risk for certain conditions, but they cannot confirm or rule out the presence of chromosomal abnormalities or birth defects. All positive screening results must be followed by confirmatory diagnostic testing, such as chorionic villus sampling (CVS) or amniocentesis with karyotyping or chromosomal microarray analysis.
                </p>
                <p>
                    False positive and false negative results can occur with any screening test. The sensitivity and specificity of screening algorithms vary depending on the specific condition being screened, the gestational age at testing, and individual patient factors. Healthcare providers must communicate these limitations clearly to patients and ensure that screening results are presented in the context of comprehensive prenatal care, including genetic counseling when appropriate.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Professional Responsibility</h2>
                <p>
                    Users of this software assume full professional and legal responsibility for all clinical decisions made based on the software's outputs. Stellar Infomatica does not provide medical advice, and the software should never be used as a substitute for comprehensive clinical evaluation, patient history review, or professional medical judgment. The ordering physician and laboratory director are responsible for ensuring that all screening protocols are followed correctly, that quality control measures are maintained, and that results are reported accurately and in compliance with applicable regulations.
                </p>
                <p>
                    If you are not a qualified healthcare professional or authorized laboratory personnel, you must not access or use this software. Unauthorized use may result in serious harm to patients and may violate applicable laws and regulations. For questions about appropriate use, training requirements, or access authorization, please contact Stellar Infomatica's support team or your laboratory's medical director.
                </p>
            </section>
        </LegalLayout>
    );
}


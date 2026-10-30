import PageShell from "../components/PageShell";
import PageCss from "../components/PageCss";
import LegacyScript from "../components/LegacyScript";

export default function Certificate() {
    return (
        <>
            <PageCss href="/css/certificate.css" />
            <PageShell variant="student" active="my" footer="standard"
                crumbs={[{ label: "Dashboard", to: "/dashboard" }, { label: "My courses", to: "/my-courses" }, { label: "Certificate" }]}>
                <div className="page page--wide">
                    <header className="page-head">
                        <div className="page-head__text">
                            <h1>Your Certificate</h1>
                            <p className="page-head__sub">Download it as an image or print a copy for your records.</p>
                        </div>
                        <div className="page-head__actions certificate-actions">
                            <button id="downloadBtn" className="btn btn--primary download-btn" type="button">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line>
                                </svg>
                                <span>Download Certificate</span>
                            </button>
                            <button id="printBtn" className="btn btn--outline print-btn" type="button">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                    <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path>
                                    <rect x="6" y="14" width="12" height="8" rx="1"></rect>
                                </svg>
                                <span>Print</span>
                            </button>
                            <button id="backBtn" className="btn btn--ghost back-btn" type="button">
                                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <path d="m12 19-7-7 7-7"></path>
                                    <path d="M19 12H5"></path>
                                </svg>
                                <span>Back to My Courses</span>
                            </button>
                        </div>
                    </header>
                    <section className="certificate-section" aria-label="Certificate preview">
                        <div className="certificate-wrap">
                            <canvas id="certificateCanvas" width="1200" height="850" role="img" aria-label="Certificate of completion"></canvas>
                        </div>
                    </section>
                </div>
            </PageShell>

            <LegacyScript src="/legacy/js/certificate.js" />
        </>
    );
}

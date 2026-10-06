// Interactive Site Matter Engine for About Us, Services, and Indexing Ecosystem
document.addEventListener('DOMContentLoaded', () => {

    /* =================================================
       1. ABOUT US TABS DATA & RENDERER
    ================================================= */
    const aboutData = {
        vision: {
            title: "Our Academic Mission & Vision",
            icon: "fa-compass-drafting",
            overview: "Master Publish delivers end-to-end scholarly consultancy for researchers, academicians, and PhD candidates worldwide. We bridge the gap between initial research discovery and high-impact publication in Scopus, SCI, Web of Science, and UGC-CARE indexed journals.",
            accordion: [
                {
                    title: "Core Guarantees & Publishing Standards",
                    tags: ["Scopus Q1-Q4 Listed", "SCI & ESCI Indexing", "Web of Science", "UGC-CARE Compliance", "Double-Blind Peer Review", "Zero Plagiarism Policy"],
                    text: "We adhere strictly to international publishing ethics (COPE guidelines). Our goal is to ensure your technical manuscript achieves maximum visibility, academic rigor, and swift peer-review acceptance."
                },
                {
                    title: "Who We Serve",
                    list: [
                        "PhD Candidates & Doctoral Scholars aiming for thesis defense and journal requirements.",
                        "University Faculty & Professors seeking Scopus / SCI publication credits.",
                        "Independent Researchers & Industry R&D Scientists presenting novel empirical studies.",
                        "Postgraduate & Masters Students converting dissertations into journal articles."
                    ]
                },
                {
                    title: "Our Editorial Philosophy",
                    list: [
                        "Uncompromising technical accuracy and domain-specific vocabulary.",
                        "100% data confidentiality and intellectual property protection.",
                        "Transparent 1-on-1 guidance at every stage of the peer-review cycle."
                    ]
                }
            ]
        },
        editorial: {
            title: "Editorial Board & Domain Experts",
            icon: "fa-user-graduate",
            overview: "Our team comprises over 100+ doctorate-level editorial consultants, peer reviewers, and statistical analysts spanning 11 major academic disciplines. Every manuscript is paired with a subject-matter specialist in your specific research domain.",
            accordion: [
                {
                    title: "Subject Domain Specialists",
                    tags: ["Computer Science", "Artificial Intelligence", "Data Science", "Medical & Pharmacy", "Environmental Science", "Mathematics", "Law", "Education", "Engineering", "Agriculture", "Management"],
                    text: "Our editors are active researchers who understand domain-specific nuances, mathematical notation, pseudocode formatting, and experimental design expected by top journal editors."
                },
                {
                    title: "Technical Tools & Analytics Expertise",
                    tags: ["Turnitin Official", "iThenticate", "LaTeX / TeXStudio", "SPSS & AMOS", "MATLAB & Simulink", "Python Data Stack", "R / RStudio", "GraphPad Prism"],
                    text: "We utilize industry-standard plagiarism detection and statistical toolkits to verify technical results, chart data, and similarity scores prior to journal submission."
                }
            ]
        },
        ethics: {
            title: "Quality Control & Ethics Protocol",
            icon: "fa-shield-halved",
            overview: "Academic integrity is the cornerstone of Master Publish. We strictly operate in compliance with Committee on Publication Ethics (COPE) standards to protect author ownership and manuscript originality.",
            accordion: [
                {
                    title: "Originality & Plagiarism Reduction Guarantee",
                    list: [
                        "Comprehensive Turnitin and iThenticate similarity scanning prior to editing.",
                        "Line-by-line technical rephrasing and contextual rewriting by domain specialists.",
                        "Complete similarity report generated with verifiable certificate of originality."
                    ]
                },
                {
                    title: "Confidentiality & Copyright Ownership",
                    list: [
                        "100% Non-Disclosure Agreement (NDA) protection for all uploaded drafts and research data.",
                        "Authors retain 100% intellectual property rights and manuscript ownership.",
                        "Secure data handling with encrypted file transfers and zero data retention after publication."
                    ]
                }
            ]
        }
    };

    function renderAboutTabs() {
        const container = document.getElementById('about-details-container');
        if (!container) return;

        let html = '';
        Object.keys(aboutData).forEach((key, index) => {
            const data = aboutData[key];
            const isActive = index === 0 ? 'active' : '';

            html += `
            <div class="domain-detail-box ${isActive}" id="about-tab-${key}">
                <div class="domain-icon" style="font-size: 2rem; color: var(--color-gold); margin-bottom: 1rem;">
                    <i class="fa-solid ${data.icon}"></i>
                </div>
                <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">${data.title}</h3>
                <p class="domain-overview" style="opacity: 0.9; line-height: 1.7; font-size: 1.05rem;">${data.overview}</p>
                
                <div class="domain-accordions">
                    ${data.accordion.map((item, idx) => `
                        <div class="d-acc-item">
                            <div class="d-acc-header">${item.title} <i class="fa-solid ${idx === 0 ? 'fa-minus' : 'fa-plus'}"></i></div>
                            <div class="d-acc-content" style="${idx === 0 ? 'max-height: 500px;' : 'max-height: 0px;'}">
                                <div class="d-acc-inner">
                                    ${item.text ? `<p style="opacity: 0.9; line-height: 1.6; margin-bottom: 12px;">${item.text}</p>` : ''}
                                    ${item.tags ? `
                                        <strong>Key Standards & Coverage:</strong>
                                        <div class="tag-cloud">
                                            ${item.tags.map(t => `<span class="d-tag">${t}</span>`).join('')}
                                        </div>
                                    ` : ''}
                                    ${item.list ? `
                                        <ul class="d-list">
                                            ${item.list.map(l => `<li>${l}</li>`).join('')}
                                        </ul>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            `;
        });

        container.innerHTML = html;
        bindAccordions(container);
    }


    /* =================================================
       2. SERVICES INTERACTIVE SWITCHER DATA & RENDERER
    ================================================= */
    const servicesData = {
        prep: {
            title: "Manuscript Preparation & Formatting",
            icon: "fa-file-signature",
            overview: "Transform raw research findings into high-caliber, structured manuscripts formatted precisely to meet the author instructions of Scopus, SCI, Web of Science, and IEEE publications.",
            accordion: [
                {
                    title: "Included Deliverables & Formatting Scope",
                    tags: ["Abstract & Keywords Optimization", "IEEE / APA / Vancouver Citation Styling", "Formula & Math Equation Typesetting", "High-Resolution Figure & Chart Re-drawing", "LaTeX & TeXStudio Template Alignment", "Reference & Cross-Citation Verification"],
                    text: "We refine every aspect of your document — from title structuring and IMRaD (Introduction, Methods, Results, Discussion) framework to visual diagram alignment."
                },
                {
                    title: "Academic Tone & Language Polishing",
                    list: [
                        "Elimination of grammatical errors, passive voice ambiguities, and awkward phrasing.",
                        "Domain-specific terminology standardization by native academic proofreaders.",
                        "Logical flow enhancement between paragraphs and research sections."
                    ]
                }
            ]
        },
        plagiarism: {
            title: "Plagiarism Scan & Similarity Reduction",
            icon: "fa-magnifying-glass-chart",
            overview: "Comprehensive originality checks and line-by-line technical editing to reduce similarity indices below journal-mandated thresholds (typically < 10%).",
            accordion: [
                {
                    title: "Similarity Audit & Certification",
                    tags: ["Turnitin Similarity Report", "iThenticate Official Audit", "Line-by-Line Rephrasing", "Self-Citation Check", "Paraphrasing Quality Guarantee"],
                    text: "We provide full Turnitin / iThenticate scan reports showing line-by-line highlighted overlaps and clear post-reduction results."
                },
                {
                    title: "Rephrasing Strategy",
                    list: [
                        "Restructuring sentence syntax while strictly retaining technical scientific meaning.",
                        "Replacing non-technical phrases with precise domain terminology.",
                        "Verifying block quotes, literature citations, and verbatim reference listings."
                    ]
                }
            ]
        },
        journal: {
            title: "Journal Selection & Portal Submission",
            icon: "fa-book-journal-whills",
            overview: "Strategic target matching to connect your research with best-fit indexed journals based on scope, impact factor, review turnaround time, and publication budgets.",
            accordion: [
                {
                    title: "Journal Evaluation Criteria",
                    tags: ["Scopus Q1-Q4 Quartiles", "SCI & Web of Science Impact Factor", "UGC-CARE Listed", "Peer Review Speed Check", "Open Access vs Hybrid Options", "Cover Letter Preparation"],
                    text: "We evaluate 3-5 target journals matching your topic, detailing CiteScore, H-index, review speed, and acceptance probability."
                },
                {
                    title: "Submission Management",
                    list: [
                        "Complete portal profile setup on Editorial Manager, ScholarOne, or OJS.",
                        "Professional cover letter drafting to the Editor-in-Chief highlighting research novelty.",
                        "Formatting supplementary datasets, author bio statements, and graphical abstracts."
                    ]
                }
            ]
        },
        phd: {
            title: "PhD Assistance & Thesis Conversion",
            icon: "fa-graduation-cap",
            overview: "Comprehensive academic support for doctoral candidates and researchers, spanning thesis structuring, converting dissertation chapters into standalone journal articles, and viva defense preparation.",
            accordion: [
                {
                    title: "Thesis to Journal Conversion",
                    tags: ["Chapter Extraction", "Lit Review Synthesis", "Methodology Condensation", "Discussion Framing", "Viva Presentation Slides"],
                    text: "We help extract key research contributions from extensive thesis chapters and rewrite them into compact 5,000–8,000 word journal paper formats."
                },
                {
                    title: "Peer-Review Revision Support",
                    list: [
                        "Point-by-point rebuttal letter drafting addressing reviewer comments.",
                        "Track-changes manuscript revision with highlighted edits.",
                        "Re-submission portal management until final decision."
                    ]
                }
            ]
        }
    };

    function renderServicesTabs() {
        const container = document.getElementById('services-details-container');
        if (!container) return;

        let html = '';
        Object.keys(servicesData).forEach((key, index) => {
            const data = servicesData[key];
            const isActive = index === 0 ? 'active' : '';

            html += `
            <div class="domain-detail-box ${isActive}" id="services-tab-${key}">
                <div class="domain-icon" style="font-size: 2rem; color: var(--color-gold); margin-bottom: 1rem;">
                    <i class="fa-solid ${data.icon}"></i>
                </div>
                <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">${data.title}</h3>
                <p class="domain-overview" style="opacity: 0.9; line-height: 1.7; font-size: 1.05rem;">${data.overview}</p>
                
                <div class="domain-accordions">
                    ${data.accordion.map((item, idx) => `
                        <div class="d-acc-item">
                            <div class="d-acc-header">${item.title} <i class="fa-solid ${idx === 0 ? 'fa-minus' : 'fa-plus'}"></i></div>
                            <div class="d-acc-content" style="${idx === 0 ? 'max-height: 500px;' : 'max-height: 0px;'}">
                                <div class="d-acc-inner">
                                    ${item.text ? `<p style="opacity: 0.9; line-height: 1.6; margin-bottom: 12px;">${item.text}</p>` : ''}
                                    ${item.tags ? `
                                        <strong>Deliverables & Features:</strong>
                                        <div class="tag-cloud">
                                            ${item.tags.map(t => `<span class="d-tag">${t}</span>`).join('')}
                                        </div>
                                    ` : ''}
                                    ${item.list ? `
                                        <ul class="d-list">
                                            ${item.list.map(l => `<li>${l}</li>`).join('')}
                                        </ul>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            `;
        });

        container.innerHTML = html;
        bindAccordions(container);
    }


    /* =================================================
       3. INDEXING ECOSYSTEM SWITCHER DATA & RENDERER
    ================================================= */
    const indexingData = {
        scopus: {
            title: "Scopus Indexed Publications",
            icon: "fa-globe",
            overview: "Scopus is the world's largest abstract and citation database of peer-reviewed literature. We guide authors to publish in active, genuine Scopus-indexed journals across Q1, Q2, Q3, and Q4 quartiles.",
            accordion: [
                {
                    title: "Scopus Journal Metrics & Standards",
                    tags: ["Q1 Top 25%", "Q2 High Impact", "CiteScore Tracking", "SNIP Metric", "SJR Indicator", "Discontinued Journal Filter"],
                    text: "We verify active Scopus status on Elsevier's official source list to ensure your published article gains legitimate academic indexing and citation recognition."
                },
                {
                    title: "Key Subject Coverage",
                    list: [
                        "Engineering, Computer Science, AI, and Information Technology.",
                        "Medical Sciences, Pharmacology, and Health Professions.",
                        "Social Sciences, Business Management, and Economics."
                    ]
                }
            ]
        },
        wos: {
            title: "Web of Science (SCI / ESCI)",
            icon: "fa-certificate",
            overview: "Clarivate Web of Science represents the apex of academic indexing, including Science Citation Index Expanded (SCIE), Social Sciences Citation Index (SSCI), and Emerging Sources Citation Index (ESCI).",
            accordion: [
                {
                    title: "Impact Factor & Journal Evaluation",
                    tags: ["Journal Citation Reports (JCR)", "Clarivate Analytics Verified", "SCIE Listed", "SSCI Indexing", "ESCI Coverage", "High H-Index Journals"],
                    text: "We perform thorough scope matching to align your research paper with high-impact Web of Science journals requiring rigorous methodology."
                }
            ]
        },
        ugc: {
            title: "UGC-CARE List (Group I & II)",
            icon: "fa-graduation-cap",
            overview: "Essential for Indian academic researchers, university professors, and PhD scholars adhering to University Grants Commission (UGC) publication mandates.",
            accordion: [
                {
                    title: "UGC Compliance Highlights",
                    tags: ["UGC-CARE Group I", "UGC-CARE Group II (Scopus/WoS)", "Academic API Score Credit", "PhD Thesis Submission Approved"],
                    text: "We assist in identifying journals officially listed in UGC-CARE portal to guarantee your publication counts toward academic promotions and degree submissions."
                }
            ]
        },
        ieee: {
            title: "IEEE, PubMed & Major Publishers",
            icon: "fa-book-open-reader",
            overview: "Targeted support for specialized publications in IEEE Xplore, PubMed / MEDLINE, Springer Nature, Elsevier, Wiley, and Taylor & Francis.",
            accordion: [
                {
                    title: "Publisher Formatting Standards",
                    tags: ["IEEE Two-Column Format", "NLM PubMed XML", "Springer Lecture Notes (LNCS)", "Elsevier Article Structure"],
                    text: "Our team formats manuscripts to comply with the exact LaTeX and Word templates required by top international publishing houses."
                }
            ]
        }
    };

    function renderIndexingTabs() {
        const container = document.getElementById('indexing-details-container');
        if (!container) return;

        let html = '';
        Object.keys(indexingData).forEach((key, index) => {
            const data = indexingData[key];
            const isActive = index === 0 ? 'active' : '';

            html += `
            <div class="domain-detail-box ${isActive}" id="indexing-tab-${key}">
                <div class="domain-icon" style="font-size: 2rem; color: var(--color-gold); margin-bottom: 1rem;">
                    <i class="fa-solid ${data.icon}"></i>
                </div>
                <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">${data.title}</h3>
                <p class="domain-overview" style="opacity: 0.9; line-height: 1.7; font-size: 1.05rem;">${data.overview}</p>
                
                <div class="domain-accordions">
                    ${data.accordion.map((item, idx) => `
                        <div class="d-acc-item">
                            <div class="d-acc-header">${item.title} <i class="fa-solid ${idx === 0 ? 'fa-minus' : 'fa-plus'}"></i></div>
                            <div class="d-acc-content" style="${idx === 0 ? 'max-height: 500px;' : 'max-height: 0px;'}">
                                <div class="d-acc-inner">
                                    ${item.text ? `<p style="opacity: 0.9; line-height: 1.6; margin-bottom: 12px;">${item.text}</p>` : ''}
                                    ${item.tags ? `
                                        <strong>Indexing Features & Metrics:</strong>
                                        <div class="tag-cloud">
                                            ${item.tags.map(t => `<span class="d-tag">${t}</span>`).join('')}
                                        </div>
                                    ` : ''}
                                    ${item.list ? `
                                        <ul class="d-list">
                                            ${item.list.map(l => `<li>${l}</li>`).join('')}
                                        </ul>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            `;
        });

        container.innerHTML = html;
        bindAccordions(container);
    }

    /* Helper: Bind Accordion Click Logic */
    function bindAccordions(parent) {
        const accHeaders = parent.querySelectorAll('.d-acc-header');
        accHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const icon = header.querySelector('i');
                const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

                if (isOpen) {
                    content.style.maxHeight = '0px';
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                }
            });
        });
    }

    // Execute Renderers
    renderAboutTabs();
    renderServicesTabs();
    renderIndexingTabs();
});

// Global Tab Switcher Function for About, Services, and Indexing
function switchSiteTab(sectionPrefix, key, event) {
    const parentContainer = event.currentTarget.closest('.domain-interface');
    if (!parentContainer) return;

    const tags = parentContainer.querySelectorAll('.vertical-menu .tag');
    tags.forEach(tag => tag.classList.remove('active'));

    const detailBoxes = parentContainer.querySelectorAll('.domain-detail-box');
    detailBoxes.forEach(box => {
        box.classList.remove('active');
        box.style.opacity = '0';
    });

    event.currentTarget.classList.add('active');
    const targetBox = document.getElementById(`${sectionPrefix}-tab-${key}`);
    if (targetBox) {
        void targetBox.offsetWidth; // force reflow
        targetBox.classList.add('active');
        targetBox.style.opacity = '1';

        // Auto open first accordion
        const firstAccContent = targetBox.querySelector('.d-acc-content');
        const firstAccIcon = targetBox.querySelector('.d-acc-header i');
        if (firstAccContent) {
            firstAccContent.style.maxHeight = firstAccContent.scrollHeight + 'px';
            if (firstAccIcon) {
                firstAccIcon.classList.remove('fa-plus');
                firstAccIcon.classList.add('fa-minus');
            }
        }
    }
}

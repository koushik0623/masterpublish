const researchDomainsData = {
    cs: {
        title: "Computer Science",
        icon: "fa-laptop-code",
        overview: "Computer science research investigates the theoretical foundations of information and computation, alongside practical techniques for their implementation and application in computer systems. Researchers in this domain address complex computational problems, ranging from low-level hardware-software interfaces to high-level distributed systems and secure communication protocols. The field demands rigorous algorithmic design, empirical validation, and deep architectural understanding to solve modern technological challenges.",
        researchAreas: ["Software Engineering", "Computer Networks", "Cybersecurity", "Cloud Computing", "Distributed Systems", "Internet of Things (IoT)", "Blockchain", "Database Systems", "Human-Computer Interaction (HCI)", "Algorithms and Data Structures"],
        subDomains: ["Edge Computing", "Cryptography", "Network Architecture", "Software Testing", "Embedded Systems", "Information Security", "Parallel Processing", "Virtualization"],
        topics: ["Optimizing resource allocation in cloud environments", "Developing lightweight cryptographic protocols for IoT networks", "Analyzing the efficiency of distributed ledger consensus mechanisms", "Evaluating user experience in immersive HCI systems", "Designing scalable architectures for microservices", "Mitigating zero-day vulnerabilities in enterprise networks"],
        methodologies: ["Computational modelling", "Empirical performance evaluation", "Simulation", "Formal verification", "Algorithmic complexity analysis", "Systems architecture evaluation"],
        paperTypes: ["Original technical papers", "Architectural proposals", "Algorithmic reviews", "Empirical systems evaluations", "Conference proceedings", "State-of-the-art reviews"],
        support: "We provide targeted support for computer science manuscripts, focusing on the clear presentation of algorithmic logic, system architectures, and empirical performance metrics. Our consultants assist with formatting pseudocode, structuring flowchart diagrams, performing technical proofreading, and ensuring adherence to IEEE, ACM, or Springer formatting guidelines. We help organize your literature review to contextualize your computational contributions effectively and prepare your manuscript for rigorous peer review.",
        directions: ["Researchers might explore energy-efficient routing protocols for wireless sensor networks.", "Investigating verifiable credentials utilizing blockchain architectures.", "Developing novel data structures for real-time spatial querying.", "Evaluating the performance overhead of containerized applications in edge nodes."]
    },
    ai: {
        title: "Artificial Intelligence & ML",
        icon: "fa-brain",
        overview: "Artificial Intelligence and Machine Learning research focuses on creating systems capable of autonomous learning, reasoning, and decision-making. This rapidly evolving domain explores both the mathematical foundations of learning algorithms and their practical applications across diverse industries. Researchers tackle challenges related to model accuracy, computational efficiency, bias mitigation, and interpretability, pushing the boundaries of what intelligent systems can achieve.",
        researchAreas: ["Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Computer Vision", "Generative AI", "Reinforcement Learning", "Expert Systems", "Intelligent Agents", "Explainable AI (XAI)"],
        subDomains: ["Neural Network Architecture", "Transfer Learning", "Semantic Segmentation", "Speech Recognition", "Knowledge Graphs", "Swarm Intelligence", "Cognitive Computing"],
        topics: ["Developing predictive models for early disease detection", "Enhancing classification accuracy in imbalanced datasets", "Building recommendation systems with collaborative filtering", "Optimizing image analysis using convolutional neural networks", "Implementing language models for sentiment analysis", "Designing anomaly detection frameworks for financial fraud"],
        methodologies: ["Predictive modelling", "Algorithm training and validation", "Statistical learning", "Heuristic optimization", "Ablation studies", "Cross-validation techniques"],
        paperTypes: ["Methodological papers", "Algorithm performance reviews", "Benchmark studies", "Applied AI case studies", "Theoretical machine learning articles"],
        support: "Our academic consultants assist AI researchers by ensuring the rigorous presentation of methodologies, model architectures, and training protocols. We help organize your experimental setup, clarify evaluation metrics (e.g., F1-score, AUC-ROC), and interpret complex results. Our technical proofreading refines your manuscript's structure, ensuring that your contributions are clearly articulated for top-tier journals or conferences like NeurIPS and CVPR.",
        directions: ["Developing explainable models to interpret deep learning decisions in healthcare.", "Exploring reinforcement learning for autonomous navigation in dynamic environments.", "Optimizing generative adversarial networks (GANs) for high-resolution image synthesis.", "Investigating few-shot learning techniques for resource-constrained NLP tasks."]
    },
    ds: {
        title: "Data Science & Analytics",
        icon: "fa-chart-pie",
        overview: "Data Science research intersects statistics, computer science, and domain expertise to extract meaningful insights from structured and unstructured data. This field addresses the entire data lifecycle, from acquisition and cleaning to advanced predictive modeling and visualization. Researchers develop novel techniques to handle big data, uncovering patterns that drive strategic decision-making in business, healthcare, and public policy.",
        researchAreas: ["Statistical Analysis", "Predictive Analytics", "Data Mining", "Big Data Processing", "Data Visualization", "Business Analytics", "Feature Engineering", "Time-Series Analysis"],
        subDomains: ["Data Wrangling", "Spatial Analytics", "Graph Analytics", "Text Mining", "Dimensionality Reduction", "Streaming Data Analysis", "Prescriptive Analytics"],
        topics: ["Forecasting demand using multivariate time-series analysis", "Clustering consumer behavior patterns for targeted marketing", "Detecting anomalies in high-throughput network traffic", "Predicting patient readmission rates using electronic health records", "Analyzing social media sentiment during crisis events", "Optimizing large-scale data pipelines for real-time analytics"],
        methodologies: ["Statistical modelling", "Exploratory data analysis (EDA)", "Machine learning integration", "Quantitative analysis", "A/B testing", "Regression analysis"],
        paperTypes: ["Empirical data studies", "Analytical methodology proposals", "Review papers on data trends", "Case studies in applied analytics", "Data visualization frameworks"],
        support: "We support data science researchers by ensuring their findings are presented with clarity and academic rigor. Our team assists in formatting complex statistical tables, structuring data visualization narratives, and refining the presentation of data preprocessing and feature engineering steps. We provide thorough technical proofreading and help select appropriate journals that align with your specific analytical focus.",
        directions: ["Analyzing the impact of feature selection on high-dimensional genomic data.", "Developing robust clustering algorithms for noisy spatial datasets.", "Evaluating the effectiveness of interactive data visualizations in decision support.", "Applying survival analysis techniques to customer churn prediction."]
    },
    med: {
        title: "Medical, Pharmacy & Clinical",
        icon: "fa-user-nurse",
        overview: "Medical and pharmaceutical research aims to advance human health through the discovery of novel therapeutics, improvement of clinical practices, and analysis of public health trends. This highly rigorous domain demands precise methodology, strict ethical compliance, and meticulous data reporting. Researchers investigate everything from molecular drug interactions and formulation science to large-scale epidemiological studies and patient outcomes.",
        researchAreas: ["Clinical Research", "Pharmacology", "Pharmaceutics", "Pharmaceutical Chemistry", "Pharmacognosy", "Drug Delivery", "Biomedical Research", "Public Health", "Medical Imaging"],
        subDomains: ["Toxicology", "Molecular Biology", "Epidemiology", "Pharmacokinetics", "Nanomedicine", "Clinical Trials", "Pathology", "Immunology"],
        topics: ["Evaluating the efficacy of novel drug delivery systems in oncology", "Analyzing clinical outcomes of therapeutic interventions in cardiology", "Investigating phytochemical properties of traditional medicinal plants", "Assessing public health strategies for infectious disease containment", "Developing targeted pharmaceutical formulations for pediatric care", "Conducting pharmacological evaluation of new chemical entities"],
        methodologies: ["Randomized controlled trials (RCTs)", "In vitro and in vivo studies", "Longitudinal cohort studies", "Systematic reviews and meta-analyses", "Epidemiological surveys", "Pharmacokinetic modelling"],
        paperTypes: ["Original research articles", "Clinical case reports", "Systematic reviews", "Meta-analyses", "Short communications", "Pharmacological evaluations"],
        support: "We provide meticulous support for medical and pharmaceutical manuscripts, focusing on the precise articulation of clinical methodologies and adherence to strict academic standards (e.g., AMA or APA style). We assist with structuring literature reviews, formatting complex clinical data tables, and refining biomedical terminology. Our services also include guidance on journal selection, targeting reputable indexed publications while ensuring ethical declarations are properly formatted.",
        directions: ["Investigating targeted nanoparticle drug delivery systems for crossing the blood-brain barrier.", "Analyzing longitudinal data to assess the long-term clinical outcomes of a novel therapeutic.", "Evaluating the pharmacological mechanisms of newly synthesized antimicrobial compounds.", "Conducting a systematic review on the efficacy of alternative treatments in chronic pain management."]
    },
    env: {
        title: "Environmental Science",
        icon: "fa-leaf",
        overview: "Environmental Science research investigates the complex interactions between physical, chemical, and biological components of the environment. Researchers in this crucial field study the impact of human activity on ecosystems, climate change dynamics, and sustainable resource management. The domain requires a multidisciplinary approach, often combining field observations, laboratory analysis, and computational modeling to address pressing global environmental challenges.",
        researchAreas: ["Climate Research", "Water Quality", "Air Pollution", "Waste Management", "Environmental Monitoring", "Biodiversity", "Soil Science", "Sustainable Development", "Environmental Toxicology"],
        subDomains: ["Ecology", "Oceanography", "Environmental Chemistry", "Conservation Biology", "Hydrology", "Renewable Energy Impacts", "Urban Ecology"],
        topics: ["Assessing heavy metal contamination in urban river ecosystems", "Monitoring air quality indices and particulate matter in industrial zones", "Analyzing the impact of climate change on coastal biodiversity", "Evaluating the efficiency of novel wastewater treatment technologies", "Studying soil degradation and remediation strategies in agriculture", "Investigating the environmental toxicology of microplastics in marine life"],
        methodologies: ["Field studies and sampling", "Laboratory chemical analysis", "Remote sensing and GIS", "Ecological modelling", "Statistical trend analysis", "Life cycle assessment (LCA)"],
        paperTypes: ["Field research articles", "Environmental impact assessments", "Review papers on climate trends", "Case studies in sustainability", "Analytical methodology reports"],
        support: "Master Publish assists environmental researchers by structuring complex field data and laboratory results into cohesive academic narratives. We help present remote sensing data, refine statistical analysis descriptions, and format environmental impact models. Our academic editing ensures your manuscript meets the standards of leading environmental and sustainability journals, highlighting the global relevance of your findings.",
        directions: ["Utilizing remote sensing data to map deforestation rates and carbon stock depletion.", "Analyzing the long-term effects of ocean acidification on coral reef ecosystems.", "Developing bio-indicators for continuous monitoring of soil health.", "Evaluating the life cycle sustainability of emerging renewable energy technologies."]
    },
    math: {
        title: "Mathematics",
        icon: "fa-calculator",
        overview: "Mathematical research explores abstract structures, rigorous proofs, and quantitative models that form the foundation of science and engineering. This domain spans pure theoretical investigations to applied mathematical modeling of real-world phenomena. Researchers rely on absolute logical precision, developing new theorems, optimizing complex numerical methods, and analyzing statistical properties that drive advancements across multiple disciplines.",
        researchAreas: ["Pure Mathematics", "Applied Mathematics", "Statistics", "Differential Equations", "Numerical Methods", "Optimization", "Mathematical Modelling", "Discrete Mathematics", "Algebra", "Computational Mathematics"],
        subDomains: ["Topology", "Number Theory", "Graph Theory", "Probability Theory", "Operations Research", "Dynamical Systems", "Combinatorics"],
        topics: ["Developing new numerical schemes for solving partial differential equations", "Analyzing the asymptotic behavior of stochastic processes", "Optimizing large-scale network flows using integer programming", "Investigating topological properties of abstract algebraic structures", "Creating mathematical models for infectious disease transmission", "Exploring combinatorial properties of complex graphs"],
        methodologies: ["Mathematical proof generation", "Numerical simulation", "Statistical modelling", "Algorithmic analysis", "Analytical derivation", "Computational experiments"],
        paperTypes: ["Theoretical research articles", "Applied modelling papers", "Proofs and theorems", "Review articles on mathematical developments", "Computational mathematics reports"],
        support: "We provide specialized support for mathematical manuscripts, ensuring notation consistency and rigorous logical flow. Our team assists with LaTeX-oriented formatting, precise presentation of equations and proofs, and technical proofreading to eliminate ambiguities. We help organize complex mathematical models and numerical results, targeting reputable journals in pure and applied mathematics.",
        directions: ["Investigating the stability of solutions in nonlinear differential equations.", "Developing advanced statistical models for high-dimensional data analysis.", "Exploring novel optimization algorithms for non-convex programming problems.", "Applying graph theory to analyze vulnerabilities in complex infrastructure networks."]
    },
    law: {
        title: "Law",
        icon: "fa-scale-balanced",
        overview: "Legal research involves the systematic study of legal systems, statutory frameworks, and judicial precedents to understand, critique, and guide the application of law. Researchers in this domain analyze the evolution of legal doctrines, the impact of public policy, and the intersection of law with technology and society. This field requires meticulous doctrinal analysis, comparative study, and a deep understanding of jurisprudential context.",
        researchAreas: ["Constitutional Law", "Corporate Law", "Criminal Law", "Cyber Law", "Intellectual Property (IP)", "Human Rights", "Environmental Law", "International Law", "Labour Law", "Legal Policy"],
        subDomains: ["Jurisprudence", "Contract Law", "Family Law", "Maritime Law", "Taxation Law", "Media Law", "Alternative Dispute Resolution"],
        topics: ["Analyzing regulatory frameworks for emerging artificial intelligence technologies", "Comparing corporate governance standards across international jurisdictions", "Evaluating judicial interpretations of human rights in the digital age", "Investigating the implications of cyber law on cross-border data privacy", "Assessing the evolution of intellectual property rights in biotechnology", "Critiquing the effectiveness of international environmental treaties"],
        methodologies: ["Doctrinal research", "Comparative legal research", "Case-law analysis", "Statutory interpretation", "Socio-legal research", "Policy analysis"],
        paperTypes: ["Doctrinal articles", "Case comments", "Legislative reviews", "Comparative legal studies", "Policy briefs", "Theoretical jurisprudence papers"],
        support: "Our consultants assist legal scholars by ensuring arguments are structured logically and supported by rigorous doctrinal analysis. We provide expert formatting for legal citations (e.g., Bluebook, OSCOLA), ensuring absolute adherence to standard legal conventions. We refine the academic tone of your manuscript, helping you present complex comparative studies or policy critiques for high-impact law reviews and journals.",
        directions: ["Examining the constitutional implications of biometric surveillance technologies.", "Analyzing the shift in corporate liability frameworks regarding environmental damage.", "Comparing alternative dispute resolution mechanisms in international trade disputes.", "Evaluating the intersection of copyright law and AI-generated content."]
    },
    edu: {
        title: "Education",
        icon: "fa-book-open",
        overview: "Educational research seeks to understand and improve the processes of teaching, learning, and human development. This multifaceted domain investigates curriculum effectiveness, pedagogical innovations, educational psychology, and the integration of technology in learning environments. Researchers utilize both qualitative and quantitative approaches to generate evidence-based practices that inform educational policy and institutional strategies.",
        researchAreas: ["Educational Technology", "Curriculum Development", "Teacher Education", "Higher Education", "Educational Psychology", "Assessment and Evaluation", "Inclusive Education", "Distance Learning", "Educational Policy"],
        subDomains: ["Early Childhood Education", "Special Education", "STEM Education", "Adult Learning", "Instructional Design", "Sociology of Education", "Language Acquisition"],
        topics: ["Evaluating the impact of digital learning tools on student engagement", "Analyzing assessment methods in competency-based education", "Investigating teacher development programs for inclusive classrooms", "Assessing the effectiveness of online distance learning models", "Exploring cognitive load theory in multimedia instructional design", "Reviewing educational policy impacts on higher education accessibility"],
        methodologies: ["Surveys and questionnaires", "Qualitative interviews and focus groups", "Quantitative experimental design", "Mixed-method research", "Action research", "Case studies"],
        paperTypes: ["Empirical research articles", "Pedagogical case studies", "Systematic literature reviews", "Policy analysis papers", "Educational intervention reports"],
        support: "We support educational researchers by helping to structure comprehensive literature reviews and clear methodological frameworks. Our team assists with the presentation of both qualitative transcripts and quantitative survey data. We refine academic writing to meet the standards of top educational journals, ensuring your pedagogical insights and policy recommendations are clearly articulated and appropriately referenced.",
        directions: ["Investigating the efficacy of flipped classroom models in university-level STEM courses.", "Analyzing the socio-emotional impacts of inclusive education policies on primary students.", "Evaluating the reliability of formative assessment tools in digital learning environments.", "Exploring the relationship between teacher self-efficacy and student academic outcomes."]
    },
    eng: {
        title: "Engineering",
        icon: "fa-gears",
        overview: "Engineering research applies scientific and mathematical principles to invent, design, and optimize structures, machines, materials, and processes. This broad domain encompasses highly technical investigations aimed at solving practical problems, improving efficiency, and developing sustainable technologies. Researchers rely on rigorous physical experimentation, advanced computer simulations, and prototype testing to validate their engineering hypotheses.",
        researchAreas: ["Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Electronics and Communication", "Computer Engineering", "Chemical Engineering", "Industrial Engineering", "Structural Engineering", "Renewable Energy"],
        subDomains: ["Robotics and Automation", "Materials Science", "Fluid Mechanics", "Thermodynamics", "Geotechnical Engineering", "Power Systems", "Control Systems", "Nanotechnology"],
        topics: ["Optimizing the structural integrity of composite materials under thermal stress", "Designing automated control systems for industrial manufacturing", "Evaluating the efficiency of novel photovoltaic cell architectures", "Simulating fluid dynamics in aerospace components", "Analyzing the load-bearing capacity of sustainable concrete mixes", "Developing low-power embedded systems for wearable technology"],
        methodologies: ["Physical experimental testing", "Computer-aided simulation (e.g., FEA, CFD)", "Numerical analysis", "Mathematical optimization", "Prototype development and validation", "Field studies"],
        paperTypes: ["Technical research articles", "Simulation and modelling papers", "Experimental reports", "Design methodology papers", "Review articles on engineering advancements"],
        support: "Master Publish assists engineering researchers by ensuring technical data, simulation results, and experimental methodologies are presented with absolute clarity. We help format complex engineering equations, structure detailed schematic diagrams, and refine the narrative flow of your manuscript. Our services include targeted technical proofreading and journal formatting (e.g., IEEE, ASCE) to prepare your work for rigorous peer review.",
        directions: ["Simulating the aerodynamic performance of novel wind turbine blade profiles.", "Investigating the mechanical properties of 3D-printed titanium alloys for biomedical implants.", "Developing robust control algorithms for autonomous drone navigation in GPS-denied environments.", "Analyzing the seismic response of high-rise structures utilizing base isolation systems."]
    },
    agri: {
        title: "Agriculture",
        icon: "fa-wheat-awn",
        overview: "Agricultural research focuses on advancing the science and technology of cultivating plants, soil management, and ensuring global food security. This domain addresses critical challenges such as climate resilience, sustainable farming practices, and crop yield optimization. Researchers conduct extensive field trials, laboratory analyses, and geospatial monitoring to develop innovations that enhance agricultural productivity and sustainability.",
        researchAreas: ["Agronomy", "Soil Science", "Horticulture", "Agricultural Biotechnology", "Plant Science", "Agricultural Economics", "Precision Agriculture", "Crop Science", "Irrigation Management", "Agricultural Technology"],
        subDomains: ["Plant Pathology", "Entomology", "Agroecology", "Post-Harvest Technology", "Plant Breeding and Genetics", "Weed Science", "Agricultural Extension"],
        topics: ["Evaluating the impact of precision farming technologies on crop productivity", "Analyzing soil microbiome health under various organic fertilization regimes", "Investigating drought-resistant traits in genetically modified cereals", "Assessing the efficiency of smart irrigation systems in arid regions", "Studying the epidemiology of emerging plant diseases in horticultural crops", "Modeling the economic impact of climate change on agricultural supply chains"],
        methodologies: ["Field experiments and trials", "Laboratory biochemical analysis", "Statistical yield modeling", "Remote sensing and drone imagery", "Experimental randomized block design", "Economic forecasting"],
        paperTypes: ["Field research articles", "Laboratory experimental reports", "Review papers on agricultural techniques", "Economic analysis papers", "Case studies in sustainable farming"],
        support: "We support agricultural researchers by structuring complex field data and laboratory findings into compelling academic manuscripts. Our team assists with the presentation of statistical yield models, environmental impact assessments, and remote sensing imagery. We provide thorough technical editing, ensuring your agricultural methodology is transparent and your findings are prepared for high-impact agronomy and plant science journals.",
        directions: ["Investigating the efficacy of bio-pesticides against invasive crop pests.", "Analyzing the long-term effects of conservation tillage on soil organic carbon.", "Developing machine learning models to predict crop yields based on satellite imagery.", "Evaluating the economic viability of vertical farming systems in urban environments."]
    },
    mgmt: {
        title: "Management",
        icon: "fa-briefcase",
        overview: "Management and economic research investigates the principles of organizational behavior, market dynamics, and strategic decision-making. This domain explores how businesses operate, how consumers behave, and how financial systems function in a globalized economy. Researchers utilize empirical data and theoretical frameworks to generate insights that improve operational efficiency, leadership effectiveness, and corporate sustainability.",
        researchAreas: ["Business Management", "Marketing", "Finance and Accounting", "Human Resources", "Operations Management", "Entrepreneurship", "Strategic Management", "Organizational Behaviour", "Supply Chain Management", "Business Analytics"],
        subDomains: ["Consumer Psychology", "Corporate Governance", "Digital Marketing", "Change Management", "Financial Risk Analysis", "Logistics", "Innovation Management"],
        topics: ["Analyzing consumer purchasing behavior in digital retail environments", "Evaluating the impact of leadership styles on employee engagement and retention", "Investigating supply chain resilience during global disruptions", "Assessing the financial performance of ESG-compliant corporations", "Exploring the role of digital marketing strategies in brand equity", "Modeling operational efficiency in lean manufacturing systems"],
        methodologies: ["Quantitative surveys and statistical analysis", "Qualitative interviews and case studies", "Econometric modeling", "Empirical financial analysis", "Mixed-method approaches", "Comparative industry analysis"],
        paperTypes: ["Empirical research articles", "Theoretical framework papers", "Business case studies", "Systematic literature reviews", "Econometric analyses"],
        support: "Our consultants assist management scholars in articulating complex business theories and empirical findings. We help structure comprehensive literature reviews, format statistical analysis tables (e.g., SPSS/AMOS outputs), and refine the presentation of qualitative case study data. We ensure your manuscript adheres to academic business standards (such as APA formatting) and is optimized for submission to ABDC or Scopus-listed management journals.",
        directions: ["Examining the influence of corporate social responsibility initiatives on brand loyalty.", "Analyzing the adoption factors of blockchain technology in global supply chains.", "Evaluating the effectiveness of remote work policies on organizational productivity.", "Investigating behavioral biases in retail investor decision-making."]
    }
};

// CSS for Inner Accordions
const styles = document.createElement('style');
styles.innerHTML = `
.domain-accordions {
    margin-top: 1.5rem;
}
.d-acc-item {
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    margin-bottom: 10px;
    overflow: hidden;
    background: rgba(255,255,255,0.02);
}
.d-acc-header {
    padding: 15px 20px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: var(--trans-fast);
}
.d-acc-header:hover {
    background: rgba(255,255,255,0.05);
}
.d-acc-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.d-acc-inner {
    padding: 20px;
    border-top: 1px solid rgba(255,255,255,0.05);
    background: rgba(0,0,0,0.1);
}
.tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
}
.d-tag {
    background: rgba(197, 160, 89, 0.1);
    color: var(--color-gold);
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.85rem;
    border: 1px solid rgba(197, 160, 89, 0.2);
}
.d-list {
    list-style: none;
    margin-top: 10px;
}
.d-list li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    font-size: 0.95rem;
    opacity: 0.9;
}
.d-list li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--color-gold);
}
`;
document.head.appendChild(styles);

// Generate HTML and Inject
const container = document.getElementById('domain-details-container');
if (container) {
    let html = '';
    const keys = Object.keys(researchDomainsData);
    
    keys.forEach((key, index) => {
        const domain = researchDomainsData[key];
        const isActive = index === 0 ? 'active' : '';
        
        html += `
        <div class="domain-detail-box ${isActive}" id="domain-${key}">
            <div class="domain-icon" style="font-size: 2rem; color: var(--color-gold); margin-bottom: 1rem;"><i class="fa-solid ${domain.icon}"></i></div>
            <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">${domain.title}</h3>
            <p class="domain-overview" style="opacity: 0.9; line-height: 1.7; font-size: 1.05rem;">${domain.overview}</p>
            
            <div class="domain-accordions">
                
                <div class="d-acc-item">
                    <div class="d-acc-header">Key Research Areas & Sub-domains <i class="fa-solid fa-plus"></i></div>
                    <div class="d-acc-content">
                        <div class="d-acc-inner">
                            <strong>Key Areas:</strong>
                            <div class="tag-cloud">
                                ${domain.researchAreas.map(area => `<span class="d-tag">${area}</span>`).join('')}
                            </div>
                            <strong style="display:block; margin-top:15px;">Sub-domains:</strong>
                            <div class="tag-cloud">
                                ${domain.subDomains.map(sub => `<span class="d-tag">${sub}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-acc-item">
                    <div class="d-acc-header">Common Research Topics <i class="fa-solid fa-plus"></i></div>
                    <div class="d-acc-content">
                        <div class="d-acc-inner">
                            <ul class="d-list">
                                ${domain.topics.map(topic => `<li>${topic}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="d-acc-item">
                    <div class="d-acc-header">Methodologies & Paper Types <i class="fa-solid fa-plus"></i></div>
                    <div class="d-acc-content">
                        <div class="d-acc-inner">
                            <strong>Methodologies:</strong>
                            <ul class="d-list">
                                ${domain.methodologies.map(m => `<li>${m}</li>`).join('')}
                            </ul>
                            <strong style="display:block; margin-top:15px;">Paper Types:</strong>
                            <ul class="d-list">
                                ${domain.paperTypes.map(p => `<li>${p}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="d-acc-item">
                    <div class="d-acc-header">Publication Support <i class="fa-solid fa-plus"></i></div>
                    <div class="d-acc-content">
                        <div class="d-acc-inner">
                            <p style="opacity: 0.9; line-height: 1.6;">${domain.support}</p>
                            <strong style="display:block; margin-top:15px;">Example Directions:</strong>
                            <ul class="d-list">
                                ${domain.directions.map(d => `<li>${d}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Bind accordion logic
    const accHeaders = document.querySelectorAll('.d-acc-header');
    accHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
            
            // Optional: Close others
            // document.querySelectorAll('.d-acc-content').forEach(c => c.style.maxHeight = '0px');
            // document.querySelectorAll('.d-acc-header i').forEach(i => { i.classList.remove('fa-minus'); i.classList.add('fa-plus'); });

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
    
    // Open the first accordion of the first domain by default
    const firstAccContent = container.querySelector('.domain-detail-box.active .d-acc-content');
    const firstAccIcon = container.querySelector('.domain-detail-box.active .d-acc-header i');
    if (firstAccContent) {
        firstAccContent.style.maxHeight = firstAccContent.scrollHeight + 'px';
        if (firstAccIcon) {
            firstAccIcon.classList.remove('fa-plus');
            firstAccIcon.classList.add('fa-minus');
        }
    }
    
    // Initialize mobile accordions after rendering
    if (typeof setupMobileDomains === 'function') {
        setupMobileDomains();
    }
}

// Interactive Subject Domain Tab Switcher
function showDomain(domainKey, event) {
    const tags = document.querySelectorAll('.domain-tags .tag');
    tags.forEach(tag => tag.classList.remove('active'));

    const detailBoxes = document.querySelectorAll('.domain-detail-box');
    
    // Animate out
    detailBoxes.forEach(box => {
        box.classList.remove('active');
        box.style.opacity = '0';
    });

    event.currentTarget.classList.add('active');
    const targetBox = document.getElementById('domain-' + domainKey);
    if (targetBox) {
        // Force reflow for fade in
        void targetBox.offsetWidth;
        targetBox.classList.add('active');
        targetBox.style.opacity = '1';
        
        // Auto-open first inner accordion if none are open
        const openInner = targetBox.querySelector('.d-acc-content[style*="max-height:"]');
        if (!openInner || openInner.style.maxHeight === '0px') {
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
}

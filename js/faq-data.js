const faqs = [
    {
        category: "General",
        question: "What kind of research and publication support does Master Publish provide?",
        answer: "Master Publish focuses on assisting researchers through the academic publication cycle. Our services include manuscript preparation, academic language refinement, journal selection, submission preparation, originality review, thesis-related support, and research-domain guidance. We aim to help you present your findings clearly and professionally."
    },
    {
        category: "General",
        question: "Who can use Master Publish's research support services?",
        answer: "Our support services are available to a wide academic audience, including university students, research scholars, PhD candidates, academics, faculty members, and independent researchers across various disciplines."
    },
    {
        category: "General",
        question: "Which research domains do you support?",
        answer: "We support a broad spectrum of disciplines, including Computer Science, Artificial Intelligence, Data Science, Medical & Pharmacy, Environmental Science, Mathematics, Law, Education, Engineering, Agriculture, and Management. The precise nature of our support is tailored to the specific methodology and manuscript requirements of your field."
    },
    {
        category: "General",
        question: "Can you support papers in different research disciplines?",
        answer: "Yes, our team is equipped to handle manuscripts across the 11 major research domains listed above. The nature of the support depends on the specific requirements of the field, ensuring that discipline-specific methodologies, terminologies, and formatting standards are respected."
    },
    {
        category: "Research & Manuscript",
        question: "Can you help me prepare my research manuscript?",
        answer: "We assist with the organization, structure, and technical presentation of your manuscript. This involves refining the academic language, ensuring logical flow, formatting references, and presenting tables and figures clearly. Please note that we do not conduct the primary research or fabricate data on your behalf."
    },
    {
        category: "Research & Manuscript",
        question: "Can you help improve the academic language of my paper?",
        answer: "Yes, we offer comprehensive language refinement. This includes technical proofreading, correcting grammatical issues, improving sentence structure, and ensuring the tone meets the formal standards expected by academic reviewers."
    },
    {
        category: "Research & Manuscript",
        question: "Can you help with research methodology presentation?",
        answer: "We can help you articulate your chosen methodology clearly within your manuscript. Whether you are using quantitative models, qualitative surveys, or experimental designs, we assist in structuring the methods section so that reviewers can easily follow your approach."
    },
    {
        category: "Research & Manuscript",
        question: "Can you help with tables, figures, graphs and technical presentation?",
        answer: "A well-presented manuscript relies heavily on clear visual data. We assist in improving the organization, clarity, and formatting of tables, figures, charts, and diagrams to meet specific journal guidelines. We do not fabricate or alter your underlying research results."
    },
    {
        category: "Research & Manuscript",
        question: "Can you check my manuscript for plagiarism or originality issues?",
        answer: "We provide an originality review service to identify potential overlap or citation-related issues using standard detection tools. We then guide authors on how to properly paraphrase or cite the highlighted sections. We do not guarantee a specific similarity percentage, as resolving these issues requires appropriate author revisions."
    },
    {
        category: "Research & Manuscript",
        question: "Can you help with citations and references?",
        answer: "Yes, we ensure that your citations and references are consistently formatted and aligned with your target journal's specific requirements, whether that is APA, MLA, IEEE, Bluebook, or Vancouver style."
    },
    {
        category: "Research & Manuscript",
        question: "Do you support review papers and systematic reviews?",
        answer: "Yes, we assist with the preparation and structuring of both original research articles and comprehensive review papers. For systematic reviews, we can help organize your literature synthesis and ensure your PRISMA flowchart (or equivalent) is presented clearly."
    },
    {
        category: "Journal & Publication",
        question: "Can you help me select a suitable journal?",
        answer: "We provide guidance on journal selection by evaluating your research topic, manuscript scope, desired indexing, and the journal's publication requirements. While we recommend suitable venues, the final choice of where to submit always remains with you."
    },
    {
        category: "Journal & Publication",
        question: "Will you choose a journal for me?",
        answer: "We will propose a carefully researched list of suitable journals based on your manuscript's scope and your indexing preferences. However, you will make the final decision on which journal to target."
    },
    {
        category: "Journal & Publication",
        question: "Can you help format my paper according to journal guidelines?",
        answer: "Yes, once a target journal is selected, we align your manuscript with its specific author instructions. This covers headings, abstract structure, reference formatting, word counts, and figure placement."
    },
    {
        category: "Journal & Publication",
        question: "Does Master Publish guarantee publication?",
        answer: "No. Final publication decisions are made exclusively by the journal's editorial board and peer-review process. While our preparation and guidance significantly improve your manuscript's readiness and presentation, no ethical service can guarantee acceptance."
    },
    {
        category: "Journal & Publication",
        question: "Can you help if my manuscript is rejected?",
        answer: "If your manuscript faces rejection, we can review the reviewer feedback, help you address their concerns, adjust the formatting, and prepare the manuscript for submission to an alternative, more suitable venue."
    },
    {
        category: "Indexing",
        question: "Can you help with Scopus-indexed journals?",
        answer: "We provide comprehensive guidance for preparing manuscripts intended for Scopus-indexed journals. We help you evaluate journal suitability based on current indexing status and scope, but we do not guarantee Scopus publication."
    },
    {
        category: "Indexing",
        question: "Do you support SCI / Web of Science / UGC-related publication requirements?",
        answer: "Yes, our publication guidance can be tailored to meet the strict author guidelines required by SCI, Web of Science, or UGC-CARE listed journals. We focus on ensuring your manuscript meets the high formatting and presentation standards expected by these platforms."
    },
    {
        category: "Thesis & PhD",
        question: "Do you provide PhD or thesis-related assistance?",
        answer: "We offer support for thesis formatting, academic structuring, literature organization, and research presentation. We also help extract and format chapters into individual manuscripts for journal publication. We do not write entire theses from scratch on behalf of students."
    },
    {
        category: "Process & Contact",
        question: "How long does the publication process take?",
        answer: "Timelines vary significantly depending on the journal, the manuscript type, the peer-review cycle, and the number of revisions requested by the editors. While we work efficiently to prepare your manuscript, the actual editorial timeline is controlled by the publisher."
    },
    {
        category: "Process & Contact",
        question: "What information do I need to provide before starting?",
        answer: "To begin, we typically need to review your current manuscript draft, understand your research topic, and know your publication goals or target journal (if already selected). The exact requirements will vary based on the specific service you need."
    },
    {
        category: "Process & Contact",
        question: "What happens after I submit my requirements?",
        answer: "Once you submit your details, our team will review your requirements and reach out for a consultation. We will discuss the scope of support needed, outline a timeline, and propose the best steps forward for your manuscript."
    },
    {
        category: "Process & Contact",
        question: "How can I contact Master Publish?",
        answer: "You can email us at <a href='mailto:masterpublish63@gmail.com' class='text-gold' style='text-decoration:none;'>masterpublish63@gmail.com</a>, reach out via WhatsApp at <a href='https://wa.me/919581987985' target='_blank' class='text-gold' style='text-decoration:none;'>+91 9581987985</a>, or submit your details through our <a href='https://forms.gle/AYMQjYiCJt4TDzh49' target='_blank' class='text-gold' style='text-decoration:none;'>consultation form</a>."
    }
];

(function initFAQ() {
    const faqContainer = document.getElementById('faq-container');
    const categoryFilters = document.getElementById('faq-category-filters');
    const searchInput = document.getElementById('faq-search-input');
    const loadMoreBtn = document.getElementById('faq-load-more-btn');
    
    if (!faqContainer) return;

    const INITIAL_LIMIT = 7;
    let showingAll = false;

    // Get unique categories
    const categories = ['All', ...new Set(faqs.map(faq => faq.category))];
    
    // Render Category Buttons
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `faq-cat-btn ${cat === 'All' ? 'active' : ''}`;
        btn.textContent = cat.toUpperCase();
        btn.dataset.category = cat;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.faq-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showingAll = false; // Reset pagination limit when changing category
            renderFAQs(cat, searchInput.value);
        });
        categoryFilters.appendChild(btn);
    });

    // Render Function
    function renderFAQs(activeCategory = 'All', searchQuery = '') {
        faqContainer.innerHTML = '';
        
        const filtered = faqs.filter(faq => {
            const matchCategory = activeCategory === 'All' || faq.category === activeCategory;
            const query = searchQuery.toLowerCase();
            const matchSearch = faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query);
            return matchCategory && matchSearch;
        });

        if (filtered.length === 0) {
            faqContainer.innerHTML = '<p class="faq-no-results">No frequently asked questions match your criteria.</p>';
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }

        const displayItems = showingAll ? filtered : filtered.slice(0, INITIAL_LIMIT);

        displayItems.forEach((faq, index) => {
            const item = document.createElement('div');
            item.className = 'faq-item';
            item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.04}s`;
            item.style.opacity = '0';
            
            item.innerHTML = `
                <button class="faq-question" aria-expanded="false">
                    <span class="faq-q-text">${faq.question}</span>
                    <span class="faq-icon"><i class="fa-solid fa-plus"></i></span>
                </button>
                <div class="faq-answer-container">
                    <div class="faq-answer-inner">
                        ${faq.answer}
                    </div>
                </div>
            `;
            
            faqContainer.appendChild(item);
            
            // Accordion Logic
            const btn = item.querySelector('.faq-question');
            btn.addEventListener('click', () => {
                const isExpanded = btn.getAttribute('aria-expanded') === 'true';
                
                // Close all others
                document.querySelectorAll('.faq-question').forEach(b => {
                    b.setAttribute('aria-expanded', 'false');
                    const c = b.nextElementSibling;
                    c.style.maxHeight = '0px';
                    b.querySelector('.faq-icon i').classList.replace('fa-minus', 'fa-plus');
                });
                
                if (!isExpanded) {
                    btn.setAttribute('aria-expanded', 'true');
                    const container = btn.nextElementSibling;
                    container.style.maxHeight = container.scrollHeight + 'px';
                    btn.querySelector('.faq-icon i').classList.replace('fa-plus', 'fa-minus');
                }
            });
        });

        // Load More Button Visibility & State
        if (loadMoreBtn) {
            if (filtered.length > INITIAL_LIMIT) {
                loadMoreBtn.style.display = 'inline-flex';
                if (showingAll) {
                    loadMoreBtn.innerHTML = '<span>Show Less Questions</span> <i class="fa-solid fa-chevron-up"></i>';
                } else {
                    loadMoreBtn.innerHTML = `<span>View More Questions (${filtered.length - INITIAL_LIMIT} More)</span> <i class="fa-solid fa-chevron-down"></i>`;
                }
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    // Load More Click Binding
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            showingAll = !showingAll;
            const activeCat = document.querySelector('.faq-cat-btn.active')?.dataset.category || 'All';
            renderFAQs(activeCat, searchInput.value);
            if (!showingAll) {
                document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Search Binding
    searchInput.addEventListener('input', (e) => {
        showingAll = false;
        const activeCat = document.querySelector('.faq-cat-btn.active')?.dataset.category || 'All';
        renderFAQs(activeCat, e.target.value);
    });

    // Initial Render
    renderFAQs();
})();

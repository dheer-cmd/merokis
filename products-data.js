/* ==========================================
   MÉROKIS PRODUCTS DATABASE
   Shared product catalogue data for all categories
   ========================================== */

const catalogueDB = {
    'anti-viral-drugs': {
        title: 'Anti-Viral Portfolio',
        tag: 'Anti-Viral',
        desc: 'Advanced antiviral formulations targeting viral replication pathways and supporting immune defence.',
        icon: '🛡️',
        coverClass: 'grad-teal',
        count: '28 Items',
        downloadMsg: 'Anti-Viral Drugs Specification Booklet',
        samples: [
            { name: 'Tenofovir Alafenamide', strength: '25mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Indicated for chronic hepatitis B infection in adult patients.' },
            { name: 'Sofosbuvir Tablets', strength: '400mg', form: 'Tablets', packaging: 'Bottles', desc: 'Direct-acting antiviral agent used in combination therapy for chronic Hepatitis C.' },
            { name: 'Remdesivir Injection', strength: '100mg', form: 'Injectables', packaging: 'IV Bags', desc: 'Broad-spectrum antiviral administered via intravenous infusion for severe viral infections.' },
            { name: 'Entecavir Tablets USP', strength: '0.5mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Guanosine nucleoside analogue for chronic hepatitis B virus infection.' },
            { name: 'Acyclovir Capsules', strength: '400mg', form: 'Capsules', packaging: '10×15 Strips', desc: 'Antiviral drug active against herpes simplex and varicella-zoster viruses.' },
            { name: 'Favipiravir Tablets', strength: '200mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Oral antiviral targeting RNA polymerase in influenza and respiratory viruses.' },
            { name: 'Oseltamivir Capsules', strength: '75mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Neuraminidase inhibitor for treatment and prevention of influenza A and B.' },
            { name: 'Ritonavir Tablets', strength: '100mg', form: 'Tablets', packaging: 'Bottles', desc: 'HIV protease inhibitor used to boost exposure of other antivirals.' }
        ]
    },
    'anti-tb-drugs': {
        title: 'Anti-TB Regimen Guide',
        tag: 'Anti-TB',
        desc: 'First-line and second-line anti-tuberculosis regimens for comprehensive mycobacterial treatment.',
        icon: '🫁',
        coverClass: 'grad-orange',
        count: '18 Items',
        downloadMsg: 'Anti-TB Drugs Specification Booklet',
        samples: [
            { name: 'Rifampicin Capsules USP', strength: '300mg', form: 'Capsules', packaging: 'Bottles', desc: 'Semisynthetic antibiotic crucial for first-line treatment of tuberculosis.' },
            { name: 'Isoniazid Tablets', strength: '100mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Core antimycobacterial agent acting on the cell wall synthesis of M. tuberculosis.' },
            { name: 'Pyrazinamide Tablets', strength: '500mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Key bactericidal drug used in combination for active tuberculosis regimens.' },
            { name: 'Ethambutol Hydrochloride', strength: '400mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Bacteriostatic agent preventing mycobacterial cell wall synthesis.' },
            { name: 'Cycloserine Capsules', strength: '250mg', form: 'Capsules', packaging: 'Bottles', desc: 'Second-line TB therapeutic targeting cell wall peptidoglycan synthesis.' },
            { name: 'Ethionamide Tablets', strength: '250mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Second-line treatment option for multi-drug resistant tuberculosis.' },
            { name: 'Rifabutin Capsules', strength: '150mg', form: 'Capsules', packaging: 'Bottles', desc: 'Antimycobacterial agent primarily used for MAC prevention and treatment.' }
        ]
    },
    'oncology-drugs': {
        title: 'Oncology Therapeutics',
        tag: 'Oncology',
        desc: 'High-potency cytotoxic therapies, targeted monoclonal antibodies, and supportive care oncology drugs.',
        icon: '🎗️',
        coverClass: 'grad-purple',
        count: '32 Items',
        downloadMsg: 'Oncology Drugs Specification Booklet',
        samples: [
            { name: 'Doxorubicin Injection', strength: '50mg', form: 'Injectables', packaging: 'IV Bags', desc: 'Anthracycline topoisomerase II inhibitor for various solid tumors.' },
            { name: 'Paclitaxel Infusion', strength: '100mg', form: 'Injectables', packaging: 'IV Bags', desc: 'Microtubule stabilizer indicated for breast, ovarian, and lung cancers.' },
            { name: 'Imatinib Mesylate Tablets', strength: '400mg', form: 'Tablets', packaging: 'Bottles', desc: 'Tyrosine kinase inhibitor targeting BCR-ABL in Philadelphia+ leukemia.' },
            { name: 'Gemcitabine Injection', strength: '1g', form: 'Injectables', packaging: 'IV Bags', desc: 'Nucleoside metabolic inhibitor for pancreatic and lung carcinomas.' },
            { name: 'Erlotinib Tablets', strength: '150mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'EGFR tyrosine kinase inhibitor for non-small cell lung cancer.' },
            { name: 'Bortezomib Injection', strength: '3.5mg', form: 'Injectables', packaging: 'IV Bags', desc: 'Reversible proteasome inhibitor for multiple myeloma therapy.' },
            { name: 'Temozolomide Capsules', strength: '100mg', form: 'Capsules', packaging: 'Bottles', desc: 'Alkylating agent crossing blood-brain barrier for glioblastomas.' }
        ]
    },
    'antibiotics': {
        title: 'Antibiotic Catalogue',
        tag: 'Antibiotics',
        desc: 'Broad-spectrum and narrow-spectrum antibacterial formulations for systemic infection control.',
        icon: '🧪',
        coverClass: 'grad-blue',
        count: '55 Items',
        downloadMsg: 'Antibiotics Specification Booklet',
        samples: [
            { name: 'Amoxicillin & Clavulanate', strength: '1.2g', form: 'Injectables', packaging: 'IV Bags', desc: 'Combination beta-lactamase inhibitor and penicillin for systemic infections.' },
            { name: 'Azithromycin Tablets USP', strength: '500mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Macrolide antibiotic targeting bacterial protein synthesis.' },
            { name: 'Ceftriaxone Injection USP', strength: '1g', form: 'Injectables', packaging: 'IV Bags', desc: 'Third-generation cephalosporin for severe respiratory, urinary, and skin infections.' },
            { name: 'Ciprofloxacin Tablets', strength: '500mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Fluoroquinolone broad-spectrum antibacterial targeting DNA gyrase.' },
            { name: 'Meropenem Injection', strength: '1g', form: 'Injectables', packaging: 'IV Bags', desc: 'Ultra-broad spectrum carbapenem antibiotic for severe nosocomial infections.' },
            { name: 'Doxycycline Capsules', strength: '100mg', form: 'Capsules', packaging: '10×15 Strips', desc: 'Tetracycline antibiotic for bacterial acne, Lyme disease, and chlamydia.' },
            { name: 'Clarithromycin Tablets', strength: '500mg', form: 'Tablets', packaging: 'Bottles', desc: 'Macrolide antibiotic active against H. pylori and atypical mycobacteria.' },
            { name: 'Cefixime Oral Suspension', strength: '100mg/5ml', form: 'Syrups', packaging: 'Bottles', desc: 'Third-generation oral cephalosporin targeting cell wall synthesis.' }
        ]
    },
    'cardiovascular-drugs': {
        title: 'Cardiovascular Care',
        tag: 'Cardiovascular',
        desc: 'Antihypertensives, lipid-lowering agents, and anti-arrhythmics managing cardiac health.',
        icon: '❤️',
        coverClass: 'grad-blue-dark',
        count: '45 Items',
        downloadMsg: 'Cardiovascular Drugs Specification Booklet',
        samples: [
            { name: 'Atorvastatin Tablets USP', strength: '20mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'HMG-CoA reductase inhibitor (statin) for hypercholesterolemia management.' },
            { name: 'Amlodipine Tablets', strength: '5mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Calcium channel blocker for treating hypertension and angina pectoris.' },
            { name: 'Clopidogrel Bisulfate', strength: '75mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Antiplatelet agent preventing blood clots in post-stroke or MI patients.' },
            { name: 'Losartan Potassium', strength: '50mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Angiotensin II receptor antagonist managing hypertension and diabetic nephropathy.' },
            { name: 'Ramipril Capsules', strength: '5mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'ACE inhibitor lowering blood pressure and reducing risk of myocardial infarction.' },
            { name: 'Metoprolol Succinate ER', strength: '50mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Selective beta-blocker for heart failure, angina, and systemic hypertension.' },
            { name: 'Furosemide Injection', strength: '20mg/2ml', form: 'Injectables', packaging: 'IV Bags', desc: 'Loop diuretic for severe edema, pulmonary congestion, and hypertension.' }
        ]
    },
    'anti-diabetic-drugs': {
        title: 'Anti-Diabetic Portfolio',
        tag: 'Anti-Diabetic',
        desc: 'Oral hypoglycemics, insulin sensitizers, and advanced glycemic control therapies.',
        icon: '🩸',
        coverClass: 'grad-green',
        count: '40 Items',
        downloadMsg: 'Anti-Diabetic Drugs Specification Booklet',
        samples: [
            { name: 'Metformin Hydrochloride ER', strength: '500mg', form: 'Tablets', packaging: 'Bottles', desc: 'First-line biguanide antihyperglycemic improving insulin sensitivity.' },
            { name: 'Glimepiride Tablets', strength: '2mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Sulfonylurea stimulating pancreatic beta cells to release more insulin.' },
            { name: 'Sitagliptin Phosphate', strength: '100mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'DPP-4 inhibitor maintaining higher levels of active incretin hormones.' },
            { name: 'Pioglitazone Tablets', strength: '15mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Thiazolidinedione acting as a selective agonist for PPAR-gamma receptors.' },
            { name: 'Gliclazide MR Tablets', strength: '60mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Modified-release sulfonylurea for glycemic control in Type 2 diabetes.' },
            { name: 'Dapagliflozin Tablets', strength: '10mg', form: 'Tablets', packaging: 'Bottles', desc: 'SGLT2 inhibitor promoting urinary glucose excretion.' }
        ]
    },
    'analgesics-antipyretics': {
        title: 'Analgesics & Antipyretics',
        tag: 'Analgesics',
        desc: 'Non-steroidal anti-inflammatory drugs (NSAIDs) and antipyretics for effective pain and fever management.',
        icon: '⚡',
        coverClass: 'grad-teal',
        count: '25 Items',
        downloadMsg: 'Analgesics & Antipyretics Specification Booklet',
        samples: [
            { name: 'Paracetamol Tablets IP', strength: '650mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Analgesic and antipyretic drug for systemic pain and fever reduction.' },
            { name: 'Ibuprofen Tablets USP', strength: '400mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Non-steroidal anti-inflammatory drug (NSAID) relieving pain and swelling.' },
            { name: 'Diclofenac Sodium SR', strength: '100mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Sustained-release formulation for chronic arthritic pain management.' },
            { name: 'Tramadol Hydrochloride', strength: '50mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Centrally acting synthetic opioid analgesic for moderate-to-severe pain.' },
            { name: 'Paracetamol Oral Suspension', strength: '120mg/5ml', form: 'Syrups', packaging: 'Bottles', desc: 'Liquid antipyretic and pain reliever suitable for pediatric administration.' },
            { name: 'Aceclofenac Tablets', strength: '100mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'NSAID with anti-inflammatory properties, ideal for rheumatoid arthritis.' }
        ]
    },
    'erectile-dysfunction-drugs': {
        title: 'Erectile Dysfunction Care',
        tag: 'Erectile Dysfunction',
        desc: 'Selective phosphodiesterase type 5 (PDE5) inhibitors for the treatment of erectile dysfunction.',
        icon: '💪',
        coverClass: 'grad-gold',
        count: '12 Items',
        downloadMsg: 'Erectile Dysfunction Drugs Specification Booklet',
        samples: [
            { name: 'Sildenafil Citrate Tablets', strength: '100mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'First PDE5 inhibitor approved for medical treatment of erectile dysfunction.' },
            { name: 'Tadalafil Tablets USP', strength: '20mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Highly selective PDE5 inhibitor boasting an extended duration of action.' },
            { name: 'Vardenafil Tablets', strength: '20mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'PDE5 inhibitor with fast onset of action and high potency profiles.' },
            { name: 'Avanafil Tablets', strength: '100mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Second-generation rapid-acting PDE5 inhibitor for ED therapeutic support.' }
        ]
    },
    'gastrointestinal-drugs': {
        title: 'Gastrointestinal Care',
        tag: 'Gastrointestinal',
        desc: 'Proton pump inhibitors, antacids, and anti-emetics for comprehensive gastrointestinal care.',
        icon: '🍽️',
        coverClass: 'grad-orange',
        count: '30 Items',
        downloadMsg: 'Gastrointestinal Drugs Specification Booklet',
        samples: [
            { name: 'Omeprazole Capsules', strength: '20mg', form: 'Capsules', packaging: 'Bottles', desc: 'Proton pump inhibitor (PPI) suppressing gastric acid secretion.' },
            { name: 'Pantoprazole Sodium', strength: '40mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Irreversible PPI for treating gastroesophageal reflux disease and ulcers.' },
            { name: 'Domperidone Tablets', strength: '10mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Dopamine receptor antagonist acting as a gastroprokinetic and antiemetic.' },
            { name: 'Ondansetron Injection', strength: '2mg/ml', form: 'Injectables', packaging: 'IV Bags', desc: 'Serotonin 5-HT3 receptor antagonist preventing severe nausea and vomiting.' },
            { name: 'Rabeprazole & Domperidone', strength: '20mg/30mg', form: 'Capsules', packaging: '10×15 Strips', desc: 'Combination PPI and prokinetic capsules for complex acid reflux relief.' },
            { name: 'Sucralfate Suspension', strength: '1g/10ml', form: 'Syrups', packaging: 'Bottles', desc: 'Oral suspension serving as an cytoprotective mucosal barrier for gastric ulcers.' }
        ]
    },
    'anti-asthma-respiratory-drugs': {
        title: 'Respiratory Solutions',
        tag: 'Respiratory',
        desc: 'Bronchodilators, inhaled corticosteroids, and anti-asthmatic agents supporting respiratory function.',
        icon: '💨',
        coverClass: 'grad-blue',
        count: '22 Items',
        downloadMsg: 'Anti-Asthma & Respiratory Drugs Specification Booklet',
        samples: [
            { name: 'Salbutamol Syrup', strength: '2mg/5ml', form: 'Syrups', packaging: 'Bottles', desc: 'Beta-2 adrenergic agonist oral liquid for bronchospasm relief.' },
            { name: 'Montelukast Sodium', strength: '10mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Leukotriene receptor antagonist preventing asthma attacks and allergies.' },
            { name: 'Budesonide Respules', strength: '0.5mg/2ml', form: 'Injectables', packaging: 'Bottles', desc: 'Inhaled corticosteroid suspension for nebulization in chronic asthma.' },
            { name: 'Levosalbutamol & Ipratropium', strength: '1.25mg/500mcg', form: 'Syrups', packaging: 'Bottles', desc: 'Combination bronchodilator solution for severe chronic bronchitis and COPD.' }
        ]
    },
    'dermatology-drugs': {
        title: 'Dermatology Catalogue',
        tag: 'Dermatology',
        desc: 'Topical corticosteroids, antifungal creams, and specialized formulations for advanced skin care.',
        icon: '🧴',
        coverClass: 'grad-purple',
        count: '35 Items',
        downloadMsg: 'Dermatology Drugs Specification Booklet',
        samples: [
            { name: 'Clobetasol Propionate Cream', strength: '0.05% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'High-potency topical corticosteroid reducing eczema and psoriasis inflammation.' },
            { name: 'Mupirocin Ointment USP', strength: '2% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Topical monoxycarbolic acid antibiotic treating impetigo and skin infections.' },
            { name: 'Adapalene Gel', strength: '0.1% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Third-generation topical retinoid for mild-to-moderate acne vulgaris.' },
            { name: 'Hydrocortisone Cream', strength: '1% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Mild corticosteroid relieving skin itching, redness, and swelling.' },
            { name: 'Ketoconazole Shampoo', strength: '2% w/v', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Antifungal shampoo targeting Malassezia infections on scalp skin.' }
        ]
    },
    'anti-fungal-drugs': {
        title: 'Anti-Fungal Portfolio',
        tag: 'Anti-Fungal',
        desc: 'Oral and topical antimycotics designed for effective treatment of fungal and yeast infections.',
        icon: '🍄',
        coverClass: 'grad-green-dark',
        count: '20 Items',
        downloadMsg: 'Anti-Fungal Drugs Specification Booklet',
        samples: [
            { name: 'Fluconazole Capsules', strength: '150mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Systemic triazole antifungal for cryptococcal meningitis and candida.' },
            { name: 'Itraconazole Capsules', strength: '100mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Broad-spectrum triazole antifungal active against deep-seated mycoses.' },
            { name: 'Terbinafine Tablets', strength: '250mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Allylamine antifungal agent concentrating in skin and nails.' },
            { name: 'Luliconazole Cream', strength: '1% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Imidazole antifungal cream for tinea pedis, cruris, and corporis.' },
            { name: 'Amphotericin B Injection', strength: '50mg', form: 'Injectables', packaging: 'IV Bags', desc: 'Polyene antifungal medication for systemic, life-threatening fungal infections.' }
        ]
    },
    'herbal-ayurvedic': {
        title: 'Herbal & Ayurvedic',
        tag: 'Herbal & Ayurvedic',
        desc: 'Standardized herbal extracts and traditional Ayurvedic formulations for holistic wellness.',
        icon: '🌿',
        coverClass: 'grad-green',
        count: '60 Items',
        downloadMsg: 'Herbal & Ayurvedic Specification Booklet',
        samples: [
            { name: 'Ashwagandha Extract Caps', strength: '500mg', form: 'Capsules', packaging: 'Bottles', desc: 'Rejuvenating adaptogen capsule supporting stress reduction and vitality.' },
            { name: 'Curcumin Tablets', strength: '95%', form: 'Tablets', packaging: 'Bottles', desc: 'Standardized turmeric extract offering advanced anti-inflammatory properties.' },
            { name: 'Triphala Capsules', strength: '500mg', form: 'Capsules', packaging: 'Bottles', desc: 'Traditional formulation combining three fruits to assist digestion.' },
            { name: 'Herbal Cough Syrup', strength: 'Standard', form: 'Syrups', packaging: 'Bottles', desc: 'Non-drowsy Ayurvedic syrup with Honey, Tulsi, and Vasaka.' },
            { name: 'Neem Soothing Gel', strength: '100g', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Purifying neem topical gel for acne-prone skin conditions.' }
        ]
    },
    'general-medicines': {
        title: 'General Medicine Spec',
        tag: 'General Medicine',
        desc: 'Common therapeutic agents, multi-vitamins, and essential formulations for daily medical needs.',
        icon: '💊',
        coverClass: 'grad-blue-dark',
        count: '120 Items',
        downloadMsg: 'General Medicines Specification Booklet',
        samples: [
            { name: 'Multivitamin Capsules', strength: 'Premium', form: 'Capsules', packaging: 'Bottles', desc: 'Comprehensive daily supplement supplying essential vitamins and minerals.' },
            { name: 'Vitamin D3 Chewable', strength: '60000 IU', form: 'Tablets', packaging: '10×10 Strips', desc: 'High-strength cholecalciferol for bone health and immune support.' },
            { name: 'Calcium & Vit D3 Tablets', strength: '500mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Bone density support formula containing calcium carbonate and vitamin D3.' },
            { name: 'Cough & Cold Syrups', strength: 'Various', form: 'Syrups', packaging: 'Bottles', desc: 'Combined antihistamine and decongestant formulation.' },
            { name: 'Paracetamol Infusion', strength: '1000mg/100ml', form: 'Injectables', packaging: 'IV Bags', desc: 'Intravenous paracetamol for post-operative acute pain and fever.' }
        ]
    }
};

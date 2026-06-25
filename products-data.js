/* ==========================================
   MÉROKIS PRODUCTS DATABASE
   Shared product catalogue data for all categories
   ========================================== */

const catalogueDB = {
    'anaesthesia': {
        title: 'Anaesthesia',
        tag: 'Anaesthesia',
        desc: 'High-quality anaesthesia and perioperative pharmaceutical solutions designed for surgical procedures, pain management, and critical care, manufactured to international quality standards.',
        icon: '💤',
        coverClass: 'grad-teal',
        count: '12 Items',
        downloadMsg: 'Anaesthesia Specification Booklet',
        samples: [
            {
                name: 'Bupivacaine & Dextrose Injection USP',
                strength: 'Bupivacaine 20 mg + Dextrose 320 mg',
                form: 'Injection',
                packaging: '4 ml',
                desc: 'Local anesthetic indicated for spinal anesthesia during surgical procedures.'
            },
            {
                name: 'Bupivacaine Injection IP',
                strength: '100 mg / 20 ml',
                form: 'Injection',
                packaging: '20 ml',
                desc: 'Long-acting local anesthetic for regional block, infiltration, and epidural anesthesia.'
            },
            {
                name: 'Dexmedetomidine Injection USP',
                strength: '100 mg/ml',
                form: 'Injection',
                packaging: '1 ml',
                desc: 'Selective alpha-2 adrenergic agonist indicated for sedation of intubated and mechanically ventilated patients.'
            },
            {
                name: 'Glycopyrrolate Injection IP',
                strength: '0.2 mg/ml',
                form: 'Injection',
                packaging: '1 ml',
                desc: 'Anticholinergic agent indicated for use as a preoperative medication to reduce salivary and respiratory secretions.'
            },
            {
                name: 'Lidocaine & Prilocaine Cream IP',
                strength: 'Standard formulation',
                form: 'Cream',
                packaging: '30 g',
                desc: 'Topical anesthetic cream indicated for local anesthesia of intact skin prior to superficial procedures.'
            },
            {
                name: 'Lidocaine & Adrenaline Injection IP',
                strength: 'Lidocaine 20 mg + Adrenaline 22.5 mcg',
                form: 'Injection',
                packaging: '1.8 ml',
                desc: 'Anesthetic injection indicated for local infiltration, dental procedures, and nerve blocks.'
            },
            {
                name: 'Lidocaine Spray IP',
                strength: '100 mg/ml',
                form: 'Spray',
                packaging: '50 ml',
                desc: 'Topical anesthetic spray indicated for temporary anesthesia of mucosal membranes during minor procedures.'
            },
            {
                name: 'Lignocaine & Adrenaline Injection IP',
                strength: 'Lignocaine 2% w/v + Adrenaline 0.001% w/v',
                form: 'Injection',
                packaging: '30 ml',
                desc: 'Local anesthetic combination indicated for local infiltration and peripheral nerve blocks.'
            },
            {
                name: 'Lignocaine HCl Gel IP',
                strength: '2% w/v',
                form: 'Gel',
                packaging: '30 g',
                desc: 'Topical anesthetic gel indicated for anesthesia of mucosal membranes of the urethra and lubrication.'
            },
            {
                name: 'Lignocaine Injection IP',
                strength: '2%',
                form: 'Injection',
                packaging: '30 ml',
                desc: 'Standard local anesthetic indicated for infiltration, nerve blocks, and epidural anesthesia.'
            },
            {
                name: 'Propofol Injection IP',
                strength: '100 mg / 10 ml',
                form: 'Injection',
                packaging: '10 ml / 20 ml',
                desc: 'Short-acting intravenous sedative-hypnotic agent indicated for induction and maintenance of general anesthesia.'
            },
            {
                name: 'Thiopentone Injection IP',
                strength: '500 mg / 1000 mg',
                form: 'Injection',
                packaging: '500 mg / 1 g',
                desc: 'Ultra-short-acting barbiturate anesthetic indicated for induction of general anesthesia and management of intracranial pressure.'
            }
        ]
    },
    'analgesic-antipyretic': {
        title: 'Analgesic & Antipyretic',
        tag: 'Analgesics',
        desc: 'Effective NSAIDs and antipyretics for systemic pain relief and fever management.',
        icon: '⚡',
        coverClass: 'grad-orange',
        count: '35 Items',
        downloadMsg: 'Analgesic & Antipyretic Specification Booklet',
        samples: [
            { name: 'Paracetamol Tablets IP', strength: '650mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Analgesic and antipyretic drug for systemic pain and fever reduction.' },
            { name: 'Ibuprofen Tablets USP', strength: '400mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Non-steroidal anti-inflammatory drug (NSAID) relieving pain and swelling.' },
            { name: 'Diclofenac Sodium SR', strength: '100mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Sustained-release formulation for chronic arthritic pain management.' },
            { name: 'Aceclofenac Tablets', strength: '100mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'NSAID with anti-inflammatory properties, ideal for rheumatoid arthritis.' },
            { name: 'Tramadol Hydrochloride', strength: '50mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Centrally acting synthetic opioid analgesic for moderate-to-severe pain.' },
            { name: 'Mefenamic Acid Tablets', strength: '500mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'NSAID indicated for short-term relief of mild-to-moderate pain.' }
        ]
    },
    'anti-malaria': {
        title: 'Anti Malaria Portfolio',
        tag: 'Anti Malaria',
        desc: 'Advanced antimalarial formulations for the prevention and treatment of plasmodium infections.',
        icon: '🦟',
        coverClass: 'grad-purple',
        count: '12 Items',
        downloadMsg: 'Anti Malaria Specification Booklet',
        samples: [
            { name: 'Artemether & Lumefantrine', strength: '80mg/480mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Fixed-dose combination antimalarial for acute uncomplicated plasmodium falciparum malaria.' },
            { name: 'Artesunate Injection', strength: '60mg', form: 'Injectables', packaging: 'Bottles', desc: 'Intravenous or intramuscular artesunate for severe malaria therapy.' },
            { name: 'Chloroquine Phosphate', strength: '250mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Aminoquinoline agent for the treatment and prophylaxis of susceptible malaria strains.' },
            { name: 'Quinine Sulfate Tablets', strength: '300mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Cinchona alkaloid indicated for the treatment of uncomplicated malaria.' },
            { name: 'Primaquine Phosphate', strength: '15mg', form: 'Tablets', packaging: '10×10 Strips', desc: '8-aminoquinoline indicated for radical cure of vivax and ovale malaria.' }
        ]
    },
    'antibiotics': {
        title: 'Antibiotics Portfolio',
        tag: 'Antibiotics',
        desc: 'Broad and narrow-spectrum antibacterial formulations for robust systemic infection control.',
        icon: '🧪',
        coverClass: 'grad-blue',
        count: '55 Items',
        downloadMsg: 'Antibiotics Specification Booklet',
        samples: [
            { name: 'Amoxicillin & Clavulanate', strength: '625mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Combination beta-lactamase inhibitor and penicillin for systemic infections.' },
            { name: 'Azithromycin Tablets USP', strength: '500mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Macrolide antibiotic targeting bacterial protein synthesis.' },
            { name: 'Ceftriaxone Injection USP', strength: '1g', form: 'Injectables', packaging: 'IV Bags', desc: 'Third-generation cephalosporin for severe respiratory, urinary, and skin infections.' },
            { name: 'Ciprofloxacin Tablets', strength: '500mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Fluoroquinolone broad-spectrum antibacterial targeting DNA gyrase.' },
            { name: 'Meropenem Injection', strength: '1g', form: 'Injectables', packaging: 'IV Bags', desc: 'Ultra-broad spectrum carbapenem antibiotic for severe nosocomial infections.' },
            { name: 'Doxycycline Capsules', strength: '100mg', form: 'Capsules', packaging: '10×15 Strips', desc: 'Tetracycline antibiotic for bacterial acne, Lyme disease, and chlamydia.' }
        ]
    },
    'antidiabetic': {
        title: 'Antidiabetic Portfolio',
        tag: 'Antidiabetic',
        desc: 'Advanced oral hypoglycemics and glycemic management therapies for diabetes care.',
        icon: '🩸',
        coverClass: 'grad-blue-dark',
        count: '40 Items',
        downloadMsg: 'Antidiabetic Specification Booklet',
        samples: [
            { name: 'Metformin Hydrochloride ER', strength: '500mg', form: 'Tablets', packaging: 'Bottles', desc: 'First-line biguanide antihyperglycemic improving insulin sensitivity.' },
            { name: 'Glimepiride Tablets', strength: '2mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Sulfonylurea stimulating pancreatic beta cells to release more insulin.' },
            { name: 'Sitagliptin Phosphate', strength: '100mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'DPP-4 inhibitor maintaining higher levels of active incretin hormones.' },
            { name: 'Pioglitazone Tablets', strength: '15mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Thiazolidinedione acting as a selective agonist for PPAR-gamma receptors.' },
            { name: 'Dapagliflozin Tablets', strength: '10mg', form: 'Tablets', packaging: 'Bottles', desc: 'SGLT2 inhibitor promoting urinary glucose excretion.' }
        ]
    },
    'antifungal': {
        title: 'Antifungal Portfolio',
        tag: 'Antifungal',
        desc: 'Oral and topical antimycotics for targeted treatment of fungal skin and systemic infections.',
        icon: '🍄',
        coverClass: 'grad-green',
        count: '20 Items',
        downloadMsg: 'Antifungal Specification Booklet',
        samples: [
            { name: 'Fluconazole Capsules', strength: '150mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Systemic triazole antifungal for cryptococcal meningitis and candida.' },
            { name: 'Itraconazole Capsules', strength: '100mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Broad-spectrum triazole antifungal active against deep-seated mycoses.' },
            { name: 'Terbinafine Tablets', strength: '250mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Allylamine antifungal agent concentrating in skin and nails.' },
            { name: 'Luliconazole Cream', strength: '1% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Imidazole antifungal cream for tinea pedis, cruris, and corporis.' },
            { name: 'Ketoconazole Cream', strength: '2% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Topical broad-spectrum imidazole antifungal agent.' }
        ]
    },
    'antipsychotic': {
        title: 'Antipsychotic Portfolio',
        tag: 'Antipsychotic',
        desc: 'Specialized psychotropic medications managing schizophrenia, bipolar disorder, and mood stability.',
        icon: '🧠',
        coverClass: 'grad-gold',
        count: '18 Items',
        downloadMsg: 'Antipsychotic Specification Booklet',
        samples: [
            { name: 'Olanzapine Tablets', strength: '10mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Atypical antipsychotic for treatment of schizophrenia and acute bipolar episodes.' },
            { name: 'Risperidone Tablets', strength: '2mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Benzisoxazole atypical antipsychotic indicated for delusional psychoses.' },
            { name: 'Haloperidol Injection', strength: '5mg/ml', form: 'Injectables', packaging: 'Bottles', desc: 'Conventional butyrophenone neuroleptic for chronic psychoses and emergencies.' },
            { name: 'Quetiapine Fumarate', strength: '100mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Atypical agent for schizophrenia, bipolar mania, and major depressive disorder.' },
            { name: 'Aripiprazole Tablets', strength: '15mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Quinolinone atypical antipsychotic acting as partial dopamine agonist.' }
        ]
    },
    'antiviral': {
        title: 'Antiviral Portfolio',
        tag: 'Antiviral',
        desc: 'High-efficacy antiviral formulations targeting replication pathways and viral loads.',
        icon: '🛡️',
        coverClass: 'grad-green-dark',
        count: '25 Items',
        downloadMsg: 'Antiviral Specification Booklet',
        samples: [
            { name: 'Tenofovir Alafenamide', strength: '25mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Indicated for chronic hepatitis B infection in adult patients.' },
            { name: 'Sofosbuvir Tablets', strength: '400mg', form: 'Tablets', packaging: 'Bottles', desc: 'Direct-acting antiviral agent used in combination therapy for chronic Hepatitis C.' },
            { name: 'Entecavir Tablets USP', strength: '0.5mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Guanosine nucleoside analogue for chronic hepatitis B virus infection.' },
            { name: 'Acyclovir Capsules', strength: '400mg', form: 'Capsules', packaging: '10×15 Strips', desc: 'Antiviral drug active against herpes simplex and varicella-zoster viruses.' },
            { name: 'Oseltamivir Capsules', strength: '75mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Neuraminidase inhibitor for treatment and prevention of influenza A and B.' }
        ]
    },
    'cardiovascular-drugs': {
        title: 'Cardiovascular Care',
        tag: 'Cardiovascular',
        desc: 'Cardioprotective agents, antihypertensives, and lipid-lowering drugs managing cardiac health.',
        icon: '❤️',
        coverClass: 'grad-teal',
        count: '45 Items',
        downloadMsg: 'Cardiovascular Drugs Specification Booklet',
        samples: [
            { name: 'Atorvastatin Tablets USP', strength: '20mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'HMG-CoA reductase inhibitor (statin) for hypercholesterolemia management.' },
            { name: 'Amlodipine Tablets', strength: '5mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Calcium channel blocker for treating hypertension and angina pectoris.' },
            { name: 'Losartan Potassium', strength: '50mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Angiotensin II receptor antagonist managing hypertension.' },
            { name: 'Clopidogrel Bisulfate', strength: '75mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Antiplatelet agent preventing blood clots in post-stroke or MI patients.' },
            { name: 'Metoprolol Succinate ER', strength: '50mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Selective beta-blocker for heart failure, angina, and systemic hypertension.' }
        ]
    },
    'dermatology-drugs': {
        title: 'Dermatology Catalogue',
        tag: 'Dermatology',
        desc: 'Therapeutic creams, topical steroids, and advanced formulations for dermatological conditions.',
        icon: '🧴',
        coverClass: 'grad-orange',
        count: '35 Items',
        downloadMsg: 'Dermatology Drugs Specification Booklet',
        samples: [
            { name: 'Clobetasol Propionate Cream', strength: '0.05% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'High-potency topical corticosteroid reducing eczema and psoriasis inflammation.' },
            { name: 'Mupirocin Ointment USP', strength: '2% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Topical monoxycarbolic acid antibiotic treating impetigo and skin infections.' },
            { name: 'Adapalene Gel', strength: '0.1% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Third-generation topical retinoid for mild-to-moderate acne vulgaris.' },
            { name: 'Hydrocortisone Cream', strength: '1% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Mild corticosteroid relieving skin itching, redness, and swelling.' },
            { name: 'Benzoyl Peroxide Gel', strength: '2.5% w/w', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Topical antibacterial agent indicated for mild-to-moderate acne.' }
        ]
    },
    'gastro-intestinal': {
        title: 'Gastro-Intestinal Care',
        tag: 'Gastro-Intestinal',
        desc: 'Proton pump inhibitors, antacids, and anti-emetics for stomach and digestive health.',
        icon: '🍽️',
        coverClass: 'grad-purple',
        count: '30 Items',
        downloadMsg: 'Gastro-Intestinal Specification Booklet',
        samples: [
            { name: 'Omeprazole Capsules', strength: '20mg', form: 'Capsules', packaging: 'Bottles', desc: 'Proton pump inhibitor (PPI) suppressing gastric acid secretion.' },
            { name: 'Pantoprazole Sodium', strength: '40mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Irreversible PPI for treating gastroesophageal reflux disease and ulcers.' },
            { name: 'Domperidone Tablets', strength: '10mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Dopamine receptor antagonist acting as a gastroprokinetic and antiemetic.' },
            { name: 'Ondansetron Injection', strength: '2mg/ml', form: 'Injectables', packaging: 'IV Bags', desc: 'Serotonin 5-HT3 receptor antagonist preventing severe nausea and vomiting.' },
            { name: 'Rabeprazole & Domperidone', strength: '20mg/30mg', form: 'Capsules', packaging: '10×15 Strips', desc: 'Combination PPI and prokinetic capsules for complex acid reflux relief.' }
        ]
    },
    'general-medicine': {
        title: 'General Medicine Spec',
        tag: 'General Medicine',
        desc: 'Essential primary care formulations, multi-vitamins, and daily therapeutic solutions.',
        icon: '💊',
        coverClass: 'grad-blue',
        count: '120 Items',
        downloadMsg: 'General Medicine Specification Booklet',
        samples: [
            { name: 'Paracetamol Infusion', strength: '1000mg/100ml', form: 'Injectables', packaging: 'IV Bags', desc: 'Intravenous paracetamol for post-operative acute pain and fever.' },
            { name: 'Vitamin D3 Chewable', strength: '60000 IU', form: 'Tablets', packaging: '10×10 Strips', desc: 'High-strength cholecalciferol for bone health and immune support.' },
            { name: 'Calcium & Vit D3 Tablets', strength: '500mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Bone density support formula containing calcium carbonate and vitamin D3.' },
            { name: 'Cetirizine Hydrochloride', strength: '10mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Selective H1-antagonist for allergic rhinitis and chronic urticaria treatment.' },
            { name: 'Azelastine Nasal Spray', strength: '137mcg', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Intranasal antihistamine for seasonal and perennial allergic rhinitis.' }
        ]
    },
    'gynaec': {
        title: 'Gynaec Therapeutics',
        tag: 'Gynaec',
        desc: "Specialized obstetric and gynecological therapies supporting women's reproductive health.",
        icon: '🌸',
        coverClass: 'grad-blue-dark',
        count: '24 Items',
        downloadMsg: 'Gynaec Specification Booklet',
        samples: [
            { name: 'Progesterone SR Tablets', strength: '300mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Sustained-release natural progesterone for hormonal and luteal support.' },
            { name: 'Clomifene Citrate Tablets', strength: '50mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Nonsteroidal ovulatory stimulant indicated for treating ovulatory dysfunction.' },
            { name: 'Mifepristone Tablets', strength: '200mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Progesterone receptor antagonist indicated for medical termination of pregnancy.' },
            { name: 'Isoxsuprine HCl SR', strength: '40mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Sustained-release uterine relaxant to prevent premature labor.' },
            { name: 'Folic Acid & Iron Tablets', strength: 'Standard', form: 'Tablets', packaging: '10×15 Strips', desc: 'Key hematinic supplement indicated during pregnancy and lactation.' }
        ]
    },
    'health-supplement': {
        title: 'Health Supplements',
        tag: 'Supplements',
        desc: 'Premium vitamins, minerals, and dietary supplements supporting systemic immune wellness.',
        icon: '🔋',
        coverClass: 'grad-green',
        count: '48 Items',
        downloadMsg: 'Health Supplement Specification Booklet',
        samples: [
            { name: 'Multivitamin & Minerals', strength: 'Premium', form: 'Capsules', packaging: 'Bottles', desc: 'Comprehensive daily supplement supplying essential vitamins and minerals.' },
            { name: 'Omega-3 Fish Oil', strength: '1000mg', form: 'Capsules', packaging: 'Bottles', desc: 'Rich in EPA and DHA, supporting cardiovascular health and joint functions.' },
            { name: 'Whey Protein Isolate', strength: 'Standard', form: 'Tablets', packaging: 'Bottles', desc: 'High-purity protein supplement to support muscle recovery and synthesis.' },
            { name: 'Zinc & Vitamin C Chew', strength: 'Standard', form: 'Tablets', packaging: '10×15 Strips', desc: 'Essential immune-boosting combination for defense against common infections.' },
            { name: 'Coenzyme Q10 Capsules', strength: '100mg', form: 'Capsules', packaging: 'Bottles', desc: 'Important antioxidant supporting cellular energy and heart health.' }
        ]
    },
    'herbal': {
        title: 'Herbal & Botanical',
        tag: 'Herbal',
        desc: 'Standardized organic botanicals and natural extracts promoting holistic wellbeing.',
        icon: '🌿',
        coverClass: 'grad-gold',
        count: '40 Items',
        downloadMsg: 'Herbal Specification Booklet',
        samples: [
            { name: 'Ashwagandha Capsules', strength: '500mg', form: 'Capsules', packaging: 'Bottles', desc: 'Rejuvenating adaptogen capsule supporting stress reduction and vitality.' },
            { name: 'Curcumin Extract Tablets', strength: '95%', form: 'Tablets', packaging: 'Bottles', desc: 'Standardized turmeric extract offering advanced anti-inflammatory properties.' },
            { name: 'Triphala Capsules', strength: '500mg', form: 'Capsules', packaging: 'Bottles', desc: 'Traditional formulation combining three fruits to assist digestion.' },
            { name: 'Tulsi Cough Syrup', strength: 'Ayurvedic', form: 'Syrups', packaging: 'Bottles', desc: 'Non-drowsy Ayurvedic syrup with Honey, Tulsi, and Vasaka.' },
            { name: 'Neem Purifying Gel', strength: '100g', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Purifying neem topical gel for acne-prone skin conditions.' }
        ]
    },
    'men-health': {
        title: 'Men Health Portfolio',
        tag: 'Men Health',
        desc: "Specialized formulations, hormone therapies, and selective inhibitors for men's wellness.",
        icon: '💪',
        coverClass: 'grad-green-dark',
        count: '16 Items',
        downloadMsg: 'Men Health Specification Booklet',
        samples: [
            { name: 'Sildenafil Citrate Tablets', strength: '100mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'First PDE5 inhibitor approved for medical treatment of erectile dysfunction.' },
            { name: 'Tadalafil Tablets USP', strength: '20mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Highly selective PDE5 inhibitor boasting an extended duration of action.' },
            { name: 'Finasteride Tablets USP', strength: '1mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Type II 5-alpha reductase inhibitor indicated for male pattern hair loss.' },
            { name: 'Dutasteride Capsules', strength: '0.5mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Dual 5-alpha reductase inhibitor indicated for symptomatic prostatic hyperplasia.' }
        ]
    },
    'neurology': {
        title: 'Neurology Portfolio',
        tag: 'Neurology',
        desc: 'Neurological therapeutics managing epilepsy, neuropathic pain, and cognitive disorders.',
        icon: '🧠',
        coverClass: 'grad-teal',
        count: '22 Items',
        downloadMsg: 'Neurology Specification Booklet',
        samples: [
            { name: 'Gabapentin Tablets USP', strength: '300mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'GABA analogue indicated for postherpetic neuralgia and adjunct seizures.' },
            { name: 'Pregabalin Capsules', strength: '75mg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Ligand for alpha2-delta subunit in CNS, for neuropathic pain and fibromyalgia.' },
            { name: 'Levetiracetam Tablets', strength: '500mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Broad-spectrum anticonvulsant indicated for partial onset seizures.' },
            { name: 'Sodium Valproate Chrono', strength: '500mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Antiepileptic indicated for manic episodes associated with bipolar disorder.' },
            { name: 'Donepezil HCl Tablets', strength: '10mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Reversible acetylcholinesterase inhibitor indicated for Alzheimer dementia.' }
        ]
    },
    'oncology-drugs': {
        title: 'Oncology Drugs',
        tag: 'Oncology',
        desc: 'Comprehensive oncology pharmaceutical solutions designed for cancer treatment and supportive care, manufactured to international quality standards.',
        icon: '🎗️',
        coverClass: 'grad-orange',
        count: '12 Items',
        downloadMsg: 'Oncology Drugs Specification Booklet',
        samples: [
            {
                name: 'Abiraterone Acetate Tablets IP',
                strength: '250 mg / 500 mg',
                form: 'Tablet',
                packaging: '1×120 / 1×60',
                desc: 'Androgen synthesis inhibitor indicated in combination with prednisone for the treatment of metastatic castration-resistant prostate cancer.'
            },
            {
                name: 'Azathioprine Tablets IP',
                strength: '50 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Immunosuppressive antimetabolite indicated as an adjunct for the prevention of rejection in renal homotransplants and rheumatoid arthritis.'
            },
            {
                name: 'Bicalutamide Tablets IP',
                strength: '50 mg',
                form: 'Tablet',
                packaging: '3×10',
                desc: 'Non-steroidal androgen receptor inhibitor indicated for use in combination therapy with a LHRH analog for metastatic prostate cancer.'
            },
            {
                name: 'Capecitabine Tablets IP',
                strength: '500 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Fluoropyrimidine carbamate indicated for adjuvant colon cancer, metastatic colorectal cancer, and metastatic breast cancer.'
            },
            {
                name: 'Gefitinib Tablets IP',
                strength: '250 mg',
                form: 'Tablet',
                packaging: '3×10',
                desc: 'Tyrosine kinase inhibitor indicated for the first-line treatment of patients with metastatic non-small cell lung cancer (NSCLC).'
            },
            {
                name: 'Hydroxyurea Capsules IP',
                strength: '250 mg / 500 mg',
                form: 'Capsule',
                packaging: '10×10',
                desc: 'Antineoplastic agent indicated for resistant chronic myelocytic leukemia and recurrent metastatic carcinoma of the ovary.'
            },
            {
                name: 'Imatinib Tablets IP',
                strength: '400 mg',
                form: 'Tablet',
                packaging: '3×10',
                desc: 'Tyrosine kinase inhibitor indicated for Philadelphia chromosome-positive chronic myeloid leukemia and gastrointestinal stromal tumors.'
            },
            {
                name: 'Lenalidomide Capsules IP',
                strength: '10 mg / 25 mg',
                form: 'Capsule',
                packaging: '1×30',
                desc: 'Immunomodulatory agent indicated for the treatment of patients with multiple myeloma and myelodysplastic syndromes.'
            },
            {
                name: 'Methotrexate Injection IP',
                strength: '50 mg / 2 ml',
                form: 'Injection',
                packaging: '25×1×2 ml',
                desc: 'Folate analog metabolic inhibitor indicated for certain neoplastic diseases, severe psoriasis, and rheumatoid arthritis.'
            },
            {
                name: 'Methylprednisolone Sodium Succinate for Injection USP',
                strength: '40 mg / 125 mg / 500 mg / 1000 mg',
                form: 'Injection',
                packaging: '20×1×40 mg / 25×1×125 mg / 16×1×500 mg / 10×1×1 g',
                desc: 'Synthetic corticosteroid indicated for endocrine disorders, rheumatic disorders, collagen diseases, and dermatologic diseases.'
            },
            {
                name: 'Tamoxifen Citrate Tablets IP',
                strength: '10 mg / 20 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Selective estrogen receptor modulator (SERM) indicated for the treatment and risk reduction of breast cancer.'
            },
            {
                name: 'Zoledronic Acid Injection IP (Lyophilized)',
                strength: '4 mg',
                form: 'Injection',
                packaging: '12×1×4 mg',
                desc: 'Bisphosphonate indicated for hypercalcemia of malignancy, multiple myeloma, and bone metastases of solid tumors.'
            }
        ]
    },
    'orthopaedic-rehabilitation': {
        title: 'Orthopaedic Rehabilitation',
        tag: 'Orthopaedic',
        desc: 'Bone density enhancers, joint lubricants, and anti-inflammatories for skeletal recovery.',
        icon: '🦴',
        coverClass: 'grad-purple',
        count: '20 Items',
        downloadMsg: 'Orthopaedic Rehabilitation Specification Booklet',
        samples: [
            { name: 'Glucosamine & Chondroitin', strength: 'Standard', form: 'Tablets', packaging: 'Bottles', desc: 'Supplement to support joint cartilage health and slow osteoarthritis progression.' },
            { name: 'Hyaluronic Acid Injection', strength: '20mg/2ml', form: 'Injectables', packaging: 'Bottles', desc: 'Intra-articular viscosupplementation serving as a synovial fluid replacement.' },
            { name: 'Methylsulfonylmethane (MSM)', strength: '500mg', form: 'Tablets', packaging: 'Bottles', desc: 'Organosulfur compound used to reduce joint inflammation and support recovery.' },
            { name: 'Calcium Citrate Maleate', strength: '250mg', form: 'Tablets', packaging: '10×15 Strips', desc: 'Highly bioavailable calcium source to support bone mineralization.' },
            { name: 'Calcitriol Capsules USP', strength: '0.25mcg', form: 'Capsules', packaging: '10×10 Strips', desc: 'Active form of Vitamin D3 indicated for secondary hyperparathyroidism in kidney diseases.' }
        ]
    },
    'respiratory-drugs': {
        title: 'Respiratory Solutions',
        tag: 'Respiratory',
        desc: 'Bronchodilators, antihistamines, and inhaled therapies supporting airway function.',
        icon: '💨',
        coverClass: 'grad-blue',
        count: '25 Items',
        downloadMsg: 'Respiratory Drugs Specification Booklet',
        samples: [
            { name: 'Salbutamol Inhaler', strength: '100mcg', form: 'Syrups', packaging: 'Bottles', desc: 'Short-acting beta-2 agonist indicated for immediate relief of asthma bronchospasms.' },
            { name: 'Montelukast & Levocetirizine', strength: '10mg/5mg', form: 'Tablets', packaging: '10×10 Strips', desc: 'Combination leukotriene receptor antagonist and antihistamine for allergic asthma.' },
            { name: 'Budesonide Respules', strength: '0.5mg/2ml', form: 'Injectables', packaging: 'Bottles', desc: 'Inhaled corticosteroid suspension for nebulization in chronic asthma.' },
            { name: 'Fluticasone Nasal Spray', strength: '50mcg', form: 'Topicals/Creams', packaging: 'Bottles', desc: 'Topical nasal corticosteroid indicated for seasonal and perennial allergic rhinitis.' }
        ]
    }
};

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
        tag: 'Analgesic & Antipyretic',
        desc: 'Comprehensive pain management, anti-inflammatory, muscle relaxant, and fever reduction pharmaceutical solutions manufactured to international quality standards.',
        icon: '⚡',
        coverClass: 'grad-orange',
        count: '26 Items',
        downloadMsg: 'Analgesic & Antipyretic Specification Booklet',
        samples: [
            {
                name: 'Aceclofenac + Paracetamol Tablets',
                strength: 'Aceclofenac 100 mg + Paracetamol 325 mg',
                form: 'Tablet',
                packaging: '10×10, 20×10, 20×15',
                desc: 'A powerful combination of Aceclofenac (NSAID) and Paracetamol (analgesic-antipyretic) for effective relief of pain, inflammation, and fever in conditions like osteoarthritis and rheumatoid arthritis.'
            },
            {
                name: 'Aceclofenac + Paracetamol + Chlorzoxazone Tablets',
                strength: 'Aceclofenac 100 mg + Paracetamol 325 mg + Chlorzoxazone 250 mg',
                form: 'Tablet',
                packaging: '10×10, 20×10',
                desc: 'Muscle relaxant and analgesic formulation combining Chlorzoxazone, Paracetamol, and Aceclofenac to relieve muscle spasms, pain, and associated discomfort.'
            },
            {
                name: 'Aceclofenac + Paracetamol + Serratiopeptidase Tablets',
                strength: 'Serratiopeptidase 10 mg, Serratiopeptidase 15 mg',
                form: 'Tablet',
                packaging: '10×10, 20×10',
                desc: 'Triple action anti-inflammatory, analgesic, and enzyme formulation for tissue repair, edema reduction, and intense pain relief.'
            },
            {
                name: 'Aceclofenac + Paracetamol + Thiocolchicoside Tablets',
                strength: 'Aceclofenac 100 mg + Paracetamol 325 mg + Thiocolchicoside 4 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Combination of muscle relaxant (Thiocolchicoside) and NSAIDs to alleviate acute painful spasms and skeletal muscle pain.'
            },
            {
                name: 'Aceclofenac + Thiocolchicoside Tablets',
                strength: 'Aceclofenac 100 mg + Thiocolchicoside 4 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Designed for spasm relief and musculoskeletal pain, combining muscle relaxant Thiocolchicoside with anti-inflammatory Aceclofenac.'
            },
            {
                name: 'Aceclofenac + Rabeprazole Tablets',
                strength: 'Aceclofenac 200 mg + Rabeprazole 20 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Combines Aceclofenac with acid-reducing Rabeprazole to prevent gastric irritation and mucosal damage during pain therapy.'
            },
            {
                name: 'Aceclofenac Sustained Release Tablets',
                strength: '200 mg SR',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Sustained-release tablets designed for once-daily dosing to manage chronic pain and inflammation in arthritis.'
            },
            {
                name: 'Acetaminophen Suppositories USP',
                strength: '80 mg, 125 mg, 170 mg, 250 mg',
                form: 'Suppository',
                packaging: '10×1×2×5',
                desc: 'Antipyretic and analgesic rectal suppositories for effective fever reduction and pain management, particularly for pediatric patients.'
            },
            {
                name: 'Dexamethasone Tablets IP',
                strength: '4 mg, 8 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Corticosteroid medication used to treat anti-inflammatory and immunosuppressive conditions, including severe allergies, arthritis, and breathing problems.'
            },
            {
                name: 'Diclofenac Product Range',
                strength: 'Diclofenac Sodium (75 mg/ml, 25 mg/ml, 75 mg/3 ml, 50 mg), Diclofenac Potassium (50 mg), combinations with Paracetamol and Chlorzoxazone, Suppositories (12.5 mg, 100 mg)',
                form: 'Tablet / Injection / Suppository',
                packaging: '1 ml, 3 ml, 10×5×1 ml, 10×5×3 ml, 20×5×1 ml, 20×10, 50×10, 10×10, 10×1×2×5',
                desc: 'A versatile range of Diclofenac anti-inflammatory formulations in injection, tablet, and suppository forms. Indicated for management of acute and chronic pain, postoperative pain, osteoarthritis, and rheumatoid arthritis.'
            },
            {
                name: 'Dicyclomine Product Range',
                strength: 'Dicyclomine HCl 20 mg + Paracetamol 325 mg, Dicyclomine HCl 10 mg + Diclofenac Sodium 25 mg, Dicyclomine 20 mg + Mefenamic Acid 250 mg',
                form: 'Tablet / Injection',
                packaging: '10×5×10, 10×10×2 ml, 20×10',
                desc: 'Antispasmodic and analgesic range designed to relieve gastrointestinal and smooth muscle spasms, cramps, and abdominal pain.'
            },
            {
                name: 'Drotaverine Product Range',
                strength: 'Drotaverine HCl 40 mg/2 ml, Drotaverine 80 mg + Mefenamic Acid 250 mg, Drotaverine 80 mg + Aceclofenac 100 mg',
                form: 'Tablet / Injection',
                packaging: '10×1×10×2 ml, 25×10, 10×10',
                desc: 'Smooth muscle antispasmodic range combining Drotaverine with NSAIDs (Mefenamic Acid or Aceclofenac) or as monotherapy injection for renal colic, biliary colic, and dysmenorrhea.'
            },
            {
                name: 'Mefenamic Acid Product Range',
                strength: 'Mefenamic Acid 500 mg + Paracetamol 325 mg; Suspension: Mefenamic Acid 50 mg + Paracetamol 125 mg / 5 ml, Mefenamic Acid 100 mg + Paracetamol 250 mg / 5 ml',
                form: 'Tablet / Syrup',
                packaging: '10×10, 60 ml',
                desc: 'Mefenamic acid and paracetamol combinations in tablet and suspension forms, commonly used for symptomatic relief of dental pain, inflammatory pain, and pediatric fever.'
            },
            {
                name: 'Etoricoxib Product Range',
                strength: 'Etoricoxib 60 mg + Paracetamol 325 mg, Etoricoxib 60 mg + Thiocolchicoside 4 mg, Etoricoxib 90 mg',
                form: 'Tablet',
                packaging: '20×10, 10×1×10, 10×10',
                desc: 'Selective COX-2 inhibitor range for intense anti-inflammatory action, combined with paracetamol or thiocolchicoside muscle relaxant for joint pain, gout, and postoperative pain.'
            },
            {
                name: 'Ibuprofen Product Range',
                strength: 'Ibuprofen 400 mg; Suspension: Ibuprofen 48 mg + Paracetamol 125 mg / 5 ml; Infusion: Ibuprofen 400 mg / 100 ml',
                form: 'Tablet / Syrup / Infusion',
                packaging: '20×2×15, 20×10, 10×1×10, 60 ml, 100 ml',
                desc: 'Broad range of Ibuprofen formulations including oral tablets, pediatric suspensions, and intravenous infusions for anti-inflammatory, antipyretic, and analgesic therapies.'
            },
            {
                name: 'Ketorolac Tromethamine Injection IP',
                strength: '30 mg/ml',
                form: 'Injection',
                packaging: '20×5×1 ml',
                desc: 'A potent NSAID administered intravenously or intramuscularly for short-term management of moderate-to-severe acute postoperative pain.'
            },
            {
                name: 'Linseed Oil + Diclofenac Gel Range',
                strength: 'Linseed Oil 3.0% + Diclofenac Diethylamine 1.16% + Methyl Salicylate 10% + Menthol 5% + Benzyl Alcohol 1%, Diclofenac Diethylamine 2.32% + Methyl Salicylate 10% + Linseed oil 3% + Menthol 5%, Diclofenac 1.16mg + Thiocolchicoside 0.125% + Linseed oil 3% + Methyl salicylate 10% + Menthol 5%, Diclofenac gel IP (30 g), Diclofenac 2% + Linseed oil 3% + Methyl salicylate 10% + Menthol 5% (Spray)',
                form: 'Gel / Spray',
                packaging: '30 g, 55 g, 6×55 g',
                desc: 'A range of topical anti-inflammatory gel and spray formulations designed for fast relief from muscular pain, joint stiffness, sprains, and sports injuries.'
            },
            {
                name: 'Herbal Pain Relief Oil',
                strength: 'Pure Ayurvedic Formulation',
                form: 'Oil',
                packaging: '100 ml',
                desc: 'Traditional Ayurvedic herbal blend formulated to treat musculoskeletal disorders, joint pain, arthritic stiffness, and backaches.'
            },
            {
                name: 'Nimesulide Product Range',
                strength: 'Nimesulide 100 mg (Mouth Dissolving), Nimesulide 100 mg + Paracetamol 325 mg, Paracetamol 325 mg + Nimesulide 100 mg + Serratiopeptidase 10 mg',
                form: 'Tablet',
                packaging: '20×10, 10×10',
                desc: 'NSAID range featuring Nimesulide, ideal for acute pain, osteoarthritis pain, and primary dysmenorrhea, combined with paracetamol or serratiopeptidase for maximum efficacy.'
            },
            {
                name: 'Paracetamol Product Range',
                strength: 'Paracetamol 500 mg, 650 mg (Dispersible), 1000 mg (1 g), Paracetamol 500 mg + Domperidone 10 mg; Suspension: 125 mg / 5 ml, 250 mg / 5 ml, cold formula; Injection: 300 mg / 2 ml; Infusion: 1000 mg / 100 ml',
                form: 'Tablet / Injection / Infusion / Syrup',
                packaging: '20×10, 20×15, 10×10, 10×15, 10×1×10×2 ml, 1×100 ml, 60 ml',
                desc: 'Comprehensive paracetamol portfolio spanning oral tablets, pediatric suspensions, intravenous infusions, and intramuscular injections for global anti-pyretic and analgesic therapy.'
            },
            {
                name: 'Piroxicam Product Range',
                strength: 'Piroxicam 20 mg (Mouth Dissolving), Piroxicam 20 mg + Benzyl Alcohol 20 mg / 2 ml',
                form: 'Tablet / Injection',
                packaging: '10×10, 10×2 ml',
                desc: 'Piroxicam anti-inflammatory formulations in oral dispersible tablet and injectable forms, primarily indicated for chronic rheumatologic disorders.'
            },
            {
                name: 'Polmacoxib Capsules',
                strength: '2 mg',
                form: 'Capsule',
                packaging: '10×10',
                desc: 'A novel selective COX-2 inhibitor capsule used at low doses to treat pain and stiffness caused by osteoarthritis.'
            },
            {
                name: 'Serratiopeptidase + Diclofenac Tablets',
                strength: 'Serratiopeptidase 10 mg + Diclofenac Sodium 50 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Combines proteolytic enzyme Serratiopeptidase with Diclofenac for synergistic relief of painful inflammatory conditions, swelling, and musculoskeletal pain.'
            },
            {
                name: 'Thiocolchicoside Injection',
                strength: '4 mg/2 ml',
                form: 'Injection',
                packaging: '10×1×5×2 ml',
                desc: 'Muscle relaxant injection indicated for adjunctive treatment of painful muscle spasms in acute spinal pathology.'
            },
            {
                name: 'Trypsin-Chymotrypsin Tablets',
                strength: '100,000 Units (1 Lac Units)',
                form: 'Tablet',
                packaging: '10×20',
                desc: 'Proteolytic enzyme combination tablets to speed up healing of surgical wounds, post-traumatic edema, and acute inflammation.'
            },
            {
                name: 'Valethamate Bromide Injection',
                strength: '8 mg/ml',
                form: 'Injection',
                packaging: '10×1×10×1 ml',
                desc: 'Anticholinergic spasmolytic injection primarily used in obstetric care to facilitate smooth cervical dilation during labor.'
            }
        ]
    },
    'anti-malaria': {
        title: 'Anti Malaria Portfolio',
        tag: 'Anti Malaria',
        desc: 'Comprehensive antimalarial pharmaceutical solutions formulated for the prevention and treatment of malaria, manufactured in accordance with international quality standards.',
        icon: '🦟',
        coverClass: 'grad-purple',
        count: '6 Items',
        downloadMsg: 'Anti Malaria Specification Booklet',
        samples: [
            {
                name: 'Artesunate Injection',
                strength: '60 mg, 120 mg',
                form: 'Injection',
                packaging: '10×1×60 mg, 10×1×120 mg',
                desc: 'Intravenous or intramuscular Artesunate injection, highly effective for rapid clearance of parasitemia in severe and complicated plasmodium falciparum malaria.'
            },
            {
                name: 'Artemether Injection',
                strength: '80 mg/ml',
                form: 'Injection',
                packaging: '10×1×6×1 ml',
                desc: 'Fast-acting lipid formulation of Artemether administered intramuscularly for the treatment of severe, chloroquine-resistant malaria.'
            },
            {
                name: 'Artemether + Lumefantrine Tablets',
                strength: '20 mg + 120 mg',
                form: 'Tablet',
                packaging: '1×6',
                desc: 'Fixed-dose combination artemisinin-based combination therapy (ACT) indicated for the oral treatment of acute, uncomplicated malaria infections.'
            },
            {
                name: 'Artemether + Lumefantrine Dry Syrup',
                strength: 'Pediatric formulation',
                form: 'Dry Syrup',
                packaging: '60 ml',
                desc: 'Pediatric oral suspension formulation designed for child-friendly administration to treat uncomplicated plasmodium infections.'
            },
            {
                name: 'Quinine Sulphate Tablets',
                strength: '300 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Cinchona alkaloid medication used to treat uncomplicated malaria when artemisinin-based combination therapies are unavailable or not tolerated.'
            },
            {
                name: 'Primaquine Tablets',
                strength: '7.5 mg, 15 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Used for radical cure and preventing relapse of vivax and ovale malaria by targeting the latent liver stages (hypnozoites) of the parasite.'
            }
        ]
    },
    'antibiotics': {
        title: 'Antibiotics',
        tag: 'Antibiotics',
        desc: 'Comprehensive range of high-quality antibiotic formulations manufactured to international standards for the treatment of bacterial infections across multiple therapeutic areas.',
        icon: '🧪',
        coverClass: 'grad-blue',
        count: '85 Items',
        downloadMsg: 'Antibiotics Specification Booklet',
        samples: [
            {
                name: 'Albendazole Tablets',
                strength: '400 mg',
                form: 'Tablet',
                packaging: '30×1, 10×10',
                desc: 'Broad-spectrum anthelmintic medicine used for the treatment of intestinal worm infections.'
            },
            {
                name: 'Albendazole + Ivermectin Tablets',
                strength: 'Albendazole 400 mg + Ivermectin 6 mg',
                form: 'Tablet',
                packaging: '30×1, 10×10',
                desc: 'Combination antiparasitic therapy for mixed helminthic infestations.'
            },
            {
                name: 'Amikacin Injection',
                strength: '100 mg, 250 mg, 500 mg, 500 mg / 2 ml',
                form: 'Injection',
                packaging: 'Vial, 2 ml',
                desc: 'Aminoglycoside antibiotic indicated for severe bacterial infections caused by susceptible organisms.'
            },
            {
                name: 'Amoxicillin + Clavulanic Acid Injection',
                strength: '1000 mg + 200 mg, 1.2 g',
                form: 'Injection',
                packaging: 'Each Vial, 20×1×1.2 g',
                desc: 'Broad-spectrum beta-lactam antibiotic combined with beta-lactamase inhibitor for resistant bacterial infections.'
            },
            {
                name: 'Amoxicillin + Clavulanic Acid Tablets',
                strength: '500 mg + 125 mg',
                form: 'Tablet',
                packaging: '10×10, 10×6',
                desc: 'Combination antibiotic for respiratory, urinary tract, skin, and soft tissue infections.'
            },
            {
                name: 'Amoxicillin + Clavulanic Acid Dry Syrup',
                strength: '200 mg + 28.5 mg, 400 mg + 57 mg',
                form: 'Dry Syrup',
                packaging: '30 ml',
                desc: 'Paediatric oral suspension formulated for bacterial infections in children.'
            },
            {
                name: 'Amoxycillin Capsules',
                strength: '250 mg, 500 mg',
                form: 'Capsule',
                packaging: '30×10, 20×10',
                desc: 'Broad-spectrum penicillin antibiotic for susceptible bacterial infections.'
            },
            {
                name: 'Amoxycillin Tablets',
                strength: '250 mg, 500 mg',
                form: 'Tablet',
                packaging: '30×10, 20×10',
                desc: 'Broad-spectrum oral penicillin antibiotic.'
            },
            {
                name: 'Amoxycillin Dispersible Tablets',
                strength: '250 mg',
                form: 'Dispersible Tablet',
                packaging: '20×10',
                desc: 'Dispersible oral antibiotic formulation suitable for paediatric use.'
            },
            {
                name: 'Amoxycillin Dry Syrup',
                strength: '125 mg / 5 ml, 250 mg / 5 ml',
                form: 'Dry Syrup',
                packaging: '30 ml',
                desc: 'Paediatric dry syrup for the treatment of bacterial infections.'
            },
            {
                name: 'Amoxycillin + Cloxacillin + Lactic Acid Bacillus Capsules',
                strength: 'Amoxycillin 250 mg + Cloxacillin 250 mg + Lactic Acid Bacillus',
                form: 'Capsule',
                packaging: '10×10, 20×10',
                desc: 'Combination antibacterial therapy with probiotic support.'
            },
            {
                name: 'Amoxycillin + Potassium Clavulanate + Lactic Acid Bacillus Tablets',
                strength: 'Amoxycillin 500 mg + Potassium Clavulanate 125 mg + Lactic Acid Bacillus',
                form: 'Tablet',
                packaging: '10×1×6, 10×1×10',
                desc: 'Combination antibiotic with beta-lactamase inhibitor and probiotic support.'
            },
            {
                name: 'Ampicillin Injection',
                strength: '250 mg, 500 mg, 1 g, 2 g',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Broad-spectrum penicillin antibiotic indicated for moderate to severe bacterial infections.'
            },
            {
                name: 'Ampicillin + Cloxacillin Capsules',
                strength: 'Ampicillin 250 mg + Cloxacillin 250 mg',
                form: 'Capsule',
                packaging: '10×10, 20×10',
                desc: 'Combination penicillin antibiotic effective against Gram-positive and Gram-negative bacterial infections.'
            },
            {
                name: 'Ampicillin + Sulbactam Injection',
                strength: '750 mg, 1.5 g, 3 g',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Broad-spectrum beta-lactam antibiotic with beta-lactamase inhibitor for resistant bacterial infections.'
            },
            {
                name: 'Azithromycin Tablets',
                strength: '250 mg, 500 mg',
                form: 'Tablet',
                packaging: '3×10, 10×3, 10×5',
                desc: 'Macrolide antibiotic used for respiratory, ENT, skin and soft tissue infections.'
            },
            {
                name: 'Azithromycin Capsules',
                strength: '250 mg, 500 mg',
                form: 'Capsule',
                packaging: '10×6',
                desc: 'Oral macrolide antibiotic for bacterial infections.'
            },
            {
                name: 'Azithromycin Oral Suspension',
                strength: '100 mg / 5 ml, 200 mg / 5 ml',
                form: 'Dry Syrup',
                packaging: '15 ml, 30 ml',
                desc: 'Paediatric oral antibiotic suspension.'
            },
            {
                name: 'Azithromycin Injection',
                strength: '500 mg',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Intravenous macrolide antibiotic for severe bacterial infections.'
            },
            {
                name: 'Aztreonam Injection',
                strength: '500 mg, 1 g',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Monobactam antibiotic used for serious Gram-negative bacterial infections.'
            },
            {
                name: 'Bacitracin Ointment',
                strength: 'Standard formulation',
                form: 'Ointment',
                packaging: 'Tube',
                desc: 'Topical antibiotic used for prevention and treatment of minor skin infections.'
            },
            {
                name: 'Benzathine Penicillin Injection',
                strength: '6 lakh IU, 12 lakh IU, 24 lakh IU',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Long-acting penicillin antibiotic indicated for susceptible bacterial infections.'
            },
            {
                name: 'Cefaclor Capsules',
                strength: '250 mg, 500 mg',
                form: 'Capsule',
                packaging: '10×10',
                desc: 'Second-generation cephalosporin antibiotic for respiratory and urinary tract infections.'
            },
            {
                name: 'Cefaclor Dry Syrup',
                strength: '125 mg / 5 ml, 250 mg / 5 ml',
                form: 'Dry Syrup',
                packaging: '30 ml',
                desc: 'Paediatric cephalosporin antibiotic suspension.'
            },
            {
                name: 'Cefepime for Injection',
                strength: '1 g',
                form: 'Injection',
                packaging: '10×1×1 g',
                desc: 'Fourth-generation cephalosporin injection used for severe Gram-positive and Gram-negative bacterial infections.'
            },
            {
                name: 'Cefixime Tablets',
                strength: '200 mg',
                form: 'Tablet',
                packaging: '20×10',
                desc: 'Third-generation cephalosporin antibiotic for respiratory, ENT, urinary tract, and gastrointestinal infections.'
            },
            {
                name: 'Cefixime Oral Suspension',
                strength: '50 mg / 5 ml, 100 mg / 5 ml',
                form: 'Dry Syrup',
                packaging: '30 ml',
                desc: 'Paediatric cephalosporin suspension for bacterial infections.'
            },
            {
                name: 'Cefixime + Clavulanic Acid Tablets',
                strength: 'Cefixime 200 mg + Clavulanic Acid 125 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Combination cephalosporin antibiotic with beta-lactamase inhibitor.'
            },
            {
                name: 'Cefixime + Ofloxacin Tablets',
                strength: 'Cefixime 200 mg + Ofloxacin 200 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Combination antibiotic for mixed bacterial infections.'
            },
            {
                name: 'Cefixime + Ofloxacin Oral Suspension',
                strength: 'Cefixime 50 mg + Ofloxacin 50 mg',
                form: 'Dry Syrup',
                packaging: '30 ml',
                desc: 'Paediatric combination antibiotic suspension.'
            },
            {
                name: 'Cefixime + Lactic Acid Bacillus Tablets',
                strength: 'Cefixime 100 mg, Cefixime 200 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Cefixime formulation with probiotic support for improved gastrointestinal tolerance.'
            },
            {
                name: 'Cefixime + Azithromycin + Lactic Acid Bacillus Tablets',
                strength: 'Cefixime 200 mg + Azithromycin 250 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Broad-spectrum combination therapy with probiotic support.'
            },
            {
                name: 'Cefpodoxime Proxetil Tablets',
                strength: '100 mg, 200 mg',
                form: 'Tablet',
                packaging: '5×10, 10×10',
                desc: 'Third-generation cephalosporin antibiotic for respiratory and urinary tract infections.'
            },
            {
                name: 'Cefpodoxime Proxetil Oral Suspension',
                strength: '50 mg / 5 ml, 100 mg / 5 ml',
                form: 'Dry Syrup',
                packaging: '30 ml',
                desc: 'Paediatric oral cephalosporin formulation.'
            },
            {
                name: 'Cefpodoxime + Clavulanic Acid Tablets',
                strength: 'Cefpodoxime 200 mg + Clavulanic Acid 125 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Combination cephalosporin antibiotic with beta-lactamase inhibitor.'
            },
            {
                name: 'Cefpodoxime + Clavulanic Acid Oral Suspension',
                strength: 'Cefpodoxime 50 mg + Clavulanic Acid 31.25 mg, Cefpodoxime 100 mg + Clavulanic Acid 62.5 mg',
                form: 'Dry Syrup',
                packaging: '30 ml',
                desc: 'Paediatric combination cephalosporin suspension.'
            },
            {
                name: 'Cefpodoxime + Ofloxacin Tablets',
                strength: 'Cefpodoxime 200 mg + Ofloxacin 500 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Combination antibiotic for complicated bacterial infections.'
            },
            {
                name: 'Cefoperazone + Sulbactam Injection',
                strength: 'Cefoperazone 1000 mg + Sulbactam 500 mg',
                form: 'Injection',
                packaging: '1.5 g Vial, 20×1×1.5 g',
                desc: 'Broad-spectrum injectable cephalosporin with beta-lactamase inhibitor.'
            },
            {
                name: 'Cefotaxime Injection',
                strength: '1 g',
                form: 'Injection',
                packaging: '20×1×1 g Vial',
                desc: 'Third-generation cephalosporin injection for serious bacterial infections.'
            },
            {
                name: 'Ceftazidime Injection',
                strength: '1 g',
                form: 'Injection',
                packaging: '10×1×1 g',
                desc: 'Broad-spectrum injectable cephalosporin for severe hospital-acquired infections.'
            },
            {
                name: 'Ceftazidime + Avibactam Injection',
                strength: 'Ceftazidime 2 g + Avibactam 500 mg',
                form: 'Injection',
                packaging: '9×1×2.5 g',
                desc: 'Advanced combination therapy for multidrug-resistant Gram-negative infections.'
            },
            {
                name: 'Ceftriaxone Injection',
                strength: '500 mg, 1 g',
                form: 'Injection',
                packaging: 'Vial, 25×1×1 g',
                desc: 'Third-generation cephalosporin injection for a wide range of bacterial infections.'
            },
            {
                name: 'Ceftriaxone + Sulbactam Injection',
                strength: 'Ceftriaxone 250 mg + Sulbactam 125 mg, Ceftriaxone 1 g + Sulbactam 500 mg',
                form: 'Injection',
                packaging: 'Vial, 10×1×1.5 g',
                desc: 'Combination injectable antibiotic for resistant bacterial infections.'
            },
            {
                name: 'Cefuroxime Tablets',
                strength: '250 mg, 500 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Second-generation cephalosporin antibiotic used for respiratory, urinary tract, skin, and soft tissue infections.'
            },
            {
                name: 'Cefuroxime Axetil Dry Syrup',
                strength: '125 mg / 5 ml',
                form: 'Dry Syrup',
                packaging: '30 ml',
                desc: 'Paediatric cephalosporin suspension for bacterial infections.'
            },
            {
                name: 'Ciprofloxacin Tablets',
                strength: '250 mg, 500 mg, 750 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Fluoroquinolone antibiotic for respiratory, urinary tract, gastrointestinal, and systemic bacterial infections.'
            },
            {
                name: 'Ciprofloxacin Infusion',
                strength: '200 mg / 100 ml',
                form: 'Infusion',
                packaging: '100 ml Bottle',
                desc: 'Intravenous fluoroquinolone antibiotic for hospitalized patients.'
            },
            {
                name: 'Clindamycin Capsules',
                strength: '150 mg, 300 mg',
                form: 'Capsule',
                packaging: '10×10',
                desc: 'Lincosamide antibiotic used for anaerobic and Gram-positive bacterial infections.'
            },
            {
                name: 'Clarithromycin Tablets',
                strength: '250 mg, 500 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Macrolide antibiotic indicated for respiratory tract and skin infections.'
            },
            {
                name: 'Doxycycline Capsules',
                strength: '100 mg',
                form: 'Capsule',
                packaging: '10×10',
                desc: 'Broad-spectrum tetracycline antibiotic for respiratory, skin, and sexually transmitted infections.'
            },
            {
                name: 'Ertapenem Injection',
                strength: '1 g',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Carbapenem antibiotic for complicated bacterial infections.'
            },
            {
                name: 'Faropenem Tablets',
                strength: '200 mg, 300 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Oral carbapenem antibiotic with broad-spectrum antibacterial activity.'
            },
            {
                name: 'Gentamicin Injection',
                strength: '40 mg / 2 ml, 80 mg / 2 ml',
                form: 'Injection',
                packaging: 'Ampoule',
                desc: 'Aminoglycoside antibiotic for severe bacterial infections.'
            },
            {
                name: 'Levofloxacin Tablets',
                strength: '250 mg, 500 mg, 750 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Broad-spectrum fluoroquinolone antibiotic for respiratory and urinary tract infections.'
            },
            {
                name: 'Levofloxacin Infusion',
                strength: '500 mg / 100 ml',
                form: 'Infusion',
                packaging: '100 ml Bottle',
                desc: 'Intravenous fluoroquinolone therapy for hospitalized patients.'
            },
            {
                name: 'Linezolid Tablets',
                strength: '600 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Oxazolidinone antibiotic effective against resistant Gram-positive organisms.'
            },
            {
                name: 'Linezolid Infusion',
                strength: '600 mg / 300 ml',
                form: 'Infusion',
                packaging: '300 ml Bag',
                desc: 'Intravenous formulation for multidrug-resistant bacterial infections.'
            },
            {
                name: 'Meropenem Injection',
                strength: '500 mg, 1 g',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Broad-spectrum carbapenem antibiotic for severe hospital-acquired infections.'
            },
            {
                name: 'Metronidazole Tablets',
                strength: '200 mg, 400 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Antibacterial and antiprotozoal medicine for anaerobic bacterial infections.'
            },
            {
                name: 'Metronidazole Infusion',
                strength: '500 mg / 100 ml',
                form: 'Infusion',
                packaging: '100 ml Bottle',
                desc: 'Intravenous therapy for anaerobic bacterial infections.'
            },
            {
                name: 'Moxifloxacin Tablets',
                strength: '400 mg',
                form: 'Tablet',
                packaging: '5×5, 10×5',
                desc: 'Fourth-generation fluoroquinolone antibiotic for respiratory tract infections.'
            },
            {
                name: 'Nitrofurantoin Capsules',
                strength: '100 mg',
                form: 'Capsule',
                packaging: '10×10',
                desc: 'Urinary tract antibacterial agent.'
            },
            {
                name: 'Ofloxacin Tablets',
                strength: '200 mg, 400 mg',
                form: 'Tablet',
                packaging: '10×10',
                desc: 'Fluoroquinolone antibiotic for respiratory, urinary, and gastrointestinal infections.'
            },
            {
                name: 'Piperacillin + Tazobactam Injection',
                strength: '2.25 g, 4.5 g',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Broad-spectrum penicillin with beta-lactamase inhibitor for severe infections.'
            },
            {
                name: 'Teicoplanin Injection',
                strength: '200 mg, 400 mg',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Glycopeptide antibiotic for resistant Gram-positive bacterial infections.'
            },
            {
                name: 'Vancomycin Injection',
                strength: '500 mg, 1 g',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Glycopeptide antibiotic used for serious multidrug-resistant Gram-positive infections.'
            },
            {
                name: 'Cephalexin',
                strength: '250 mg, 500 mg',
                form: 'Tablet / Capsule',
                packaging: '10×10',
                desc: 'First-generation cephalosporin antibiotic for skin, respiratory, urinary tract, and soft tissue infections.'
            },
            {
                name: 'Chloramphenicol',
                strength: 'Tablet: 250 mg, Injection: 1 g',
                form: 'Tablet / Injection',
                packaging: '30×10, 20×1×1 g',
                desc: 'Broad-spectrum antibiotic used for serious bacterial infections when clinically indicated.'
            },
            {
                name: 'Ciprofloxacin Eye Drops',
                strength: 'Ciprofloxacin 0.3% w/v + Dexamethasone 0.05% w/v',
                form: 'Eye Drops',
                packaging: '10 ml',
                desc: 'Sterile ophthalmic antibiotic and corticosteroid combination for bacterial eye infections.'
            },
            {
                name: 'Clindamycin Injection',
                strength: '300 mg / 2 ml, 600 mg / 4 ml',
                form: 'Injection',
                packaging: '25×1×2 ml, 25×1×4 ml',
                desc: 'Lincosamide antibiotic for severe anaerobic and Gram-positive bacterial infections.'
            },
            {
                name: 'Colistimethate Sodium Injection',
                strength: '1 Million IU, 2 Million IU, 3 Million IU, 4.5 Million IU',
                form: 'Injection',
                packaging: 'Vial',
                desc: 'Polymyxin antibiotic indicated for multidrug-resistant Gram-negative bacterial infections.'
            },
            {
                name: 'Colistin Sodium Injection',
                strength: '2 Million IU',
                form: 'Injection',
                packaging: 'Each Vial',
                desc: 'Critical care antibiotic for resistant Gram-negative infections.'
            },
            {
                name: 'Doxycycline Injection',
                strength: '100 mg',
                form: 'Injection',
                packaging: '12×1×100 mg',
                desc: 'Intravenous tetracycline antibiotic for severe bacterial infections.'
            },
            {
                name: 'Doxycycline + Lactic Acid Bacillus Capsules',
                strength: 'Doxycycline 100 mg + Lactic Acid Bacillus 5 Billion Spores',
                form: 'Capsule',
                packaging: '10×10',
                desc: 'Combination antibiotic with probiotic support to improve gastrointestinal tolerance.'
            },
            {
                name: 'Fluconazole Infusion',
                strength: '200 mg / 100 ml',
                form: 'Infusion',
                packaging: '100 ml Bottle',
                desc: 'Intravenous antifungal infusion for systemic fungal infections.'
            },
            {
                name: 'Fosfomycin Trometamol',
                strength: '3 g',
                form: 'Sachet',
                packaging: '10×1×8 g',
                desc: 'Oral antibiotic for uncomplicated urinary tract infections.'
            },
            {
                name: 'Gentamicin Ear Drops',
                strength: 'Gentamicin + Beclomethasone + Clotrimazole + Lignocaine',
                form: 'Ear Drops',
                packaging: '10 ml',
                desc: 'Combination ear drop formulation for bacterial and fungal ear infections with pain relief.'
            },
            {
                name: 'Imipenem + Cilastatin Injection',
                strength: 'Imipenem 500 mg + Cilastatin 500 mg',
                form: 'Injection',
                packaging: '1 g Vial',
                desc: 'Carbapenem antibiotic for severe multidrug-resistant bacterial infections.'
            },
            {
                name: 'Meropenem + Sulbactam Injection',
                strength: 'Meropenem 1000 mg + Sulbactam 500 mg',
                form: 'Injection',
                packaging: '1.5 g Vial',
                desc: 'Advanced carbapenem combination for resistant bacterial infections.'
            },
            {
                name: 'Ofloxacin + Ornidazole Tablets',
                strength: 'Ofloxacin 100 mg + Ornidazole 250 mg, Ofloxacin 200 mg + Ornidazole 500 mg',
                form: 'Tablet',
                packaging: '10×10, 20×10',
                desc: 'Combination antibacterial and antiprotozoal therapy for gastrointestinal and mixed infections.'
            },
            {
                name: 'Ofloxacin + Metronidazole Suspension',
                strength: 'Ofloxacin 50 mg + Metronidazole 120 mg + Simethicone 10 mg',
                form: 'Oral Suspension',
                packaging: '30 ml',
                desc: 'Paediatric antibacterial suspension for gastrointestinal infections.'
            },
            {
                name: 'Polymyxin B Injection',
                strength: '500,000 Units',
                form: 'Injection',
                packaging: '5×1×500000 IU',
                desc: 'Polypeptide antibiotic for severe multidrug-resistant Gram-negative infections.'
            },
            {
                name: 'Rifaximin',
                strength: '200 mg, 400 mg',
                form: 'Tablet',
                packaging: '10×10, 5×10',
                desc: 'Broad-spectrum gastrointestinal antibiotic indicated for traveller\'s diarrhoea and hepatic encephalopathy.'
            },
            {
                name: 'Co-Trimoxazole Concentrate',
                strength: 'Trimethoprim 80 mg + Sulphamethoxazole 400 mg',
                form: 'Injection',
                packaging: '10×1×5×5 ml',
                desc: 'Sterile antibacterial concentrate for intravenous administration.'
            },
            {
                name: 'Tigecycline Injection',
                strength: '50 mg',
                form: 'Injection',
                packaging: '10×1×50 mg',
                desc: 'Glycylcycline antibiotic for complicated multidrug-resistant bacterial infections.'
            }
        ]
    },
    'antidiabetic': {
        title: 'Antidiabetic',
        tag: 'Antidiabetic',
        desc: 'Comprehensive antidiabetic pharmaceutical solutions for effective blood glucose management, manufactured according to international quality standards.',
        icon: '🩸',
        coverClass: 'grad-blue-dark',
        count: '13 Items',
        downloadMsg: 'Antidiabetic Specification Booklet',
        samples: [
            {
                name: 'Dapagliflozin Tablets',
                strength: '5 mg, 10 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'SGLT2 inhibitor used for the management of Type 2 Diabetes Mellitus.'
            },
            {
                name: 'Dapagliflozin + Metformin Extended Release Tablets',
                strength: 'Dapagliflozin 10 mg + Metformin 500 mg',
                form: 'Extended Release Tablet',
                packaging: '10×10 Tablets',
                desc: 'Combination therapy for improved glycaemic control in Type 2 Diabetes.'
            },
            {
                name: 'Dapagliflozin + Sitagliptin + Metformin Tablets',
                strength: 'Dapagliflozin 10 mg + Sitagliptin 100 mg + Metformin 500 mg, Dapagliflozin 10 mg + Sitagliptin 100 mg + Metformin 1000 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'Triple combination antidiabetic therapy providing comprehensive blood glucose control.'
            },
            {
                name: 'Empagliflozin Tablets',
                strength: '10 mg, 25 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'SGLT2 inhibitor indicated for Type 2 Diabetes Mellitus.'
            },
            {
                name: 'Empagliflozin + Metformin Tablets',
                strength: 'Empagliflozin 12.5 mg + Metformin 500 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'Combination therapy for enhanced glycaemic control.'
            },
            {
                name: 'Glimepiride + Metformin Tablets',
                strength: 'Glimepiride 1 mg + Metformin 500 mg, Glimepiride 2 mg + Metformin 500 mg',
                form: 'Tablet',
                packaging: '10×15 Tablets, 10×2×10 Tablets',
                desc: 'Sulfonylurea and biguanide combination for effective blood glucose management.'
            },
            {
                name: 'Glimepiride + Metformin + Voglibose Tablets',
                strength: 'Glimepiride 1 mg + Metformin 500 mg + Voglibose 0.3 mg, Glimepiride 3 mg + Metformin 500 mg + Voglibose 0.3 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'Triple combination therapy for improved postprandial and fasting glucose control.'
            },
            {
                name: 'Gliclazide + Metformin Tablets',
                strength: 'Gliclazide 80 mg + Metformin 500 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'Combination antidiabetic formulation for Type 2 Diabetes Mellitus.'
            },
            {
                name: 'Metformin HCl SR Tablets',
                strength: '850 mg, 1000 mg',
                form: 'Sustained Release Tablet',
                packaging: '10×10 Tablets',
                desc: 'Sustained-release metformin formulation for long-term glycaemic management.'
            },
            {
                name: 'Sitagliptin Tablets',
                strength: '50 mg, 100 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'DPP-4 inhibitor for blood glucose management in Type 2 Diabetes.'
            },
            {
                name: 'Sitagliptin + Metformin Tablets',
                strength: 'Sitagliptin 50 mg + Metformin 500 mg',
                form: 'Tablet',
                packaging: '10×15 Tablets',
                desc: 'Combination therapy for improved glycaemic control.'
            },
            {
                name: 'Vildagliptin Tablets',
                strength: '50 mg, 100 mg SR',
                form: 'Tablet',
                packaging: '10×15 Tablets',
                desc: 'DPP-4 inhibitor for effective blood glucose control.'
            },
            {
                name: 'Vildagliptin + Metformin Tablets',
                strength: 'Vildagliptin 50 mg + Metformin 500 mg',
                form: 'Tablet',
                packaging: '10×15 Tablets',
                desc: 'Combination therapy for patients requiring dual antidiabetic treatment.'
            }
        ]
    },
    'antifungal': {
        title: 'Antifungal',
        tag: 'Antifungal',
        desc: 'High-quality antifungal pharmaceutical formulations for the treatment of fungal infections, manufactured according to international quality standards.',
        icon: '🍄',
        coverClass: 'grad-green',
        count: '3 Items',
        downloadMsg: 'Antifungal Specification Booklet',
        samples: [
            {
                name: 'Clotrimazole Cream IP',
                strength: '1% w/w',
                form: 'Cream',
                packaging: '20×1×15 g',
                desc: 'Topical antifungal cream indicated for the treatment of fungal skin infections including ringworm, athlete\'s foot, and candidiasis.'
            },
            {
                name: 'Itraconazole Capsules',
                strength: '100 mg, 200 mg',
                form: 'Capsule',
                packaging: '10×1×10 Capsules',
                desc: 'Broad-spectrum triazole antifungal used for systemic and superficial fungal infections.'
            },
            {
                name: 'Voriconazole for Injection IP',
                strength: '200 mg',
                form: 'Injection',
                packaging: '10×1×200 mg',
                desc: 'Broad-spectrum injectable antifungal indicated for serious invasive fungal infections.'
            }
        ]
    },
    'antipsychotic': {
        title: 'Antipsychotic',
        tag: 'Antipsychotic',
        desc: 'Comprehensive neuropsychiatric pharmaceutical solutions for the management of psychiatric and neurological disorders, manufactured according to international quality standards.',
        icon: '🧠',
        coverClass: 'grad-gold',
        count: '17 Items',
        downloadMsg: 'Antipsychotic Specification Booklet',
        samples: [
            {
                name: 'Amitriptyline Tablets IP',
                strength: '10 mg, 25 mg',
                form: 'Tablet',
                packaging: '20×10 Tablets, 10×10 Tablets',
                desc: 'Tricyclic antidepressant indicated for depression, neuropathic pain, and anxiety disorders.'
            },
            {
                name: 'Buspirone Tablets',
                strength: '10 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'Anxiolytic medication indicated for generalized anxiety disorder.'
            },
            {
                name: 'Carbamazepine Extended Release Tablets IP',
                strength: '200 mg, 400 mg',
                form: 'Extended Release Tablet',
                packaging: '10×10 Tablets',
                desc: 'Anticonvulsant and mood stabilizer used in epilepsy and bipolar disorder.'
            },
            {
                name: 'Cerebroprotein Hydrolysate for Injection',
                strength: '60 mg',
                form: 'Injection',
                packaging: '12×1×60 mg',
                desc: 'Neurotrophic injectable therapy used in neurological rehabilitation.'
            },
            {
                name: 'Chlorpromazine Injection IP',
                strength: '50 mg / 2 ml',
                form: 'Injection',
                packaging: '10×1×10×2 ml',
                desc: 'Typical antipsychotic injection used for acute psychotic disorders.'
            },
            {
                name: 'Citalopram Hydrobromide Tablets IP',
                strength: '20 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'Selective serotonin reuptake inhibitor (SSRI) indicated for depression and anxiety.'
            },
            {
                name: 'Citicoline Injection IP',
                strength: '500 mg / 2 ml, 1000 mg / 4 ml',
                form: 'Injection',
                packaging: '25×1×2 ml, 25×1×4 ml',
                desc: 'Neuroprotective injectable therapy used in stroke recovery and cognitive impairment.'
            },
            {
                name: 'Fluoxetine Capsules IP',
                strength: '10 mg, 20 mg, 60 mg',
                form: 'Capsule',
                packaging: '20×10 Capsules, 10×10 Capsules',
                desc: 'SSRI antidepressant used for depression, OCD, panic disorder, and anxiety.'
            },
            {
                name: 'Flupentixol Injection IP',
                strength: '40 mg / 2 ml',
                form: 'Injection',
                packaging: '10×1×10×2 ml',
                desc: 'Long-acting antipsychotic injection supplied with syringe and needle.'
            },
            {
                name: 'Fluphenazine Decanoate Injection IP',
                strength: '25 mg / ml',
                form: 'Injection',
                packaging: '10×1×10×1 ml',
                desc: 'Depot antipsychotic injection for long-term schizophrenia management.'
            },
            {
                name: 'Haloperidol Injection IP',
                strength: '5 mg / 1 ml',
                form: 'Injection',
                packaging: '10×1×10×1 ml',
                desc: 'Rapid-acting antipsychotic injection for acute psychotic episodes.'
            },
            {
                name: 'Haloperidol Decanoate Injection',
                strength: '50 mg / 1 ml',
                form: 'Injection',
                packaging: '10×1×10×1 ml',
                desc: 'Long-acting depot antipsychotic for maintenance therapy.'
            },
            {
                name: 'Haloperidol Tablets IP',
                strength: '5 mg, 10 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'Typical antipsychotic for schizophrenia and other psychotic disorders.'
            },
            {
                name: 'Lamotrigine Dispersible Tablets IP',
                strength: '100 mg',
                form: 'Dispersible Tablet',
                packaging: '10×10 Tablets',
                desc: 'Antiepileptic medication also indicated for bipolar disorder.'
            },
            {
                name: 'Levetiracetam Injection USP',
                strength: '500 mg / 5 ml',
                form: 'Injection',
                packaging: '20×1×5 ml',
                desc: 'Intravenous antiepileptic therapy for seizure management.'
            },
            {
                name: 'Levetiracetam Tablets IP',
                strength: '500 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'Broad-spectrum antiepileptic medicine used in seizure disorders.'
            },
            {
                name: 'Memantine HCl Tablets IP',
                strength: '5 mg, 10 mg',
                form: 'Tablet',
                packaging: '10×10 Tablets',
                desc: 'NMDA receptor antagonist indicated for Alzheimer\'s disease and cognitive impairment.'
            }
        ]
    },
    'antiviral': {
        title: 'Antiviral',
        tag: 'Antiviral',
        desc: 'High-quality antiviral pharmaceutical formulations for the treatment and management of viral infections, manufactured according to international quality standards.',
        icon: '🛡️',
        coverClass: 'grad-green-dark',
        count: '12 Items',
        downloadMsg: 'Antiviral Specification Booklet',
        samples: [
            {
                name: 'Tenofovir Disoproxil Fumarate + Lamivudine + Dolutegravir Tablets IP',
                shortBadge: 'TLD',
                form: 'Tablet',
                strength: 'Tenofovir Disoproxil Fumarate 300 mg, Lamivudine 300 mg, Dolutegravir 50 mg',
                desc: 'Fixed-dose triple antiretroviral therapy indicated for the treatment of HIV infection.'
            },
            {
                name: 'Lamivudine + Tenofovir Disoproxil Fumarate Tablets IP',
                shortBadge: 'LAMI+TENO',
                form: 'Tablet',
                strength: 'Lamivudine 300 mg, Tenofovir Disoproxil Fumarate 300 mg',
                desc: 'Dual antiretroviral therapy for HIV management.'
            },
            {
                name: 'Atazanavir + Ritonavir Tablets IP',
                shortBadge: 'ATA+RITO',
                form: 'Tablet',
                strength: 'Atazanavir 300 mg, Ritonavir 100 mg',
                desc: 'Protease inhibitor combination used in antiretroviral therapy.'
            },
            {
                name: 'Lopinavir + Ritonavir Tablets IP',
                shortBadge: 'LOPI+RITO',
                form: 'Tablet',
                strength: 'Lopinavir 200 mg, Ritonavir 50 mg',
                desc: 'Combination antiviral therapy for HIV infection.'
            },
            {
                name: 'Abacavir + Lamivudine Tablets IP',
                shortBadge: 'ABA+LAMI',
                form: 'Tablet',
                strength: 'Abacavir 600 mg, Lamivudine 300 mg',
                desc: 'Fixed-dose nucleoside reverse transcriptase inhibitor combination.'
            },
            {
                name: 'Dolutegravir Tablets IP',
                shortBadge: 'DOLUTEGRAVIR',
                form: 'Tablet',
                strength: '50 mg',
                desc: 'Integrase inhibitor indicated for HIV treatment.'
            },
            {
                name: 'Abacavir Tablets IP',
                shortBadge: 'ABACAVIR',
                form: 'Tablet',
                strength: '300 mg',
                desc: 'Nucleoside reverse transcriptase inhibitor used in HIV therapy.'
            },
            {
                name: 'Entecavir Tablets IP',
                shortBadge: 'ENTECAVIR',
                form: 'Tablet',
                strength: '0.5 mg, 1 mg',
                desc: 'Antiviral medicine indicated for chronic Hepatitis B infection.'
            },
            {
                name: 'Lamivudine Tablets IP',
                shortBadge: 'LAMIVUDINE',
                form: 'Tablet',
                strength: '100 mg',
                desc: 'Antiviral medication used in the treatment of HIV and Hepatitis B.'
            },
            {
                name: 'Darunavir Tablets IP',
                shortBadge: 'DARUNAVIR',
                form: 'Tablet',
                strength: '600 mg',
                desc: 'Protease inhibitor indicated for HIV treatment.'
            },
            {
                name: 'Valganciclovir Tablets',
                shortBadge: 'VALGANCICLOVIR',
                form: 'Tablet',
                strength: '450 mg',
                desc: 'Antiviral medicine indicated for cytomegalovirus (CMV) infections.'
            },
            {
                name: 'Tenofovir Disoproxil Fumarate Tablets IP',
                shortBadge: 'TENOFOVIR',
                form: 'Tablet',
                strength: '300 mg',
                desc: 'Nucleotide reverse transcriptase inhibitor used in HIV and Hepatitis B treatment.'
            }
        ]
    },
    'cardiovascular-drugs': {
        title: 'Cardiovascular Drugs',
        tag: 'Cardiovascular',
        desc: 'High-quality cardiovascular pharmaceutical formulations for hypertension, heart failure, arrhythmias, anticoagulation, lipid management, emergency cardiac care, and critical cardiovascular conditions.',
        icon: '❤️',
        coverClass: 'grad-teal',
        count: '35 Items',
        downloadMsg: 'Cardiovascular Drugs Specification Booklet',
        samples: [
            {
                name: 'Adenosine Injection IP',
                form: 'Injection',
                strength: '6 mg / 2 ml',
                desc: 'Antiarrhythmic medication used to convert paroxysmal supraventricular tachycardia (PSVT) to sinus rhythm.'
            },
            {
                name: 'Adrenaline Bitartrate Injection IP',
                form: 'Injection',
                strength: '1 mg/ml',
                desc: 'Sympathomimetic agent used in the emergency treatment of severe anaphylactic reactions and cardiac arrest.'
            },
            {
                name: 'Amiodarone Sterile Concentrate IP',
                form: 'Injection',
                strength: '150 mg / 3 ml',
                desc: 'Antiarrhythmic agent used for the treatment of severe rhythm disorders.'
            },
            {
                name: 'Amlodipine Tablets',
                form: 'Tablet',
                strength: '5 mg',
                desc: 'Calcium channel blocker indicated for the treatment of hypertension and coronary artery disease.'
            },
            {
                name: 'Amlodipine + Atenolol Tablets',
                form: 'Tablet',
                strength: '5 mg + 50 mg',
                desc: 'Combination antihypertensive therapy containing a calcium channel blocker and beta-blocker.'
            },
            {
                name: 'Aspirin Gastro-Resistant Tablets IP',
                form: 'Tablet',
                strength: '75 mg, 150 mg',
                desc: 'Antiplatelet agent used for the prevention of cardiovascular diseases.'
            },
            {
                name: 'Atorvastatin Tablets IP',
                form: 'Tablet',
                strength: '10 mg, 20 mg, 40 mg',
                desc: 'HMG-CoA reductase inhibitor used to lower cholesterol and triglycerides.'
            },
            {
                name: 'Atropine Sulphate Injection IP',
                form: 'Injection',
                strength: '0.6 mg/ml',
                desc: 'Anticholinergic agent used to treat bradycardia and as a pre-anaesthetic medication.'
            },
            {
                name: 'Clonidine Hydrochloride Tablets IP',
                form: 'Tablet',
                strength: '100 mcg',
                desc: 'Centrally acting alpha-agonist hypotensive agent used to treat high blood pressure.'
            },
            {
                name: 'Digoxin',
                form: 'Tablet / Injection',
                strength: 'Tablet: 0.25 mg | Injection: 500 mcg / 2 ml',
                desc: 'Cardiac glycoside used for the management of mild to moderate heart failure and control of ventricular response rate in patients with chronic atrial fibrillation.'
            },
            {
                name: 'Dobutamine Injection USP',
                form: 'Injection',
                strength: '250 mg / 5 ml',
                desc: 'Inotropic agent indicated for short-term inotropic support in cardiac decompensation.'
            },
            {
                name: 'Dopamine Hydrochloride Injection IP',
                form: 'Injection',
                strength: '200 mg / 5 ml',
                desc: 'Inotropic vasopressor indicated for the correction of hemodynamic imbalances.'
            },
            {
                name: 'Electrode / Ultrasonic Gel',
                form: 'Gel',
                strength: '250 ml, 5000 ml',
                desc: 'Conductive medium used in medical ultrasound procedures and electrocardiography.'
            },
            {
                name: 'Enoxaparin Sodium Injection IP (Pre-filled Syringe)',
                form: 'Injection',
                strength: '40 mg / 0.4 ml, 60 mg / 0.6 ml, 80 mg / 0.8 ml',
                desc: 'Low molecular weight heparin used to prevent and treat deep vein thrombosis.'
            },
            {
                name: 'Esmolol Hydrochloride Injection IP',
                form: 'Injection',
                strength: '100 mg / 10 ml',
                desc: 'Ultra-short-acting beta-adrenergic blocker indicated for rapid control of ventricular rate.'
            },
            {
                name: 'Frusemide Injection IP',
                form: 'Injection',
                strength: '20 mg / 2 ml, 40 mg / 4 ml',
                desc: 'Loop diuretic used for the treatment of edema associated with congestive heart failure, renal, or hepatic disease.'
            },
            {
                name: 'Heparin Sodium Injection IP',
                form: 'Injection',
                strength: '5000 IU / 5 ml, 25000 IU / 5 ml',
                desc: 'Anticoagulant indicated for the prevention and treatment of thromboembolic disorders.'
            },
            {
                name: 'Hydralazine Hydrochloride Injection USP',
                form: 'Injection',
                strength: '20 mg/ml',
                desc: 'Direct-acting vasodilator indicated for severe essential hypertension.'
            },
            {
                name: 'Hydrochlorothiazide + Olmesartan Medoxomil Tablets',
                form: 'Tablet',
                strength: '12.5 mg + 20 mg',
                desc: 'Combination antihypertensive agent containing a thiazide diuretic and angiotensin II receptor antagonist.'
            },
            {
                name: 'Ivabradine Tablets',
                form: 'Tablet',
                strength: '5 mg',
                desc: 'Hyperpolarization-activated cyclic nucleotide-gated channel blocker indicated for stable chronic heart failure.'
            },
            {
                name: 'Labetalol',
                form: 'Tablet / Injection',
                strength: 'Tablet: 100 mg | Injection: 20 mg / 4 ml, 100 mg / 20 ml',
                desc: 'Adrenergic receptor blocking agent used for the control of blood pressure in severe hypertension.'
            },
            {
                name: 'Methyldopa Tablets IP',
                form: 'Tablet',
                strength: '250 mg',
                desc: 'Centrally acting antihypertensive agent indicated for the treatment of hypertension.'
            },
            {
                name: 'Metolazone Tablets IP',
                form: 'Tablet',
                strength: '2.5 mg, 5 mg',
                desc: 'Quinetazone diuretic indicated for the treatment of salt and water retention.'
            },
            {
                name: 'Metoprolol',
                form: 'Tablet / Extended Release Tablet / Injection',
                strength: 'Succinate ER: 50 mg | Tartrate: 25 mg, 50 mg | Injection: 1 mg/ml',
                desc: 'Selective beta-blocker used for hypertension, angina, and heart failure.'
            },
            {
                name: 'Milrinone Lactate Injection',
                form: 'Injection',
                strength: '10 mg / 10 ml',
                desc: 'Inodilator indicated for the short-term intravenous treatment of patients with acute decompensated heart failure.'
            },
            {
                name: 'Nitroglycerin Injection IP',
                form: 'Injection',
                strength: '25 mg / 5 ml, 50 mg / 5 ml',
                desc: 'Vasodilator indicated for the treatment of perioperative hypertension and congestive heart failure associated with acute myocardial infarction.'
            },
            {
                name: 'Phenylephrine HCl Injection IP',
                form: 'Injection',
                strength: '10 mg/ml',
                desc: 'Alpha-1 adrenergic receptor agonist used to treat hypotension during anesthesia.'
            },
            {
                name: 'Propranolol Hydrochloride Tablets IP',
                form: 'Tablet',
                strength: '10 mg, 20 mg, 40 mg',
                desc: 'Non-selective beta-blocker indicated for hypertension, angina pectoris, and cardiac arrhythmias.'
            },
            {
                name: 'Rosuvastatin + Aspirin + Clopidogrel Capsules',
                form: 'Capsule',
                strength: 'Rosuvastatin 10 mg + Aspirin 75 mg + Clopidogrel 75 mg, Rosuvastatin 20 mg + Aspirin 75 mg + Clopidogrel 75 mg',
                desc: 'Triple combination therapy indicated for the secondary prevention of cardiovascular events.'
            },
            {
                name: 'Rosuvastatin Tablets IP',
                form: 'Tablet',
                strength: '10 mg, 20 mg',
                desc: 'HMG-CoA reductase inhibitor indicated for hyperlipidemia and cardiovascular risk reduction.'
            },
            {
                name: 'Sacubitril + Valsartan Tablets',
                form: 'Tablet',
                strength: '24 mg / 26 mg, 49 mg / 51 mg',
                desc: 'Angiotensin receptor-neprilysin inhibitor indicated to reduce the risk of cardiovascular death and hospitalization in patients with chronic heart failure.'
            },
            {
                name: 'Sterile Noradrenaline Concentrate Injection IP',
                form: 'Injection',
                strength: '4 mg / 2 ml',
                desc: 'Vasopressor indicated for blood pressure control in acute hypotensive states.'
            },
            {
                name: 'Telmisartan + Amlodipine Tablets',
                form: 'Tablet',
                strength: '40 mg + 5 mg',
                desc: 'Combination therapy containing an angiotensin receptor blocker and a calcium channel blocker.'
            },
            {
                name: 'Telmisartan + Hydrochlorothiazide Tablets',
                form: 'Tablet',
                strength: '40 mg + 12.5 mg',
                desc: 'Combination therapy containing an angiotensin receptor blocker and a thiazide diuretic.'
            },
            {
                name: 'Telmisartan Tablets IP',
                form: 'Tablet',
                strength: '40 mg',
                desc: 'Angiotensin II receptor antagonist indicated for the treatment of hypertension.'
            }
        ]
    },
    'dermatology-drugs': {
        title: 'Dermatology Drugs',
        tag: 'Dermatology',
        desc: 'Premium dermatology formulations for acne management, fungal infections, skin care, pigmentation, wound care, scalp health, and topical therapeutic applications manufactured to international quality standards.',
        icon: '🧴',
        coverClass: 'grad-orange',
        count: '29 Items',
        downloadMsg: 'Dermatology Drugs Specification Booklet',
        samples: [
            {
                name: 'Benzoyl Peroxide + Adapalene',
                form: 'Gel',
                strength: 'Benzoyl Peroxide 2.5% w/w + Adapalene',
                packaging: '15 g',
                desc: 'Topical gel combining benzoyl peroxide and adapalene for the treatment of acne vulgaris.'
            },
            {
                name: 'Biotin + N-Acetyl Cysteine Multivitamin Tablets',
                form: 'Tablet',
                strength: '-',
                packaging: '10×10',
                desc: 'Multivitamin supplement formulated to support hair, skin, and nail health.'
            },
            {
                name: 'Calamine + Aloe Vera Lotion',
                form: 'Lotion',
                strength: '-',
                packaging: '90 ml',
                desc: 'Soothing lotion combining calamine and aloe vera to relieve skin irritation and sunburn.'
            },
            {
                name: 'Calamine + Diphenhydramine + Camphor Lotion',
                form: 'Lotion',
                strength: '-',
                packaging: '90 ml',
                desc: 'Antipruritic and soothing lotion for the relief of itching and skin discomfort.'
            },
            {
                name: 'Calamine + Light Liquid Paraffin Lotion',
                form: 'Lotion',
                strength: '-',
                packaging: '100 ml, 400 ml',
                desc: 'Emollient and protective lotion for dry, irritated skin.'
            },
            {
                name: 'Chlorhexidine Gluconate Solution',
                form: 'Solution',
                strength: '0.2%',
                packaging: '150 ml',
                desc: 'Antiseptic solution for wound cleansing and skin disinfection.'
            },
            {
                name: 'Choline Salicylate + Lignocaine Oral Gel',
                form: 'Gel',
                strength: '-',
                packaging: '20 g',
                desc: 'Topical gel indicated for the relief of pain associated with mouth ulcers.'
            },
            {
                name: 'Clindamycin Capsules',
                form: 'Capsule',
                strength: '300 mg',
                packaging: '10×10',
                desc: 'Lincosamide antibiotic used for the treatment of serious bacterial infections.'
            },
            {
                name: 'Clindamycin Gel',
                form: 'Gel',
                strength: '1%',
                packaging: '20 g',
                desc: 'Topical antibiotic gel used for the treatment of acne vulgaris.'
            },
            {
                name: 'Clindamycin + Adapalene Gel',
                form: 'Gel',
                strength: '-',
                packaging: '15 g',
                desc: 'Combination gel containing clindamycin and adapalene for acne treatment.'
            },
            {
                name: 'Clindamycin + Nicotinamide Gel',
                form: 'Gel',
                strength: '-',
                packaging: '20 g',
                desc: 'Topical gel combining clindamycin and nicotinamide for inflammatory acne.'
            },
            {
                name: 'Clobetasol + Ketoconazole Cream',
                form: 'Cream',
                strength: '-',
                packaging: '20 g',
                desc: 'Combination cream containing a corticosteroid and antifungal agent for dermatological infections.'
            },
            {
                name: 'Clobetasol + Neomycin + Miconazole Cream',
                form: 'Cream',
                strength: '-',
                packaging: '20 g',
                desc: 'Triple-action cream combining corticosteroid, antibacterial, and antifungal agents.'
            },
            {
                name: 'Clotrimazole + Beclomethasone Ear Drops',
                form: 'Drops',
                strength: '-',
                packaging: '10 ml',
                desc: 'Otic drops combining antifungal and corticosteroid agents for ear infections.'
            },
            {
                name: 'Glutathione Injection',
                form: 'Injection',
                strength: '600 mg',
                packaging: '-',
                desc: 'Injectable antioxidant therapy used for skin brightening and cellular health.'
            },
            {
                name: 'Isotretinoin Capsules',
                form: 'Capsule',
                strength: '10 mg, 20 mg',
                packaging: '10×10, 10×1×10',
                desc: 'Oral retinoid indicated for the treatment of severe recalcitrant nodular acne.'
            },
            {
                name: 'Kojic Acid Skin Brightening Lotion',
                form: 'Lotion',
                strength: '-',
                packaging: '100 ml',
                desc: 'Topical lotion formulated to reduce hyperpigmentation and brighten skin tone.'
            },
            {
                name: 'Minoxidil Topical Solution',
                form: 'Topical Solution',
                strength: '5%',
                packaging: '60 ml',
                desc: 'Topical solution indicated for the treatment of androgenetic alopecia (hair loss).'
            },
            {
                name: 'Minoxidil + Finasteride Topical Solution',
                form: 'Topical Solution',
                strength: '-',
                packaging: '60 ml',
                desc: 'Combination topical solution to prevent hair loss and stimulate hair growth.'
            },
            {
                name: 'Sunscreen Lotion',
                form: 'Lotion',
                strength: '-',
                packaging: '100 ml',
                desc: 'Broad-spectrum sunscreen lotion to protect the skin from harmful UV radiation.'
            },
            {
                name: 'Potassium Nitrate Tooth Gel',
                form: 'Gel',
                strength: '-',
                packaging: '50 g',
                desc: 'Desensitizing tooth gel used to reduce dental hypersensitivity.'
            },
            {
                name: 'Povidone Iodine Solution',
                form: 'Solution',
                strength: '2%',
                packaging: '100 ml',
                desc: 'Topical antiseptic solution used for wound care and infection prevention.'
            },
            {
                name: 'Silver Sulphadiazine + Chlorhexidine Cream',
                form: 'Cream',
                strength: '-',
                packaging: '25 g',
                desc: 'Antimicrobial cream used for the prevention and treatment of wound infections in burn patients.'
            },
            {
                name: 'Sucralfate + Mupirocin Cream',
                form: 'Cream',
                strength: '-',
                packaging: '5 g',
                desc: 'Combination cream used to promote wound healing and prevent bacterial infection.'
            },
            {
                name: 'Tannic Acid Glycerin Ear Drops',
                form: 'Drops',
                strength: '-',
                packaging: '15 ml',
                desc: 'Astringent and soothing ear drops indicated for minor ear discomfort.'
            },
            {
                name: 'Tranexamic Acid Depigmentation Cream',
                form: 'Cream',
                strength: '-',
                packaging: '20 g',
                desc: 'Depigmentation cream formulated to reduce melasma and skin discolouration.'
            },
            {
                name: 'Trioxsalen Tablets',
                form: 'Tablet',
                strength: '25 mg',
                packaging: '10×10',
                desc: 'Psoralen derivative used in combination with UV light therapy for vitiligo and psoriasis.'
            },
            {
                name: 'Wheat Germ Oil + Vitamin E Softgel',
                form: 'Softgel Capsule',
                strength: '-',
                packaging: '10×10',
                desc: 'Dietary supplement formulated to nourish skin and support overall skin health.'
            },
            {
                name: 'White Paraffin + Liquid Paraffin Cream',
                form: 'Cream',
                strength: '-',
                packaging: '100 g',
                desc: 'Emollient cream used to treat dry, scaling, and sensitive skin conditions.'
            }
        ]
    },
    'gastro-intestinal': {
        title: 'Gastrointestinal Drugs',
        tag: 'Gastro-Intestinal',
        desc: 'Comprehensive gastrointestinal pharmaceutical solutions for acid reflux, ulcers, digestive disorders, constipation, nausea, liver care, gastrointestinal infections, and supportive digestive health, manufactured to international quality standards.',
        icon: '🍽️',
        coverClass: 'grad-purple',
        count: '28 Items',
        downloadMsg: 'Gastro-Intestinal Specification Booklet',
        samples: [
            {
                name: 'Activated Dimethicone + Magnesium Hydroxide + Dried Aluminium Hydroxide Gel',
                form: 'Oral Suspension',
                strength: '-',
                packaging: '170 ml',
                desc: 'Antacid suspension indicated for the relief of hyperacidity, gas, and indigestion.'
            },
            {
                name: 'Antacid Sachet',
                form: 'Sachet',
                strength: '-',
                packaging: '5 g',
                desc: 'Fast-acting antacid powder to neutralize stomach acid and relieve heartburn.'
            },
            {
                name: 'Bacillus Clausii Spores Suspension',
                form: 'Oral Suspension',
                strength: '-',
                packaging: '5 ml',
                desc: 'Probiotic suspension used for restoring intestinal microflora balance.'
            },
            {
                name: 'Betahistine Hydrochloride Tablets',
                form: 'Tablet',
                strength: '8 mg, 16 mg',
                packaging: '10×10',
                desc: 'Antivertigo medication used to treat symptoms of Meniere\'s disease.'
            },
            {
                name: 'Bisacodyl Suppositories IP',
                form: 'Suppository',
                strength: '5 mg, 10 mg',
                packaging: '10×1×2×5',
                desc: 'Stimulant laxative suppository indicated for the relief of constipation.'
            },
            {
                name: 'Cinnarizine Tablets',
                form: 'Tablet',
                strength: 'Cinnarizine 25 mg | Cinnarizine 20 mg + Domperidone 15 mg',
                packaging: '10×10',
                desc: 'Antihistamine and calcium channel blocker used for motion sickness, vertigo, and vestibular disorders.'
            },
            {
                name: 'Clarithromycin + Pantoprazole + Amoxycillin Kit',
                form: 'Tablet Kit',
                strength: '-',
                packaging: '10×1×10',
                desc: 'Combination kit indicated for the eradication of H. pylori infection in peptic ulcer disease.'
            },
            {
                name: 'Lactulose Solutions',
                form: 'Oral Solution',
                strength: 'Lactulose | Lactulose + Wheat Dextrin + Fructo Oligosaccharides + Polydextrose',
                packaging: '200 ml, 500 ml',
                desc: 'Osmotic laxative solution indicated for the treatment of constipation and hepatic encephalopathy.'
            },
            {
                name: 'Cyproheptadine + Tricholine Citrate Syrup',
                form: 'Syrup',
                strength: '-',
                packaging: '200 ml',
                desc: 'Appetite stimulant syrup indicated for loss of appetite and weight gain support.'
            },
            {
                name: 'Digestive Enzyme Preparations',
                form: 'Syrup / Drops / Tablet',
                strength: 'Diastase + Pepsin | Fungal Diastase + Papain + Alpha Amylase + Lactase + Pancreatin',
                packaging: '30 ml, 200 ml, 225 ml, 20×15',
                desc: 'Enzyme supplements indicated for indigestion, bloating, and gas relief.'
            },
            {
                name: 'Disodium Hydrogen Citrate Syrup',
                form: 'Syrup',
                strength: '-',
                packaging: '100 ml',
                desc: 'Systemic alkalizer syrup indicated for relief from urinary tract infections and acidosis.'
            },
            {
                name: 'Antacid Suspension',
                form: 'Oral Suspension',
                strength: 'Aluminium Hydroxide + Magnesium Hydroxide + Simethicone | Magaldrate + Simethicone + Domperidone',
                packaging: '170 ml',
                desc: 'Antacid suspension for the relief of acid indigestion, heartburn, and flatulence.'
            },
            {
                name: 'Ranitidine',
                form: 'Syrup / Tablet / Injection',
                strength: 'Syrup: 75 mg / 5 ml | Tablet: 75 mg | Injection: 50 mg / 2 ml',
                packaging: '60 ml, 100 ml, 5×10×2 ml',
                desc: 'H2-receptor antagonist indicated for the treatment of peptic ulcers and gastroesophageal reflux disease.'
            },
            {
                name: 'Ondansetron Syrup',
                form: 'Syrup',
                strength: '2 mg / 5 ml',
                packaging: '30 ml',
                desc: 'Antiemetic syrup indicated for the prevention of nausea and vomiting.'
            },
            {
                name: 'Rabeprazole',
                form: 'Tablet / Capsule / Injection',
                strength: 'Rabeprazole 20 mg | Rabeprazole + Domperidone | Rabeprazole + Domperidone ER | Rabeprazole + Levosulpiride | Rabeprazole Injection',
                packaging: '-',
                desc: 'Proton pump inhibitor (PPI) and prokinetic formulations indicated for acid reflux, ulcers, and GERD management.'
            },
            {
                name: 'Esomeprazole',
                form: 'Tablet / Capsule / Injection',
                strength: 'Esomeprazole 40 mg | Esomeprazole + Domperidone | Esomeprazole + Levosulpiride | Esomeprazole Injection',
                packaging: '-',
                desc: 'Proton pump inhibitor (PPI) formulations indicated for treatment of erosive esophagitis and acid reflux.'
            },
            {
                name: 'Omeprazole',
                form: 'Tablet / Capsule / Injection',
                strength: 'Omeprazole 20 mg | Omeprazole + Domperidone | Omeprazole Capsule | Omeprazole Injection',
                packaging: '-',
                desc: 'Antisecretory PPI indicated for short-term treatment of active duodenal ulcers and gastroesophageal reflux.'
            },
            {
                name: 'Pantoprazole',
                form: 'Tablet / Capsule / Injection',
                strength: 'Pantoprazole 20 mg, 40 mg | Pantoprazole + Domperidone | Pantoprazole + Domperidone SR | Pantoprazole + Cinitapride | Pantoprazole Injection',
                packaging: '-',
                desc: 'Proton pump inhibitor (PPI) indicated for short-term treatment of GERD and pathological hypersecretory conditions.'
            },
            {
                name: 'Flunarizine Tablets',
                form: 'Tablet',
                strength: '10 mg',
                packaging: '10×10',
                desc: 'Calcium channel antagonist used for prophylaxis of migraine and treatment of vestibular disorders.'
            },
            {
                name: 'Hyoscine Butylbromide Injection',
                form: 'Injection',
                strength: '20 mg/ml',
                packaging: '10×1×10×1 ml',
                desc: 'Antispasmodic injection indicated for acute gastrointestinal or biliary spasm.'
            },
            {
                name: 'Herbal Liver Care Tablets',
                form: 'Tablet',
                strength: 'Herbal Ingredients',
                packaging: '10×10',
                desc: 'Ayurvedic hepatoprotective formulation supporting liver detoxification and overall digestive health.'
            },
            {
                name: 'Levosulpiride',
                form: 'Injection',
                strength: '25 mg / 2 ml',
                packaging: '10×1×10×2 ml',
                desc: 'Atypical antipsychotic and prokinetic agent indicated for dyspepsia, gastroesophageal reflux, and nausea.'
            },
            {
                name: 'L-Ornithine L-Aspartate',
                form: 'Sachet / Ampoule / Injection',
                strength: '3 g, 5 g | 5000 mg / 10 ml',
                packaging: '-',
                desc: 'Hepatoprotective agent used for the treatment of hepatic encephalopathy and chronic liver diseases.'
            },
            {
                name: 'Metoclopramide Injection',
                form: 'Injection',
                strength: '10 mg / 2 ml',
                packaging: '20×5×2 ml',
                desc: 'Antiemetic and prokinetic agent indicated for diabetic gastroparesis and gastroesophageal reflux.'
            },
            {
                name: 'Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate Suspension',
                form: 'Oral Suspension',
                strength: '-',
                packaging: '150 ml',
                desc: 'Alginate-based suspension providing rapid relief from heartburn and acid reflux.'
            },
            {
                name: 'Sodium Bicarbonate Injection',
                form: 'Injection',
                strength: '7.5%, 8.4%',
                packaging: '-',
                desc: 'Injectable systemic alkalizer indicated for cardiac arrest and metabolic acidosis.'
            },
            {
                name: 'Sodium Picosulfate + Liquid Paraffin + Milk of Magnesia Suspension',
                form: 'Oral Suspension',
                strength: '-',
                packaging: '170 ml',
                desc: 'Combination laxative suspension indicated for constipation and bowel clearance.'
            },
            {
                name: 'Sucralfate + Oxetacaine Suspension',
                form: 'Oral Suspension',
                strength: '-',
                packaging: '100 ml, 200 ml',
                desc: 'Cytoprotective agent and local anesthetic suspension indicated for the treatment of peptic ulcers and gastritis.'
            }
        ]
    },
    'general-medicine': {
        title: 'General Medicine',
        tag: 'General Medicine',
        desc: 'Comprehensive range of general pharmaceutical formulations including respiratory care, allergy management, nutritional supplements, vitamins & minerals, corticosteroids, cough & cold preparations, hydration products, and supportive therapies manufactured according to international quality standards.',
        icon: '💊',
        coverClass: 'grad-blue',
        count: '27 Items',
        downloadMsg: 'General Medicine Specification Booklet',
        samples: [
            {
                name: 'Calcium, Vitamin D3 & Methylcobalamin Product Range',
                form: 'Tablet, Softgel',
                strength: 'Calcitriol + Calcium Carbonate | Calcitriol + Calcium + Vitamin K2-7 | Calcitriol + Calcium + Zinc | Calcium + Vitamin D3 | Calcium + Vitamin D3 + Zinc | Calcium Citrate + Vitamin K2-7 + Magnesium + Zinc + Methylfolate | Calcitriol + Methylcobalamin + Vitamin B6 + Calcium + Folic Acid',
                packaging: '10×10, 10×15',
                desc: 'Comprehensive calcium, vitamin D3, and methylcobalamin combination range for bone density support, mineral supplementation, and nerve health.'
            },
            {
                name: 'Vitamin D3 (Cholecalciferol) Range',
                form: 'Tablet, Injection, Drops',
                strength: '60000 IU Tablet | 60000 IU Injection | 800 IU Drops',
                packaging: '10×10 Tablets, 1 ml Injection, 15 ml Drops',
                desc: 'High-strength vitamin D3 formulations for prevention and treatment of Vitamin D deficiency, supporting calcium absorption and immune system health.'
            },
            {
                name: 'Iron & Folic Acid Supplement Range',
                form: 'Syrup, Tablet',
                strength: 'Carbonyl Iron + Folic Acid + Vitamin B12 | Iron Polymaltose + Folic Acid | Ferrous Ascorbate + Folic Acid + Zinc',
                packaging: '150 ml, 200 ml, 10×10 Tablets',
                desc: 'Hematinic formulations containing iron in combination with folic acid, zinc, and vitamin B12 for the prevention and treatment of iron deficiency anemia.'
            },
            {
                name: 'Respiratory Expectorant Range',
                form: 'Syrup',
                strength: 'Ambroxol + Levosalbutamol + Guaiphenesin | Ambroxol + Terbutaline + Guaiphenesin + Menthol | Bromhexine + Terbutaline + Guaiphenesin + Menthol | Dextromethorphan + Guaiphenesin + Bromhexine + CPM | Diphenhydramine + Ammonium Chloride + Sodium Citrate + Menthol',
                packaging: '100 ml, 200 ml',
                desc: 'Cough syrups and expectorants formulated to relieve chest congestion, bronchial asthma, and productive coughs.'
            },
            {
                name: 'Anti-Allergic Product Range',
                form: 'Tablet, Syrup, Dispersible Tablet, Injection',
                strength: 'Fexofenadine | Fexofenadine + Montelukast | Levocetirizine | Levocetirizine + Montelukast | Hydroxyzine | Cyproheptadine | Dexchlorpheniramine | Chlorpheniramine Injection',
                packaging: '10×10 Tablets, 60 ml Syrup, 100 ml Syrup, Ampoule',
                desc: 'Comprehensive range of antihistamines and antiallergic agents for treatment of seasonal allergic rhinitis, urticaria, pruritus, and allergic symptoms.'
            },
            {
                name: 'Corticosteroid Product Range',
                form: 'Tablet, Injection, Syrup',
                strength: 'Betamethasone | Betamethasone Sodium Phosphate Injection | Dexamethasone | Dexamethasone Injection | Deflazacort | Hydrocortisone | Hydrocortisone Sodium Succinate Injection',
                packaging: '10×10 Tablets, 1 ml Ampoule, Vial, 60 ml Syrup',
                desc: 'Potent anti-inflammatory and immunosuppressive corticosteroids indicated for allergic states, endocrine disorders, and inflammatory diseases.'
            },
            {
                name: 'Caffeine Citrate Injection Range',
                form: 'Injection',
                strength: '20 mg / 1 ml | 40 mg / 2 ml | 60 mg / 3 ml',
                packaging: '1 ml, 2 ml, 3 ml Ampoules',
                desc: 'Respiratory stimulant injection indicated for the short-term treatment of apnea of prematurity in infants.'
            },
            {
                name: 'Eye Lubricant Drops',
                form: 'Eye Drops',
                strength: 'Carboxymethylcellulose Sodium Ophthalmic Solution',
                packaging: '10 ml Bottle',
                desc: 'Lubricating eye drops providing temporary relief from burning, irritation, and discomfort due to dryness of the eye.'
            },
            {
                name: 'Ear & Eye Anti-Infective Drops',
                form: 'Drops',
                strength: 'Ciprofloxacin + Chlorpheniramine + Zinc',
                packaging: '5 ml Bottle, 10 ml Bottle',
                desc: 'Antibacterial and anti-inflammatory eye and ear drop combination formulation.'
            },
            {
                name: 'Appetite Stimulant Syrup',
                form: 'Syrup',
                strength: 'Cyproheptadine + Tricholine Citrate',
                packaging: '200 ml Bottle',
                desc: 'Combination syrup formulated as an appetite stimulant, supporting nutritional uptake and weight gain in patients with appetite loss.'
            },
            {
                name: 'Anthelmintic Range',
                form: 'Oral Suspension',
                strength: 'Albendazole | Albendazole + Ivermectin',
                packaging: '10 ml Bottle',
                desc: 'Anthelmintic suspension for the treatment of single or mixed intestinal parasite infections.'
            },
            {
                name: 'ORS Range',
                form: 'Powder',
                strength: 'Oral Rehydration Salts IP',
                packaging: '4.2 g Sachet, 21.8 g Sachet',
                desc: 'WHO formulation oral rehydration salts for restoration of body fluids and electrolytes lost due to dehydration from diarrhea and vomiting.'
            },
            {
                name: 'Febuxostat Tablets',
                form: 'Tablet',
                strength: '40 mg | 80 mg',
                packaging: '10×10 Tablets',
                desc: 'Xanthine oxidase inhibitor indicated for the chronic management of hyperuricemia in patients with gout.'
            },
            {
                name: 'Ferric Carboxymaltose Injection',
                form: 'Injection',
                strength: '50 mg/ml',
                packaging: '2 ml Vial, 10 ml Vial',
                desc: 'Intravenous iron replacement therapy indicated for the treatment of iron deficiency anemia when oral iron preparations are ineffective.'
            },
            {
                name: 'Glucosamine Joint Care Range',
                form: 'Tablet, Softgel',
                strength: 'Glucosamine + MSM + Diacerein | Rose Hip + Collagen + Sodium Hyaluronate + Chondroitin + Vitamin C',
                packaging: '10×10 Tablets, 30 Softgels',
                desc: 'Advanced joint health support formulas providing glucosamine, MSM, and key nutrients to maintain cartilage integrity, joint mobility, and reduce pain.'
            },
            {
                name: 'Glutathione Injection Range',
                form: 'Injection',
                strength: '600 mg | 1200 mg | 2000 mg',
                packaging: 'Vial with Sterile Water',
                desc: 'High-dose intravenous glutathione injection formulation providing powerful antioxidant properties, liver detoxification support, and cellular protection.'
            },
            {
                name: 'Edaravone Injection',
                form: 'Injection',
                strength: '30 mg / 20 ml',
                packaging: '20 ml Ampoule',
                desc: 'Neuroprotective agent indicated for the treatment of amyotrophic lateral sclerosis (ALS) and acute ischemic stroke.'
            },
            {
                name: 'Etamsylate Injection',
                form: 'Injection',
                strength: '250 mg / 2 ml',
                packaging: '2 ml Ampoule',
                desc: 'Hemostatic agent indicated for the prevention and treatment of capillary hemorrhages, post-operative bleeding, and menorrhagia.'
            },
            {
                name: 'Methylene Blue Injection',
                form: 'Injection',
                strength: '1% w/v (10 mg/ml)',
                packaging: '10 ml Ampoule',
                desc: 'Indicated for the treatment of acquired methemoglobinemia.'
            },
            {
                name: 'Sterile Water for Injection',
                form: 'Injection',
                strength: 'Sterile Water',
                packaging: '5 ml, 10 ml, 15 ml Ampoules',
                desc: 'Sterile, non-pyrogenic, solute-free water for preparation and dilution of parenteral drugs.'
            },
            {
                name: 'Fluconazole Tablets',
                form: 'Tablet',
                strength: '150 mg | 400 mg',
                packaging: '1×1 Tablet, 10×10 Tablets',
                desc: 'Triazole antifungal agent indicated for the treatment of vaginal candidiasis, systemic fungal infections, and cryptococcal meningitis.'
            },
            {
                name: 'Ginseng Multivitamin Syrup',
                form: 'Syrup',
                strength: 'Ginseng + Multivitamins + Minerals',
                packaging: '200 ml Bottle',
                desc: 'Nutritional supplement syrup containing ginseng extract, vitamins, and minerals to boost immunity, energy, and overall health.'
            },
            {
                name: 'Griseofulvin Tablets',
                form: 'Tablet',
                strength: '250 mg | 500 mg',
                packaging: '10×10 Tablets',
                desc: 'Antifungal antibiotic indicated for the treatment of dermatophyte infections of the skin, hair, and nails.'
            },
            {
                name: 'Human Placenta Extract Gel',
                form: 'Gel',
                strength: '0.1% w/w Extract',
                packaging: '20 g Tube',
                desc: 'Topical gel indicated for wound healing, tissue regeneration, chronic wounds, and burns.'
            },
            {
                name: 'Drotaverine Combination Tablets',
                form: 'Tablet',
                strength: 'Drotaverine + Aceclofenac | Drotaverine + Mefenamic Acid',
                packaging: '10×10 Tablets',
                desc: 'Antispasmodic and analgesic combination tablets indicated for the treatment of smooth muscle spasms and associated pain.'
            },
            {
                name: 'Acebrophylline Combination Tablets',
                form: 'Tablet',
                strength: 'Acebrophylline + Desloratadine + Montelukast',
                packaging: '10×10 Tablets',
                desc: 'Triple combination tablet for respiratory conditions like asthma and chronic obstructive pulmonary disease (COPD) with allergic rhinitis.'
            },
            {
                name: 'Cold & Flu Combination Tablets',
                form: 'Tablet',
                strength: 'Aceclofenac + Paracetamol + Phenylephrine + Cetirizine + Caffeine',
                packaging: '10×10 Tablets',
                desc: 'Comprehensive cold and flu formulation for relief from fever, body aches, nasal congestion, runny nose, and sneezing.'
            }
        ]
    },
    'gynaec': {
        title: 'Gynaec',
        tag: 'Gynaec',
        desc: "Comprehensive women's healthcare pharmaceutical formulations for fertility support, pregnancy care, nutritional supplementation, hormonal therapy, gynecological infections, maternal wellness, and reproductive health manufactured according to international quality standards.",
        icon: '🌸',
        coverClass: 'grad-blue-dark',
        count: '17 Items',
        downloadMsg: 'Gynaec Specification Booklet',
        samples: [
            {
                name: 'Chorionic Gonadotrophin Injection IP',
                form: 'Injection',
                strength: '5000 IU | 10000 IU',
                packaging: '25×1×5000 IU, 25×1×10000 IU',
                desc: 'Hormonal therapy indicated for infertility treatment and ovulation induction.'
            },
            {
                name: 'Doxylamine + Pyridoxine + Folic Acid Tablets',
                form: 'Tablet',
                strength: 'Doxylamine 10 mg + Pyridoxine 10 mg + Folic Acid 2.5 mg | Doxylamine 20 mg + Pyridoxine 20 mg + Folic Acid 5 mg',
                packaging: '10×10',
                desc: 'Combination therapy for nausea and vomiting during pregnancy.'
            },
            {
                name: 'Dydrogesterone Tablets',
                form: 'Tablet',
                strength: '10 mg',
                packaging: '10×1×10',
                desc: 'Progesterone analogue indicated for luteal support and hormonal disorders.'
            },
            {
                name: "Women's Herbal Uterine Tonic",
                form: 'Herbal Syrup',
                strength: 'Ashwagandha + Shatavari + Ashoka + Lodhra',
                packaging: '200 ml',
                desc: "Herbal formulation containing Ashwagandha, Shatavari, Ashoka, Lodhra and other botanical ingredients to support women's reproductive health."
            },
            {
                name: 'Maternal Nutrition Protein Powder',
                form: 'Powder',
                strength: 'Fortified with Vitamins, Minerals, DHA & Iron',
                packaging: '200 g',
                desc: 'Protein-rich nutritional supplement fortified with vitamins, minerals, DHA and iron for pregnancy and lactation.'
            },
            {
                name: 'Ferric Carboxymaltose Injection',
                form: 'Injection',
                strength: '500 mg / 10 ml | 1000 mg / 20 ml',
                packaging: '10×1×10 ml, 10×1×20 ml',
                desc: 'Intravenous iron therapy for iron deficiency anaemia.'
            },
            {
                name: 'Ferrous Ascorbate Product Range',
                form: 'Syrup, Tablet',
                strength: 'Ferrous Ascorbate + Folic Acid + Zinc Syrup | Ferrous Ascorbate + Folic Acid + Zinc Tablets | Ferrous Ascorbate + Folic Acid + Adenosylcobalamin + Zinc Tablets',
                packaging: '200 ml, 300 ml, 5×3×10, 10×1×10',
                desc: 'Iron supplementation for pregnancy-associated nutritional deficiencies.'
            },
            {
                name: 'Fluconazole + Azithromycin + Secnidazole Kit',
                form: 'Treatment Kit',
                strength: 'Fluconazole + Azithromycin + Secnidazole',
                packaging: '10×1 Kit',
                desc: 'Combination therapy for mixed gynecological infections.'
            },
            {
                name: 'Fosfomycin Product Range',
                form: 'Injection, Powder',
                strength: 'Fosfomycin Injection 4 g | Fosfomycin Trometamol Powder 3 g',
                packaging: '10×1×4 g, 5×1×8 g',
                desc: 'Broad-spectrum antibacterial therapy commonly used in urinary tract infections.'
            },
            {
                name: 'Iron (III) Isomaltoside Injection',
                form: 'Injection',
                strength: '100 mg/ml',
                packaging: '10×1×5 ml',
                desc: 'Intravenous iron replacement therapy.'
            },
            {
                name: 'L-Arginine + Zinc + Folic Acid Sachets',
                form: 'Granules / Sachet',
                strength: 'L-Arginine 3 g | Zinc 10 mg | Folic Acid 2.5 mg',
                packaging: '10×10',
                desc: 'Nutritional supplement for pregnancy and fetal growth support.'
            },
            {
                name: 'Feminine Hygiene Wash',
                form: 'Intimate Wash',
                strength: 'Enriched with Aloe Vera & Tea Tree Oil',
                packaging: '100 ml',
                desc: "Women's intimate hygiene cleanser enriched with Aloe Vera and Tea Tree Oil."
            },
            {
                name: "Women's Multivitamin & Antioxidant Capsules",
                form: 'Capsule',
                strength: 'Multivitamins + Antioxidants',
                packaging: '10×10',
                desc: "Comprehensive antioxidant and micronutrient formulation for women's wellness."
            },
            {
                name: 'Methylprednisolone',
                form: 'Tablet, Injection',
                strength: '4 mg | 8 mg | Injection 40 mg',
                packaging: '10×10, 20×10, 1 Vial',
                desc: 'Corticosteroid therapy for inflammatory and autoimmune conditions.'
            },
            {
                name: 'Progesterone Soft Gelatin Capsules',
                form: 'Soft Gelatin Capsule',
                strength: '200 mg',
                packaging: '5×1×10',
                desc: 'Natural progesterone therapy for luteal support and pregnancy maintenance.'
            },
            {
                name: 'Protein Nutritional Supplement Powder',
                form: 'Powder',
                strength: 'Protein + Vitamins + Minerals',
                packaging: '200 g',
                desc: 'Protein-rich nutritional supplement fortified with vitamins and minerals for maternal nutrition.'
            },
            {
                name: 'Tranexamic Acid Injection IP',
                form: 'Injection',
                strength: '500 mg / 5 ml',
                packaging: '10×1×5×5 ml',
                desc: 'Antifibrinolytic therapy used for the management of excessive bleeding.'
            }
        ]
    },
    'health-supplement': {
        title: 'Health Supplement',
        tag: 'Supplements',
        desc: "Premium nutritional supplements, vitamins, minerals, antioxidants, probiotics, protein nutrition, electrolyte therapy, and wellness formulations manufactured according to international quality standards to support overall health and wellbeing.",
        icon: '🔋',
        coverClass: 'grad-green',
        count: '26 Items',
        downloadMsg: 'Health Supplement Specification Booklet',
        samples: [
            {
                name: 'Antioxidants, Minerals & Vitamins Capsules',
                form: 'Capsule',
                strength: 'Multivitamins + Minerals + Antioxidants',
                packaging: '60 Capsules',
                desc: 'Comprehensive antioxidant and multivitamin formulation for daily nutritional support.'
            },
            {
                name: 'Vitamin C Product Range',
                form: 'Tablet, Injection, Syrup',
                strength: 'Ascorbic Acid + Sodium Ascorbate | Vitamin C Chewable | Ascorbic Acid Injection | Vitamin C + Zinc + Vitamin D3 | 500 mg | 1500 mg Injection | 500 mg Injection',
                packaging: '10×10 Tablets, 2 ml Ampoule, 150 ml Syrup',
                desc: 'Vitamin C supplementation range including chewable tablets, injections, and combination syrups for immune support and antioxidant defense.'
            },
            {
                name: 'Hair, Skin & Nail Nutrition Range',
                form: 'Tablet, Capsule',
                strength: 'Biotin Multivitamin Formula | Biotin + Minerals + Amino Acids | Lycopene + Lutein + Vitamins',
                packaging: '10×10',
                desc: 'Advanced nutritional support for healthy hair, skin, and nails.'
            },
            {
                name: 'Fruit Extract Multivitamin Syrup',
                form: 'Syrup',
                strength: 'Multivitamins + Minerals + Fruit Extracts',
                packaging: '300 ml',
                desc: 'Fruit-flavored multivitamin and multimineral syrup to support daily vitality, growth, and immune defense in children and adults.'
            },
            {
                name: 'Calcium Supplement Range',
                form: 'Injection, Tablet',
                strength: 'Calcium Glucono-Galacto-Gluconate Injection | Calcium Supplement Formulations',
                packaging: '10×10 Tablets, 10 ml Ampoules',
                desc: 'Calcium supplementation range providing essential mineral support for bone density, nerve transmission, and muscular function.'
            },
            {
                name: 'Carica Papaya Extract Tablets',
                form: 'Tablet',
                strength: 'Carica Papaya Extract + Tinospora Extract',
                packaging: '10×10 Tablets',
                desc: 'Papaya leaf and Tinospora extract tablets indicated to help boost blood platelet count and support immune health during viral infections.'
            },
            {
                name: 'Coenzyme Q10 & Omega Supplement',
                form: 'Capsule',
                strength: 'Coenzyme Q10 + Omega 3 + Lycopene + Selenium',
                packaging: '10×10 Capsules',
                desc: 'Premium combination capsule of Coenzyme Q10, Omega 3, Lycopene, and Selenium supporting cardiovascular health, cellular energy, and antioxidant defense.'
            },
            {
                name: 'Vitamin B12 Product Range',
                form: 'Injection',
                strength: 'Cyanocobalamin | Methylcobalamin | Vitamin B Complex with B12 | Vitamin C + Vitamin B12',
                packaging: '5 ml Ampoules, 10 ml Vials',
                desc: 'High-potency Vitamin B12 and combination injections to treat vitamin deficiency, neuropathies, and support red blood cell production.'
            },
            {
                name: 'Energy Supplement Range',
                form: 'Powder',
                strength: 'Dextrose Energy Powder | Glucose C Orange | Glucose D Regular',
                packaging: '100 g, 200 g, 500 g Packets',
                desc: 'Fast-acting glucose energy powders to instantly replenish body fluids, restore electrolytes, and boost energy levels.'
            },
            {
                name: 'Digestive Enzyme Supplement Range',
                form: 'Syrup, Drops, Tablet',
                strength: 'Diastase + Pepsin | Fungal Diastase + Pepsin | Fungal Diastase',
                packaging: '200 ml Syrup, 15 ml Drops, 10×10 Tablets',
                desc: 'Digestive enzyme supplement range containing amylase, diastase, and pepsin to relieve indigestion, bloating, and support gut health.'
            },
            {
                name: 'Multivitamin + Zinc Syrup',
                form: 'Syrup',
                strength: 'Vitamin B Complex + Zinc + Folic Acid + Probiotics',
                packaging: '200 ml',
                desc: 'Nutritional syrup containing B-complex vitamins, zinc, folic acid, and probiotics to support growth, immunity, and healthy digestion.'
            },
            {
                name: 'Probiotic Product Range',
                form: 'Sachet, Capsule',
                strength: 'Fructo-Oligosaccharides + Probiotics | Lactobacillus Formulations | Multi-strain Probiotic',
                packaging: '10×10 Capsules, 1 g Sachets',
                desc: 'Probiotic capsules and sachets designed to restore beneficial gut microflora, support digestive health, and enhance immune response.'
            },
            {
                name: 'Ginseng Product Range',
                form: 'Tablet, Syrup, Capsule',
                strength: 'Ginseng Multivitamin Tablets | Ginseng Syrup | Ginseng Antioxidant Capsules',
                packaging: '30 Tablets, 200 ml Syrup, 10×10 Capsules',
                desc: 'Premium ginseng root extract ranges in combination with multivitamins and minerals to combat fatigue, improve focus, and build stamina.'
            },
            {
                name: 'Iron Supplement Range',
                form: 'Injection',
                strength: 'Iron Sucrose',
                packaging: '5 ml Ampoules',
                desc: 'Iron sucrose injection indicated for intravenous treatment of iron deficiency anemia in patients where oral iron is ineffective.'
            },
            {
                name: 'Levocarnitine Injection',
                form: 'Injection',
                strength: '1000 mg / 5 ml',
                packaging: '5 ml Ampoule',
                desc: 'Levocarnitine injection indicated for the treatment of primary and secondary carnitine deficiency.'
            },
            {
                name: 'Magnesium Sulphate Injection',
                form: 'Injection',
                strength: '1000 mg / 2 ml',
                packaging: '2 ml Ampoule',
                desc: 'Magnesium sulphate injection indicated for the prevention and treatment of seizures in severe pre-eclampsia or eclampsia, and hypomagnesemia.'
            },
            {
                name: 'Vitamin K Product Range',
                form: 'Injection',
                strength: 'Menadione Sodium Bisulphate | Phytomenadione | 1 mg | 10 mg',
                packaging: '1 ml Ampoules',
                desc: 'Vitamin K injection formulations indicated for the treatment of coagulation disorders and hypoprothrombinemia.'
            },
            {
                name: 'Multivitamin Infusion',
                form: 'Infusion',
                strength: 'Standard Multivitamin Formulation',
                packaging: '10 ml Ampoule',
                desc: 'Concentrated multivitamin infusion containing essential water-soluble and fat-soluble vitamins for intravenous administration.'
            },
            {
                name: 'Multivitamin Energy Powder',
                form: 'Powder',
                strength: 'Taurine + Amino Acids + L-Carnitine + Ginseng + Zinc + Vitamins',
                packaging: '100 g, 200 g',
                desc: 'Premium energy powder fortified with taurine, amino acids, L-carnitine, ginseng, and zinc to boost mental alertess and physical energy.'
            },
            {
                name: 'Nano Curcumin Capsules',
                form: 'Capsule',
                strength: '500 mg',
                packaging: '30 Capsules',
                desc: 'Bioavailable nano-formulated curcumin capsules with enhanced absorption for powerful anti-inflammatory, antioxidant, and joint health support.'
            },
            {
                name: 'Essential Fatty Acid Capsules',
                form: 'Capsule',
                strength: 'Omega 3 + Omega 6 + Omega 9 + Flaxseed Oil + Sea Buckthorn Oil',
                packaging: '60 Capsules',
                desc: 'Broad-spectrum essential fatty acid capsule containing Omega 3, 6, 9 from flaxseed and sea buckthorn oils to support heart, joint, and cognitive health.'
            },
            {
                name: 'Protein Nutrition Range',
                form: 'Powder',
                strength: 'Protein Hydrolysate | High Protein | Protein + DHA + GLA',
                packaging: '200 g, 400 g Tins',
                desc: 'Premium protein supplement range fortified with vitamins, minerals, DHA, and GLA for complete nutritional and muscle recovery support.'
            },
            {
                name: 'Electrolyte Product Range',
                form: 'Sachet, Injection',
                strength: 'ORS Powder | Potassium Chloride | Trace Elements | Zinc Chloride',
                packaging: '4.2 g Sachets, 10 ml Ampoules',
                desc: 'Electrolyte replacement and trace mineral supplement range to restore critical hydration and mineral balance.'
            },
            {
                name: 'Vitamin B Complex Product Range',
                form: 'Tablet, Capsule, Injection, Syrup',
                strength: 'Vitamin B Complex Formulation',
                packaging: '10×10 Tablets / Capsules, 10 ml Vials, 200 ml Syrup',
                desc: 'Essential B-complex vitamins range to support energy metabolism, nerve health, red blood cell production, and overall wellness.'
            },
            {
                name: 'Vitamin D3 Injection',
                form: 'Injection',
                strength: '600000 IU',
                packaging: '1 ml Ampoule',
                desc: 'High-strength Vitamin D3 (cholecalciferol) injection indicated for the treatment of severe Vitamin D deficiency and bone disorders.'
            },
            {
                name: 'Complete Multivitamin & Multimineral Formulations',
                form: 'Tablet, Syrup',
                strength: 'Vit A + B-Complex + C + D3 + E + Zinc + Selenium + Copper + Chromium + Mg + Mn + Biotin + Folic Acid',
                packaging: '30 Tablets, 200 ml Syrup',
                desc: 'Comprehensive daily multivitamin and multimineral formulations containing essential micronutrients, vitamins, and minerals to support systemic health and vitality.'
            }
        ]
    },
    'herbal': {
        title: 'Herbal',
        tag: 'Herbal',
        desc: "Natural Ayurvedic and herbal healthcare formulations developed using traditional botanical ingredients to support wellness, respiratory health, hair care, and pain relief while maintaining international quality standards.",
        icon: '🌿',
        coverClass: 'grad-gold',
        count: '3 Items',
        downloadMsg: 'Herbal Specification Booklet',
        samples: [
            {
                name: 'Ayurvedic Oil with Pure Bhringraj',
                form: 'Ayurvedic Hair Oil',
                strength: 'Pure Bhringraj',
                packaging: '100 ml',
                desc: 'Traditional Ayurvedic hair oil enriched with Pure Bhringraj to nourish the scalp, strengthen hair roots, promote healthy hair growth, and help reduce hair fall.'
            },
            {
                name: 'Ayurvedic Pain Relief Oil',
                form: 'Ayurvedic Massage Oil',
                strength: 'Mahanarayan Tel + Guggal Satva + Gandhpura Tel + Nilgiri Tel + Turpentine Oil + Kapoor Satva + Ajwain Satva + Capsicum Oil',
                packaging: '60 ml, 100 ml',
                desc: 'Ayurvedic pain relief oil formulated with traditional herbal ingredients to provide relief from muscular pain, joint pain, sprains, stiffness, and body aches.'
            },
            {
                name: 'Honey Based Herbal Cough Syrup',
                form: 'Herbal Syrup',
                strength: 'Honey Base + Traditional Ayurvedic Herbs',
                packaging: '100 ml',
                desc: 'Herbal cough syrup prepared with a honey base and traditional Ayurvedic herbs to help soothe sore throat, reduce cough, and support respiratory wellness.'
            }
        ]
    },
    'men-health': {
        title: 'Men Health',
        tag: 'Men Health',
        desc: "Premium men's healthcare formulations designed to support reproductive health, hormonal therapy, sexual wellness, and overall male wellbeing, manufactured according to international quality standards.",
        icon: '💪',
        coverClass: 'grad-green-dark',
        count: '3 Items',
        downloadMsg: 'Men Health Specification Booklet',
        samples: [
            {
                name: 'Premium Condoms',
                form: 'Medical Device',
                strength: 'Ultra Thin | 1750 Dots',
                packaging: '10 × 12',
                desc: 'Premium quality condoms designed to provide reliable protection while enhancing comfort and sensitivity.'
            },
            {
                name: 'Testosterone Cypionate USP Injection',
                form: 'Injection',
                strength: '250 mg / 1 ml',
                packaging: '10 × 1 × 1 ml (Includes: Disposable Pack + Sterile Syringe + Needle)',
                desc: 'Long-acting testosterone replacement therapy indicated for testosterone deficiency and androgen replacement.'
            },
            {
                name: 'Testosterone Blend Injection',
                form: 'Injection',
                strength: 'Propionate 30 mg/ml | Phenylpropionate 60 mg/ml | Isocaproate 60 mg/ml | Decanoate 100 mg/ml',
                packaging: '10 × 1 × 1 ml (Includes: Disposable Pack + Sterile Syringe + Needle)',
                desc: 'Multi-ester testosterone formulation designed for sustained androgen replacement therapy.'
            }
        ]
    },
    'neurology': {
        title: 'Neurology',
        tag: 'Neurology',
        desc: "Advanced neurology pharmaceutical formulations for neuropathy, nerve regeneration, muscle relaxation, neuroprotection, and neurological wellness, manufactured according to international quality standards.",
        icon: '🧠',
        coverClass: 'grad-teal',
        count: '7 Items',
        downloadMsg: 'Neurology Specification Booklet',
        samples: [
            {
                name: 'Alpha Lipoic Acid + Methylcobalamin Neuro Tablets',
                form: 'Tablet',
                strength: 'Alpha Lipoic Acid 100 mg | Methylcobalamin 1500 mcg | Thiamine Mononitrate 10 mg | Folic Acid 1500 mcg | Pyridoxine 3 mg',
                packaging: '5×3×10',
                desc: 'Comprehensive neurotropic formulation for peripheral neuropathy and nerve regeneration.'
            },
            {
                name: 'Methylcobalamin Neuro Injection Kit',
                form: 'Injection Kit',
                strength: 'Part 1: Vitamin C 150 mg | Part 2: Methylcobalamin 1000 mcg + Folic Acid 0.7 mg + Niacinamide 12 mg',
                packaging: 'One Kit',
                desc: 'Dual-chamber neurovitamin injection kit for neurological deficiency management.'
            },
            {
                name: 'Methylcobalamin Neuro Injection',
                form: 'Injection',
                strength: 'Methylcobalamin 1000 mcg + Pyridoxine 100 mg + D-Panthenol 50 mg + Nicotinamide 100 mg | Methylcobalamin 2500 mcg',
                packaging: '1×2 ml, 5×2 ml',
                desc: 'High-potency injectable neurotropic vitamin therapy for neuropathy and nerve repair.'
            },
            {
                name: 'Methylcobalamin Neuro Tablets',
                form: 'Tablet',
                strength: 'Methylcobalamin 1500 mcg + Vitamin B1 10 mg + L-Lysine 150 mg + Folic Acid 1500 mcg + Calcium Pantothenate 5 mg + Vitamin B6 3 mg',
                packaging: '10×10',
                desc: 'Comprehensive vitamin B complex formulation supporting nerve health and regeneration.'
            },
            {
                name: 'Methylcobalamin Neuro Syrup',
                form: 'Syrup',
                strength: 'Methylcobalamin 1500 mcg + Folic Acid 1500 mcg + Thiamine Mononitrate 10 mg + Pyridoxine 3 mg + D-Panthenol 5 mg + L-Lysine 150 mg',
                packaging: '200 ml',
                desc: 'Neurotropic syrup formulation designed to support nerve function and vitamin B supplementation.'
            },
            {
                name: 'Methocarbamol Tablets IP',
                form: 'Tablet',
                strength: '500 mg',
                packaging: '10×10',
                desc: 'Muscle relaxant indicated for the treatment of painful musculoskeletal conditions and muscle spasms.'
            },
            {
                name: 'Pregabalin + Methylcobalamin + Nortriptyline Tablets',
                form: 'Tablet',
                strength: 'Pregabalin 75 mg + Methylcobalamin 1500 mcg + Nortriptyline 10 mg',
                packaging: '10×1×10',
                desc: 'Combination therapy for neuropathic pain, diabetic neuropathy, and nerve disorders.'
            }
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
        desc: "High-quality orthopaedic rehabilitation products designed to provide effective support, stability, comfort, and recovery for musculoskeletal injuries and post-operative rehabilitation.",
        icon: '🦴',
        coverClass: 'grad-purple',
        count: '1 Item',
        downloadMsg: 'Orthopaedic Rehabilitation Specification Booklet',
        samples: [
            {
                name: 'Ankle Support with Binder (Black Colour)',
                form: 'Orthopaedic Support Device',
                strength: 'Large (L) | Extra Large (XL)',
                packaging: 'Large (L), Extra Large (XL)',
                desc: 'Premium orthopedic ankle support with adjustable binder designed to provide superior compression, stability, and protection for ankle sprains, ligament injuries, sports recovery, and post-operative rehabilitation. Manufactured using durable, breathable, and skin-friendly materials for maximum comfort during prolonged use.'
            }
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

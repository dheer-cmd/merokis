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

// ─── LAB INFO ──────────────────────────────────────────────────────────────
export const LAB_INFO = {
  name: "Al-Zahrawi Laboratory",
  nameAr: "مختبر الزهراوي",
  tagline: "Advanced Medical Diagnostics",
  director: "Dr. Mazin J. Mousa",
  credentials: "M.B.Ch.B · F.I.C.M.S. (Path.)",
  chemist: "Waleed Nidhal Mousa",
  chemistCred: "B.Sc. Chemistry",
  phone: "07601429003",
  email: "mazin.mousa@gmail.com",
  about:
    "Al-Zahrawi Laboratory offers advanced medical diagnostics using the latest laboratory equipment. Led by Dr. Mazin J. Mousa, a board-certified pathologist, the lab provides over 300 investigations across 35 specialised departments — many of which are exclusively available at Al-Zahrawi Lab in the region.",
};

// ─── TEST CATEGORIES ────────────────────────────────────────────────────────
export const CATEGORIES = [
  {
    id: "histo", icon: "🔬", color: "#1B5C8A", label: "Histopathology & Cytology", short: "Pathology",
    tests: [
      { name: "Histopathological Examination of Surgical Samples", exclusive: false, indication: "Diagnosis of tumours, inflammatory lesions, and tissue abnormalities from biopsies or surgical resections.", interpretation: "Results describe tissue architecture, cellular morphology, and pathological changes. Findings guide staging and treatment planning.", sample: "Formalin-fixed tissue" },
      { name: "Cytologic Examination (Exfoliative and FNA)", exclusive: false, indication: "Evaluation of cells from body fluids, brushings, or fine needle aspiration of masses for malignancy screening.", interpretation: "Cytologist identifies normal, atypical, or malignant cells. Used to distinguish benign from malignant lesions rapidly.", sample: "FNA / fluid / brushing" },
      { name: "Pap Smear Testing", exclusive: false, indication: "Cervical cancer screening; detection of HPV-related changes (CIN I, II, III) in women.", interpretation: "Classified per Bethesda system: NILM (normal), ASCUS, LSIL, HSIL, or malignant. Abnormal results require colposcopy.", sample: "Cervical scrape" },
    ],
  },
  {
    id: "haem", icon: "🩸", color: "#C0392B", label: "Haematological Tests", short: "Haematology",
    tests: [
      { name: "Complete Blood Count (CBC)", exclusive: false, indication: "Routine screening; diagnosis of anaemia, infection, leukaemia, polycythaemia, thrombocytopenia.", interpretation: "Low Hb → anaemia. High WBC → infection/inflammation. Low platelets → bleeding risk. High MCV → B12/folate deficiency.", sample: "EDTA blood" },
      { name: "Differential Count", exclusive: false, indication: "Identify specific WBC lineage abnormalities — neutrophilia (bacterial infection), lymphocytosis (viral), eosinophilia (allergy/parasites).", interpretation: "Each WBC type reported as %. Shift left (band neutrophils) indicates acute bacterial infection.", sample: "EDTA blood" },
      { name: "Haematological Indices", exclusive: false, indication: "Detailed RBC indices for anaemia classification: MCV, MCH, MCHC, RDW.", interpretation: "Low MCV + low MCH = microcytic hypochromic anaemia (iron deficiency, thalassaemia). High MCV = macrocytic anaemia.", sample: "EDTA blood" },
      { name: "ESR (Erythrocyte Sedimentation Rate)", exclusive: false, indication: "Non-specific marker of inflammation; monitoring of rheumatoid arthritis, TB, multiple myeloma.", interpretation: "Elevated in infection, autoimmune disease, malignancy. >100 mm/h strongly suggests serious pathology.", sample: "Citrate blood" },
      { name: "Blood Film Examination", exclusive: false, indication: "Morphological assessment of RBCs, WBCs, platelets; diagnosis of malaria, sickle cell, leukaemia.", interpretation: "Morphological abnormalities (sickle cells, blast cells, parasites) reported by haematologist.", sample: "EDTA blood" },
      { name: "Hb Electrophoresis", exclusive: false, indication: "Diagnosis of haemoglobinopathies: sickle cell disease, thalassaemia, HbC, HbE variants.", interpretation: "Abnormal bands identify variant haemoglobins. HbS >40% confirms sickle trait; HbF elevated in thalassaemia.", sample: "EDTA blood" },
      { name: "Methaemoglobin", exclusive: true, indication: "Suspected methaemoglobinaemia from drugs (dapsone, nitrites, local anaesthetics), or congenital deficiency.", interpretation: ">1.5% abnormal. >20% causes cyanosis. >70% is life-threatening. Responds to methylene blue therapy.", sample: "Heparinised blood (immediate)" },
      { name: "Sulfhaemoglobin", exclusive: true, indication: "Rare but irreversible condition from sulfonamides, dapsone, or occupational exposure to hydrogen sulphide.", interpretation: "Any detectable level is abnormal. Unlike metHb, cannot be reversed. Causes persistent cyanosis.", sample: "Heparinised blood" },
      { name: "Coombs Test (Direct and Indirect)", exclusive: false, indication: "Diagnosis of autoimmune haemolytic anaemia (AIHA), haemolytic disease of newborn, transfusion reactions.", interpretation: "Direct: detects antibodies on RBCs. Indirect: detects free antibodies in serum. Positive = immune-mediated haemolysis.", sample: "EDTA blood" },
    ],
  },
  {
    id: "coag", icon: "💉", color: "#8E44AD", label: "Coagulation Screen", short: "Coagulation",
    tests: [
      { name: "Bleeding Time", exclusive: false, indication: "Screen for platelet function disorders and vascular defects in patients with bleeding tendencies.", interpretation: "Prolonged in thrombocytopenia, aspirin use, von Willebrand disease, platelet function defects.", sample: "Skin puncture (in-vivo)" },
      { name: "Clotting Time", exclusive: false, indication: "Bedside assessment of overall clotting ability; monitoring unfractionated heparin therapy.", interpretation: "Prolonged in significant coagulation factor deficiencies, severe thrombocytopenia, or heparin excess.", sample: "Capillary blood" },
      { name: "Prothrombin Time (PT / INR)", exclusive: false, indication: "Monitor warfarin therapy; assess extrinsic coagulation pathway; pre-operative screening; liver function.", interpretation: "INR 2–3: therapeutic anticoagulation. >5: over-anticoagulated. Prolonged PT in liver disease, vitamin K deficiency.", sample: "Citrate plasma" },
      { name: "Activated Partial Thromboplastin Time (APTT)", exclusive: false, indication: "Monitor heparin therapy; detect intrinsic pathway defects (haemophilia A/B); screen for lupus anticoagulant.", interpretation: "Prolonged in factor VIII/IX deficiency, heparin therapy, lupus anticoagulant. Shortened in hypercoagulable states.", sample: "Citrate plasma" },
      { name: "Kaolin Clotting Time (KCT)", exclusive: false, indication: "Sensitive screening for lupus anticoagulant; investigation of unexplained thrombosis or miscarriage.", interpretation: "Prolonged KCT suggests lupus anticoagulant. Must be confirmed with mixing studies and phospholipid dependence tests.", sample: "Citrate plasma" },
      { name: "Thrombin Time (TT)", exclusive: false, indication: "Detect fibrinogen abnormalities, heparin effect, and fibrinolytic therapy monitoring.", interpretation: "Prolonged in hypofibrinogenaemia, dysfibrinogenaemia, heparin contamination, and elevated FDPs.", sample: "Citrate plasma" },
      { name: "Lupus Anticoagulant", exclusive: false, indication: "Antiphospholipid syndrome workup; recurrent miscarriage; unexplained thrombosis.", interpretation: "Positive lupus anticoagulant is a major criterion for antiphospholipid syndrome, increasing thrombotic risk.", sample: "Citrate plasma" },
      { name: "Plasma Fibrinogen", exclusive: false, indication: "Evaluate coagulation in DIC, liver disease, thrombolytic therapy; cardiovascular risk marker.", interpretation: "Normal 2–4 g/L. Low in DIC, liver failure, thrombolysis. High (>4 g/L) is an independent cardiovascular risk factor.", sample: "Citrate plasma" },
      { name: "Fibrin Degradation Products (FDPs)", exclusive: false, indication: "Diagnosis of DIC, fibrinolysis; monitoring thrombolytic therapy.", interpretation: "Elevated FDPs confirm fibrinolytic activity. Combined with D-Dimer and fibrinogen for DIC diagnosis.", sample: "Special FDP tube" },
      { name: "D-Dimer", exclusive: false, indication: "Rule out deep vein thrombosis (DVT) and pulmonary embolism (PE); disseminated intravascular coagulation (DIC).", interpretation: "Normal (<0.5 µg/mL) effectively excludes DVT/PE in low pre-test probability. Elevated in DIC, pregnancy, surgery.", sample: "Citrate plasma" },
      { name: "Platelet Factor 4 (PF4)", exclusive: true, indication: "Diagnosis of heparin-induced thrombocytopenia (HIT); vaccine-induced immune thrombocytopenia (VITT).", interpretation: "Anti-PF4 antibodies confirm HIT. Positive result requires immediate heparin cessation and alternative anticoagulation.", sample: "Serum" },
    ],
  },
  {
    id: "thrombo", icon: "🧬", color: "#16A085", label: "Thrombophilia Screen", short: "Thrombophilia",
    tests: [
      { name: "Protein C (Quantitative & Activity)", exclusive: true, indication: "Workup for unexplained DVT, PE, recurrent miscarriage, neonatal purpura fulminans.", interpretation: "Deficiency increases venous thromboembolism risk 7-fold. Activity <70% is abnormal. Warfarin reduces levels — test off anticoagulants.", sample: "Citrate plasma" },
      { name: "Protein S (Quantitative & Activity)", exclusive: true, indication: "Thrombophilia screening; unexplained thrombosis in young patients; family history of clotting.", interpretation: "Protein S acts as cofactor for Protein C. Deficiency type I/II/III classified by antigenic vs functional levels.", sample: "Citrate plasma" },
      { name: "Antithrombin III (Quantitative & Activity)", exclusive: true, indication: "Heparin resistance; unexplained thrombosis; recurrent pregnancy loss; liver disease evaluation.", interpretation: "AT-III deficiency is the most thrombogenic of the natural anticoagulant deficiencies. Levels <80% considered deficient.", sample: "Citrate plasma" },
      { name: "Factor V Leiden Mutation (PCR)", exclusive: true, indication: "Most common hereditary thrombophilia. Investigate unexplained DVT/PE, recurrent miscarriage, OCP users with clots.", interpretation: "Heterozygous: 5–7× increased thrombosis risk. Homozygous: 80× increased risk. Results are lifelong.", sample: "EDTA blood (DNA)" },
      { name: "Factor II (Prothrombin) Gene Polymorphism PCR", exclusive: true, indication: "Second most common hereditary thrombophilia; DVT/PE risk especially combined with Factor V Leiden.", interpretation: "G20210A mutation increases prothrombin levels ~30%, elevating thrombosis risk ~3-fold.", sample: "EDTA blood (DNA)" },
      { name: "MTHFR Mutations (C677T & A1298C)", exclusive: true, indication: "Elevated homocysteine; recurrent miscarriage; neural tube defects; cardiovascular risk assessment.", interpretation: "Homozygous 677TT: most clinically significant, causes hyperhomocysteinaemia. Treat with folate/B12 supplementation.", sample: "EDTA blood (DNA)" },
      { name: "PAI-1 4G/5G Mutation", exclusive: true, indication: "Recurrent miscarriage; venous thromboembolism; impaired fibrinolysis.", interpretation: "4G/4G homozygotes have highest PAI-1 levels → reduced fibrinolysis → increased thrombosis and miscarriage risk.", sample: "EDTA blood (DNA)" },
      { name: "JAK-2 Mutations (exon 12 & V617F)", exclusive: true, indication: "Diagnosis of myeloproliferative neoplasms (MPN): polycythaemia vera (PV), essential thrombocythaemia (ET), myelofibrosis.", interpretation: "JAK2 V617F positive in ~97% of PV, ~50% of ET and MF. Guides diagnosis and targeted therapy decisions.", sample: "EDTA blood (DNA)" },
      { name: "MPL Gene Mutation (W515L/K)", exclusive: true, indication: "JAK2-negative ET and myelofibrosis; thrombopoietin receptor mutations.", interpretation: "Present in ~5% of ET and MF. MPL mutations are MPN-defining. Important for diagnosis when JAK2 negative.", sample: "EDTA blood (DNA)" },
      { name: "CALR Gene Mutation (exon 9)", exclusive: true, indication: "JAK2/MPL-negative myeloproliferative neoplasms; essential thrombocythaemia; myelofibrosis.", interpretation: "Type 1 CALR (del52bp) more common in MF; Type 2 (ins5bp) more in ET. Both are diagnostic of MPN.", sample: "EDTA blood (DNA)" },
      { name: "CSF3R Gene Mutation (T615A and T618I)", exclusive: true, indication: "Diagnosis of chronic neutrophilic leukaemia (CNL) and atypical CML.", interpretation: "T618I most common (~80% CNL). Predicts response to JAK inhibitors (ruxolitinib).", sample: "EDTA blood (DNA)" },
    ],
  },
  {
    id: "myeloma", icon: "⚗️", color: "#D35400", label: "Multiple Myeloma", short: "Myeloma",
    tests: [
      { name: "Serum Protein Electrophoresis (SPEP)", exclusive: true, indication: "Diagnosis and monitoring of multiple myeloma, Waldenström's macroglobulinaemia, MGUS, and other plasma cell disorders.", interpretation: "M-spike (paraprotein band) in gamma region is pathognomonic for plasma cell dyscrasia. Quantify for monitoring.", sample: "Serum" },
      { name: "Urine Protein Electrophoresis (UPEP)", exclusive: true, indication: "Detection of Bence Jones proteins (free light chains) in myeloma; light chain disease; amyloidosis.", interpretation: "Bence Jones proteinuria confirms light chain myeloma. Monitoring UPEP tracks treatment response.", sample: "24h urine" },
    ],
  },
  {
    id: "apl", icon: "🔴", color: "#922B21", label: "Antiphospholipid Syndrome", short: "APS",
    tests: [
      { name: "Antiphospholipid Antibodies (IgG & IgM)", exclusive: false, indication: "Antiphospholipid syndrome (APS) diagnosis; recurrent miscarriage; unexplained thrombosis; SLE evaluation.", interpretation: "Positive on two occasions ≥12 weeks apart = APS classification criterion. Associated with arterial and venous thrombosis.", sample: "Serum" },
      { name: "Anti-β2 Glycoprotein Antibodies (IgG & IgM)", exclusive: false, indication: "More specific APS marker; distinguishes pathological from infectious antiphospholipid antibodies.", interpretation: "Anti-β2GPI is most specific APS antibody. Associated with thrombosis and obstetric morbidity.", sample: "Serum" },
      { name: "Anti-Cardiolipin Antibodies (IgG & IgM)", exclusive: false, indication: "APS diagnosis; SLE screening; false-positive VDRL investigation.", interpretation: "High titres (>40 GPL/MPL) clinically significant. Medium/high IgG most associated with thrombotic risk.", sample: "Serum" },
    ],
  },
  {
    id: "coagfactor", icon: "🩺", color: "#6C3483", label: "Coagulation Factor Assay", short: "Factor Assay",
    tests: [
      { name: "Factor VII Assay", exclusive: false, indication: "Isolated PT prolongation; hereditary Factor VII deficiency; pre-operative evaluation.", interpretation: "Normal range 60–150%. <1%: severe deficiency with spontaneous bleeding. VII has shortest half-life of all clotting factors.", sample: "Citrate plasma" },
      { name: "Factor VIII Assay", exclusive: false, indication: "Diagnosis and monitoring of haemophilia A; von Willebrand disease evaluation.", interpretation: "<1%: severe haemophilia A (spontaneous haemarthroses). 1–5%: moderate. 5–40%: mild. Also elevated in thrombotic states.", sample: "Citrate plasma" },
      { name: "Factor IX Assay", exclusive: false, indication: "Diagnosis and monitoring of haemophilia B (Christmas disease); factor IX inhibitor detection.", interpretation: "Same severity classification as FVIII haemophilia A. Christmas disease clinically indistinguishable without assay.", sample: "Citrate plasma" },
    ],
  },
  {
    id: "biochem", icon: "🧪", color: "#1A5276", label: "Biochemical Tests", short: "Biochemistry",
    tests: [
      { name: "Blood Glucose (Fasting & Random)", exclusive: false, indication: "Diabetes diagnosis and monitoring; hypoglycaemia evaluation; pre-operative assessment.", interpretation: "Fasting ≥7.0 mmol/L on two occasions = diabetes. 6.1–6.9 = impaired fasting glucose (prediabetes).", sample: "Fluoride plasma" },
      { name: "Oral Glucose Tolerance Test (OGTT)", exclusive: false, indication: "Gestational diabetes diagnosis; impaired glucose tolerance; equivocal fasting glucose results.", interpretation: "2h plasma glucose ≥11.1 mmol/L = diabetes. 7.8–11.0 = impaired glucose tolerance.", sample: "Plasma (serial)" },
      { name: "Blood Urea & Creatinine", exclusive: false, indication: "Renal function assessment; dehydration; GI bleeding (elevated urea:creatinine ratio).", interpretation: "Raised urea + raised creatinine = renal impairment. Urea:creatinine >100 suggests pre-renal or GI blood.", sample: "Serum" },
      { name: "Uric Acid", exclusive: false, indication: "Gout diagnosis and management; hyperuricaemia screening; tumour lysis syndrome monitoring.", interpretation: "Normal: 200–420 µmol/L (male), 140–360 (female). >420 hyperuricaemia. Gout attacks typically at >480.", sample: "Serum" },
      { name: "Creatinine Clearance (GFR / eGFR)", exclusive: false, indication: "Accurate renal function measurement; drug dosing in renal impairment; CKD staging.", interpretation: "GFR >90: normal. 60–89: mild reduction. 30–59: moderate CKD. <30: severe CKD. <15: renal failure.", sample: "24h urine + serum" },
      { name: "Electrolytes (Na, K, Cl, Mg, Ca, Phosphate)", exclusive: false, indication: "Fluid and electrolyte status; acid-base evaluation; monitoring IV therapy; endocrine workup.", interpretation: "Each electrolyte has specific clinical significance. Hypokalaemia (K<3.5) causes arrhythmias. Hypernatraemia reflects dehydration.", sample: "Serum" },
      { name: "Zinc & Copper (Serum and Urine)", exclusive: false, indication: "Nutritional assessment; Wilson's disease (copper); zinc deficiency in malabsorption; supplementation monitoring.", interpretation: "Low zinc: impaired wound healing, immune dysfunction. Elevated copper + low caeruloplasmin: Wilson's disease.", sample: "Serum / urine" },
      { name: "Amylase & Lipase", exclusive: false, indication: "Diagnosis of acute pancreatitis; monitoring chronic pancreatitis; salivary gland disease.", interpretation: "Lipase more specific for pancreatitis than amylase. Lipase >3× ULN strongly suggests acute pancreatitis.", sample: "Serum" },
      { name: "Liver Function Tests (AST, ALT, ALP, GGT, Bilirubin)", exclusive: false, indication: "Liver disease diagnosis; drug hepatotoxicity monitoring; jaundice workup; alcoholic liver disease (GGT).", interpretation: "Hepatocellular: ↑ALT/AST. Cholestatic: ↑ALP/GGT/bilirubin. ALT >1000 IU/L = viral hepatitis or ischaemic hepatitis.", sample: "Serum" },
      { name: "Creatine Kinase (Total & CK-MB)", exclusive: false, indication: "Myocardial infarction (CK-MB); muscular dystrophy; myositis; rhabdomyolysis; statin myopathy.", interpretation: "Total CK >5× ULN = rhabdomyolysis risk. CK-MB fraction >6% total CK suggests cardiac origin.", sample: "Serum" },
      { name: "Placental Alkaline Phosphatase", exclusive: true, indication: "Marker for seminoma and other germ cell tumours; placental insufficiency; liver disease in pregnancy.", interpretation: "Elevated PLAP in seminoma (50–60%); used alongside AFP and β-hCG for testicular tumour markers.", sample: "Serum" },
      { name: "Serum Iron & Iron Binding Capacity (TIBC)", exclusive: false, indication: "Iron deficiency anaemia diagnosis; iron overload; haemochromatosis; anaemia of chronic disease differentiation.", interpretation: "Iron deficiency: low serum iron, high TIBC, low ferritin. Iron overload: high serum iron, low TIBC, high ferritin.", sample: "Serum (fasting)" },
    ],
  },
  {
    id: "renal_stones", icon: "🪨", color: "#7D6608", label: "Renal Stone Analysis", short: "Renal Stones",
    tests: [
      { name: "Renal Stone Chemical Composition Analysis", exclusive: true, indication: "Essential after first stone episode to guide dietary and pharmacological prevention of recurrence.", interpretation: "Calcium oxalate (80%): reduce oxalate. Uric acid: alkalinise urine. Struvite: treat infection. Cystine: high fluid intake.", sample: "Renal stone specimen" },
      { name: "Urinary Electrolytes Panel (Ca, PO4, Uric Acid, Oxalate, Citrate, Cysteine)", exclusive: true, indication: "Metabolic evaluation for recurrent nephrolithiasis; identify specific urinary risk factors.", interpretation: "Hypercalciuria >300 mg/day: commonest. Hyperoxaluria: dietary or primary. Low citrate: predisposes calcium stones.", sample: "24h urine" },
    ],
  },
  {
    id: "diabetes", icon: "🍬", color: "#27AE60", label: "Diabetes Monitoring", short: "Diabetes",
    tests: [
      { name: "HbA1c (HPLC Method)", exclusive: false, indication: "Diagnosis of diabetes (≥48 mmol/mol); monitoring glycaemic control over past 3 months; treatment adjustment.", interpretation: "<42 mmol/mol: normal. 42–47: prediabetes. ≥48: diabetes. Target for most diabetics: <53 mmol/mol (7%).", sample: "EDTA blood" },
      { name: "Total Glycated Haemoglobin (Boronate Affinity)", exclusive: false, indication: "Alternative HbA1c method unaffected by haemoglobin variants; useful in haemoglobinopathies.", interpretation: "Reports total glycated Hb as percentage. Normal <6%. Diabetic target <7–7.5% depending on guidelines.", sample: "EDTA blood" },
      { name: "Fructosamine", exclusive: true, indication: "Short-term glycaemic control (2–3 weeks); useful when HbA1c unreliable (haemolysis, haemoglobinopathy, pregnancy).", interpretation: "Reflects glucose control over 2–3 weeks. Elevated fructosamine indicates poor short-term glycaemic control.", sample: "Serum" },
      { name: "Plasma Insulin Level", exclusive: false, indication: "Evaluate insulin resistance; investigate hypoglycaemia; diagnose insulinoma; assess beta cell function.", interpretation: "Fasting insulin >25 µU/mL suggests insulin resistance. Low insulin with high glucose confirms Type 1 DM.", sample: "Fasting serum" },
      { name: "Proinsulin", exclusive: true, indication: "Insulinoma diagnosis; differentiate from exogenous insulin administration; beta cell dysfunction assessment.", interpretation: "Elevated proinsulin:insulin ratio (>20%) strongly suggests insulinoma or sulphonylurea use.", sample: "Fasting serum" },
      { name: "C-Peptide", exclusive: false, indication: "Assess residual beta cell function; differentiate Type 1 from Type 2 DM; investigate factitious hypoglycaemia.", interpretation: "Low C-peptide + high insulin = exogenous insulin. Low C-peptide + high glucose = Type 1 DM beta cell failure.", sample: "Fasting serum" },
      { name: "Anti-Insulin Antibodies", exclusive: false, indication: "Autoimmune insulin syndrome; factitious hypoglycaemia; insulin therapy monitoring.", interpretation: "Positive anti-insulin Ab in some Type 1 DM. Very high titres in autoimmune insulin syndrome (Hirata disease).", sample: "Serum" },
      { name: "Anti-Islet Cell Antibodies", exclusive: true, indication: "Early diagnosis of Type 1 DM; prediction in at-risk relatives; LADA (latent autoimmune diabetes in adults).", interpretation: "Positive ICA in 60–80% of new Type 1 DM. Persistence predicts progression to insulin dependence.", sample: "Serum" },
      { name: "Anti-GAD65 Antibodies", exclusive: false, indication: "Diagnosis of Type 1 DM and LADA; stiff person syndrome; autoimmune cerebellar ataxia.", interpretation: "Most persistent of islet autoantibodies. Positive GAD65 Ab + clinical features = LADA. Also in neurological syndromes.", sample: "Serum" },
      { name: "Urinary Microalbumin", exclusive: false, indication: "Early diabetic nephropathy detection; hypertensive kidney disease; cardiovascular risk marker.", interpretation: "30–300 mg/day = microalbuminuria → early nephropathy. >300 mg/day = macroalbuminuria → established nephropathy.", sample: "Spot / 24h urine" },
      { name: "Urinary Albumin/Creatinine Ratio", exclusive: true, indication: "Preferred method for early nephropathy screening; hypertension monitoring; cardiovascular risk stratification.", interpretation: "<3 mg/mmol: normal. 3–30: microalbuminuria. >30: macroalbuminuria. Indicates progressive renal damage.", sample: "Spot urine" },
      { name: "Plasma Cystatin C", exclusive: true, indication: "More accurate GFR estimation than creatinine; early renal impairment in diabetics; elderly patients.", interpretation: "Cystatin C-based eGFR not affected by muscle mass. Levels rise earlier than creatinine in kidney disease.", sample: "Serum" },
    ],
  },
  {
    id: "di", icon: "💧", color: "#2471A3", label: "Diabetes Insipidus", short: "D. Insipidus",
    tests: [
      { name: "Serum Copeptin", exclusive: true, indication: "Differentiates central DI from nephrogenic DI and primary polydipsia; avoids complex water deprivation tests.", interpretation: "Low copeptin + polyuria = central DI. High copeptin + polyuria = nephrogenic DI. Normal = primary polydipsia.", sample: "Serum (fasting)" },
      { name: "Serum & Urine Osmolality", exclusive: true, indication: "Investigation of polyuria/polydipsia; DI diagnosis; SIADH; hyponatraemia workup.", interpretation: "DI: serum osm >295 + urine osm <300 mOsm/kg. SIADH: low serum osm + inappropriately high urine osm.", sample: "Serum + urine" },
    ],
  },
  {
    id: "thyroid", icon: "🦋", color: "#2980B9", label: "Thyroid Function & Autoimmunity", short: "Thyroid",
    tests: [
      { name: "TSH (Thyroid Stimulating Hormone)", exclusive: false, indication: "First-line thyroid screening; monitoring thyroid replacement therapy and hyperthyroidism treatment.", interpretation: "Low TSH: hyperthyroidism. High TSH: hypothyroidism. Normal: 0.4–4.0 mU/L. Subclinical disease: TSH alone abnormal.", sample: "Serum" },
      { name: "Triiodothyronine (T3) & Free T3", exclusive: false, indication: "Confirm thyroid status; T3 toxicosis (normal T4 with elevated T3); non-thyroidal illness.", interpretation: "High fT3 with normal fT4 = T3 toxicosis. Low T3/T4 with high TSH = hypothyroidism.", sample: "Serum" },
      { name: "Thyroxine (T4) & Free T4", exclusive: false, indication: "Confirm overt thyroid dysfunction; monitor levothyroxine therapy; neonatal screening.", interpretation: "High fT4 + low TSH = overt hyperthyroidism. Low fT4 + high TSH = overt hypothyroidism.", sample: "Serum" },
      { name: "Thyroglobulin (TG)", exclusive: false, indication: "Monitoring differentiated thyroid cancer after thyroidectomy; detect recurrence.", interpretation: "Should be undetectable post-thyroidectomy. Rising TG suggests recurrence or residual tissue. Interpret with anti-TG Abs.", sample: "Serum" },
      { name: "Anti-TPO (Anti-Thyroid Peroxidase)", exclusive: false, indication: "Diagnosis of Hashimoto's thyroiditis; Graves' disease; predicting postpartum thyroiditis.", interpretation: "High titres (>100 IU/mL) strongly suggest autoimmune thyroid disease. Hashimoto's: high TPO + hypothyroidism.", sample: "Serum" },
      { name: "Anti-Thyroglobulin Antibody (Anti-TG)", exclusive: false, indication: "Hashimoto's thyroiditis; interferes with thyroglobulin tumour marker measurement.", interpretation: "Positive in 60–80% Hashimoto's. Must always be measured alongside TG tumour marker to avoid false-low readings.", sample: "Serum" },
      { name: "Anti-TMA (Anti-Thyroid Microsomal Antibody)", exclusive: true, indication: "Confirmatory test for Hashimoto's thyroiditis; older but still clinically relevant.", interpretation: "Present in >95% of Hashimoto's. Combined with Anti-TPO increases diagnostic sensitivity.", sample: "Serum" },
      { name: "TRAb (TSH Receptor Antibody)", exclusive: false, indication: "Diagnosis and monitoring of Graves' disease; prediction of neonatal thyrotoxicosis in pregnant women.", interpretation: "Positive TRAb with hyperthyroidism confirms Graves'. High titres in pregnancy predict neonatal thyrotoxicosis.", sample: "Serum" },
    ],
  },
  {
    id: "fertility", icon: "👶", color: "#E91E8C", label: "Fertility Hormones", short: "Fertility",
    tests: [
      { name: "LH (Luteinizing Hormone)", exclusive: false, indication: "Ovulation detection; LH surge monitoring; hypogonadism diagnosis; PCOS; male hypogonadism.", interpretation: "Mid-cycle LH surge (>25 IU/L) confirms ovulation. High basal LH in PCOS. Low LH in hypothalamic amenorrhoea.", sample: "Serum (timed)" },
      { name: "FSH (Follicle Stimulating Hormone)", exclusive: false, indication: "Ovarian reserve assessment; menopause diagnosis; primary vs secondary hypogonadism.", interpretation: "FSH >25 IU/L in follicular phase = diminished ovarian reserve/menopause. Low FSH = pituitary/hypothalamic cause.", sample: "Serum (day 2–3)" },
      { name: "Prolactin (PRL)", exclusive: false, indication: "Galactorrhoea; amenorrhoea; infertility; pituitary adenoma (prolactinoma) diagnosis.", interpretation: ">500 mU/L: mildly elevated. >5000: prolactinoma likely. Macroprolactin must be excluded in equivocal cases.", sample: "Serum (fasting, rest 30 min)" },
      { name: "Estradiol (E2)", exclusive: false, indication: "Follicular development monitoring in IVF; ovarian reserve; menopausal status; gynaecomastia workup.", interpretation: "Follicular: 150–400 pmol/L. Mid-cycle: up to 2500. Post-menopause: <100. Elevated in oestrogen-secreting tumours.", sample: "Serum" },
      { name: "Progesterone", exclusive: false, indication: "Confirm ovulation (day 21 sample); luteal phase defect; pregnancy support; ectopic pregnancy.", interpretation: "Day 21 progesterone >30 nmol/L confirms ovulation. <16: anovulation. In early pregnancy: rising levels reassure.", sample: "Serum (day 21)" },
      { name: "Total & Free Testosterone", exclusive: false, indication: "Hirsutism; PCOS; male hypogonadism; anabolic steroid detection; adrenal tumours.", interpretation: "Male: 8–30 nmol/L total. Female: 0.5–2.4 nmol/L. Elevated in PCOS, CAH, adrenal/ovarian tumour.", sample: "Serum (9 AM)" },
      { name: "DHEA-S (Dehydroepiandrosterone Sulfate)", exclusive: false, indication: "Adrenal androgen excess; adrenal vs ovarian source of androgens; CAH; premature adrenarche.", interpretation: "Elevated DHEA-S (>10 µmol/L in adult women) suggests adrenal source of androgen excess.", sample: "Serum" },
      { name: "17-Hydroxyprogesterone (17-OHP)", exclusive: false, indication: "Diagnosis of congenital adrenal hyperplasia (21-hydroxylase deficiency); neonatal screening.", interpretation: "Basal >6 nmol/L: suspect CAH. Confirm with synacthen stimulation. Values >30 post-stimulation = classical CAH.", sample: "Serum (8–9 AM)" },
      { name: "Androstenedione", exclusive: true, indication: "Adrenal and ovarian androgen excess; CAH; PCOS; hirsutism workup.", interpretation: "Elevated in CAH, PCOS, adrenal tumours. Combined with DHEA-S to differentiate adrenal vs ovarian source.", sample: "Serum" },
      { name: "SHBG (Sex Hormone Binding Globulin)", exclusive: true, indication: "Assess bioavailable testosterone; insulin resistance; PCOS; risk of type 2 diabetes.", interpretation: "Low SHBG increases free androgen fraction. In women: low SHBG + elevated androgens = PCOS.", sample: "Serum" },
      { name: "Anti-Müllerian Hormone (AMH)", exclusive: false, indication: "Ovarian reserve assessment; fertility treatment planning (IVF); prediction of ovarian stimulation response.", interpretation: "<1.0 ng/mL: poor reserve. 1–3.5: normal. >3.5: high reserve (PCOS risk). Guides IVF protocol selection.", sample: "Serum (any day)" },
    ],
  },
  {
    id: "malefert", icon: "♂️", color: "#1565C0", label: "Male Fertility", short: "Male Fertility",
    tests: [
      { name: "Seminal Fluid Analysis", exclusive: false, indication: "Male infertility investigation; post-vasectomy confirmation; fertility treatment planning.", interpretation: "WHO 2021 criteria: volume ≥1.4 mL, concentration ≥16M/mL, total motility ≥42%, morphology ≥4% (Kruger).", sample: "Semen (3–5 day abstinence)" },
      { name: "Anti-Sperm Antibody Titer (Serum & Seminal Plasma)", exclusive: true, indication: "Unexplained infertility; recurrent miscarriage; post-vasectomy reversal evaluation; immunological infertility.", interpretation: ">50% motile sperm bound: clinically significant. Antibodies impair motility and fertilisation. Consider ICSI.", sample: "Serum + semen" },
      { name: "Sperm DNA Fragmentation Index (DFI)", exclusive: true, indication: "Unexplained infertility; recurrent miscarriage; failed IVF/ICSI; assessment before ART.", interpretation: "DFI <15%: good fertility prognosis. 15–25%: moderate impairment. >25%: significantly reduced fertility outcomes.", sample: "Semen" },
    ],
  },
  {
    id: "growth", icon: "📈", color: "#117A65", label: "Growth Hormones", short: "Growth Hormones",
    tests: [
      { name: "Growth Hormone Basal Level (GH)", exclusive: false, indication: "Acromegaly screening; GH deficiency in children; pituitary function assessment.", interpretation: "Single GH has limited diagnostic value due to pulsatile secretion. Must be combined with IGF-1 and dynamic tests.", sample: "Serum" },
      { name: "Growth Hormone Clonidine Stimulation Test", exclusive: false, indication: "Definitive diagnosis of GH deficiency in children; pre-treatment baseline for GH therapy.", interpretation: "GH peak <20 mU/L (7 µg/L) after stimulation = GH deficiency. Requires close monitoring during test.", sample: "Serum (serial, 0–90 min)" },
      { name: "Growth Hormone Suppression (OGTT)", exclusive: false, indication: "Confirmation of acromegaly; monitoring treatment response after surgery/radiotherapy.", interpretation: "Normal: GH suppressed to <1 µg/L after 75g glucose. Failure to suppress = active acromegaly.", sample: "Serum (serial)" },
      { name: "IGF-1 (Insulin-Like Growth Factor 1)", exclusive: false, indication: "Acromegaly diagnosis and monitoring; GH deficiency evaluation; pituitary assessment.", interpretation: "IGF-1 stable throughout day (unlike GH). Elevated in acromegaly. Age- and sex-adjusted normal ranges.", sample: "Serum" },
    ],
  },
  {
    id: "adrenal", icon: "⚡", color: "#F39C12", label: "Adrenal Function", short: "Adrenal",
    tests: [
      { name: "Cortisol (Basal)", exclusive: false, indication: "Cushing's syndrome; Addison's disease; adrenal insufficiency; critical illness assessment.", interpretation: "AM cortisol <100 nmol/L suggests adrenal insufficiency. >550 makes Cushing's likely. Confirm with dynamic tests.", sample: "Serum (9 AM)" },
      { name: "ACTH", exclusive: false, indication: "Differentiate ACTH-dependent from independent Cushing's; Addison's disease; ectopic ACTH secretion.", interpretation: "Low ACTH + high cortisol = adrenal adenoma. High ACTH + high cortisol = Cushing's disease or ectopic ACTH.", sample: "Plasma (ice, immediate)" },
      { name: "Synacthen Stimulation Test (Short & Long)", exclusive: false, indication: "Definitive diagnosis of adrenal insufficiency (primary vs secondary); Addison's disease.", interpretation: "Normal: cortisol rises >550 nmol/L. Failure confirms adrenal insufficiency. Long test differentiates primary from secondary.", sample: "Serum (serial)" },
      { name: "Dexamethasone Suppression Test", exclusive: false, indication: "Cushing's syndrome diagnosis and subtype localisation.", interpretation: "Overnight 1mg: cortisol <50 nmol/L excludes Cushing's. 48h low-dose confirms diagnosis. High-dose locates source.", sample: "Serum (post-dex)" },
      { name: "Aldosterone & Renin (+ Ratio)", exclusive: true, indication: "Primary hyperaldosteronism (Conn's syndrome); hypertension workup; adrenal adenoma vs hyperplasia.", interpretation: "Aldosterone/Renin ratio >30 (with aldosterone >15 ng/dL) = diagnostic of primary hyperaldosteronism.", sample: "Serum (ambulant)" },
      { name: "Phaeochromocytoma Screen (Metanephrines + VMA + Dopamine)", exclusive: true, indication: "Suspected phaeochromocytoma in hypertensive patients with headache, palpitations, sweating.", interpretation: "Plasma metanephrines: highest sensitivity (~99%). VMA: useful. Elevated values require CT/MRI adrenal.", sample: "Plasma + 24h urine" },
    ],
  },
  {
    id: "vitamins", icon: "💊", color: "#3498DB", label: "Vitamins & Nutrition", short: "Vitamins",
    tests: [
      { name: "25-OH Vitamin D (D2 + D3)", exclusive: false, indication: "Bone health; osteoporosis prevention; immune function; fatigue and myalgia workup; supplementation monitoring.", interpretation: "<30 nmol/L: deficient. 30–50: insufficient. 50–125: optimal. >250: toxicity risk. Treat deficiency with D3.", sample: "Serum" },
      { name: "Vitamin B12 (Cobalamin)", exclusive: false, indication: "Macrocytic anaemia; peripheral neuropathy; cognitive decline; vegans; pernicious anaemia workup.", interpretation: "<150 pmol/L: deficient. 150–220: borderline. >220: normal. Low B12 → elevated homocysteine + MMA confirms deficiency.", sample: "Serum" },
      { name: "Folate (B9)", exclusive: false, indication: "Macrocytic anaemia; neural tube defect prevention in pregnancy; malabsorption.", interpretation: "Serum folate <7 nmol/L: deficient. Red cell folate more reliable for tissue stores. Treat with folic acid 5mg daily.", sample: "Serum / RBC" },
      { name: "Pyridoxine (B6)", exclusive: true, indication: "Peripheral neuropathy; sideroblastic anaemia; B6 dependency syndromes; supplementation monitoring.", interpretation: "<20 nmol/L: deficient. Toxicity at high doses (>200mg/day): sensory neuropathy. B6 involved in over 100 enzymatic reactions.", sample: "Plasma (EDTA, frozen)" },
      { name: "Vitamin E (α-Tocopherol)", exclusive: true, indication: "Fat malabsorption syndromes; ataxia; neonatal haemolytic anaemia; antioxidant status assessment.", interpretation: "<11.6 µmol/L: deficient in adults. Deficiency causes spinocerebellar ataxia, haemolytic anaemia, retinopathy.", sample: "Serum (fasting)" },
      { name: "Ferritin", exclusive: false, indication: "Iron stores assessment; iron deficiency anaemia; iron overload; anaemia of chronic disease.", interpretation: "<12 µg/L: iron depleted. 12–30: borderline. >300 (M) />200 (F): iron overload. Elevated in inflammation (acute phase).", sample: "Serum" },
      { name: "Transferrin Saturation", exclusive: false, indication: "Iron overload detection; haemochromatosis screening; distinguish iron deficiency from ACD.", interpretation: ">45% saturation: iron overload. <20%: iron deficiency. Combined with ferritin for complete iron status.", sample: "Serum (fasting)" },
    ],
  },
  {
    id: "b12met", icon: "🔵", color: "#1A5276", label: "Vitamin B12 Metabolism", short: "B12 Metabolism",
    tests: [
      { name: "Holotranscobalamin (Active B12)", exclusive: true, indication: "Most sensitive early marker of B12 deficiency; detects depletion before serum B12 falls.", interpretation: "<35 pmol/L indicates B12 depletion. Unaffected by recent B12 intake. First fraction depleted in B12 deficiency.", sample: "Serum" },
      { name: "Homocysteine", exclusive: true, indication: "Cardiovascular risk; B12/folate deficiency confirmation; thrombophilia workup; MTHFR mutation evaluation.", interpretation: ">15 µmol/L: elevated. >30: severely elevated. Responds to B12, folate, B6 supplementation. Independent CV risk factor.", sample: "Fasting plasma" },
      { name: "Methionine", exclusive: true, indication: "B12 metabolism disorders; homocystinuria; methylation pathway assessment.", interpretation: "Low methionine with elevated homocysteine confirms B12/folate metabolic pathway disruption.", sample: "Plasma (fasting)" },
      { name: "Methylmalonic Acid (MMA)", exclusive: true, indication: "Most specific marker of functional B12 deficiency; differentiates from folate deficiency; neurological B12 depletion.", interpretation: ">0.4 µmol/L confirms functional B12 deficiency even when serum B12 is normal. Essential for early neurological protection.", sample: "Serum / urine" },
    ],
  },
  {
    id: "cardiac", icon: "❤️", color: "#E74C3C", label: "Cardiac Markers", short: "Cardiac",
    tests: [
      { name: "Cardiac Troponin I (cTnI)", exclusive: false, indication: "Diagnosis of acute myocardial infarction (AMI); risk stratification in chest pain; myocarditis.", interpretation: "Rises 3–6h post-MI, peaks 24h, returns to normal 7–10 days. Serial measurements (0h, 3h, 6h) essential.", sample: "Serum (serial)" },
      { name: "NT-proBNP", exclusive: false, indication: "Diagnosis and monitoring of heart failure; dyspnoea differentiation (cardiac vs pulmonary); prognostication.", interpretation: ">125 pg/mL suggests heart failure in non-acute setting. Higher levels correlate with severity. Guides diuretic therapy.", sample: "Serum" },
      { name: "Myoglobin", exclusive: false, indication: "Early marker of myocardial injury; rhabdomyolysis; renal failure risk assessment.", interpretation: "Rises within 1–3h of MI but not cardiac-specific. Useful for early exclusion. Elevated in rhabdomyolysis.", sample: "Serum" },
      { name: "CK-MB (Creatine Kinase Myocardial Band)", exclusive: false, indication: "Diagnosis of re-infarction; post-cardiac surgery monitoring; when troponin remains elevated from prior MI.", interpretation: "CK-MB >6% of total CK suggests myocardial source. Returns to normal faster than troponin — useful for re-infarction.", sample: "Serum" },
      { name: "Homocysteine (Cardiac Risk)", exclusive: true, indication: "Independent cardiovascular risk factor; atherosclerosis; assessment in patients without classic risk factors.", interpretation: "Each 5 µmol/L rise increases CV risk ~20%. Treatable with B vitamins. High-risk: >15 µmol/L.", sample: "Fasting plasma" },
    ],
  },
  {
    id: "autoimmune", icon: "🛡️", color: "#9B59B6", label: "Autoimmunity", short: "Autoimmunity",
    tests: [
      { name: "Antinuclear Antibody Screen (8 & 12 Antigens)", exclusive: false, indication: "Screening and profiling of systemic autoimmune diseases: SLE, Sjögren's, myositis, scleroderma, MCTD.", interpretation: "Specific antigens (dsDNA, Sm, SS-A/Ro, Scl-70, Jo-1) classify the specific autoimmune syndrome.", sample: "Serum" },
      { name: "Anti-dsDNA (IgG, IgM)", exclusive: false, indication: "Diagnosis and disease activity monitoring in SLE. Most specific antibody for SLE.", interpretation: "Positive anti-dsDNA is a classification criterion for SLE. Rising titres correlate with lupus nephritis flare.", sample: "Serum" },
      { name: "Anti-CCP (Rheumatoid Arthritis)", exclusive: false, indication: "Diagnosis of rheumatoid arthritis (RA); predicts erosive disease; positive before clinical onset.", interpretation: "Specificity >95% for RA. High titres predict aggressive erosive course. Combined with RF for diagnosis.", sample: "Serum" },
      { name: "Rheumatoid Factor (IgG & IgM)", exclusive: false, indication: "Rheumatoid arthritis diagnosis; other inflammatory arthropathies; Sjögren's syndrome.", interpretation: "Positive in ~70% RA. Not specific — elevated in SLE, Sjögren's, infections. Anti-CCP more specific.", sample: "Serum" },
      { name: "Coeliac Disease Panel (Anti-tTG, Anti-Gliadin, Anti-DGP)", exclusive: false, indication: "Diagnosis of coeliac disease and gluten sensitivity; monitoring dietary compliance; family screening.", interpretation: "Anti-tTG IgA: best single test for coeliac. Anti-DGP IgG: best in IgA deficiency. Confirm with duodenal biopsy.", sample: "Serum" },
      { name: "c-ANCA / p-ANCA (Renal Autoimmunity)", exclusive: false, indication: "Diagnosis of vasculitis: c-ANCA in GPA; p-ANCA in MPA; anti-GBM in Goodpasture's.", interpretation: "c-ANCA (anti-PR3): GPA. p-ANCA (anti-MPO): MPA. Titres correlate with disease activity.", sample: "Serum" },
      { name: "Anti-PLA2R (Membranous Nephropathy)", exclusive: true, indication: "Primary membranous nephropathy diagnosis and monitoring; differentiating from secondary causes.", interpretation: "Positive in ~70% primary membranous nephropathy. Titre correlates with activity. Decline predicts remission.", sample: "Serum" },
      { name: "Neurology Paraneoplastic Panel (12 antibodies)", exclusive: true, indication: "Paraneoplastic neurological syndromes associated with occult malignancy (lung, breast, ovary, lymphoma).", interpretation: "Panel includes Hu, Yo, Ri, CV2, Amphiphysin, SOX1, Titin, Zic4, GAD65, Recoverin, PNMA2, Tr(DNER).", sample: "Serum / CSF" },
      { name: "Anti-Ganglioside Panel (12 specificities)", exclusive: true, indication: "Guillain-Barré syndrome subtypes; Miller Fisher syndrome; multifocal motor neuropathy; CIDP.", interpretation: "Anti-GQ1b: Miller Fisher (ophthalmoplegia, ataxia, areflexia). Anti-GM1: lower motor neuron disease.", sample: "Serum" },
      { name: "Anti-Aquaporin-4 & Anti-MOG (NMOSD)", exclusive: false, indication: "Distinguish neuromyelitis optica spectrum disorder from multiple sclerosis; guide treatment.", interpretation: "Anti-AQP4+: high relapse risk; immunosuppression needed. Anti-MOG+: MOGAD — different prognosis and treatment.", sample: "Serum" },
      { name: "Anti-AChR & Anti-MuSK (Myasthenia Gravis)", exclusive: true, indication: "Diagnosis of myasthenia gravis; differentiating ocular from generalised; guiding immunotherapy.", interpretation: "Anti-AChR positive in ~85% generalised MG. Anti-MuSK positive in most seronegative MG.", sample: "Serum" },
      { name: "Autoimmune Hepatitis Panel (AMA-M2, SLA, LKM-1, Sp100, LC1, Gp120)", exclusive: false, indication: "Diagnosis of primary biliary cholangitis (AMA-M2) and autoimmune hepatitis (LKM-1, SLA).", interpretation: "AMA-M2 >95% specific for PBC. Anti-LKM-1: AIH type 2 in children. Anti-SLA: severe AIH, high relapse risk.", sample: "Serum" },
    ],
  },
  {
    id: "inflamm", icon: "🔥", color: "#CB4335", label: "Inflammation Markers", short: "Inflammation",
    tests: [
      { name: "High Sensitivity CRP (hsCRP)", exclusive: false, indication: "Cardiovascular risk stratification; monitor response to anti-inflammatory therapy; infection vs inflammation.", interpretation: "<1 mg/L: low CV risk. 1–3: intermediate. >3: high risk. >10 mg/L: acute inflammation/infection.", sample: "Serum" },
      { name: "Complement C3 & C4", exclusive: false, indication: "SLE activity monitoring; hereditary angioedema; complement deficiency screening.", interpretation: "Low C3/C4 in active SLE (immune complex consumption). Low C4 in hereditary angioedema (C1-INH deficiency).", sample: "Serum" },
      { name: "CH50 (Total Complement Haemolytic Activity)", exclusive: true, indication: "Screen for classical complement pathway deficiencies; recurrent encapsulated bacterial infections.", interpretation: "Low CH50 = complement pathway defect. Absent CH50 = complete deficiency. Normal CH50 excludes classical pathway defect.", sample: "Serum (ice)" },
      { name: "Myxovirus Resistant Protein A (MxA)", exclusive: true, indication: "Interferon type I activity marker; differentiating viral from bacterial infection; monitoring interferon therapy.", interpretation: "MxA elevated in viral infections, interferonopathies, SLE, dermatomyositis. Useful when distinguishing viral vs bacterial.", sample: "Serum / EDTA" },
      { name: "Serum Amyloid Protein A (SAA)", exclusive: true, indication: "Acute phase reaction marker more sensitive than CRP; AA amyloidosis monitoring; chronic inflammatory disease.", interpretation: "Rises earlier and higher than CRP in acute inflammation. >10 mg/L: significant inflammation. Key marker in amyloidosis.", sample: "Serum" },
    ],
  },
  {
    id: "infection", icon: "🦠", color: "#1ABC9C", label: "Infectious Disease", short: "Infectious",
    tests: [
      { name: "TORCH Screen (Toxoplasma, CMV, Rubella, HSV)", exclusive: false, indication: "Antenatal screening; congenital infection workup in neonates; immunocompromised patients.", interpretation: "IgM = recent/active infection. IgG = past infection/immunity. IgM in neonate = congenital infection.", sample: "Serum" },
      { name: "Hepatitis B Complete Panel (HBsAg, HBsAb, HBcAb, HBeAb)", exclusive: false, indication: "Diagnosis, immunity assessment, chronicity evaluation, and infectivity status of hepatitis B.", interpretation: "HBsAg+/HBcIgM+: acute. HBsAg+/HBcIgG+: chronic. HBsAb+ alone: vaccinated. HBeAg+: high replication.", sample: "Serum" },
      { name: "HCV Antibody", exclusive: false, indication: "Hepatitis C screening; high-risk patient evaluation; blood donor screening.", interpretation: "Positive anti-HCV → confirm with HCV RNA PCR. Anti-HCV may persist after clearance.", sample: "Serum" },
      { name: "HIV (Combined Ag/Ab Test)", exclusive: false, indication: "HIV screening; post-exposure evaluation; antenatal screening.", interpretation: "Detects HIV-1/2 antibodies and p24 antigen from week 2–4 post-infection. Reactive results require confirmatory testing.", sample: "Serum" },
      { name: "VDRL & TPHA (Syphilis)", exclusive: false, indication: "Syphilis screening (VDRL) and confirmatory testing (TPHA); antenatal screening; neurosyphilis workup.", interpretation: "VDRL non-specific (false positives in SLE, pregnancy). TPHA highly specific treponemal test.", sample: "Serum" },
      { name: "TB-IGRA (Interferon Gamma Release Assay)", exclusive: false, indication: "Latent TB diagnosis; preferred in BCG-vaccinated patients; healthcare worker screening.", interpretation: "Positive IGRA confirms TB infection. Does not distinguish latent from active — clinical context needed.", sample: "Heparinised blood" },
      { name: "Tuberculosis PCR", exclusive: true, indication: "Rapid diagnosis of active TB (pulmonary and extrapulmonary); culture-negative TB.", interpretation: "Detects MTB DNA within hours. More sensitive than smear. Simultaneous rifampicin resistance detection.", sample: "Sputum / BAL / tissue" },
      { name: "HPV Genotyping (35 genotypes)", exclusive: true, indication: "Cervical cancer risk stratification; post-colposcopy management; head and neck cancer HPV typing.", interpretation: "HR-HPV 16/18 carry highest malignancy risk. Persistent HR-HPV+ warrants colposcopy.", sample: "Cervical swab" },
      { name: "Viral Load (HBV, HCV, HIV, CMV)", exclusive: true, indication: "Monitor antiviral treatment response; assess infectivity; guide therapy initiation.", interpretation: "Undetectable viral load = treatment success. Rising load = treatment failure or resistance.", sample: "Plasma / serum" },
      { name: "STD Panel PCR (10 pathogens)", exclusive: true, indication: "Comprehensive STI screening including gonorrhoea, chlamydia, mycoplasma, herpes, trichomonas, syphilis.", interpretation: "Molecular detection far more sensitive than culture. Identifies co-infections. Guides targeted antibiotic therapy.", sample: "Urine / swab" },
      { name: "Anti-Measles Antibodies (IgG & IgM)", exclusive: false, indication: "Immunity confirmation; outbreak investigation; MMR vaccination effectiveness.", interpretation: "IgM positive: current/recent measles infection. IgG positive: past infection or immunity from vaccination.", sample: "Serum" },
    ],
  },
  {
    id: "molecular", icon: "🧫", color: "#0D6E6E", label: "Infectious Disease Molecular Testing", short: "Molecular PCR",
    tests: [
      { name: "FilmArray Upper Respiratory Panel (23 pathogens)", exclusive: true, indication: "Rapid diagnosis of upper respiratory infections; influenza/COVID/RSV differentiation in emergency settings.", interpretation: "Detects 23 viruses and bacteria incl. all influenza subtypes, SARS-CoV-2, RSV, MERS, mycoplasma, pertussis. 45 min.", sample: "Nasopharyngeal swab" },
      { name: "FilmArray Lower Respiratory Panel (27 pathogens + resistance genes)", exclusive: true, indication: "ICU pneumonia; ventilator-associated pneumonia; antibiotic stewardship in critically ill patients.", interpretation: "Detects bacteria, viruses + carbapenem resistance genes (KPC, NDM, VIM, OXA-48), ESBL, MRSA. 45 min.", sample: "BAL / sputum" },
      { name: "FilmArray Blood Infection Panel (38 pathogens + resistance)", exclusive: true, indication: "Sepsis and bacteraemia rapid diagnosis; replaces 48–72h culture in critical patients.", interpretation: "Identifies bacteria, Candida spp + resistance genes. Enables early de-escalation from broad-spectrum antibiotics.", sample: "Blood (EDTA)" },
      { name: "FilmArray CNS Bacterial Panel", exclusive: true, indication: "Acute bacterial meningitis; encephalitis; CNS infections in immunocompromised.", interpretation: "10 bacterial + fungal pathogens including N. meningitidis, S. pneumoniae, Listeria, Cryptococcus, TB. 45-min results.", sample: "CSF" },
      { name: "Respiratory Panel PCR (SARS-CoV-2, RSV, Adenovirus, Influenza)", exclusive: true, indication: "Respiratory illness differentiation; outbreak investigation; immunocompromised patients.", interpretation: "Multiplex PCR identifies multiple respiratory viruses simultaneously. Guides isolation and antiviral treatment.", sample: "NPS / BAL" },
      { name: "CNS Bacterial Panel PCR & Reverse Hybridisation", exclusive: true, indication: "Rapid CNS infection pathogen identification including Lyme disease, Coxiella, and Treponema.", interpretation: "10 pathogens identified including rare CNS pathogens. Critical for empirical antibiotic selection.", sample: "CSF" },
    ],
  },
  {
    id: "hla", icon: "🔑", color: "#6C3483", label: "HLA Typing", short: "HLA Typing",
    tests: [
      { name: "HLA-B27", exclusive: true, indication: "Ankylosing spondylitis; reactive arthritis; psoriatic arthritis; IBD-associated arthropathy.", interpretation: "HLA-B27 positive in 90–95% of ankylosing spondylitis. Test in young patients with inflammatory back pain.", sample: "EDTA blood (DNA)" },
      { name: "HLA-B5 & HLA-B51", exclusive: true, indication: "Behçet's disease diagnosis; strong association in Middle Eastern populations.", interpretation: "HLA-B51 positive in 60–80% of Behçet's disease in Iraqi/Turkish populations. Supports clinical diagnosis.", sample: "EDTA blood (DNA)" },
    ],
  },
  {
    id: "tumour", icon: "🎯", color: "#C0392B", label: "Tumour Markers", short: "Oncology",
    tests: [
      { name: "PSA & Free PSA", exclusive: false, indication: "Prostate cancer screening and monitoring; post-prostatectomy surveillance; BPH differentiation.", interpretation: "PSA >4 ng/mL: consider biopsy. Free PSA <10%: higher malignancy risk. Post-surgery: PSA should be undetectable.", sample: "Serum" },
      { name: "CA 125", exclusive: false, indication: "Ovarian cancer diagnosis and monitoring; peritoneal disease; mesothelioma.", interpretation: ">35 U/mL: abnormal. In post-menopausal women with pelvic mass, highly suspicious for ovarian malignancy.", sample: "Serum" },
      { name: "CA 19-9", exclusive: false, indication: "Pancreatic cancer diagnosis and monitoring; cholangiocarcinoma; gastric cancer.", interpretation: ">37 U/mL: abnormal. Sensitivity 80% for pancreatic cancer. Also elevated in biliary disease.", sample: "Serum" },
      { name: "Alpha Fetoprotein (AFP)", exclusive: false, indication: "Hepatocellular carcinoma; non-seminomatous germ cell tumours; liver disease monitoring.", interpretation: ">400 ng/mL in cirrhotic patient with liver mass = HCC diagnosis (no biopsy needed in some guidelines).", sample: "Serum" },
      { name: "hCG (Human Chorionic Gonadotropin)", exclusive: false, indication: "Gestational trophoblastic disease; testicular germ cell tumours; pregnancy monitoring.", interpretation: "Rising hCG in non-pregnant patient = trophoblastic disease or GCT. Monitor during and after chemotherapy.", sample: "Serum" },
      { name: "CEA (Carcinoembryonic Antigen)", exclusive: false, indication: "Colorectal cancer monitoring; lung, breast, thyroid cancer surveillance; disease recurrence detection.", interpretation: "CEA >5 ng/mL in non-smokers is suspicious. Serial monitoring more useful than single value.", sample: "Serum" },
      { name: "CA 15-3", exclusive: false, indication: "Breast cancer monitoring; treatment response assessment; recurrence detection.", interpretation: ">30 U/mL: elevated. Rising CA15-3 during treatment suggests progression. Not for screening.", sample: "Serum" },
      { name: "Chromogranin A", exclusive: true, indication: "Neuroendocrine tumour (NET) diagnosis and monitoring; carcinoid; phaeochromocytoma.", interpretation: "Best single marker for NETs. Correlates with tumour burden. Values >300 µg/L strongly suggest NET.", sample: "Serum (fasting)" },
      { name: "Urinary 5-HIAA", exclusive: true, indication: "Carcinoid tumour diagnosis; serotonin-secreting NET; carcinoid syndrome (flushing, diarrhoea).", interpretation: "24h urinary 5-HIAA >25 mg/24h: diagnostic of carcinoid. Avoid serotonin-rich foods 48h before.", sample: "24h urine (acidified)" },
      { name: "Gastrin 17", exclusive: true, indication: "Zollinger-Ellison syndrome; gastrinoma; atrophic gastritis; Helicobacter pylori associated disease.", interpretation: "Gastrin >200 pg/mL with acid hypersecretion = gastrinoma. Low gastrin 17 in corpus atrophic gastritis.", sample: "Serum (fasting)" },
      { name: "NSE (Neuron-Specific Enolase)", exclusive: true, indication: "Small cell lung cancer; neuroblastoma; NETs; brain injury marker.", interpretation: ">16.3 µg/L: elevated. Combined with chromogranin A improves sensitivity for NETs and SCLC.", sample: "Serum" },
      { name: "Erythropoietin", exclusive: true, indication: "Distinguish primary from secondary polycythaemia; anaemia workup; EPO therapy monitoring.", interpretation: "Low EPO + high Hb = polycythaemia vera. High EPO + anaemia = secondary cause (renal, tumour).", sample: "Serum" },
    ],
  },
  {
    id: "allergy", icon: "🌿", color: "#2ECC71", label: "Allergy Panels", short: "Allergy",
    tests: [
      { name: "Food Allergy Panel (23 Antigens)", exclusive: true, indication: "IgE-mediated food allergy diagnosis; unexplained urticaria, angio-oedema, anaphylaxis; eosinophilic GI disease.", interpretation: "Specific IgE levels: Class 0 (<0.35): negative. Class 3–6: clinically significant sensitisation. Correlate with symptoms.", sample: "Serum" },
      { name: "Inhalation Allergy Panel (22 Antigens)", exclusive: true, indication: "Allergic rhinitis; asthma triggers; atopic dermatitis; occupational allergy assessment.", interpretation: "Identifies specific aeroallergen sensitisations (dust mite, pollens, moulds, pets). Guides immunotherapy.", sample: "Serum" },
      { name: "Milk Allergy Panel (6 Antigens)", exclusive: true, indication: "Cow's milk protein allergy in infants; differentiate IgE-mediated from non-IgE (FPIES); formula selection.", interpretation: "Component testing (casein, alpha/beta-lactoglobulin) predicts reaction severity and tolerance development.", sample: "Serum" },
      { name: "Total IgE", exclusive: false, indication: "Atopic disease assessment; parasitic infection; hyper-IgE syndrome; allergic bronchopulmonary aspergillosis.", interpretation: ">100 kU/L: atopy likely. >1000: consider ABPA, hyper-IgE syndrome, or heavy parasitic load.", sample: "Serum" },
    ],
  },
  {
    id: "drug", icon: "⚕️", color: "#7F8C8D", label: "Therapeutic Drug Monitoring", short: "TDM",
    tests: [
      { name: "Tacrolimus (FK506)", exclusive: true, indication: "Monitor immunosuppression in solid organ transplant patients; prevent rejection while avoiding nephrotoxicity.", interpretation: "Trough: 5–15 ng/mL (early post-transplant). Narrow therapeutic index — small dose changes have major clinical impact.", sample: "Whole blood (trough)" },
      { name: "Cyclosporin", exclusive: true, indication: "Solid organ transplant; autoimmune conditions (psoriasis, RA, uveitis); nephrotic syndrome.", interpretation: "Trough: 100–400 ng/mL depending on organ and time post-transplant. Nephrotoxic above therapeutic range.", sample: "Whole blood (trough)" },
      { name: "Methotrexate", exclusive: true, indication: "High-dose MTX monitoring in oncology; ensure safe leucovorin rescue; prevent nephrotoxicity.", interpretation: "24h level >10 µmol/L: high risk. 48h >1 µmol/L: leucovorin rescue needed. Daily monitoring until <0.1 µmol/L.", sample: "Serum (timed)" },
      { name: "5-Fluorouracil", exclusive: true, indication: "5-FU pharmacokinetic monitoring in oncology; guides dose individualisation to improve efficacy/reduce toxicity.", interpretation: "Optimal AUC: 20–30 mg·h/L. Below range: under-dosing. Above range: mucositis, myelosuppression risk.", sample: "Plasma (timed, on pump)" },
      { name: "Paclitaxel (Taxol)", exclusive: true, indication: "Pharmacokinetic monitoring in breast, ovarian, and lung cancer treatment.", interpretation: "Time above threshold concentration (>0.05 µmol/L) correlates with both efficacy and neurotoxicity.", sample: "Plasma (timed)" },
      { name: "Valproic Acid (Depaken)", exclusive: true, indication: "Epilepsy management; bipolar disorder; migraine prophylaxis dose optimisation.", interpretation: "Therapeutic range: 50–100 µg/mL. Toxicity (>100): tremor, encephalopathy, hepatotoxicity.", sample: "Serum (trough)" },
      { name: "Carbamazepine (Tegretol)", exclusive: true, indication: "Epilepsy and trigeminal neuralgia management; monitor for toxicity and drug interactions.", interpretation: "Therapeutic: 4–12 µg/mL. Toxicity (>12): diplopia, ataxia, nausea. Many drug interactions.", sample: "Serum (trough)" },
      { name: "Digoxin", exclusive: true, indication: "Heart failure and atrial fibrillation management; assess toxicity in symptomatic patients.", interpretation: "Therapeutic: 0.8–2.0 ng/mL. Toxicity (>2.0): nausea, visual disturbance, arrhythmias. Measure 6–8h post-dose.", sample: "Serum" },
      { name: "Mycophenolate (CellCept)", exclusive: true, indication: "Monitor immunosuppression post-transplant; reduce rejection while avoiding GI side effects.", interpretation: "MPA AUC 30–60 mg·h/L: therapeutic. Limited-sampling strategy used for AUC estimation.", sample: "Whole blood (serial)" },
    ],
  },
  {
    id: "others", icon: "🧩", color: "#616A6B", label: "Others", short: "Others",
    tests: [
      { name: "Faecal Calprotectin", exclusive: false, indication: "Differentiate IBD from IBS; monitor IBD activity; assess response to biological therapy.", interpretation: "<50 µg/g: normal (IBS likely). 50–200: borderline. >200: significant intestinal inflammation (IBD).", sample: "Stool" },
      { name: "Faecal H. pylori Antigen", exclusive: false, indication: "Diagnosis of active H. pylori infection; confirm eradication 4 weeks after completing treatment.", interpretation: "Positive = active infection. Test of cure: must stop PPIs 2 weeks before. Sensitivity/specificity >90%.", sample: "Stool" },
      { name: "Immunoglobulins (IgG, IgM, IgA, IgE)", exclusive: false, indication: "Immune deficiency evaluation; myeloma (IgG, IgA); IgA nephropathy; allergy (IgE); infection history.", interpretation: "Hypogammaglobulinaemia: recurrent infections. Elevated single Ig class may indicate plasma cell dyscrasia.", sample: "Serum" },
      { name: "Neutrophil Function Test (NBT Test)", exclusive: true, indication: "Diagnosis of chronic granulomatous disease (CGD); investigation of recurrent/severe bacterial infections.", interpretation: "Normal neutrophils reduce NBT dye (blue). CGD: failure to reduce NBT. Confirms phagocytic killing defect.", sample: "Heparinised blood" },
    ],
  },
  {
    id: "bodyfluids", icon: "💧", color: "#2C3E50", label: "Body Fluids Analysis", short: "Body Fluids",
    tests: [
      { name: "Pleural Fluid Analysis", exclusive: false, indication: "Diagnosis of pleural effusion cause: transudate vs exudate; infection; malignancy; haemothorax.", interpretation: "Light's criteria: protein ratio >0.5, LDH ratio >0.6, LDH >2/3 ULN = exudate. pH <7.2: empyema or malignancy.", sample: "Pleural fluid (sterile)" },
      { name: "Ascitic Fluid Analysis", exclusive: false, indication: "Diagnosis of ascites: cirrhosis, infection (SBP), malignancy, portal hypertension.", interpretation: "SAAG >11 g/L: portal hypertension. Neutrophils >250/µL: spontaneous bacterial peritonitis. Cytology for malignancy.", sample: "Ascitic fluid" },
      { name: "CSF Analysis", exclusive: false, indication: "Meningitis; encephalitis; subarachnoid haemorrhage; CNS malignancy; Guillain-Barré syndrome.", interpretation: "Bacterial meningitis: turbid, high WBC, high protein, low glucose. Viral: clear, lymphocytes, normal glucose.", sample: "CSF (lumbar puncture)" },
    ],
  },
];

// ─── MOCK REPORTS ────────────────────────────────────────────────────────────
export const REPORTS = [
  {
    id: "LAB-2026-03281", test: "Complete Blood Count (CBC)", date: "28 Mar 2026",
    collected: "08:15 AM", status: "ready", dept: "Haematology",
    results: [
      { param: "Haemoglobin", value: "13.8", unit: "g/dL", range: "13.5–17.5", flag: "" },
      { param: "WBC Count", value: "7.2", unit: "×10³/µL", range: "4.5–11.0", flag: "" },
      { param: "Platelet Count", value: "245", unit: "×10³/µL", range: "150–400", flag: "" },
      { param: "Haematocrit", value: "42", unit: "%", range: "41–53", flag: "" },
      { param: "MCV", value: "88", unit: "fL", range: "80–100", flag: "" },
      { param: "MCH", value: "29", unit: "pg", range: "27–33", flag: "" },
    ],
  },
  {
    id: "LAB-2026-03252", test: "Liver Function Tests", date: "25 Mar 2026",
    collected: "09:00 AM", status: "ready", dept: "Biochemistry",
    results: [
      { param: "ALT (GPT)", value: "52", unit: "U/L", range: "7–40", flag: "H" },
      { param: "AST (GOT)", value: "38", unit: "U/L", range: "10–40", flag: "" },
      { param: "ALP", value: "95", unit: "U/L", range: "44–147", flag: "" },
      { param: "Total Bilirubin", value: "0.9", unit: "mg/dL", range: "0.1–1.2", flag: "" },
      { param: "Total Protein", value: "7.1", unit: "g/dL", range: "6.4–8.3", flag: "" },
      { param: "Albumin", value: "4.2", unit: "g/dL", range: "3.5–5.0", flag: "" },
    ],
  },
  {
    id: "LAB-2026-04013", test: "Thyroid Panel (TSH, FT3, FT4)", date: "01 Apr 2026",
    collected: "07:45 AM", status: "processing", dept: "Endocrinology", results: [],
  },
];

// ─── INITIAL CHAT ────────────────────────────────────────────────────────────
export const INITIAL_MESSAGES = [
  {
    id: 1, from: "staff", name: "Lab Reception", avatar: "LR",
    text: "Welcome to Al-Zahrawi Lab! How can we help you today?",
    time: "09:00 AM",
  },
];

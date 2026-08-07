// =================================
// PATHOLOGY QUIZ
// PART 1 (QUESTIONS 1 - 10)
// =================================

const pathologyQuiz = [

{

question:
"Pathology is the study of:",

options:[
"Changes caused by disease in the body",
"Normal body functions only",
"Medicines only",
"Surgical procedures only"
],

answer:
"Changes caused by disease in the body",

meaning:
"ఈ ప్రశ్నలో Pathology అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Changes caused by disease in the body.\n\nPathology అనేది diseases వల్ల body tissues, cells మరియు organs లో వచ్చే changes ను అధ్యయనం చేసే శాస్త్రం."
},

{

question:
"The basic structural and functional unit of the body is:",

options:[
"Cell",
"Tissue",
"Organ",
"System"
],

answer:
"Cell",

meaning:
"ఈ ప్రశ్నలో Body యొక్క basic unit ఏది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Cell.\n\nCell అనేది body యొక్క basic structural and functional unit."
},

{

question:
"A biopsy is performed to:",

options:[
"Examine tissue for diagnosis",
"Measure blood pressure",
"Check body temperature",
"Give medication"
],

answer:
"Examine tissue for diagnosis",

meaning:
"ఈ ప్రశ్నలో Biopsy ఎందుకు చేస్తారు అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Examine tissue for diagnosis.\n\nBiopsy లో tissue sample తీసుకుని microscope ద్వారా disease diagnosis చేస్తారు."
},

{

question:
"Inflammation is a response to:",

options:[
"Injury or infection",
"Normal growth",
"Exercise only",
"Sleep"
],

answer:
"Injury or infection",

meaning:
"ఈ ప్రశ్నలో Inflammation ఏ కారణంగా వస్తుంది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Injury or infection.\n\nInflammation అనేది body యొక్క protective response to injury or infection."
},

{

question:
"The four cardinal signs of inflammation include:",

options:[
"Redness, heat, swelling and pain",
"Fever only",
"Cough and cold",
"Weight loss only"
],

answer:
"Redness, heat, swelling and pain",

meaning:
"ఈ ప్రశ్నలో Inflammation యొక్క ముఖ్య లక్షణాలు ఏవి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Redness, heat, swelling and pain.\n\nClassical signs of inflammation: rubor, calor, tumor and dolor."
},

{

question:
"Necrosis refers to:",

options:[
"Death of cells or tissues",
"Normal cell growth",
"Cell division",
"Repair process"
],

answer:
"Death of cells or tissues",

meaning:
"ఈ ప్రశ్నలో Necrosis అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Death of cells or tissues.\n\nNecrosis అనేది injury లేదా disease వల్ల cells/tissues death చెందడం."
},

{

question:
"Apoptosis is:",

options:[
"Programmed cell death",
"Accidental injury",
"Infection",
"Inflammation only"
],

answer:
"Programmed cell death",

meaning:
"ఈ ప్రశ్నలో Apoptosis అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Programmed cell death.\n\nApoptosis అనేది controlled మరియు programmed cell death process."
},

{

question:
"Anemia is characterized by decreased:",

options:[
"Hemoglobin level",
"Blood pressure",
"Blood sugar",
"Platelet count only"
],

answer:
"Hemoglobin level",

meaning:
"ఈ ప్రశ్నలో Anemia లో ఏది తగ్గుతుంది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Hemoglobin level.\n\nAnemia లో hemoglobin concentration తగ్గడం వల్ల oxygen carrying capacity తగ్గుతుంది."
},

{

question:
"Leukocytosis means increase in:",

options:[
"White blood cells",
"Red blood cells",
"Platelets",
"Plasma"
],

answer:
"White blood cells",

meaning:
"ఈ ప్రశ్నలో Leukocytosis అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: White blood cells.\n\nLeukocytosis అనేది WBC count పెరగడం, ఇది infection లేదా inflammation లో కనిపించవచ్చు."
},

{

question:
"Thrombocytopenia refers to decreased:",

options:[
"Platelet count",
"RBC count",
"WBC count",
"Hemoglobin only"
],

answer:
"Platelet count",

meaning:
"ఈ ప్రశ్నలో Thrombocytopenia అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Platelet count.\n\nPlatelets తగ్గడం వల్ల bleeding tendency పెరగవచ్చు."
}

];
// =================================
// PATHOLOGY QUIZ
// PART 2 (QUESTIONS 11 - 20)
// =================================

pathologyQuiz.push(

{

question:
"Cell injury can be caused by:",

options:[
"Hypoxia, chemicals and infections",
"Only exercise",
"Only sleep",
"Only nutrition"
],

answer:
"Hypoxia, chemicals and infections",

meaning:
"ఈ ప్రశ్నలో Cell injury కి కారణాలు ఏవి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Hypoxia, chemicals and infections.\n\nCell injury కి oxygen deficiency, toxic substances, infections మరియు physical agents కారణాలు కావచ్చు."
},

{

question:
"Hypoxia means:",

options:[
"Reduced oxygen supply to tissues",
"Increase in blood sugar",
"Increase in body temperature",
"Excess fluid in body"
],

answer:
"Reduced oxygen supply to tissues",

meaning:
"ఈ ప్రశ్నలో Hypoxia అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Reduced oxygen supply to tissues.\n\nHypoxia లో tissues కి అవసరమైనంత oxygen అందదు."
},

{

question:
"Atrophy refers to:",

options:[
"Decrease in size of cells",
"Increase in cell size",
"Increase in cell number",
"Cell death only"
],

answer:
"Decrease in size of cells",

meaning:
"ఈ ప్రశ్నలో Atrophy అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Decrease in size of cells.\n\nAtrophy అనేది cells size తగ్గడం వల్ల tissue లేదా organ size తగ్గడం."
},

{

question:
"Hypertrophy means:",

options:[
"Increase in cell size",
"Decrease in cell size",
"Cell destruction",
"Formation of infection"
],

answer:
"Increase in cell size",

meaning:
"ఈ ప్రశ్నలో Hypertrophy అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Increase in cell size.\n\nHypertrophy లో existing cells size పెరుగుతుంది."
},

{

question:
"Hyperplasia is characterized by:",

options:[
"Increase in number of cells",
"Decrease in cells",
"Cell death",
"Loss of tissue"
],

answer:
"Increase in number of cells",

meaning:
"ఈ ప్రశ్నలో Hyperplasia అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Increase in number of cells.\n\nHyperplasia అనేది cell proliferation వల్ల cells సంఖ్య పెరగడం."
},

{

question:
"Metaplasia is:",

options:[
"Replacement of one mature cell type by another",
"Cell death",
"Cell infection",
"Decrease in cell size"
],

answer:
"Replacement of one mature cell type by another",

meaning:
"ఈ ప్రశ్నలో Metaplasia అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Replacement of one mature cell type by another.\n\nMetaplasia అనేది reversible adaptive change, ఇందులో ఒక differentiated cell type మరొకదిగా మారుతుంది."
},

{

question:
"Dysplasia refers to:",

options:[
"Abnormal cell growth and arrangement",
"Normal cell growth",
"Cell repair only",
"Complete cell death"
],

answer:
"Abnormal cell growth and arrangement",

meaning:
"ఈ ప్రశ్నలో Dysplasia అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Abnormal cell growth and arrangement.\n\nDysplasia లో cells abnormal గా grow అవుతూ arrangement మారుతుంది."
},

{

question:
"A tumor is also called:",

options:[
"Neoplasm",
"Inflammation",
"Infection",
"Necrosis"
],

answer:
"Neoplasm",

meaning:
"ఈ ప్రశ్నలో Tumor కి medical term ఏది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Neoplasm.\n\nTumor అనేది abnormal uncontrolled cell growth ను సూచిస్తుంది."
},

{

question:
"A benign tumor is:",

options:[
"Non-cancerous growth",
"Always metastatic",
"Always fatal",
"An infection"
],

answer:
"Non-cancerous growth",

meaning:
"ఈ ప్రశ్నలో Benign tumor అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Non-cancerous growth.\n\nBenign tumors సాధారణంగా slow growing మరియు surrounding tissues కి invade చేయవు."
},

{

question:
"Malignant tumor is characterized by:",

options:[
"Invasion and metastasis",
"Only slow growth",
"No cell changes",
"Complete healing always"
],

answer:
"Invasion and metastasis",

meaning:
"ఈ ప్రశ్నలో Malignant tumor యొక్క లక్షణం ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Invasion and metastasis.\n\nMalignant tumors surrounding tissues invade చేసి distant organs కి spread కావచ్చు."
}

);
// =================================
// PATHOLOGY QUIZ
// PART 3 (QUESTIONS 21 - 30)
// =================================

pathologyQuiz.push(

{

question:
"The body's defense mechanism against infection is called:",

options:[
"Immunity",
"Digestion",
"Respiration",
"Circulation"
],

answer:
"Immunity",

meaning:
"ఈ ప్రశ్నలో Infection ను ఎదుర్కొనే body defense mechanism ఏది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Immunity.\n\nImmunity అనేది body యొక్క defense system, ఇది pathogens నుండి రక్షణ కల్పిస్తుంది."
},

{

question:
"Antibodies are produced by:",

options:[
"B lymphocytes",
"Red blood cells",
"Platelets",
"Neutrophils only"
],

answer:
"B lymphocytes",

meaning:
"ఈ ప్రశ్నలో Antibodies ను ఏ cells తయారు చేస్తాయి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: B lymphocytes.\n\nB lymphocytes plasma cells గా మారి antibodies ను produce చేస్తాయి."
},

{

question:
"Antigen is a substance that:",

options:[
"Triggers immune response",
"Provides oxygen",
"Clots blood",
"Digests food"
],

answer:
"Triggers immune response",

meaning:
"ఈ ప్రశ్నలో Antigen అంటే ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Triggers immune response.\n\nAntigen అనేది immune system ను activate చేసే foreign substance."
},

{

question:
"Autoimmune disease occurs when:",

options:[
"Immune system attacks body's own cells",
"Body has no cells",
"Blood pressure decreases",
"Bone growth increases"
],

answer:
"Immune system attacks body's own cells",

meaning:
"ఈ ప్రశ్నలో Autoimmune disease ఎలా ఏర్పడుతుంది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Immune system attacks body's own cells.\n\nAutoimmune disorders లో immune system తన own tissues ను foreign గా గుర్తించి attack చేస్తుంది."
},

{

question:
"An example of autoimmune disease is:",

options:[
"Rheumatoid arthritis",
"Common cold",
"Fracture",
"Dehydration"
],

answer:
"Rheumatoid arthritis",

meaning:
"ఈ ప్రశ్నలో Autoimmune disease కి example ఏది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Rheumatoid arthritis.\n\nRheumatoid arthritis లో immune system joints tissues పై attack చేస్తుంది."
},

{

question:
"An infectious disease is caused by:",

options:[
"Pathogens",
"Normal cells",
"Water only",
"Exercise"
],

answer:
"Pathogens",

meaning:
"ఈ ప్రశ్నలో Infectious disease కి కారణం ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Pathogens.\n\nBacteria, viruses, fungi మరియు parasites వంటి microorganisms infectious diseases కు కారణమవుతాయి."
},

{

question:
"Culture and sensitivity test is done to identify:",

options:[
"Microorganism and effective antibiotic",
"Blood pressure",
"Body temperature",
"Blood group only"
],

answer:
"Microorganism and effective antibiotic",

meaning:
"ఈ ప్రశ్నలో Culture and sensitivity test ఉపయోగం ఏమిటి అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Microorganism and effective antibiotic.\n\nఈ test ద్వారా infection causing organism మరియు దానికి పనిచేసే antibiotic ను గుర్తిస్తారు."
},

{

question:
"Carcinoma arises from:",

options:[
"Epithelial tissue",
"Muscle tissue only",
"Bone only",
"Nerve only"
],

answer:
"Epithelial tissue",

meaning:
"ఈ ప్రశ్నలో Carcinoma ఏ tissue నుండి వస్తుంది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Epithelial tissue.\n\nCarcinoma అనేది epithelial cells నుండి అభివృద్ధి చెందే malignant tumor."
},

{

question:
"Sarcoma develops from:",

options:[
"Connective tissue",
"Epithelial tissue",
"Blood plasma",
"Skin surface only"
],

answer:
"Connective tissue",

meaning:
"ఈ ప్రశ్నలో Sarcoma ఏ tissue నుండి వస్తుంది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Connective tissue.\n\nSarcoma connective tissues such as bone, muscle and fat నుండి వచ్చే malignant tumor."
},

{

question:
"The study of cancer is called:",

options:[
"Oncology",
"Cardiology",
"Neurology",
"Nephrology"
],

answer:
"Oncology",

meaning:
"ఈ ప్రశ్నలో Cancer study చేసే branch ఏది అని అడుగుతున్నారు.",

rationalization:
"సరైన సమాధానం: Oncology.\n\nOncology అనేది cancer యొక్క causes, diagnosis మరియు treatment ను అధ్యయనం చేసే medical branch."
}

);

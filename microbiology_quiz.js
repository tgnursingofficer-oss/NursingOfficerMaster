const microbiologyQuiz = [
  {
    question: "Who is known as the Father of Microbiology?",
    options: [
      "Louis Pasteur",
      "Robert Koch",
      "Antonie van Leeuwenhoek",
      "Edward Jenner"
    ],
    answer: "Antonie van Leeuwenhoek",
    rationalization: "Question Meaning: Microbiology యొక్క తండ్రి ఎవరు అని అడుగుతోంది.\n\nAntonie van Leeuwenhoek microscope ద్వారా microorganisms ను మొదటిసారిగా పరిశీలించినందుకు Father of Microbiology గా పిలుస్తారు."
  },

  {
    question: "Microbiology is the study of?",
    options: [
      "Human organs",
      "Microorganisms",
      "Animals",
      "Plants"
    ],
    answer: "Microorganisms",
    rationalization: "Question Meaning: Microbiology ఏ విషయాన్ని అధ్యయనం చేస్తుంది అని అడుగుతోంది.\n\nMicrobiology అనేది bacteria, viruses, fungi, protozoa మరియు algae వంటి microorganisms ను అధ్యయనం చేసే శాస్త్రం."
  },

  {
    question: "Which instrument is essential for studying microorganisms?",
    options: [
      "Microscope",
      "Thermometer",
      "Stethoscope",
      "Sphygmomanometer"
    ],
    answer: "Microscope",
    rationalization: "Question Meaning: సూక్ష్మజీవులను పరిశీలించడానికి ఉపయోగించే పరికరం ఏది అని అడుగుతోంది.\n\nMicroscope ద్వారా కంటికి కనిపించని microorganisms ను పెద్దవిగా చూసి అధ్యయనం చేయవచ్చు."
  },

  {
    question: "Bacteria are classified as?",
    options: [
      "Prokaryotic organisms",
      "Eukaryotic organisms",
      "Multicellular organisms",
      "Viruses"
    ],
    answer: "Prokaryotic organisms",
    rationalization: "Question Meaning: Bacteria ఏ రకమైన జీవులు అని అడుగుతోంది.\n\nBacteria లో true nucleus మరియు membrane-bound organelles ఉండవు. అందువల్ల ఇవి prokaryotes."
  },

  {
    question: "Which of the following is absent in bacteria?",
    options: [
      "Cell wall",
      "Ribosomes",
      "True nucleus",
      "Plasma membrane"
    ],
    answer: "True nucleus",
    rationalization: "Question Meaning: Bacteria లో ఏ భాగం ఉండదు అని అడుగుతోంది.\n\nBacteria prokaryotes కాబట్టి true nucleus ఉండదు."
  },

  {
    question: "The shape of spherical bacteria is called?",
    options: [
      "Bacilli",
      "Cocci",
      "Spirilla",
      "Vibrios"
    ],
    answer: "Cocci",
    rationalization: "Question Meaning: గుండ్రని ఆకారంలో ఉండే bacteria ను ఏమంటారు అని అడుగుతోంది.\n\nSpherical bacteria ను cocci అంటారు."
  },

  {
    question: "Rod-shaped bacteria are called?",
    options: [
      "Cocci",
      "Bacilli",
      "Spirilla",
      "Vibrios"
    ],
    answer: "Bacilli",
    rationalization: "Question Meaning: కర్ర ఆకారంలో ఉండే bacteria ను ఏమంటారు అని అడుగుతోంది.\n\nRod-shaped bacteria ను bacilli అంటారు."
  },

  {
    question: "Spiral-shaped bacteria are known as?",
    options: [
      "Cocci",
      "Bacilli",
      "Spirilla",
      "Diplococci"
    ],
    answer: "Spirilla",
    rationalization: "Question Meaning: Spiral ఆకారంలో ఉండే bacteria పేరు ఏమిటి అని అడుగుతోంది.\n\nSpiral-shaped bacteria ను spirilla అంటారు."
  },

  {
    question: "Comma-shaped bacteria are called?",
    options: [
      "Spirilla",
      "Cocci",
      "Vibrios",
      "Bacilli"
    ],
    answer: "Vibrios",
    rationalization: "Question Meaning: కామా (,) ఆకారంలో ఉండే bacteria ను ఏమంటారు అని అడుగుతోంది.\n\nVibrio cholerae వంటి bacteria comma-shaped గా ఉంటాయి."
  },

  {
    question: "Which bacterial structure helps in motility?",
    options: [
      "Capsule",
      "Cell wall",
      "Flagella",
      "Ribosome"
    ],
    answer: "Flagella",
    rationalization: "Question Meaning: Bacteria కదలడానికి సహాయపడే భాగం ఏది అని అడుగుతోంది.\n\nFlagella bacteria కు movement కల్పించే whip-like appendages."
  },

  {
    question: "Which bacterial structure provides protection against phagocytosis?",
    options: [
      "Capsule",
      "Flagella",
      "Ribosome",
      "Cytoplasm"
    ],
    answer: "Capsule",
    rationalization: "Question Meaning: Phagocytosis నుండి bacteria ను రక్షించే భాగం ఏది అని అడుగుతోంది.\n\nCapsule bacteria virulence ను పెంచి phagocytosis నుండి రక్షిస్తుంది."
  },

  {
    question: "Which stain is most commonly used to classify bacteria?",
    options: [
      "Gram stain",
      "Albert stain",
      "Ziehl-Neelsen stain",
      "India ink stain"
    ],
    answer: "Gram stain",
    rationalization: "Question Meaning: Bacteria ను ప్రధానంగా classify చేయడానికి ఉపయోగించే stain ఏది అని అడుగుతోంది.\n\nGram stain ద్వారా bacteria ను Gram-positive మరియు Gram-negative గా వర్గీకరిస్తారు."
  },

  {
    question: "Gram-positive bacteria appear in which color after Gram staining?",
    options: [
      "Purple",
      "Pink",
      "Green",
      "Brown"
    ],
    answer: "Purple",
    rationalization: "Question Meaning: Gram-positive bacteria stain చేసిన తర్వాత ఏ రంగులో కనిపిస్తాయి అని అడుగుతోంది.\n\nCrystal violet stain retain చేయడం వల్ల purple color లో కనిపిస్తాయి."
  },

  {
    question: "Gram-negative bacteria appear in which color after Gram staining?",
    options: [
      "Purple",
      "Pink",
      "Blue",
      "Black"
    ],
    answer: "Pink",
    rationalization: "Question Meaning: Gram-negative bacteria stain చేసిన తర్వాత ఏ రంగులో కనిపిస్తాయి అని అడుగుతోంది.\n\nSafranin counter stain తీసుకోవడం వల్ల pink color లో కనిపిస్తాయి."
  },

  {
    question: "Who developed the Gram staining technique?",
    options: [
      "Hans Christian Gram",
      "Robert Koch",
      "Louis Pasteur",
      "Joseph Lister"
    ],
    answer: "Hans Christian Gram",
    rationalization: "Question Meaning: Gram stain ను ఎవరు అభివృద్ధి చేశారు అని అడుగుతోంది.\n\nHans Christian Gram 1884లో Gram staining method ను అభివృద్ధి చేశారు."
  }
];
microbiologyQuiz.push(

{
question:"Which scientist proved the germ theory of disease?",
options:[
"Louis Pasteur",
"Alexander Fleming",
"Edward Jenner",
"Joseph Lister"
],
answer:"Louis Pasteur",
rationalization:"Question Meaning: Germ theory of disease ను నిరూపించిన శాస్త్రవేత్త ఎవరు అని అడుగుతోంది.\n\nLouis Pasteur microorganisms అనేక వ్యాధులకు కారణమని నిరూపించాడు."
},

{
question:"Who is known as the Father of Modern Bacteriology?",
options:[
"Robert Koch",
"Louis Pasteur",
"Edward Jenner",
"Joseph Lister"
],
answer:"Robert Koch",
rationalization:"Question Meaning: Father of Modern Bacteriology ఎవరు అని అడుగుతోంది.\n\nRobert Koch anthrax, tuberculosis, cholera పై చేసిన పరిశోధనల వల్ల Father of Modern Bacteriology అని పిలుస్తారు."
},

{
question:"Who discovered the tubercle bacillus?",
options:[
"Robert Koch",
"Louis Pasteur",
"Alexander Fleming",
"Joseph Lister"
],
answer:"Robert Koch",
rationalization:"Question Meaning: Tuberculosis bacteria ను ఎవరు కనుగొన్నారు అని అడుగుతోంది.\n\nRobert Koch 1882లో Mycobacterium tuberculosis ను కనుగొన్నారు."
},

{
question:"Koch's postulates are used to establish?",
options:[
"Cause of infectious disease",
"Blood grouping",
"Sterilization",
"Vaccination"
],
answer:"Cause of infectious disease",
rationalization:"Question Meaning: Koch's postulates దేనిని నిర్ధారించడానికి ఉపయోగిస్తారు అని అడుగుతోంది.\n\nఒక microorganism ఒక నిర్దిష్ట వ్యాధికి కారణమని నిరూపించడానికి Koch's postulates ఉపయోగిస్తారు."
},

{
question:"Which scientist introduced antiseptic surgery?",
options:[
"Joseph Lister",
"Louis Pasteur",
"Edward Jenner",
"Robert Koch"
],
answer:"Joseph Lister",
rationalization:"Question Meaning: Antiseptic surgery ను ప్రవేశపెట్టిన శాస్త్రవేత్త ఎవరు అని అడుగుతోంది.\n\nJoseph Lister carbolic acid ఉపయోగించి antiseptic surgery ను ప్రారంభించాడు."
},

{
question:"Who discovered penicillin?",
options:[
"Alexander Fleming",
"Robert Koch",
"Louis Pasteur",
"Edward Jenner"
],
answer:"Alexander Fleming",
rationalization:"Question Meaning: Penicillin ను ఎవరు కనుగొన్నారు అని అడుగుతోంది.\n\nAlexander Fleming 1928లో మొదటి antibiotic అయిన Penicillin ను కనుగొన్నారు."
},

{
question:"Who developed the first successful vaccine against smallpox?",
options:[
"Edward Jenner",
"Louis Pasteur",
"Robert Koch",
"Joseph Lister"
],
answer:"Edward Jenner",
rationalization:"Question Meaning: మొదటి విజయవంతమైన Smallpox vaccine ను ఎవరు అభివృద్ధి చేశారు అని అడుగుతోంది.\n\nEdward Jenner 1796లో Smallpox vaccine ను అభివృద్ధి చేశాడు."
},

{
question:"Which microorganism lacks a cellular structure?",
options:[
"Virus",
"Bacteria",
"Fungi",
"Protozoa"
],
answer:"Virus",
rationalization:"Question Meaning: Cellular structure లేని microorganism ఏది అని అడుగుతోంది.\n\nViruses acellular organisms. ఇవి host cell లో మాత్రమే multiplication చేస్తాయి."
},

{
question:"Viruses can multiply only in?",
options:[
"Living host cells",
"Water",
"Culture media only",
"Air"
],
answer:"Living host cells",
rationalization:"Question Meaning: Viruses ఎక్కడ మాత్రమే multiplication చేస్తాయి అని అడుగుతోంది.\n\nViruses obligate intracellular parasites. ఇవి living host cells లో మాత్రమే పెరుగుతాయి."
},

{
question:"The genetic material of a virus may be?",
options:[
"DNA or RNA",
"DNA only",
"RNA only",
"Protein only"
],
answer:"DNA or RNA",
rationalization:"Question Meaning: Virus genetic material ఏమి ఉంటుంది అని అడుగుతోంది.\n\nVirus లో DNA లేదా RNA ఏదో ఒకటి మాత్రమే ఉంటుంది. రెండూ కలిసి ఉండవు."
}

);
microbiologyQuiz.push(

{
question:"Which bacterial structure is responsible for maintaining cell shape?",
options:[
"Cell wall",
"Capsule",
"Flagella",
"Plasma membrane"
],
answer:"Cell wall",
rationalization:"Question Meaning: Bacteria యొక్క ఆకారాన్ని నిలుపుకునే భాగం ఏది అని అడుగుతోంది.\n\nCell wall bacteria కు shape మరియు mechanical protection అందిస్తుంది."
},

{
question:"The main component of the bacterial cell wall is?",
options:[
"Peptidoglycan",
"Cellulose",
"Chitin",
"Glycogen"
],
answer:"Peptidoglycan",
rationalization:"Question Meaning: Bacterial cell wall యొక్క ప్రధాన నిర్మాణ పదార్థం ఏది అని అడుగుతోంది.\n\nPeptidoglycan bacteria cell wall కు strength మరియు rigidity ఇస్తుంది."
},

{
question:"Which bacterial structure contains the genetic material?",
options:[
"Nucleoid",
"Nucleus",
"Mitochondria",
"Golgi apparatus"
],
answer:"Nucleoid",
rationalization:"Question Meaning: Bacteria genetic material ఎక్కడ ఉంటుంది అని అడుగుతోంది.\n\nBacteria లో true nucleus ఉండదు. DNA nucleoid ప్రాంతంలో ఉంటుంది."
},

{
question:"Which bacterial structure is the site of protein synthesis?",
options:[
"Ribosomes",
"Cell wall",
"Capsule",
"Flagella"
],
answer:"Ribosomes",
rationalization:"Question Meaning: Protein synthesis జరిగే భాగం ఏది అని అడుగుతోంది.\n\n70S ribosomes bacteria లో protein synthesis కు బాధ్యత వహిస్తాయి."
},

{
question:"Spores are formed by certain bacteria mainly for?",
options:[
"Survival under unfavorable conditions",
"Reproduction",
"Nutrition",
"Movement"
],
answer:"Survival under unfavorable conditions",
rationalization:"Question Meaning: Bacterial spores ఎందుకు ఏర్పడతాయి అని అడుగుతోంది.\n\nEndospores వేడి, ఎండ, chemicals వంటి అననుకూల పరిస్థితుల్లో bacteria ను రక్షిస్తాయి."
},

{
question:"Which of the following is a spore-forming bacterium?",
options:[
"Clostridium tetani",
"Escherichia coli",
"Neisseria gonorrhoeae",
"Vibrio cholerae"
],
answer:"Clostridium tetani",
rationalization:"Question Meaning: Spore-forming bacterium ఏది అని అడుగుతోంది.\n\nClostridium మరియు Bacillus జాతుల bacteria endospores ను ఉత్పత్తి చేస్తాయి."
},

{
question:"The optimum temperature for growth of most pathogenic bacteria is?",
options:[
"37°C",
"25°C",
"10°C",
"60°C"
],
answer:"37°C",
rationalization:"Question Meaning: చాలా pathogenic bacteria పెరుగడానికి అనుకూలమైన ఉష్ణోగ్రత ఎంత అని అడుగుతోంది.\n\nమన శరీర ఉష్ణోగ్రత 37°C కాబట్టి చాలా pathogens ఈ temperature లో బాగా పెరుగుతాయి."
},

{
question:"Bacteria reproduce mainly by?",
options:[
"Binary fission",
"Budding",
"Spore formation",
"Conjugation"
],
answer:"Binary fission",
rationalization:"Question Meaning: Bacteria ప్రధానంగా ఎలా reproduction చేస్తాయి అని అడుగుతోంది.\n\nBinary fission ద్వారా ఒక bacterial cell రెండు daughter cells గా విభజించబడుతుంది."
},

{
question:"Which process involves transfer of genetic material through direct cell-to-cell contact?",
options:[
"Conjugation",
"Binary fission",
"Budding",
"Fragmentation"
],
answer:"Conjugation",
rationalization:"Question Meaning: Direct contact ద్వారా genetic material transfer అయ్యే ప్రక్రియ ఏది అని అడుగుతోంది.\n\nConjugation ద్వారా plasmid DNA ఒక bacterium నుండి మరొక bacterium కు బదిలీ అవుతుంది."
},

{
question:"Which process destroys all microorganisms including bacterial spores?",
options:[
"Sterilization",
"Disinfection",
"Antisepsis",
"Cleaning"
],
answer:"Sterilization",
rationalization:"Question Meaning: Spores తో సహా అన్ని microorganisms ను పూర్తిగా నాశనం చేసే ప్రక్రియ ఏది అని అడుగుతోంది.\n\nSterilization ద్వారా అన్ని microorganisms మరియు spores పూర్తిగా నశిస్తాయి."
}

);
microbiologyQuiz.push(

{
question:"Which method of sterilization uses steam under pressure?",
options:[
"Autoclaving",
"Hot air oven",
"Boiling",
"Filtration"
],
answer:"Autoclaving",
rationalization:"Question Meaning: Steam under pressure ఉపయోగించి sterilization చేసే method ఏది అని అడుగుతోంది.\n\nAutoclave 121°C వద్ద 15 psi pressure లో 15–20 నిమిషాలు sterilization చేస్తుంది. ఇది hospital instruments sterilization కు gold standard."
},

{
question:"The standard temperature used in an autoclave is?",
options:[
"121°C",
"100°C",
"80°C",
"160°C"
],
answer:"121°C",
rationalization:"Question Meaning: Autoclave లో సాధారణంగా ఉపయోగించే temperature ఎంత అని అడుగుతోంది.\n\nAutoclaving సాధారణంగా 121°C వద్ద 15 psi pressure లో చేస్తారు."
},

{
question:"Hot air oven is an example of?",
options:[
"Dry heat sterilization",
"Moist heat sterilization",
"Chemical sterilization",
"Radiation sterilization"
],
answer:"Dry heat sterilization",
rationalization:"Question Meaning: Hot air oven ఏ రకమైన sterilization method అని అడుగుతోంది.\n\nHot air oven dry heat ద్వారా glassware, metal instruments sterilize చేయడానికి ఉపయోగిస్తారు."
},

{
question:"Pasteurization is mainly used for?",
options:[
"Milk",
"Blood",
"Surgical instruments",
"Culture media"
],
answer:"Milk",
rationalization:"Question Meaning: Pasteurization ప్రధానంగా దేనికి ఉపయోగిస్తారు అని అడుగుతోంది.\n\nMilk లో harmful microorganisms ను తగ్గించడానికి pasteurization ఉపయోగిస్తారు."
},

{
question:"Which method is used to sterilize heat-sensitive solutions?",
options:[
"Filtration",
"Boiling",
"Autoclaving",
"Hot air oven"
],
answer:"Filtration",
rationalization:"Question Meaning: Heat తట్టుకోలేని ద్రావణాలను sterilize చేయడానికి ఏ method ఉపయోగిస్తారు అని అడుగుతోంది.\n\nMembrane filtration ద్వారా heat-sensitive fluids ను sterilize చేస్తారు."
},

{
question:"Which chemical is widely used for hand antisepsis in hospitals?",
options:[
"70% Alcohol",
"Distilled water",
"Normal saline",
"Hydrogen gas"
],
answer:"70% Alcohol",
rationalization:"Question Meaning: Hospital లో hand antisepsis కోసం ఎక్కువగా ఉపయోగించే chemical ఏది అని అడుగుతోంది.\n\n70% alcohol bacteria మరియు viruses పై సమర్థవంతంగా పనిచేస్తుంది."
},

{
question:"Disinfection means?",
options:[
"Destruction of pathogenic microorganisms except spores",
"Destruction of all microorganisms including spores",
"Removal of dust only",
"Growth of microorganisms"
],
answer:"Destruction of pathogenic microorganisms except spores",
rationalization:"Question Meaning: Disinfection అంటే ఏమిటి అని అడుగుతోంది.\n\nDisinfection pathogenic microorganisms ను నాశనం చేస్తుంది కానీ bacterial spores పూర్తిగా నశించకపోవచ్చు."
},

{
question:"Antiseptics are applied on?",
options:[
"Living tissues",
"Floor",
"Walls",
"Furniture"
],
answer:"Living tissues",
rationalization:"Question Meaning: Antiseptics ఎక్కడ ఉపయోగిస్తారు అని అడుగుతోంది.\n\nSkin మరియు living tissues పై microorganisms ను తగ్గించడానికి antiseptics ఉపయోగిస్తారు."
},

{
question:"Disinfectants are mainly used on?",
options:[
"Inanimate objects",
"Living tissues",
"Eyes",
"Mouth"
],
answer:"Inanimate objects",
rationalization:"Question Meaning: Disinfectants ఎక్కడ ఉపయోగిస్తారు అని అడుగుతోంది.\n\nFloor, instruments, tables వంటి non-living surfaces పై disinfectants ఉపయోగిస్తారు."
},

{
question:"Which biomedical waste color bag is used for human anatomical waste?",
options:[
"Yellow",
"Red",
"Blue",
"White"
],
answer:"Yellow",
rationalization:"Question Meaning: Human anatomical waste కోసం ఏ color bag ఉపయోగిస్తారు అని అడుగుతోంది.\n\nBiomedical Waste Management Rules ప్రకారం human anatomical waste ను Yellow bag లో వేస్తారు."
}

);
microbiologyQuiz.push(

{
question:"Culture media is primarily used for?",
options:[
"Growing microorganisms",
"Destroying microorganisms",
"Staining bacteria",
"Measuring bacterial size"
],
answer:"Growing microorganisms",
rationalization:"Question Meaning: Culture media యొక్క ప్రధాన ఉపయోగం ఏమిటి అని అడుగుతోంది.\n\nCulture media laboratory లో microorganisms ను పెంచడానికి మరియు గుర్తించడానికి ఉపయోగిస్తారు."
},

{
question:"Which culture medium is commonly used for the growth of non-fastidious bacteria?",
options:[
"Nutrient agar",
"MacConkey agar",
"Lowenstein-Jensen medium",
"Sabouraud dextrose agar"
],
answer:"Nutrient agar",
rationalization:"Question Meaning: సాధారణ bacteria పెరుగుదలకు ఎక్కువగా ఉపయోగించే medium ఏది అని అడుగుతోంది.\n\nNutrient agar non-fastidious bacteria growth కు routine culture medium."
},

{
question:"MacConkey agar is mainly used for isolation of?",
options:[
"Gram-negative bacteria",
"Fungi",
"Mycobacteria",
"Viruses"
],
answer:"Gram-negative bacteria",
rationalization:"Question Meaning: MacConkey agar ప్రధానంగా ఏ microorganisms ను isolate చేయడానికి ఉపయోగిస్తారు అని అడుగుతోంది.\n\nMacConkey agar Gram-negative enteric bacteria కోసం selective and differential medium."
},

{
question:"Lowenstein-Jensen (LJ) medium is used for culturing?",
options:[
"Mycobacterium tuberculosis",
"Escherichia coli",
"Staphylococcus aureus",
"Candida albicans"
],
answer:"Mycobacterium tuberculosis",
rationalization:"Question Meaning: Lowenstein-Jensen medium దేనిని culture చేయడానికి ఉపయోగిస్తారు అని అడుగుతోంది.\n\nLJ medium Mycobacterium tuberculosis పెరుగుదలకు ప్రత్యేకంగా ఉపయోగించే medium."
},

{
question:"Sabouraud dextrose agar is mainly used for culture of?",
options:[
"Fungi",
"Bacteria",
"Viruses",
"Protozoa"
],
answer:"Fungi",
rationalization:"Question Meaning: Sabouraud dextrose agar ఏ microorganisms కోసం ఉపయోగిస్తారు అని అడుగుతోంది.\n\nSabouraud dextrose agar fungi మరియు yeasts culture కోసం ఉపయోగిస్తారు."
},

{
question:"Blood agar is classified as?",
options:[
"Enriched medium",
"Selective medium",
"Transport medium",
"Differential medium only"
],
answer:"Enriched medium",
rationalization:"Question Meaning: Blood agar ఏ రకమైన culture medium అని అడుగుతోంది.\n\nBlood agar enriched medium. Fastidious organisms పెరుగుదలకు ఉపయోగపడుతుంది."
},

{
question:"The clear zone around colonies on blood agar indicates?",
options:[
"Beta hemolysis",
"Alpha hemolysis",
"Gamma hemolysis",
"No growth"
],
answer:"Beta hemolysis",
rationalization:"Question Meaning: Blood agar లో colony చుట్టూ clear zone కనిపిస్తే దానిని ఏమంటారు అని అడుగుతోంది.\n\nComplete RBC destruction ను beta hemolysis అంటారు."
},

{
question:"Which specimen is commonly collected for urine culture?",
options:[
"Midstream urine",
"First morning saliva",
"Gastric juice",
"Sweat"
],
answer:"Midstream urine",
rationalization:"Question Meaning: Urine culture కోసం ఏ specimen సేకరిస్తారు అని అడుగుతోంది.\n\nMidstream clean-catch urine contamination తగ్గించి accurate culture results ఇస్తుంది."
},

{
question:"The most important step before collecting any microbiological specimen is?",
options:[
"Aseptic technique",
"Adding antibiotics",
"Boiling the specimen",
"Keeping it open"
],
answer:"Aseptic technique",
rationalization:"Question Meaning: Specimen collection ముందు ముఖ్యమైన చర్య ఏది అని అడుగుతోంది.\n\nAseptic technique contamination ను నివారించి సరైన laboratory results అందిస్తుంది."
},

{
question:"A microbiological specimen should be transported to the laboratory?",
options:[
"As early as possible",
"After 24 hours",
"After drying",
"After freezing in all cases"
],
answer:"As early as possible",
rationalization:"Question Meaning: Microbiological specimen ను laboratory కి ఎప్పుడు పంపాలి అని అడుగుతోంది.\n\nSpecimen ను వీలైనంత త్వరగా laboratory కి పంపితే microorgan

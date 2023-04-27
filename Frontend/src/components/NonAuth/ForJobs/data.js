const dataStates = [
  { statesName: "All State", statesId: 1 },
  { statesName: "Andaman/Nicobar", statesId: 1 },
  { statesName: "Andhra Pradesh", statesId: 1 },
  { statesName: "Arunachal Pradesh", statesId: 1 },
  { statesName: "Assam", statesId: 1 },
  { statesName: "Bihar", statesId: 1 },
  { statesName: "Chandigarh", statesId: 1 },
  { statesName: "Chhattisgarh", statesId: 1 },
  { statesName: "Dadra and Nagar Haveli", statesId: 1 },
  { statesName: "Daman and Diu", statesId: 1 },
  { statesName: "Delhi", statesId: 1 },
  { statesName: "Goa", statesId: 1 },
  { statesName: "Gujarat", statesId: 1 },
  { statesName: "Haryana", statesId: 1 },
  { statesName: "Himachal Pradesh", statesId: 1 },
  { statesName: "Jammu and Kashmir", statesId: 1 },
  { statesName: "Jharkhand", statesId: 1 },
  { statesName: "Karnataka", statesId: 1 },
  { statesName: "Kerala", statesId: 1 },
  { statesName: "Madhya Pradesh", statesId: 1 },
  { statesName: "Maharashtra", statesId: 1 },
  { statesName: "Manipur", statesId: 1 },
  { statesName: "Meghalaya", statesId: 1 },
  { statesName: "Mizoram", statesId: 1 },
  { statesName: "Nagaland", statesId: 1 },
  { statesName: "Odisha", statesId: 1 },
  { statesName: "Orissa", statesId: 1 },
  { statesName: "Puducherry", statesId: 1 },
  { statesName: "Punjab", statesId: 1 },
  { statesName: "Rajasthan", statesId: 1 },
  { statesName: "Sikkim", statesId: 1 },
  { statesName: "Tamil Nadu", statesId: 1 },
  { statesName: "Telangana", statesId: 1 },
  { statesName: "Tripura", statesId: 1 },
  { statesName: "Uttar Pradesh", statesId: 1 },
  { statesName: "Uttarakhand", statesId: 1 },
  { statesName: "West Bengal", statesId: 1 },
];

const dataPrograms = [
  { programName: "All Branches", programId: 100,  statesId: 1,},
  { programName: "Engineering and technology", programId: 1, statesId: 1,},
  { programName: "Pharmacy",programId: 2, statesId: 1,},
  { programName: "Management ", programId: 3, statesId: 1,}
];
const dataDistricts = [
  { programName: "All Branches", programId: 100,  statesId: 1,},
  { programName: "Engineering and technology", programId: 1, statesId: 1,},
  { programName: "Pharmacy",programId: 2, statesId: 1,},
  { programName: "Management ", programId: 3, statesId: 1,}
];

// List For All Branches with 100 Number id

const dataBranchs = [
  { branchName: "All Branches", branchId: 100, programId: 100,},
  { branchName: "Computer Engineering.", branchId: 100, programId: 100,},
  { branchName: "Electrical Engineering", branchId: 100, programId: 100,},
  { branchName: "Electronics & Communication Engineering", branchId: 100, programId: 100,},
  { branchName: "Mechanical Engineering", branchId: 100, programId: 100,},
  { branchName: "Civil Engineering", branchId: 100, programId: 100,},

  { branchName: "community pharmacy", branchId: 100, programId: 100,},
  { branchName: "hospital pharmacy", branchId: 100, programId: 100,},
  { branchName: "clinical pharmacy", branchId: 100, programId: 100,},
  { branchName: "industrial pharmacy", branchId: 100, programId: 100,},
  { branchName: "compounding pharmacy", branchId: 100, programId: 100,},
  { branchName: "consulting pharmacy", branchId: 100, programId: 100,},
  { branchName: "ambulatory care pharmacy", branchId: 100, programId: 100,},
  { branchName: "regulatory pharmacy", branchId: 100, programId: 100,},
  { branchName: "home care pharmacy", branchId: 100, programId: 100,},
  
  { branchName: "Marketing Management", branchId: 100, programId: 100,},
  { branchName: "Human Resources Management", branchId: 100, programId: 100,},
  { branchName: "Business Management", branchId: 100, programId: 100,},
  { branchName: "Finance Management", branchId: 100, programId: 100,},
  { branchName: "IT Management, Retail Management", branchId: 100, programId: 100,},
  { branchName: "Hotel Management", branchId: 100, programId: 100,},
  { branchName: "Management Consulting", branchId: 100, programId: 100,},
  { branchName: "International Business Management", branchId: 100, programId: 100,},

  // Branches Wise List 

  { branchName: "All Engineering Branches", branchId: 1, programId: 1,},
  { branchName: "Computer Engineering.", branchId: 1, programId: 1,},
  { branchName: "Electrical Engineering", branchId: 1, programId: 1,},
  { branchName: "Electronics & Communication Engineering.", branchId: 1, programId: 1,},
  { branchName: "Mechanical Engineering", branchId: 1, programId: 1,},
  { branchName: "Civil Engineering", branchId: 1, programId: 1,},

  { branchName: "All Pharmacy Branches", branchId: 2, programId: 2,},
  { branchName: "community pharmacy", branchId: 2, programId: 2,},
  { branchName: "hospital pharmacy", branchId: 2, programId: 2,},
  { branchName: "clinical pharmacy", branchId: 2, programId: 2,},
  { branchName: "industrial pharmacy", branchId: 2, programId: 2,},
  { branchName: "compounding pharmacy", branchId: 2, programId: 2,},
  { branchName: "consulting pharmacy", branchId: 2, programId: 2,},
  { branchName: "ambulatory care pharmacy", branchId: 2, programId: 2,},
  { branchName: "regulatory pharmacy", branchId: 2, programId: 2,},
  { branchName: "home care pharmacy", branchId: 2, programId: 2,},
  
  { branchName: "All Management Branches", branchId: 3, programId: 3,},
  { branchName: "Marketing Management", branchId: 3, programId: 3,},
  { branchName: "Human Resources Management", branchId: 3, programId: 3,},
  { branchName: "Business Management", branchId: 3, programId: 3,},
  { branchName: "Finance Management", branchId: 3, programId: 3,},
  { branchName: "IT Management, Retail Management", branchId: 3, programId: 3,},
  { branchName: "Hotel Management", branchId: 3, programId: 3,},
  { branchName: "Management Consulting", branchId: 3, programId: 3,},
  { branchName: "International Business Management", branchId: 3, programId: 3,},

];
export { dataStates, dataPrograms, dataBranchs , dataDistricts};

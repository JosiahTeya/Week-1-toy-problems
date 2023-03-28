// KRA, NHIF, and NSSF values
const kraRates = [
    { maxAmount: 12298, rate: 0.1 },
    { maxAmount: 23885, rate: 0.15 },
    { maxAmount: 35472, rate: 0.20 },
    { maxAmount: 47059, rate: 0.25 },
    { maxAmount: Infinity, rate: 0.3 },
  ];
  
  const nhifRates = [
    { maxAmount: 5999, rate: 150 },
    { maxAmount: 7999, rate: 300 },
    { maxAmount: 11999, rate: 400 },
    { maxAmount: 14999, rate: 500 },
    { maxAmount: 19999, rate: 600 },
    { maxAmount: 24999, rate: 750 },
    { maxAmount: 29999, rate: 850 },
    { maxAmount: 34999, rate: 900 },
    { maxAmount: 39999, rate: 950 },
    { maxAmount: 44999, rate: 1000 },
    { maxAmount: 49999, rate: 1100 },
    { maxAmount: 59999, rate: 1200 },
    { maxAmount: 69999, rate: 1300 },
    { maxAmount: 79999, rate: 1400 },
    { maxAmount: 89999, rate: 1500 },
    { maxAmount: 99999, rate: 1600 },
    { maxAmount: Infinity, rate: 1700 },
  ];
  
  const nssfRate = 0.06;
  
  // function to calculate payee
  function calculatePayee(grossSalary) {
    let payee = 0;
  
    // calculate taxable income
    const taxableIncome = grossSalary - (11000 + 200 + 200);
  
    // calculate payee based on KRA rates
    for (let i = 0; i < kraRates.length; i++) {
      const { maxAmount, rate } = kraRates[i];
  
      if (taxableIncome <= maxAmount) {
        payee = taxableIncome * rate;
        break;
      } else {
        payee += (maxAmount - (i === 0 ? 0 : kraRates[i - 1].maxAmount)) * rate;
      }
    }
  
    return payee;
  }
  
  // function to calculate NHIF deductions
  function calculateNhifDeductions(grossSalary) {
    let nhifDeductions = 0;
  
    // calculate NHIF deductions based on NHIF rates
    for (let i = 0; i < nhifRates.length; i++) {
      const { maxAmount, rate } = nhifRates[i];
  
      if (grossSalary <= maxAmount) {
        nhifDeductions = rate;
        break;
      }
    }
  
    return nhifDeductions;
  }
  
  // function to calculate NSSF deductions
  function calculateNssfDeductions(grossSalary) {
    return grossSalary * nssfRate;
  }
  
  // function to calculate net salary
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhifDeductions = calculateNhif
  }  
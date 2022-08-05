// https://calculator.swiftutors.com/reynolds-number-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const reynoldsNumberRadio = document.getElementById('reynoldsNumberRadio');
const fluidDensityRadio = document.getElementById('fluidDensityRadio');
const fluidVelocityRadio = document.getElementById('fluidVelocityRadio');
const diameterorLengthofFluidRadio = document.getElementById('diameterorLengthofFluidRadio');
const fluidViscosityRadio = document.getElementById('fluidViscosityRadio');

let reynoldsNumber;
let fluidDensity = v1;
let fluidVelocity = v2;
let diameterorLengthofFluid = v3;
let fluidViscosity = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

reynoldsNumberRadio.addEventListener('click', function() {
  variable1.textContent = '(ρ) Fluid Density (kg/m³)';
  variable2.textContent = '(V) Fluid Velocity (m/s)';
  variable3.textContent = '(L) Diameter or Length of Fluid (m)';
  variable4.textContent = '(μ) Fluid Viscosity (N-s/m²)';
  fluidDensity = v1;
  fluidVelocity = v2;
  diameterorLengthofFluid = v3;
  fluidViscosity = v4;
  result.textContent = '';
});

fluidDensityRadio.addEventListener('click', function() {
  variable1.textContent = '(Re) Reynolds Number';
  variable2.textContent = '(V) Fluid Velocity (m/s)';
  variable3.textContent = '(L) Diameter or Length of Fluid (m)';
  variable4.textContent = '(μ) Fluid Viscosity (N-s/m²)';
  reynoldsNumber = v1;
  fluidVelocity = v2;
  diameterorLengthofFluid = v3;
  fluidViscosity = v4;
  result.textContent = '';
});

fluidVelocityRadio.addEventListener('click', function() {
  variable1.textContent = '(Re) Reynolds Number';
  variable2.textContent = '(ρ) Fluid Density (kg/m³)';
  variable3.textContent = '(L) Diameter or Length of Fluid (m)';
  variable4.textContent = '(μ) Fluid Viscosity (N-s/m²)';
  reynoldsNumber = v1;
  fluidDensity = v2;
  diameterorLengthofFluid = v3;
  fluidViscosity = v4;
  result.textContent = '';
});

diameterorLengthofFluidRadio.addEventListener('click', function() {
  variable1.textContent = '(Re) Reynolds Number';
  variable2.textContent = '(ρ) Fluid Density (kg/m³)';
  variable3.textContent = '(V) Fluid Velocity (m/s)';
  variable4.textContent = '(μ) Fluid Viscosity (N-s/m²)';
  reynoldsNumber = v1;
  fluidDensity = v2;
  fluidVelocity = v3;
  fluidViscosity = v4;
  result.textContent = '';
});

fluidViscosityRadio.addEventListener('click', function() {
  variable1.textContent = '(Re) Reynolds Number';
  variable2.textContent = '(ρ) Fluid Density (kg/m³)';
  variable3.textContent = '(V) Fluid Velocity (m/s)';
  variable4.textContent = '(L) Diameter or Length of Fluid (m)';
  reynoldsNumber = v1;
  fluidDensity = v2;
  fluidVelocity = v3;
  diameterorLengthofFluid = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(reynoldsNumberRadio.checked)
    result.textContent = `Reynolds Number = ${computeReynoldsNumber().toFixed(2)}`;

  else if(fluidDensityRadio.checked)
    result.textContent = `Fluid Density = ${computeFluidDensity().toFixed(2)} kg/m³`;

  else if(fluidVelocityRadio.checked)
    result.textContent = `Fluid Velocity = ${computeFluidVelocity().toFixed(2)} m/s`;

  else if(diameterorLengthofFluidRadio.checked)
    result.textContent = `Diameter or Length of Fluid = ${computeDiameterorLengthofFluid().toFixed(2)} m`;

  else if(fluidViscosityRadio.checked)
    result.textContent = `Fluid Viscosity = ${computeFluidViscosity().toFixed(2)} N-s/m²`;
})

// calculation

function computeReynoldsNumber() {
  return (Number(fluidDensity.value) * Number(fluidVelocity.value) * Number(diameterorLengthofFluid.value)) / Number(fluidViscosity.value);
}

function computeFluidDensity() {
  return (Number(reynoldsNumber.value) * Number(fluidViscosity.value)) / (Number(fluidVelocity.value) * Number(diameterorLengthofFluid.value));
}

function computeFluidVelocity() {
  return (Number(reynoldsNumber.value) * Number(fluidViscosity.value)) / (Number(fluidDensity.value) * Number(diameterorLengthofFluid.value));
}

function computeDiameterorLengthofFluid() {
  return (Number(reynoldsNumber.value) * Number(fluidViscosity.value)) / (Number(fluidDensity.value) * Number(fluidVelocity.value));
}

function computeFluidViscosity() {
  return (Number(fluidDensity.value) * Number(fluidVelocity.value) * Number(diameterorLengthofFluid.value)) / Number(reynoldsNumber.value);
}
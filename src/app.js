

// Menghitung jejak karbon
function calculateCarbonFootprint() {
    var laptopUsage = parseFloat(document.getElementById('laptop').value);
    var motorUsage = parseFloat(document.getElementById('motor').value);
    
    var laptopEmission = laptopUsage * 0.00215; // asumsi emisi karbon per jam penggunaan laptop
    var motorEmission = motorUsage * 0.118; // asumsi emisi karbon per kilometer penggunaan motor
    
    var totalEmission = laptopEmission + motorEmission;
    
    document.getElementById('result').innerHTML = totalEmission.toFixed(2) + " kg CO2e";

     // Gulir ke bagian hasil
     document.getElementById("hero").scrollIntoView({ behavior: 'smooth' });
     
  }
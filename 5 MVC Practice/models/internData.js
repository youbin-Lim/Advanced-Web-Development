const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/internData.json');

// read Intern Data
function getInterns() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// save Intern Data
function saveInterns(interns) {
  fs.writeFileSync(filePath, JSON.stringify(interns, null, 2));
}

module.exports = { getInterns, saveInterns };
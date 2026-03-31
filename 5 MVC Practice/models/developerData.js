const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/developerData.json');

// read developer data
function getDevelopers() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// save developer data
function saveDevelopers(developers) {
  fs.writeFileSync(filePath, JSON.stringify(developers, null, 2));
}

module.exports = { getDevelopers, saveDevelopers };
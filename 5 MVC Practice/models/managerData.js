const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/managerData.json');

// read manager data
function getManagers() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// save manager data
function saveManagers(managers) {
  fs.writeFileSync(filePath, JSON.stringify(managers, null, 2));
}

module.exports = { getManagers, saveManagers };
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'studentData.json');

// 학생 데이터 읽기
function getStudents() {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// 학생 데이터 저장
function saveStudents(students) {
  fs.writeFileSync(filePath, JSON.stringify(students, null, 2));
}

module.exports = { getStudents, saveStudents };
const { getInterns, saveInterns } = require('../models/internData');

// Add intern
exports.addIntern = (req, res, next) => {
  try {
    const { name, email, internId, department, mentor } = req.body;

    // check errors
    if (!name || !email || !internId || !department || !mentor) {
      const error = new Error("All fields are required, including department and mentor");
      error.status = 400;
      throw error;
    }

    const interns = getInterns();
    const exists = interns.find(i => i.internId === internId);
    if (exists) {
      const error = new Error("Intern already exists");
      error.status = 409;
      throw error;
    }

    // add new Intern
    const newIntern = { name, email, internId, department, mentor };
    interns.push(newIntern);
    saveInterns(interns);

    res.status(201).json({ message: "Intern added successfully", data: newIntern });
  } catch (err) {
    next(err);
  }
};

// Get all interns
exports.getInterns = (req, res, next) => {
  try {
    const interns = getInterns();
    res.json(interns);
  } catch (err) {
    next(err);
  }
};

// Get single intern
exports.getInternById = (req, res, next) => {
  try {
    const id = req.params.id;
    const interns = getInterns();
    const intern = interns.find(i => i.internId === id);

    if (!intern) {
      const error = new Error("Intern not found");
      error.status = 404;
      throw error;
    }

    res.json(intern);
  } catch (err) {
    next(err);
  }
};

// Delete intern
exports.deleteIntern = (req, res, next) => {
  try {
    const id = req.params.id;
    const interns = getInterns();
    const index = interns.findIndex(i => i.internId === id);

    if (index === -1) {
      const error = new Error("Intern not found");
      error.status = 404;
      throw error;
    }

    interns.splice(index, 1);
    saveInterns(interns);

    res.json({ message: "Intern deleted successfully" });
  } catch (err) {
    next(err);
  }
};
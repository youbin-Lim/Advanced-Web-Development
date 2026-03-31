const { getDevelopers, saveDevelopers } = require('../models/developerData');

// Add developer
exports.addDeveloper = (req, res, next) => {
  try {
    const { name, email, developerId } = req.body;

    if (!name || !email || !developerId) {
      const error = new Error("All fields are required");
      error.status = 400;
      throw error;
    }

    const developers = getDevelopers();
    const exists = developers.find(d => d.developerId === developerId);
    if (exists) {
      const error = new Error("Developer already exists");
      error.status = 409;
      throw error;
    }

    const newDeveloper = { name, email, developerId };
    developers.push(newDeveloper);
    saveDevelopers(developers);

    res.status(201).json({ message: "Developer added successfully", data: newDeveloper });
  } catch (err) {
    next(err);
  }
};

// Get all developers
exports.getDevelopers = (req, res, next) => {
  try {
    const developers = getDevelopers();
    res.json(developers);
  } catch (err) {
    next(err);
  }
};

// Get single developer
exports.getDeveloperById = (req, res, next) => {
  try {
    const id = req.params.id;
    const developers = getDevelopers();
    const developer = developers.find(d => d.developerId === id);

    if (!developer) {
      const error = new Error("Developer not found");
      error.status = 404;
      throw error;
    }

    res.json(developer);
  } catch (err) {
    next(err);
  }
};

// Delete developer
exports.deleteDeveloper = (req, res, next) => {
  try {
    const id = req.params.id;
    const developers = getDevelopers();
    const index = developers.findIndex(d => d.developerId === id);

    if (index === -1) {
      const error = new Error("Developer not found");
      error.status = 404;
      throw error;
    }

    developers.splice(index, 1);
    saveDevelopers(developers);

    res.json({ message: "Developer deleted successfully" });
  } catch (err) {
    next(err);
  }
};
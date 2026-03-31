const { getManagers, saveManagers } = require('../models/managerData');

// Add manager
exports.addManager = (req, res, next) => {
  try {
    const { name, email, managerId, department } = req.body;

    // check the errors
    if (!name || !email || !managerId || !department) {
      const error = new Error("All fields are required, including department");
      error.status = 400;
      throw error;
    }

    const managers = getManagers();
    const exists = managers.find(m => m.managerId === managerId);
    if (exists) {
      const error = new Error("Manager already exists");
      error.status = 409;
      throw error;
    }

    // add Manager
    const newManager = { name, email, managerId, department };
    managers.push(newManager);
    saveManagers(managers);

    res.status(201).json({ message: "Manager added successfully", data: newManager });
  } catch (err) {
    next(err);
  }
};

// Get all managers
exports.getManagers = (req, res, next) => {
  try {
    const managers = getManagers();
    res.json(managers);
  } catch (err) {
    next(err);
  }
};

// Get single manager
exports.getManagerById = (req, res, next) => {
  try {
    const id = req.params.id;
    const managers = getManagers();
    const manager = managers.find(m => m.managerId === id);

    if (!manager) {
      const error = new Error("Manager not found");
      error.status = 404;
      throw error;
    }

    res.json(manager);
  } catch (err) {
    next(err);
  }
};

// Delete manager
exports.deleteManager = (req, res, next) => {
  try {
    const id = req.params.id;
    const managers = getManagers();
    const index = managers.findIndex(m => m.managerId === id);

    if (index === -1) {
      const error = new Error("Manager not found");
      error.status = 404;
      throw error;
    }

    managers.splice(index, 1);
    saveManagers(managers);

    res.json({ message: "Manager deleted successfully" });
  } catch (err) {
    next(err);
  }
};
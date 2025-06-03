const sessionToLocals = (req, res, next) => {
  if (!res.locals.sessionProcessed) {
    res.locals.error = req.session.errorMessage || null;
    res.locals.success = req.session.successMessage || null;
    res.locals.formData = req.session.formData || {};

    res.locals.sessionProcessed = true;

    delete req.session.errorMessage;
    delete req.session.successMessage;
    delete req.session.formData;
  }

  next();
};

module.exports = sessionToLocals;

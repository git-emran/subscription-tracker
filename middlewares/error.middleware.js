const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.erro(err);

    //Mongoose bad objectID
    if (err.name === "CastError") {
      const message = "Resource not found";
      error = new Error(message);
      error.statuscode = 404;
    }

    //Mongoose Duplicate key

    if (err.code === "11000") {
      const message = "Duplicate field value entered";
      error = new Error(message);
      error.statuscode = 400;
    }
    //Mongoose validation error
    if (err.code === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message);
      error.statuscode = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.messsage || "Server Error" });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;

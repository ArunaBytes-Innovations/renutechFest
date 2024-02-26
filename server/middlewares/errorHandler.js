// error Handler

const errorHandler = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (err) {
            res.status(500).json(err.message);
        }
    };
}

export default errorHandler;
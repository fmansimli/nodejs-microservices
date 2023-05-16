import { Router } from "express";

const router = Router();

router.get("/", (req, res, _next) => {
  try {
    res.status(200).json({
      events: [],
      url: req.originalUrl,
    });
  } catch (error) {
    _next(error);
  }
});

router.get("/:id", (req, res, _next) => {
  try {
    res.status(200).json({
      event: {
        id: req.params.id,
        url: req.originalUrl,
      },
    });
  } catch (error) {
    _next(error);
  }
});

export default router;

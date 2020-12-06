import Router from "express";
import Light from "../../models/light.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const lights = await Light.find();
    if (!lights) throw Error("No lights set");
    res.status(200).json(lights);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/", async (req, res) => {
  const newLight = new Light({
    name: req.body.name,
    active: false,
  });
  try {
    const light = await newLight.save();
    if (!light) throw Error("Something went wrong saving the light");
    res.status(200).json(light);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

export default router;

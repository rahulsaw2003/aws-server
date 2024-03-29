import express from 'express';
import { createUser, getAllUsers, getOneUser, updateUser, deleteUser, getUniqueUsers } from "../controllers/userController.js";

const router = express.Router();

// Retrieve all users with pagination support.
router.get("/", getAllUsers);

// GET users with unique domains and availability.
router.get("/unique", getUniqueUsers);

// GET users with unique domains and availability.
router.get("/me", (req, res) => {
    return res.status(200).json({ message: "This is a message from the new route /api/users/me at 6.27 pm" });
});

// Create a new user.
router.post("/create", createUser);


// Retrieve a specific user by ID.
router.get("/:id", getOneUser);


// Update an existing user.
router.put("/update/:id", updateUser);

// Delete a user.
router.delete("/delete/:id", deleteUser);



export default router;
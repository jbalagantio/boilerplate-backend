import express from "express";
import { 
    getAllRecords, 
    createRecord, 
    updateRecord, 
    patchRecord, 
    deleteRecord 
} from "../controllers/user.controller.js";

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *  - name: Users
 *    description: User Management Endponts
 */
/**
 * @swagger
 * /api/users:
 *  get:
 *      Summary: Get all users
 *      tags: [Users]
 *      responses: 
 *          200: 
 *              description: List of users
 *          400: 
 *              description: Request failed
 */

userRouter.get("/", getAllRecords);

/**
 * @swagger
 * /api/users: 
 *      post: 
 *          summary: Create new user
 *          tags: [Users]
 *          requestBody:
 *              requried: true
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: object
 *                          required:
 *                              - name
 *                              - age
 *                              - course
 *                          properties: 
 *                              name: 
 *                                  type: string
 *                                  example: Josh
 *                              age: 
 *                                  type: number
 *                                  example: 25
 *                              course: 
 *                                  type: string
 *                                  example: IT
 *          responses: 
 *              201: 
 *                  description: User created
 *              401: 
 *                  description: Creation failed
 */
userRouter.post("/", createRecord);
userRouter.put("/:id", updateRecord);
userRouter.patch("/:id", patchRecord);
userRouter.delete("/:id", deleteRecord);

export default userRouter;
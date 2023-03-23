import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  readContactController,
  readContactsByUserController,
  updateContactController,
} from "../controllers/contacts/contacts.controller";
import { validateDataMiddleware } from "../middlewares/validateData.middleware";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import { verifyContactIdMiddleware } from "../middlewares/verifyContactId.middleware";
import {
  contactSchema,
  contactUpdateSchema,
} from "../schemas/contacts/schemaContact";

const contactRouter = Router();

contactRouter.post(
  "",
  verifyAuthMiddleware,
  validateDataMiddleware(contactSchema),
  createContactController
);

contactRouter.get("", verifyAuthMiddleware, readContactsByUserController);

contactRouter.get(
  "/:id",
  verifyAuthMiddleware,
  verifyContactIdMiddleware,
  readContactController
);

contactRouter.patch(
  "/:id",
  verifyAuthMiddleware,
  verifyContactIdMiddleware,
  validateDataMiddleware(contactUpdateSchema),
  updateContactController
);

contactRouter.delete(
  "/:id",
  verifyAuthMiddleware,
  verifyContactIdMiddleware,
  deleteContactController
);

export { contactRouter };

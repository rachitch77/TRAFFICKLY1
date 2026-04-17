import { Router } from "express";
import { db, leadsTable } from "@workspace/db";
import { CreateLeadBody } from "@workspace/api-zod";

const router = Router();

router.post("/leads", async (req, res) => {
  const parsed = CreateLeadBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(422).json({
      error: "Validation failed",
      details: parsed.error.issues,
    });
    return;
  }

  const { name, email, phone, businessType, message } = parsed.data;
  const [lead] = await db
    .insert(leadsTable)
    .values({ name, email, phone, businessType, message })
    .returning();

  req.log.info({ leadId: lead.id }, "New lead created");
  res.status(201).json(lead);
});

router.get("/leads", async (req, res) => {
  const leads = await db.select().from(leadsTable);
  res.json(leads);
});

export default router;

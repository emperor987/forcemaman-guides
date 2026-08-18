import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
    }).index("email", ["email"]), // index for the email. do not remove or modify

    // --- Download tokens for paid ebook delivery ---
    downloadTokens: defineTable({
      token: v.string(),
      productId: v.string(),
      email: v.string(),
      sessionId: v.optional(v.string()),
      expiresAt: v.number(),
      usedCount: v.number(),
      maxUses: v.number(),
    }).index("by_token", ["token"])
      .index("by_session", ["sessionId"]),

    // --- Newsletter subscribers (RGPD compliant) ---
    subscribers: defineTable({
      email: v.string(),
      consentAt: v.number(),
      consentText: v.string(),
      unsubscribed: v.optional(v.boolean()),
      unsubscribedAt: v.optional(v.number()),
    }).index("by_email", ["email"]),

    // --- Rate limiting ---
    rateLimits: defineTable({
      key: v.string(),
      windowStart: v.number(),
      count: v.number(),
    }).index("by_key", ["key"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;

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

    // --- SEO content metadata (future-proof, non-destructive) ---
    // Optional: use when you want to manage SEO data from Convex dashboard
    // instead of hardcoded arrays. NOT required for current functionality.
    seoPages: defineTable({
      slug: v.string(),
      type: v.union(v.literal("guide"), v.literal("article"), v.literal("page")),
      title: v.string(),
      description: v.string(),
      seoTitle: v.optional(v.string()),
      seoDescription: v.optional(v.string()),
      keywords: v.optional(v.string()),
      canonical: v.optional(v.string()),
      noIndex: v.optional(v.boolean()),
      datePublished: v.string(),
      dateModified: v.string(),
      authorId: v.optional(v.string()),
      image: v.optional(v.string()),
    }).index("by_slug", ["slug"])
      .index("by_type", ["type"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;

import { z } from "zod";

// Define the Zod schema for NFT token metadata
const nftTokenMetadataSchema = z.object({
    name: z.string().min(1, "Name is required"), // Must be a non-empty string
    description: z.string().min(1, "Description is required"), // Must be a non-empty string
    image: z.string().url("Image must be a valid URL"), // Must be a valid URL
    animation_url: z
        .string()
        .url("Animation URL must be a valid URL")
        .optional(), // Optional and must be a valid URL if present
    external_url: z.string().url("External URL must be a valid URL").optional(), // Optional field for external URL
    symbol: z.optional(z.string()), // Optional field for the symbol
    seller_fee_basis_points: z.optional(z.number()), // Optional field for seller fee
    attributes: z
        .array(
            z.object({
                trait_type: z.string().min(1, "Trait type is required"), // Non-empty string
                value: z.string().min(1, "Value is required"), // Non-empty string
            }),
        )
        .optional(), // Optional attributes
    properties: z.object({
        files: z
            .array(
                z.object({
                    uri: z.string().url("File URI must be a valid URL"), // Valid URL
                    type: z
                        .string()
                        .regex(
                            /^(image\/(png|jpeg|jpg)|video\/mp4|unknown)$/,
                            "File type must be image/png, image/jpeg, image/jpg, video/mp4, or unknown",
                        ), // Allowed MIME types or "unknown"
                    cdn: z.boolean().optional(), // Optional boolean field
                }),
            )
            .min(1, "At least one file must be provided"), // At least one file required
        category: z.enum(["image", "video", "audio"]).optional(), // Optional and must be one of the allowed categories
        maxSupply: z.optional(z.number()), // Optional field for max supply
        creators: z
            .array(
                z.object({
                    address: z.string(),
                    share: z.number().min(0).max(100),
                }),
            )
            .optional(), // Optional creators
    }),
    collection: z
        .object({
            name: z.string(),
            family: z.string(),
        })
        .optional(), // Optional collection object
});

// Define the Zod schema for NFT core metadata
const nftCoreMetadataSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    description: z
        .string()
        .min(3, "Description must be at least 3 characters long"),
    image: z.string().url("Image must be a valid URL"),
    animation_url: z.optional(z.string()), // Optional animation URL
    external_url: z.string().optional(), // Optional external URL
    symbol: z.optional(z.string()), // Optional symbol field
    seller_fee_basis_points: z.optional(z.number()), // Optional seller fee
    attributes: z
        .array(
            z
                .object({
                    trait_type: z.string(),
                    value: z.string(),
                })
                .optional(),
        )
        .optional(), // Optional attributes array
    properties: z
        .object({
            files: z
                .array(
                    z.object({
                        uri: z.string().url("File URI must be a valid URL"),
                        type: z.enum(["image/png", "image/jpeg", "image/jpg"]),
                    }),
                )
                .min(1, "At least one file is required"),
            category: z.string(),
            maxSupply: z.optional(z.number()), // Optional max supply
            creators: z
                .array(
                    z.object({
                        address: z.string(),
                        share: z.number().min(0).max(100),
                    }),
                )
                .optional(), // Optional creators
        })
        .optional(), // Optional properties object
    collection: z
        .object({
            name: z.string(),
            family: z.string(),
        })
        .optional(), // Optional collection object
});

export { nftCoreMetadataSchema, nftTokenMetadataSchema };

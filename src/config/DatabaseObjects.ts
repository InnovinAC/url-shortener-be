export const mongooseExtensions = Object.freeze({
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
})
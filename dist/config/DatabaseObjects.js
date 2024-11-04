"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseExtensions = void 0;
exports.mongooseExtensions = Object.freeze({
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

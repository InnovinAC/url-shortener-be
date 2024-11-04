import mongoose, { Document, Schema, model, Model } from 'mongoose';
import {mongooseExtensions} from "../../../config/DatabaseObjects";

interface IUrl extends Document {
    originalUrl: string;
    shortCode: string;
}

const urlSchema = new Schema<IUrl>({
    originalUrl: { type: String, required: true },
    shortCode: { type: String, required: true, unique: true },
}, mongooseExtensions);

const UrlModel: Model<IUrl> = model<IUrl>('Url', urlSchema);

export default UrlModel;

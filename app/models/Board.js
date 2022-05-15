export default function BoardModel(mongoose) {
    const boardSchema = mongoose.Schema({
        date: String,
        name: String,
        title: String,
        subject: String
    }, {timestamps: true})
    return mongoose.model('Board', boardSchema)
}


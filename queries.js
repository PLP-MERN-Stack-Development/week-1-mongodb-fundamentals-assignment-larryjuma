// queries.js

// Task 2: Basic Queries
db.books.find({ genre: "Technology" });
db.books.find({ published_year: { $gt: 2010 } });
db.books.find({ author: "Jane Doe" });
db.books.updateOne({ title: "Code & Coffee" }, { $set: { price: 19.99 } });
db.books.deleteOne({ title: "Haunted Valley" });

// Task 3: Advanced Queries
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 });
db.books.find().sort({ price: 1 });
db.books.find().sort({ price: -1 });
db.books.find().limit(5);
db.books.find().skip(5).limit(5);

// Task 4: Aggregations
db.books.aggregate([{ $group: { _id: "$genre", average_price: { $avg: "$price" } } }]);
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);
db.books.aggregate([
  { $project: { decade: { $concat: [{ $substr: ["$published_year", 0, 3] }, "0s"] } } },
  { $group: { _id: "$decade", total_books: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);

// Task 5: Indexing
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: 1 });
db.books.find({ title: "The Code Journey" }).explain("executionStats");

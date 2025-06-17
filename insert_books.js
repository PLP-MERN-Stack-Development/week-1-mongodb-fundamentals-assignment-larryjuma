
// ! Task 1
use plp_bookstore

db.createCollection("books")


// ! Task 2
db.books.insertMany([
  {
    title: "The Code Journey",
    author: "Jane Doe",
    genre: "Technology",
    published_year: 2015,
    price: 25.99,
    in_stock: true,
    pages: 320,
    publisher: "TechBooks Ltd."
  },
  {
    title: "Secrets of the Jungle",
    author: "Mark Smith",
    genre: "Adventure",
    published_year: 2008,
    price: 15.50,
    in_stock: true,
    pages: 280,
    publisher: "Explorer House"
  },
  {
    title: "Romance in the Mist",
    author: "Sarah Knight",
    genre: "Romance",
    published_year: 2020,
    price: 20.00,
    in_stock: false,
    pages: 250,
    publisher: "LoveHouse"
  },
  {
    title: "Modern MongoDB",
    author: "Jane Doe",
    genre: "Technology",
    published_year: 2022,
    price: 30.00,
    in_stock: true,
    pages: 400,
    publisher: "DataPress"
  },
  {
    title: "The Lost Kingdom",
    author: "Mark Smith",
    genre: "Fantasy",
    published_year: 2012,
    price: 22.75,
    in_stock: true,
    pages: 390,
    publisher: "MythBooks"
  },
  {
    title: "Ocean's Heart",
    author: "Emily Ocean",
    genre: "Adventure",
    published_year: 2011,
    price: 18.99,
    in_stock: false,
    pages: 310,
    publisher: "BlueWave"
  },
  {
    title: "Code & Coffee",
    author: "Dev Lin",
    genre: "Technology",
    published_year: 2019,
    price: 17.45,
    in_stock: true,
    pages: 275,
    publisher: "TechBooks Ltd."
  },
  {
    title: "Haunted Valley",
    author: "George Black",
    genre: "Horror",
    published_year: 2005,
    price: 12.00,
    in_stock: false,
    pages: 230,
    publisher: "NightReads"
  },
  {
    title: "Beginner's JavaScript",
    author: "Jane Doe",
    genre: "Technology",
    published_year: 2018,
    price: 27.00,
    in_stock: true,
    pages: 330,
    publisher: "CodeStar"
  },
  {
    title: "Dancing Flames",
    author: "Sarah Knight",
    genre: "Romance",
    published_year: 2016,
    price: 16.75,
    in_stock: true,
    pages: 240,
    publisher: "LoveHouse"
  }
])


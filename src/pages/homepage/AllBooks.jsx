import { use } from "react";
import BooksCard from "./BooksCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
    const books = use(booksPromise)
  return <div className="md:w-11/12 mx-auto">
    <h2 className="text-2xl text-green-500 flex justify-center">Books</h2>
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        {
            books.map(book => <BooksCard key={book.id} book={book} />)
        }
    </div>
  </div>;
};

export default AllBooks;

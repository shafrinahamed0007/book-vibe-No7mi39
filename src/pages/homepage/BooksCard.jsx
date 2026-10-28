import { IoMdStarOutline } from "react-icons/io";

const BooksCard = ({ book }) => {
  return (
    <div className="mt-5">
      <div className="card bg-base-100 w-96 shadow-sm p-5">
        <div className="badge badge-secondary my-5">{book?.category || "NEW"}</div>
        <figure>
          <img
          className="w-[180px] h-[250px]"
            src={book?.image}
            alt={book?.bookName}
          />
        </figure>
        <div className="card-body">
            
          <h2 className="card-title text-xl">
          {book?.bookName || "Title Not Found!"}
            
          </h2>
          <p className="font-semibold text-lg">
           {book?.author || "Author name not found"}
          </p>
           <div>
             {
            book.tags.map((tag)=> (<div className="badge  text-green-500 bg-green-100 font-bold mt-2">
                {tag}
            </div>))
           }
           </div>
          
          <div className="card-actions justify-end border-t border-dashed">
         <div className="flex justify-between w-full mt-2">
              <div className="font-semibold">
            {book?.category}
           </div>
           <div className="font-semibold flex justify-between items-center gap-1"> {book?.rating} <IoMdStarOutline /></div>
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;

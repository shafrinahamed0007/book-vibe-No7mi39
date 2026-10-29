import banner from "../../assets/pngwing 1-Dgv9M15h.png"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl md:w-11/12 my-8   mx-auto  ">
      <div className="hero-content flex-col lg:flex-row-reverse w-full  md:justify-between md:p-10  ">
       <div>
         <img className="w-[350px] h-[350px]" src={banner} alt="" />
       </div>
        <div>
          <h1 className="md:text-5xl text-3xl font-bold text-[#131313]">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="btn btn-success text-white mt-4">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

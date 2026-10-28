import banner from "../../assets/pngwing 1-Dgv9M15h.png"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8">
      <div className="hero-content flex-col lg:flex-row-reverse  justify-between md:w-10/12  ">
        <img className="w-[318px] h-[394px]" src={banner} alt="" />
        <div>
          <h1 className="text-5xl font-bold text-[#131313]">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="btn btn-success text-white mt-4">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

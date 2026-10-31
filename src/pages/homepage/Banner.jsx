import banner from "../../assets/pngwing 1-Dgv9M15h.png"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl md:w-11/12 my-8   mx-auto bg-[#03121c]  ">
      <div className="hero-content flex-col lg:flex-row-reverse w-full  md:justify-between md:p-10  ">
       <div>
         <img className="w-[350px] h-[350px]" src={banner} alt="" />
       </div>
        <div>
          <h1 className="md:text-5xl text-3xl font-bold text-white ">Books to freshen up <br /> your bookshelf</h1>
          
          <button className="btn bg-[#0c2e2f] text-[#abe800] mt-4">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

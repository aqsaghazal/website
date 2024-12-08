import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-[1321px] h-[850px] relative left-[300px] top-[100px]">
        <img src="/Header.png" alt=""></img>
      </div>
      <div className="w-[] h-[139px] relative left-[300px] top-[150px]">
        <img src="/Company Logo.png" alt=""></img>
      </div>
      <div className="w-[] h-[139px] relative left-[30px] top-[150px]">
        <p className="w-[1920px] h-[44px] relative left-[300px] right-[300px] text-[32px] 
        text-[#272343] font-semibold ">Featured Products</p>
        <img src="/Featured Products (1).png" alt=""></img>
      </div>
      <div className="w-[] h-[139px] relative left-[30px] top-[640px]">
        <img src="/Top Categotires.png" alt=""></img>
      </div>
      <div className="w-[1320px] h-[648px]">
        <img src="/hot-category.png" className="relative top-[1100px] left-[320px]"></img>
      </div>
      <div className="w-[1320px] h-[648px]">
        <img src="/Our Products.png" className="relative top-[1100px] left-[320px]"></img>
      </div>
      <footer className="relative top-[1600px]">
       <img src="/Footer.png" alt=""></img>   
      </footer>
    </div>
  ); 
}

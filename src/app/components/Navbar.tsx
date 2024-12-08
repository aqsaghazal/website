import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <div className="w-[1920px] h-[203px]">
        <div className="flex w-[1920px] h-[45px] gap-[auto] bg-[#272343] relative pl-[300px] pr-[300px] pt-[14px] pb-[14px]">
          <div className="w-[255px] h-16px] gap-[8px] flex text-[#FFFFFF]">
            <Image src={"/check 1.png"} alt="" width={16} height={16} />
            <p className="w-[231px] h-[14px] font-inter text-[13px] ">
              Free shipping on all orders over $50
            </p>
          </div>
          <div className="w-[202px] h-[17px] justify-between gap-[24px] ">
            <div className="w-[37px] flex relative left-[1000px] h-[17px] gap-[6px] text-[#FFFFFF]">
              <p className="w-[30px] h-[17px] font-inter text-[13px]">Eng</p>
              <Image src={"/DropDown.png"} alt="" width={19} height={3} />
              <Link className=" hover:text-[#007580]" href={"/Faqs"}>
              Faqs</Link>
              <div className="w-[87px] h-[17px] gap-[6px] flex text-[#FFFFFF]">
                <Image
                  src={"/alert-circle 1.png"}
                  alt=""
                  width={16}
                  height={16}
                />
                <p className="w-[30px] h-[17px] text-[13px] font-inter">
                  NeedHelp
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1920px] h-[84px] gap-[auto] bg-[#F0F2F3] relative pl-[300px] pr-[300px] pt-[20px] pb-[20px]">
          <div className="w-[166px] h-[40px] flex gap-[8px]">
            <Image src={"/Logo Icon.png"} alt="" width={40} height={40} />
            <p className="w-[118px] h-[31px] text-[#272343] font-medium text-[inter] text-[26px]">
              Comforty
            </p>
          </div>
          <div className="w-[120px] h-[44px] gap-[12px] flex relative left-[1130px] bg-[#FFFFFF] rounded-[8px] pt-[10px] pl-[13px] pr-[9px]">
            <div className="w-[56px] h-[22px] gap-[8px] flex">
              <Image src={"/Buy 2.png"} alt="" width={22} height={22} />
              <Link className="w-[26px] h-[13px] font-medium text-inter text-[17px]  hover:text-[#007580]" href={"/Cart"}>
              Cart
            </Link>
            </div>
            <div className="w-[20px] h-[20px] bg-[#007580] rounded-[10px]">
              <p className="w-[6px] h-[10px] font-medium text-[12px] relative pl-[6px] pt-[1.5px] pr-[6px] pb-[6px] text-[#FFFFFF]">
                2
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1920px] h-[74px] relative pl-[300px] pr-[300px] pt-[24px] pb-[14px]">
          <div className="w-[339px] h-[15px] flex gap-[32] font-medium text-[20px] justify-between text-[#636270] ">
            <Link className=" hover:text-[#007580]" href={"/"}>
              Home
            </Link>
            <p className=" hover:text-[#007580]" >
              Shop
            </p>
            <Link className=" hover:text-[#007580]" href={"/Product"}>
              Product
            </Link>
            <p className=" hover:text-[#007580]" >
              Pages
            </p>
            <Link className=" hover:text-[#007580]" href={"/About"}>
              About
            </Link>
          </div>
          <div className="w-[339px] h-[15px] gap-[8px] flex relative left-[1130px] ">
            <Link
              className="w-[57px] font-medium text-[14px] text-[#636270]"
              href={"/Contact"}
            >
              Contact:
            </Link>
            <div className="w-[103px] h-[15px]">
              <p>(808)555-0111</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

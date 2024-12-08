export default function About(){
    return (
        <div>
            <div className="w-[] h-[] flex justify-between relative left-[300px] top-[100px] pr-[200px]">
                <img src="/Text Block.png" alt="" width={672} height={478}></img>
                <img src="/Image Block (1).png" alt="" width={619} height={478} className="relative right-[620px]"></img>
            </div>
            <div className="w-[501px] h-[35px] flex font-semibold font-inter text-[32px] text-[#272343] relative left-[750px] pt-[200px] ">
                <p>What makes our Brand Different</p>
            </div>
            <div className="w-[1320px] h-[244px] justify-between flex relative top-[95px]">
                <div className="w-[309.45px] h-[244px] relative pt-[48px] pb-[48px] pl-[48px] pr-[48px] bg-[#F9F9F9] left-[300px]">
                   <div className="w-[213.45px] h-[148px] gap-[12px]">
                    <img src="/Delivery.png" alt="" width={24} height={24}></img>
                    <div className="w-[202px] h-[28px] relative top-[12px]">
                        <p className="text-[20px] font-inter text-[#007580]">Next day as standard</p>
                        <p className="text-[16px] font-inter text-[#007580] relative top-[12px]">
                            Order before 3pm and get your order the next day as standard</p>
                    </div>
                   </div>
                </div>
                <div className="w-[309.45px] h-[244px] relative pt-[48px] pb-[48px] pl-[48px] pr-[48px] bg-[#F9F9F9] left-[330px]">
                   <div className="w-[213.45px] h-[148px] gap-[12px]">
                    <img src="/Checkmark--outline.png" alt="" width={24} height={24}></img>
                    <div className="w-[202px] h-[28px] relative top-[12px]">
                        <p className="text-[20px] font-inter text-[#007580]">Made by true artisans</p>
                        <p className="text-[16px] font-inter text-[#007580] relative top-[12px]">
                        Handmade crafted goods made with real passion and craftmanship</p>
                    </div></div>
                </div>
                <div className="w-[309.45px] h-[244px] relative pt-[48px] pb-[48px] pl-[48px] pr-[48px] bg-[#F9F9F9] left-[360px]">
                <div className="w-[213.45px] h-[148px] gap-[12px]">
                    <img src="/Purchase.png" alt="" width={24} height={24}></img>
                    <div className="w-[202px] h-[28px] relative top-[12px]">
                        <p className="text-[20px] font-inter text-[#007580]">Unbeatable prices</p>
                        <p className="text-[16px] font-inter text-[#007580] relative top-[12px]">
                        For our materials and quality you won’t find better prices anywhere</p>
                    </div></div>
                </div>
                <div className="w-[309.45px] h-[244px] relative pt-[48px] pb-[48px] pl-[48px] pr-[48px] bg-[#F9F9F9] left-[390px]">
                <div className="w-[213.45px] h-[148px] gap-[12px]">
                    <img src="/Sprout.png" alt="" width={24} height={24}></img>
                    <div className="w-[202px] h-[28px] relative top-[12px]">
                        <p className="text-[20px] font-inter text-[#007580]">Recycled packing</p>
                        <p className="text-[16px] font-inter text-[#007580] relative top-[12px]">
                        We use 100% recycled to ensure our footprint is more manageable</p>
                    </div></div>
                </div>
            </div>
            <div className="w-[343.83px] h-[35px] relative left-[300px] top-[200px]">
                <p className="font-inter font-semibold text-[32px] text-[#272343]">Our Popular Products </p>
            </div>
            <div className="flex">
                <div className="w-[630px] h-[462px] gap-[24px] justify-between">
                    <div className=" w-[630px] h-[375px] relative top-[250px] left-[300px]"><img src="/Large.png" alt="" width={630} height={375}></img></div>
                </div>
                <div className="w-[212px] h-[63px] gap-[8px] text-[#2A254B] relative top-[650px] right-[336px]">
                    <div className="w-[212] h-[28px] flex font-inter text-[20px]"><p>ThePoplarsuedesofa</p></div>
                    <div className="w-[61] h-[27] flex text-[18px] font-inter "><p>$99.00</p></div>
                </div>

                <div className="w-[305px] h-[462px] gap-[24px]"> 
                    <div className="w-[305px] h-[375px] relative top-[250px] left-[199px]"><img src="/Parent.png" alt="" width={630} height={375}></img></div>
                </div>
                <div className="w-[230px] h-[63px] gap-[8px] text-[#2A254B] relative top-[650px] right-[336px]">
                    <div className="w-[212] h-[28px] flex font-inter text-[20px] relative left-[225px]"><p>TheDandysofa</p></div>
                    <div className="w-[61] h-[27] flex text-[18px] font-inter relative left-[225px]"><p>$99.00</p></div>
                </div>

                <div className="w-[305px] h-[462px] gap-[24px]"> 
                    <div className="w-[305px] h-[375px] relative top-[250px] left-[140px]"><img src="/Photo.png" alt="" width={630} height={375}></img></div>
                </div>
                <div className="w-[230px] h-[63px] gap-[8px] text-[#2A254B] relative top-[650px] right-[336px]">
                    <div className="w-[212] h-[28px] flex font-inter text-[20px] relative left-[170px]"><p>TheDandysofa</p></div>
                    <div className="w-[61] h-[27] flex text-[18px] font-inter relative left-[170px]"><p>$99.00</p></div>
                </div>
            </div>
            <footer className="relative top-[350px]">
       <img src="/Footer.png" alt=""></img>   
      </footer>
        </div>
    );
}
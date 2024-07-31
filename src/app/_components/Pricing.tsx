import Spacer from "./Spacer"
import SpacerMain from "./SpacerMain"

const Pricing = () => {
    return (
        <>
            <PricingHeading />
            <PricingSection />
        </>
    )
}
const PricingHeading = () => {
    return (
        <div
            className="bg-[#052727] rounded-t-[24px] rounded-b-none flex flex-col w-full h-auto self-auto flex-wrap transition-all duration-300 basis-auto flex-shrink flex-grow-0 p-[10px]"
            >
            <div className="flex flex-col flex-wrap justify-center items-center basis-auto flex-grow flex-shrink self-auto mx-auto my-0 h-full w-full gap-[20px]">
                <SpacerMain height={40} />
                <div
                className="w-full flex flex-row justify-center">
                    <div className="h-full ">
                        <h2 className="text-[#F8F8FF] font-plex-sans text-[2.5rem] font-[700] leading-[2.6rem]">
                        A small price to pay.. to truly{" "}
                        <span
                            style={{
                                background: "linear-gradient(to right, rgba(1, 132, 97, 0.46), rgba(28, 255, 195, 0.50))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent", 
                                backgroundClip: "text",
                                color: "transparent", 
                            }}
                            >
                            Adopt AI
                            </span>
                        <p></p>
                        </h2>
                    </div>
                </div>
                <SpacerMain height={20}/>
            </div>
            </div>
    )
}
const PricingSection =() => {
    return (
        <div className="bg-[#052727] flex flex-col mx-[150px] justify-center items-center flex-nowrap basis-auto flex-shrink flex-grow-0 p-2.5">
            <div className="flex flex-col gap-[20px] basis-auto grow shrink self-auto mx-auto my-0 h-full w-full">
                <div className="relative max-w-full">
                    <div className="h-full box-border w-full">
                        <div className="flex flex-row min-h-[100px] justify-between gap-[1rem] flex-nowrap items-start basis-auto flex-shrink flex-grow mx-auto my-0 h-full w-full">
                            <div className="self-stretch bg-custom-gradient flex flex-col justify-start items-start gap-[20px] p-[1rem] border-2 border-[#1CFFC3] rounded-[20px]">
                                <div className="flex flex-col self-auto flex-shrink flex-grow basis-auto p-[1rem]">
                                    <div className="flex flex-col justify-between self-stretch flex-shrink-0 flex-grow p-[10px]">
                                        <div className="flex flex-col gap-[20px] basis-auto flex-shrink flex-grow self-auto w-full h-full mx-auto my-0">
                                            <div className="h-full w-full">
                                                <h2 className="font-plex-sans text-[1rem] font-[900]text-[#1cffc3]">Free</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                className="max-w-full relative">
                                    <div className="h-full">
                                        <h2 className="text-[#F8F8FF] font-plex-sans text-[2rem] font-[700]">
                                        Try it out
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;
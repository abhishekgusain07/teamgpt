import Spacer from "./Spacer"

const companies = ["https://team-gpt.com/wp-content/uploads/2023/08/maersk-300x74.png","https://team-gpt.com/wp-content/uploads/2023/10/Logos-website-3-e1696253710359-300x56.png","https://team-gpt.com/wp-content/uploads/2023/08/polkastarter-300x40.png","https://team-gpt.com/wp-content/uploads/2023/08/medesk-300x94.png","https://team-gpt.com/wp-content/uploads/2023/08/Charles-Schwab-Logo-2001-present-e1692039826365-300x52.png","https://team-gpt.com/wp-content/uploads/2023/08/limechain-1-300x90.png","https://team-gpt.com/wp-content/uploads/2023/08/Logos-website-1-300x65.png"]
const Customer = () => {
    return (
        <div className="bg-gray-100 p-8">
            <div className="flex flex-col py-2.5 justify-center basis-auto flex-shrink flex-grow self-auto gap-[20px] items-normal mx-auto h-[100%] w-[100%] max-w-[1140px] text-center">
            <div className="text-center text-[2.5rem] font-[700] leading-[2.6rem]">Companies that trust us</div>
            <Spacer height={25}/>
            <div className="flex flex-row gap-[4%] flex-nowrap basis-auto justify-evenly flex-shrink p-[10px] mx-auto animate-fadeInUp">
                {companies.map((_,idx) => (
                    <div className="flex flex-row items-center max-w-[100%] mb-[20px] text-center">
                    <div className="h-full">
                    <img decoding="async" width="300" height="74" src={companies[idx]} className="h-auto w-full inline-block align-middle" alt=""/>
                    </div>
                </div>
                ))}
            </div>
            <Spacer height={30} />
            </div>
        </div>
    )
}
export default Customer
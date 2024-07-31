import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Testimonials = () => {
    return (
        <div className="flex flex-row w-auto h-full flex-grow self-stretch flex-wrap gap-0 transition-all duration-300 pt-24 pb-8 pl-0 pr-0 mx-auto justify-normal items-normal">
            <div className="flex flex-row flex-basis-auto flex-wrap justify-center items-center w-full h-full mx-[150px] my-0 flex-grow flex-shrink self-auto py-8">
                <div className="flex flex-col w-auto h-auto flex-grow-0  min-h-[100px]  gap-[20px] self-auto flex-wrap items-center transition-all duration-300 pt-8 pb-8 pl-8 pr-8 md:w-1/2 basis-auto flex-shrink  max-w-[1140px]">
                    <div className="p-2.5 bg-gray-300 rounded-md h-full justify-start mr-auto">
                        <div className="font-plex-sans text-[1rem] font-[500] text-black leading-[1rem]">
                            Folders and Subfolders
                        </div>
                    </div>
                    <div className="w-full mb-0 mt-2 relative">
                        <div className="max-w-full text-left">
                            <div className="h-full">
                                <h2 className="text-[#052727] font-plex-sans text-[2.5rem] font-[700]
                                leading-[2.6rem]">
                                    Reduce clutter and organize knowledge
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[100%] font-plex-sans text-[1rem] font-[500]text-[#052727]">
                        <div className="h-full box-border">
                            <p className="mt-0 mb-[0.9rem]"> Most chats are trash… but not all.</p>
                            <p className="box-border mb-[0.9rem]">Categorize the good ones, order them in folders and subfolders, and reduce clutter.</p>
                            <p className="box-border mb-[0.9rem]">
                            A well organized ChatGPT workspace, enhances accessibility, knowledge sharing and team collaboration.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[100%] font-plex-sans text-[1rem] font-[500]text-[#052727] relative mr-auto">
                        <div className="h-full box-border">
                            <ul className="list-none">
                                <li className="flex flex-row justify-start items-center text-left mb-[2px]">
                                    <span className="font-plex-sans items-start text-left h-[20px] w-[20px]"><img src="/tick.png"/></span>
                                    <span className="font-plex-sans text-[1rem] font-[500] pl-[5px] ">Organize chats in folders</span>
                                </li>
                                <li className="flex flex-row justify-start items-start mb-[2px] text-left">
                                <span className="font-plex-sans items-start text-left h-[20px] w-[20px]"><img src="/tick.png"/></span>
                                <span className="font-plex-sans text-[1rem] font-[500] pl-[5px] ">Organize chats in folders</span>
                                </li>
                                <li className="flex flex-row justify-start items-start text-left mb-[2px]">
                                <span className="font-plex-sans items-start text-left h-[20px] w-[20px]"><img src="/tick.png"/></span>
                                <span className="font-plex-sans text-[1rem] font-[500] pl-[5px] ">Organize chats in folders</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    abhishek
                </div>
                <div className="md:w-1/2">
                    gusain
                </div>
            </div>
        </div>
    )
}
export default Testimonials;
import ChatGrayBox from "../../ui/ChatGrayBox";
import ChatBox from "../../ui/ChatBox";
import ChatPrompt from "../../ui/ChatPrompt";
const Chatting = () => {
    return(

<>

        <div className="w-full overflow-hidden bg-white rounded-[10px] border border-tertiary">
        <div className="w-full py-[10px] flex flex-col gap-[15px] px-[20px] ">
            <ChatGrayBox/>
            <ChatGrayBox/>
            <ChatBox/>
            <ChatBox/>
            <ChatBox/>
            
</div>
            <ChatPrompt/>
</div>


</>
    )
}

export default Chatting;
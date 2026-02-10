const ConnectToOtherPeopleWithRealtimeChatting = () => {
    return (
      <div className="w-full  py-12 px-0  flex justify-center">
        <div className="flex flex-row items-center max-w-6xl w-full gap-8">
          
          <div className="w-full md:w-1/2 text-left border border-solid  border-white p-2 flex justify-center">
            <div className="max-w-md">
            <h2 className="text-[30px] flex justify-center font-bold text-blue-800 mb-4">Connect With Other's Through Real-time Chat</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
                Our platform offers real-time chatting features to help you connect with peers effortlessly. Engage in meaningful conversations,
                share ideas, and collaborate with others instantly. The chat feature enhances your ability to interact with the community and
                stay connected, making your learning experience more interactive and engaging.
              </p>
            </div>
          </div>
          
    
          <div className="w-full md:w-1/2 flex ml-[40px] flex-col justify-center gap-4">
          <img 
            src="/chatbar.png"
            alt="Realtime Chatting 1"
            className="rounded-lg shadow-md w-full max-w-md object-cover"
          />
          <img 
            src="/messagebox.png"
            alt="Realtime Chatting 2"
            className="rounded-lg shadow-md w-full max-w-md object-cover"
          />
        </div>
        </div>
      </div>
    );
  };
  
  export default ConnectToOtherPeopleWithRealtimeChatting;
  
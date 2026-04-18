const ConnectToOtherPeopleWithRealtimeChatting = () => {
    return (
      <div className="w-full py-16 px-8 flex justify-center bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10">
          
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-[28px] font-bold text-blue-900 mb-3">Real-time Chat with Peers</h2>
            <div className="w-12 h-1 bg-blue-700 mb-4 rounded"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Connect with peers instantly through our real-time chat feature. Engage in meaningful conversations,
              share ideas, and collaborate — making your learning experience more interactive and community-driven.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
            <img 
              src="/chatbar.png"
              alt="Chatbar"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
            <img 
              src="/messagebox.png"
              alt="Message Box"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ConnectToOtherPeopleWithRealtimeChatting;
  
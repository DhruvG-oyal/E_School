import { createContext, useContext, useState, useEffect } from "react";

export const MessageContext = createContext();

export const useMessageContext = () => {
	return useContext(MessageContext);
};

export const MessageContextProvider = ({ children }) => {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
   

	return (
		<MessageContext.Provider value={{ messages, loading, setMessages,setLoading }}>
			{children}
		</MessageContext.Provider>
	);
};

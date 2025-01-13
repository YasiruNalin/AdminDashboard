import { useState } from 'react';
import { AxiosResponse } from 'axios';
import './Chatbot.css';
import api from '../../../../api'

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        // Add user's message to the chat
        setMessages((prevMessages) => [...prevMessages, { sender: 'user', text: userInput }]);

        try {
            // Make an API request using Axios
            const response: AxiosResponse<{ answer: string }> = await api.post('/query/', {
                question: userInput,
            });

            // Append the bot's response to the messages
            setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: response.data.answer }]);
        } catch (error) {
            console.error('Error communicating with the backend:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: 'Sorry, there was an error processing your request.' },
            ]);
        } finally {
            setUserInput(''); // Clear the input field after sending the message
        }
    };

    const handleFileUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response: AxiosResponse<{ filename: string; status: string }> = await api.post('/upload-pdf/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: `File "${response.data.filename}" uploaded successfully and processed.` },
            ]);
        } catch (error) {
            console.error('Error uploading the file:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: 'Failed to upload and process the PDF file.' },
            ]);
        } finally {
            setSelectedFile(null); // Reset the file input
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.sender}`}>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <div className="input-container">
            <div className="file-upload-container">
    <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
            setSelectedFile(e.target.files?.[0] || null);
            
        }}
    />
    <button onClick={handleFileUpload} disabled={!selectedFile}>
        Upload PDF
    </button>
</div>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
            



            
        </div>
    );
};

export default Chatbot;

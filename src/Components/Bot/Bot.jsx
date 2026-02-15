import React, { useState, useRef, useEffect } from "react";
import BotIcon from "./BotIcon";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import Messages from "./Messages";

const Bot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const agencticAi =
    "https://ahrar-shah-portfolio-backend.vercel.app/api/agentic-ai";

  useEffect(() => {
    const welcomeMessage = {
      id: Date.now(),
      type: "bot",
      content: {
        title: "🤖 PRISTOL AI Assistant",
        text: "Hello! Ask me anything about PRISTOL products, ingredients, usage, or benefits!",
        footer: "I'm here to help 24/7.",
      },
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    const thinkingId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      {
        id: thinkingId,
        type: "thinking",
        timestamp: new Date(),
      },
    ]);

    try {
      const response = await fetch(agencticAi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: inputValue,
          type: /bug|issue|error|not working|problem/i.test(inputValue)
            ? "bug"
            : "normal",
        }),
      });

      const data = await response.json();
      const aiMessage =
        data?.message ||
        "I apologize, but I couldn't process your request at the moment. Please try again later.";

      setMessages((prev) => {
        const filtered = prev.filter((msg) => msg.id !== thinkingId);
        return [
          ...filtered,
          {
            id: Date.now() + 2,
            type: "bot",
            content: aiMessage,
            timestamp: new Date(),
          },
        ];
      });
    } catch (error) {
      console.error("AI Error:", error);

      setMessages((prev) => {
        const filtered = prev.filter((msg) => msg.id !== thinkingId);
        return [
          ...filtered,
          {
            id: Date.now() + 2,
            type: "bot",
            content:
              "I'm having trouble connecting right now. Please check your connection or try again in a moment.",
            timestamp: new Date(),
            isError: true,
          },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 flex items-center gap-3">
        <BotIcon />
        <Title />
      </div>

      <div className="h-96 overflow-y-auto p-4 bg-gray-50">
        <Messages messages={messages} />
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            placeholder="Ask about PRISTOL products..."
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
          />
        </div>
      </div>
    </div>
  );
};

export default Bot;

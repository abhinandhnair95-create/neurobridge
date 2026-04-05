"use client";
import { formatAIText } from "../lib/ai";

function RenderFormattedText({ text }) {
  const blocks = formatAIText(text);

  return blocks.map((block) => {
    switch (block.type) {
      case "heading":
        return (
          <h3 key={block.key} style={{ fontSize: 16, fontWeight: 700, marginTop: 16, marginBottom: 6, color: "var(--teal)" }}>
            {block.text}
          </h3>
        );
      case "bullet":
        return (
          <p key={block.key} style={{ paddingLeft: 16, position: "relative", marginTop: 4 }}>
            <span style={{ position: "absolute", left: 0, color: "var(--teal)" }}>{"•"}</span>
            {block.text}
          </p>
        );
      case "numbered":
        return (
          <p key={block.key} style={{ paddingLeft: 16, marginTop: 4 }}>{block.text}</p>
        );
      case "bold":
        return (
          <p key={block.key} style={{ marginTop: 4 }} dangerouslySetInnerHTML={{
            __html: block.text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--t1)">$1</strong>')
          }} />
        );
      case "break":
        return <br key={block.key} />;
      default:
        return (
          <p key={block.key} style={{ marginTop: block.text ? 0 : 8 }}>{block.text}</p>
        );
    }
  });
}

export default function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`chat-msg ${isUser ? "usr" : ""}`}>
      <div className={`chat-mav ${isUser ? "hu" : "ai"}`}>
        {isUser ? "U" : "NB"}
      </div>
      <div className="chat-bub">
        <RenderFormattedText text={text} />
      </div>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="chat-msg">
      <div className="chat-mav ai">NB</div>
      <div className="chat-bub">
        <div className="typing">
          <div className="typing-d" />
          <div className="typing-d" />
          <div className="typing-d" />
        </div>
      </div>
    </div>
  );
}

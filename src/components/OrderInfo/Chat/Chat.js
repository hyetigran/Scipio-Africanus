import React, { useEffect, useRef } from "react";
import { CommentOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";

import ChatText from "./ChatText";
import {
  createMessage,
  fetchMyMessages,
} from "../../../store/actions/chatActions";
import "./Chat.scss";

const Chat = ({ orderId }) => {
  const chatMessages = useSelector((state) => state.chat.chatMessages);
  const [form] = Form.useForm();
  const userId = localStorage.getItem("userId");
  const chatHeight = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyMessages(orderId));
  }, []);

  useEffect(() => {
    chatHeight.current.scrollTop = chatHeight.current.scrollHeight;
  });

  const onFinish = ({ message }) => {
    const chatBody = {
      text: message,
      author_id: userId,
      order_id: orderId,
    };
    dispatch(createMessage(chatBody));
    form.resetFields();
  };

  return (
    <div className="chat-container">
      <div className="chat-heading">
        <CommentOutlined />
        <div>
          <h3>Conversation</h3>
          <p>Messages are NOT end-to-end encrypted.</p>
        </div>
      </div>
      <div ref={chatHeight} className="message-ctn">
        <div className="message-info">
          <p>Say hello and exchange payment details with the other use.</p>
          <p className="list-title">Remember:</p>
          <ul>
            <li>Always use escrow. It's there for your safety.</li>
            <li>Open a payment dispute if you run into trouble.</li>
          </ul>
        </div>

        {/* Messages go here */}
        {chatMessages?.map((message) => (
          <ChatText key={message.id} userId={userId} message={message} />
        ))}
      </div>

      <div className="message-actions">
        <Form name="normal_message" onFinish={onFinish} form={form}>
          <Form.Item name="message">
            <Input placeholder="Write a message" autoFocus />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Send</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Chat;

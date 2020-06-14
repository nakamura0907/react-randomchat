import React, { useEffect } from 'react';
import socketio from "socket.io-client";

/**
 * dev -> localhost:3001
 * heroku(deploy) -> process.env.PORT
 */

const socket = socketio.connect("http://localhost:3001");
// const socket = socketio.connect(process.env.PORT);

import {time} from "./util/dateHelper";
import {
    Header,
    ExitIcon,
    HeaderText,
    Form,
    TextForm,
    SubmitButton,
    Messages,
    Message,
    Main,
    MessageWrap,
    Text,
    Span
} from "./util/Styled"

const App = () => {
    const [value, setValue] = React.useState("");
    const [messages, setMessages] = React.useState([]);
    const [users, setUsers] = React.useState(0);
    const handleClick = () => {
        if (value) {
            setMessages([...messages, {value, isMine: true, time: time()}])
            socket.emit("chat", {
                value,
                time: time()
            });
            setValue("");
        }
    }
    React.useEffect(() => {
        socket.on("chat", (obj) => {
            obj.isMine = false;
            setMessages([...messages, obj])
        })
    }, [messages]);
    React.useEffect(() => {
        socket.on("count", (obj) => {
            setUsers(obj);
        })
    }, [users])
    return(
        <>
        <Header>
            <ExitIcon className="fas fa-sign-out-alt" />
            <HeaderText>{users}人がチャット中です</HeaderText>
        </Header>
        <Main>
            <MessageWrap>
                <Messages>
                    {messages.map((item, index) => (
                        <Message className={item.isMine ? "is-mine" : ""} key={index}>
                            <Text>{item.value}</Text>
                            <Span><time>{item.time}</time></Span>
                        </Message>
                    ))}
                </Messages>
            </MessageWrap>
            <Form>
                <TextForm type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="メッセージを入力してください。" />
                <SubmitButton onClick={handleClick}>
                    <i className="far fa-paper-plane" style={{fontSize: "24px"}}></i>
                </SubmitButton>
            </Form>
        </Main>
        </>
    );
}

export default App;

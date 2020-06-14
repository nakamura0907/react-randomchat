import styled from "styled-components";

export const Header = styled.header`
    box-shadow: 0 4px 4px rgba(0, 0, 0, .4);
    background: #FFC107;
    color: white;
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 10vh;
`;

export const ExitIcon = styled.i`
    margin: 0 auto 0 24px;
`;

export const HeaderText = styled.p`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
`;

export const Form = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextForm = styled.input`
    width: 100%;
    box-sizing: border-box;
    height: 45px;
    border-right: 0;
    border-radius: 25px 0 0 25px
`;

export const SubmitButton = styled.button`
    background: #00BCD4;
    color: white;
    width: 90px;
    height: 45px;
    border-radius: 0 25px 25px 0;
`;

export const Messages = styled.ul`
    padding-bottom: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Message = styled.li`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 100%;

    &[class*="is-mine"] {
        flex-direction: row-reverse;

        p {
            background: #00E676;
        }

        span {
            margin-left: 0;
            margin-right: 5px;
        }
    }
`;

export const MessageWrap = styled.div`
    padding: 15vh 15px 0 15px;
`;

export const Main = styled.main`
    background: #EEE;
    min-height: 100vh;
`;

export const Text = styled.p`
    background: white;
    padding: 16px;
    width: 50%;
`;

export const Span = styled.span`
    margin-left: 5px;
`;
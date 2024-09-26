import Message from '../Message/Message.jsx';
import Response from '../Response/Response.jsx';
import Typing from '../Typing/Typing.jsx';

export default function MessageHistory({ list=[] }) {
    
    return (
        <>
            <Message list={list} />
            <Response list={list} />
            <Typing list={list} />
        </>
    );
}
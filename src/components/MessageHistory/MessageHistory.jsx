import Message from '../Message/Message.jsx';
import Response from '../Response/Response.jsx';

export default function MessageHistory({ list=[] }) {
    
    return (
        <>
            <Message list={list} />
            <Response list={list} />
        </>
    );
}
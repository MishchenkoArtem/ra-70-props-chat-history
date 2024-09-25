export default function Message({list}) {
    const message = list.filter((elem) => {
        return elem.type === 'message';
    });

    return (
        <ul>
            {message.map((elem) => {
                return (
                    <li key={elem.id}>
                        <div class="message-data">
                            <span class="message-data-name"><i class="fa fa-circle online"></i> {elem.from.name}</span>
                            <span class="message-data-time">{elem.time}</span> &nbsp; &nbsp;
                        </div>
                        <div class="message my-message">
                            {elem.text}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

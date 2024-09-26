export default function Typing({list}) {
    const message = list.filter((elem) => {
        return elem.type === 'typing';
    });

    return (
        <ul>
            {message.map((elem) => {
                return (
                    <li class="clearfix" key={elem.id}>
                        <div class="message-data align-right">
                            <span class="message-data-time">{elem.time}</span> &nbsp; &nbsp;
                            <span class="message-data-name">{elem.from.name}</span>
                            <i class="fa fa-circle me"></i>
                        </div>
                        <div class="message other-message float-right">
                            {elem.text}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
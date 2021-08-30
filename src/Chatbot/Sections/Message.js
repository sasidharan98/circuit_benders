import React from 'react'
import { List, Icon, Avatar } from 'antd';

function Message(props) {

    const AvatarSrc = props.who ==='Timeline Messer' ? <Icon type="robot" /> : <Icon type="smile" />  

    return (
        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta style={{display: 'flex',flexGrow: '1', flexShrink: '1', flexBasis: '0%', alignItems: 'flex-start' }}
                avatar={<Avatar icon={AvatarSrc}  style={{padding: '10px'}}/>}
                title={props.who}
                description={props.text}
            />
        </List.Item>
    )
}

export default Message

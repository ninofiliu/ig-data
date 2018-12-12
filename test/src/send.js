const send = (name, success, reason) => {
    console.log('sending: ', name, success, reason);
    fetch('http://localhost:3081', {
        method: 'post',
        body: success
            ? JSON.stringify({name, success})
            : JSON.stringify({name, success, reason})
    });
}

export default send;
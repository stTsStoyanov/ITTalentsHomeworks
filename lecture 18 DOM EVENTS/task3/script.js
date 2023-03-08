document.body.addEventListener('keydown', function(e){
    let keyName = e.key;
    let keyCode = e.code;
    alert(`Presed key is "${keyName}" and pressed key code is "${keyCode}"`);
})
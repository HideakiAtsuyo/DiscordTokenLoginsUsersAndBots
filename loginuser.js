function loginuser(token) {
setInterval(() => {document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`}, 25);
setTimeout(() => {location.reload();}, 50);
}

loginuser("The token");

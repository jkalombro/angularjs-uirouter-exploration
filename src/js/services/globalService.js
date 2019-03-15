import app from '../app.js';

app.service("globalService", function(){
    var props = {
        activemenu: "home"
    }

    return {
        props: props,
        updateCurrentMenu: updateCurrentMenu()
    }

    function updateCurrentMenu(newactive){
        props.activemenu = newactive;
    }
});
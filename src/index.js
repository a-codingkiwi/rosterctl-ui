import ReactDOM from "react-dom";
import { App } from "./App";

function getComponentFromMountAttr(com) {
    console.debug(com.dataset);
    switch(com.dataset.reactMount){
        case 'App':
            return <App />
    }
}

document.querySelectorAll("[data-react-mount]")?.forEach((elm)=>{
    ReactDOM.render(getComponentFromMountAttr(elm),elm);
})
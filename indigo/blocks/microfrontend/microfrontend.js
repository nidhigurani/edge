import { loadCSS, loadScript } from "../../scripts/aem.js";
// ‘{"component":"mf - booking-widget","page-type":"homepage","mf-base-url":" https://app-booking-qa-skyplus6e.goindigo.in"}’ 
// const dataAttriJson = row.children[1].innerHTML.replace("‘","").replace("’","");
// const parsedData = JSON.parse(dataAttriJson);
// console.log("--------------------") //,JSON.parse(row.children[1].innerHTML.replace("‘","")), index);
// Object.keys(parsedData).map((keyItem)=>{
//     console.log("--keys::::::",keyItem);
//     rootElement.setAttribute(`data-${keyItem}`, parsedData[keyItem])
// })
const stripTrailingSlash = function (str) {
    return str.replace(/\/\/*/g, "/").replace(/\/+$/, "");
}

export default function decorate(block) {
    console.log("---rrr::::",block,this)
    const rootElement = document.createElement("div");
    rootElement.id = "root";
    const keysElement = block.children[0]?.children;
    const valuesElement = block.children[1].children;
    let componentname = "";
    let mfBaseUrl = "";
    console.log("--------------------", keysElement);
    [...keysElement].forEach((row, index) => {
        const key = row.innerHTML;
        const value = valuesElement[index].innerHTML;
        if (key === "component") {
            componentname = value;
        } else if (key === "mf-base-url") {
            mfBaseUrl = value;
        }
        console.log("----------micro----------", row)
        rootElement.setAttribute(`data-${key}`, value)
    })
    document.body.appendChild(rootElement);
    
     document.querySelector("[data-block-name='microfrontend']").innerHTML="";
    document.querySelector("[data-block-name='microfrontend']").appendChild(
        document.querySelector(`[data-component=${componentname}]`));
    // rootElement.setAttribute("data-page-type", "homepage")
    // rootElement.setAttribute("data-component", "mf-booking-widget")
    // rootElement.setAttribute("data-mf-id", "mf-booking-widget")
    // rootElement.setAttribute("id", "booking___app")
    // document.body.appendChild(rootElement);
 

 
    mfBaseUrl = stripTrailingSlash(mfBaseUrl); // since we have to add end slash from code hence removing one if present.

    let remoteUrl = `${mfBaseUrl}/remoteEntry.js`
    remoteUrl = "https://app-booking-qa-skyplus6e.goindigo.in/remoteEntry.js";
    const envConfig = `${mfBaseUrl}/config/env-config.js`;

   
        loadScript(remoteUrl);
        loadScript(envConfig);
   
    loadCSS("https://app-static-uat-skyplus6e.goindigo.in/des-system/css/main.css")

    const cols = [...block.firstElementChild.children];
    console.log("---decorade: microfronend", block, cols)
    setTimeout(async () => {
        await loadScript("./blocks/microfrontend/containerapp/dist/clientlib-site/site.js")
    }, 1000)
}

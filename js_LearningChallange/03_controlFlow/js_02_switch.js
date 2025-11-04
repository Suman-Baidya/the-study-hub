// switch (key){
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // code
//         break;
// }


// switch (browser){
//     case "Edge":
//         console.log("Edge browser selected");
//         break;
//     case "Firefox":
//         console.log("Firefox browser selected");
//         break;
//     case "Chrome":
//         console.log("Chrome browser selected");
//         break;
//     case "Safari":
//         console.log("Safari browser selected");
//         break;
//     case "Opera":
//         console.log("Opera browser selected");
//         break;
//     default:
//         console.log("Unknown browser selected");
//         break;
// }


const browser = "Edge"
switch (browser){
    case "Edge":
        console.log("Edge browser selected");
        break;
    case "Firefox":
    case "Chrome":
    case "Safari":
    case "Opera":
        console.log(`${browser} browser selected`);
        break;
    default:
        console.log("Unknown browser selected");
        break;
}

setInterval(deleteElement, 100)
    


function deleteElement() {
    const xpath = "/html/body/div[2]/div/div/div[2]/div[2]/div/div/div/div[1]/div[1]/div/div/div[2]/div[1]/div[1]/div[3]/div[1]/div/div/span";

    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    const element = result.singleNodeValue;

   
    if (element){
        const parent = element.parentNode;
        parent.removeChild(element);

    }


}


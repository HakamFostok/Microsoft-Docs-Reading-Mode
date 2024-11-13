removeElement('div.left-container');
removeElement('div#ms--primary-nav');
removeElement('div#ms--secondary-nav');
removeElement('div#ms--additional-resources');
removeElement('section.border-top.has-default-focus');
removeElement('section.feedback-section.position-relative');
removeElement('div#article-header');
removeElement('div#user-feedback');

let element = document.querySelector("section.primary-holder.column");
if (element) {
    element.classList.remove('is-three-quarters-desktop');
    element.classList.remove('is-two-thirds-tablet');
}

element = document.querySelector("#main-column");
if (element)
    element.classList.remove('is-8-desktop');

function removeElement(elementName) {
    try {
        const element = document.querySelector(elementName);
        if (element && element.parentElement)
            element.parentElement.removeChild(element);
    } catch (ex) {
        console.log(`Exception when removing element "${elementName}"`);
        console.log(`Exception : ${ex}`);
    }
}
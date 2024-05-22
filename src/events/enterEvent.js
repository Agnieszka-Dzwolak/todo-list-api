import dom from '../dom.js';
import addHandler from '../handlers/addHandler.js';

const enterEvent = () => {
    dom.input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            addHandler();
        }
    });
};

export default enterEvent;

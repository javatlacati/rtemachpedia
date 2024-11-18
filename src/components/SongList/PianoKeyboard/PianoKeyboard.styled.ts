import styled from 'styled-components';

const naturalKeyWidth = 48;//px;
const naturalKeyHeight = 200;//px;
const sharpKeyWidth = 30;//px; /* new variable for black key styling */
const sharpKeyHeight = 100;//px; /* new variable for black key styling */

export const PianoKeyboardWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    
    > div.active::after{
        content: "";
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
`;


export const NaturalKey = styled.div`
    position: relative;
    width: ${naturalKeyWidth}px;
    height: ${naturalKeyHeight}px;
    border: 1px solid #333;
    box-sizing: border-box;
    background: #fffff0;
`;


export const SharpKey = styled.div`
    position: relative;
    width: ${sharpKeyWidth}px;
    height: ${sharpKeyHeight}px;
    background: #36454f; /* charcoal color */
    box-sizing: border-box;
    z-index: 1; /* increasing z-index value to put element in front, when it's stacked with other html elements */
    transform: translateX(-50%); /* move element to the left by 50% of its width */

    & + ${NaturalKey} { // this will work for <CategoryListItem /><li />
        margin-left: ${-1 * sharpKeyWidth}px;
    }
}
`;





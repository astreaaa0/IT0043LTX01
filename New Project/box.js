document.addEventListener('DOMContentLoaded', () => {
    const flexContainer = document.querySelector('.container');
    const gapInput = document.getElementById('gap');
    const flexDirectionButtons = document.querySelectorAll('.flex-direction');
    const justifyContentButtons = document.querySelectorAll('.justify-content');
    const alignItemsButtons = document.querySelectorAll('.align-items');
    const resetGrowButton = document.getElementById('resetGrow');
    const growAllButton = document.getElementById('growAll');
    const box1GrowInput = document.getElementById('box1Grow');
    const box2GrowInput = document.getElementById('box2Grow');
    const box3GrowInput = document.getElementById('box3Grow');
    const resetFlexboxButton = document.getElementById('resetFlexbox');

    const updateFlexContainer = () => {
        flexContainer.style.gap = `${gapInput.value}px`;
    };

    gapInput.addEventListener('input', updateFlexContainer);

    flexDirectionButtons.forEach(button => {
        button.addEventListener('click', () => {
            flexContainer.style.flexDirection = button.dataset.direction;
        });
    });

    justifyContentButtons.forEach(button => {
        button.addEventListener('click', () => {
            flexContainer.style.justifyContent = button.dataset.justify;
        });
    });

    alignItemsButtons.forEach(button => {
        button.addEventListener('click', () => {
            flexContainer.style.alignItems = button.dataset.align;
        });
    });

    const updateFlexGrow = () => {
        document.getElementById('box1').style.flexGrow = box1GrowInput.value;
        document.getElementById('box2').style.flexGrow = box2GrowInput.value;
        document.getElementById('box3').style.flexGrow = box3GrowInput.value;
    };

    [box1GrowInput, box2GrowInput, box3GrowInput].forEach(input => {
        input.addEventListener('input', updateFlexGrow);
    });

    resetGrowButton.addEventListener('click', () => {
        box1GrowInput.value = 0;
        box2GrowInput.value = 0;
        box3GrowInput.value = 0;
        updateFlexGrow();
    });

    growAllButton.addEventListener('click', () => {
        const increment = 1;
        if (box1GrowInput.value < 10) {
            box1GrowInput.value = Math.min(parseInt(box1GrowInput.value) + increment, 10);
        }
        if (box2GrowInput.value < 10) {
            box2GrowInput.value = Math.min(parseInt(box2GrowInput.value) + increment, 10);
        }
        if (box3GrowInput.value < 10) {
            box3GrowInput.value = Math.min(parseInt(box3GrowInput.value) + increment, 10);
        }
        updateFlexGrow();
    });

    resetFlexboxButton.addEventListener('click', () => {
        gapInput.value = 0;
        flexContainer.style.flexDirection = 'row';
        flexContainer.style.justifyContent = 'flex-start';
        flexContainer.style.alignItems = 'flex-start';
        box1GrowInput.value = 0;
        box2GrowInput.value = 0;
        box3GrowInput.value = 0;
        updateFlexContainer();
        updateFlexGrow();
    });
});

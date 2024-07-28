function displayBindings(bindings) {
    const output = document.getElementById('output');
    output.innerHTML = '';

    for (const device in bindings) {
        const deviceBindings = bindings[device];
        const deviceHeader = document.createElement('h3');
        deviceHeader.textContent = `Device: ${device}`;
        output.appendChild(deviceHeader);

        const bindingList = document.createElement('ul');
        deviceBindings.forEach(binding => {
            const listItem = document.createElement('li');
            listItem.textContent = `BindingName: ${binding.BindingName}, Key: ${binding.Key}`;
            bindingList.appendChild(listItem);
        });
        output.appendChild(bindingList);
    }
}

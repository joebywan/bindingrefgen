function extractBindings(xmlDoc) {
    const bindings = {};
    let currentBindingName = null;

    xmlDoc.querySelectorAll('*').forEach(element => {
        const device = element.getAttribute('Device');
        const key = element.getAttribute('Key');
        
        if (element.tagName !== 'Primary' && element.tagName !== 'Secondary') {
            currentBindingName = element.tagName;
        }

        if (device && key && currentBindingName) {
            if (!bindings[device]) {
                bindings[device] = [];
            }
            bindings[device].push({
                BindingName: currentBindingName,
                Key: key
            });
        }
    });

    return bindings;
}

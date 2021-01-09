let autoExpand = function (field) {

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 0)
	             + parseInt(computed.getPropertyValue('padding-top'), 0)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 0)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 0);

	field.style.height = height + 'px';
};

document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() !== 'textarea') return;
	autoExpand(event.target);
}, false);

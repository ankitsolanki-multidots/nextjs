document.addEventListener('submit', function (event) {

	event.preventDefault();

	fetch('https://prj-frontity-tro.md-staging.com/wp-json/contact-form-7/v1/contact-forms/1470/feedback', {
		method: 'POST',
		body: new FormData(event.target),
	}).then(function (response) {
		if (response.ok) {
			return response.json();
		}
		return Promise.reject(response);
	}).then(function (data) {
		console.log(data);
	}).catch(function (error) {
		console.warn(error);
	});
});
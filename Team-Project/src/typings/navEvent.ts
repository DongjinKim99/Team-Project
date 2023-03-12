
const NavEvent = () => {
	const navButtons = document.querySelectorAll('.nav-button');
	const logo = document.querySelector('.logo');

	navButtons.forEach((e) => {
		e.addEventListener('mouseover', () => {
			e.classList.add('hover');
			console.log('hello');
		});

		e.addEventListener('mouseout', () => {
			e.classList.remove('hover');
		});

		e.addEventListener('click', () => {
			for (let i = 0; i < navButtons.length; i++) {
				navButtons[i].classList.remove('active');
			}
			e.classList.add('active');
		});

		logo?.addEventListener('click', () => {
			for (let i = 0; i < navButtons.length; i++) {
				navButtons[i].classList.remove('active');
			}
		});
	});
};

export default NavEvent;
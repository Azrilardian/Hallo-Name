const picture = document.querySelector('.picture');

document.addEventListener('DOMContentLoaded', async () => {
	await Swal.fire({
		title: 'Hallo, Dian!',
		text: 'Klik OK YA!',
		imageUrl: './img/foto.jpg',
		imageWidth: 250,
		imageHeight: 300,
		imageAlt: 'Custom image',
	});
	await Swal.fire('Semangat Kuliah!');
	await Swal.fire('Nonton Drakor Dikurangin!');
	const promise = await Swal.fire({
		title: 'Janji gak ?',
		showDenyButton: true,
		confirmButtonText: `IYA PANN`,
		denyButtonText: `GAMAU`,
	});
	if (promise.isConfirmed) {
		await Swal.fire({
			icon: 'error',
			title: 'ahh...',
			text: 'Janji doang jemput cowok depan gang!',
			footer: 'HAHAHAHAA',
			confirmButtonText: `ZZZZ`,
		});
		await Swal.fire({
			title: 'Tapi serius',
			text: 'Kebanyakan depan laptop ntar min',
		});
		await Swal.fire('Kurang perhatian apalagi saya HAHAHA');
		await Swal.fire('Udah ah');
		await Swal.fire('Mo Lanjut belajar');
		await Swal.fire({
			title: 'BYE',
			imageUrl: './img/foto-2.jpg',
			imageWidth: 250,
			imageHeight: 300,
			imageAlt: 'Custom image',
		});
		picture.setAttribute('src', './img/crop.jpg');
	}

	if (promise.isDenied) {
		await Swal.fire({
			icon: 'error',
			title: 'YAUDA SAMPE SINI...',
			text: 'Byeee!',
			confirmButtonText: `:0`,
		});
	}
});

const picture = document.querySelector('.picture');

document.addEventListener('DOMContentLoaded', async () => {
	await Swal.fire({
		title: 'Diannnn',
		text: 'Klik ok',
	});
	await Swal.fire('Diann jeleek');
	await Swal.fire('Suka gak mandi');
	await Swal.fire('Suka tbtb seriusss');
	await Swal.fire('Tapi saya sayang xixixixixixi');
	await Swal.fire(':0');
	const promise = await Swal.fire({
		title: 'Becanda ga yann ?',
		showDenyButton: true,
		confirmButtonText: `MAUNYA SERIUSS`,
		denyButtonText: `BECANDAIN`,
	});
	if (promise.isConfirmed) {
		await Swal.fire({
			icon: 'error',
			title: 'ahh...',
			text: 'Serius tapi suka ninggal tidur',
			confirmButtonText: `xixixi`,
		});
		await Swal.fire('Ngorok juga si');
		await Swal.fire('HAHAHAHA.');
		await Swal.fire('BECANDAAA.');
		await Swal.fire({
			title: 'Jan boros boros, rajin rajin kuliahh',
			text: 'Jan main hp terus juga',
		});
		await Swal.fire('Hemmm');
		await Swal.fire('Udah ah');
		await Swal.fire('Mo Lanjut kerja');
		await Swal.fire('Byeeee');
		await Swal.fire('Ee tapi kenalin dulu');
		await Swal.fire({
			title: 'Aamiin paling serius saya',
			imageUrl: './img/dian.jpg',
			imageWidth: 250,
			imageHeight: 300,
			imageAlt: 'Custom image',
		});
		await Swal.fire('xixixi');
		await Swal.fire('bye byee');

		picture.setAttribute('src', './img/crop.jpg');
	}

	if (promise.isDenied) {
		await Swal.fire({
			icon: 'error',
			title: 'males dah :(',
			text: 'gaasik amu',
			confirmButtonText: `:0`,
		});
	}
});
